import { useState } from 'react';
import { Card } from '../Card';
import { Button } from '../Button';
import { BookOpen } from 'lucide-react';

interface ModulesProps {
  onModuleClick?: (moduleId: number) => void;
}

export function Modules({ onModuleClick }: ModulesProps) {
  const [filter, setFilter] = useState<'all' | 'in-progress' | 'completed'>('all');

  const modules = [
    {
      id: 1,
      title: 'JavaScript ES6+',
      description: 'Maîtrisez les fonctionnalités modernes de JavaScript',
      progress: 75,
      status: 'in-progress',
      duration: '8 heures',
      lessons: 24
    },
    {
      id: 2,
      title: 'React Fundamentals',
      description: 'Apprenez les bases de React et créez vos premières applications',
      progress: 45,
      status: 'in-progress',
      duration: '12 heures',
      lessons: 32
    },
    {
      id: 3,
      title: 'TypeScript Basics',
      description: 'Introduction au typage statique avec TypeScript',
      progress: 100,
      status: 'completed',
      duration: '6 heures',
      lessons: 18
    },
    {
      id: 4,
      title: 'CSS & Tailwind',
      description: 'Stylisez vos applications avec CSS et Tailwind CSS',
      progress: 30,
      status: 'in-progress',
      duration: '10 heures',
      lessons: 28
    },
    {
      id: 5,
      title: 'Node.js Backend',
      description: 'Créez des serveurs et APIs avec Node.js et Express',
      progress: 100,
      status: 'completed',
      duration: '14 heures',
      lessons: 36
    },
    {
      id: 6,
      title: 'Git & GitHub',
      description: 'Gérez vos projets avec Git et collaborez sur GitHub',
      progress: 0,
      status: 'in-progress',
      duration: '4 heures',
      lessons: 12
    }
  ];

  const filteredModules = modules.filter(module => {
    if (filter === 'all') return true;
    if (filter === 'in-progress') return module.status === 'in-progress';
    if (filter === 'completed') return module.status === 'completed';
    return true;
  });

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1>Mes modules</h1>
      </div>

      {/* Filtres */}
      <div className="flex gap-3 flex-wrap">
        <button
          onClick={() => setFilter('all')}
          className={`px-6 py-2 rounded-lg transition-all ${
            filter === 'all'
              ? 'bg-[#6C63FF] text-white'
              : 'bg-[--bg-secondary] text-[--text-primary] hover:bg-[--bg-tertiary]'
          }`}
        >
          Tous
        </button>
        <button
          onClick={() => setFilter('in-progress')}
          className={`px-6 py-2 rounded-lg transition-all ${
            filter === 'in-progress'
              ? 'bg-[#6C63FF] text-white'
              : 'bg-[--bg-secondary] text-[--text-primary] hover:bg-[--bg-tertiary]'
          }`}
        >
          En cours
        </button>
        <button
          onClick={() => setFilter('completed')}
          className={`px-6 py-2 rounded-lg transition-all ${
            filter === 'completed'
              ? 'bg-[#6C63FF] text-white'
              : 'bg-[--bg-secondary] text-[--text-primary] hover:bg-[--bg-tertiary]'
          }`}
        >
          Terminés
        </button>
      </div>

      {/* Grille de modules */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredModules.map(module => (
          <Card key={module.id}>
            <div className="flex items-start gap-3 mb-4">
              <div className="w-12 h-12 rounded-lg bg-[#E8E7FF] dark:bg-[#6C63FF]/20 flex items-center justify-center flex-shrink-0">
                <BookOpen className="text-[#6C63FF]" size={24} />
              </div>
              <div className="flex-1">
                <h3 className="mb-1">{module.title}</h3>
                <small className="text-[--text-secondary]">{module.lessons} leçons • {module.duration}</small>
              </div>
            </div>
            
            <p className="text-[--text-secondary] mb-4">{module.description}</p>
            
            <div className="mb-4">
              <div className="flex justify-between items-center mb-2">
                <small className="text-[--text-secondary]">Progression</small>
                <small className={module.progress === 100 ? 'text-[#61D26A]' : 'text-[#6C63FF]'}>
                  {module.progress}%
                </small>
              </div>
              <div className="h-2 bg-[--bg-secondary] rounded-full overflow-hidden">
                <div
                  className={`h-full rounded-full ${
                    module.progress === 100 ? 'bg-[#61D26A]' : 'bg-[#6C63FF]'
                  }`}
                  style={{ width: `${module.progress}%` }}
                ></div>
              </div>
            </div>

            <Button 
              className="w-full"
              onClick={() => onModuleClick && onModuleClick(module.id)}
            >
              {module.progress === 100 ? 'Revoir' : module.progress === 0 ? 'Commencer' : 'Continuer'}
            </Button>
          </Card>
        ))}
      </div>
    </div>
  );
}
