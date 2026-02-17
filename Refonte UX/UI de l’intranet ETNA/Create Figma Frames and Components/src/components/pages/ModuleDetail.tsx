import { Card } from '../Card';
import { Button } from '../Button';
import { ArrowLeft, Clock, Play, CheckCircle, Lock, Download, FileText } from 'lucide-react';

interface ModuleDetailProps {
  onBack: () => void;
  moduleId: number;
}

export function ModuleDetail({ onBack, moduleId }: ModuleDetailProps) {
  const module = {
    id: 1,
    title: 'JavaScript ES6+',
    description: 'Maîtrisez les fonctionnalités modernes de JavaScript pour devenir un développeur expert.',
    progress: 75,
    duration: '8 heures',
    totalLessons: 24,
    completedLessons: 18,
    instructor: {
      name: 'Prof. Martin Dubois',
      avatar: 'MD',
      bio: 'Expert JavaScript avec 15 ans d\'expérience'
    },
    chapters: [
      {
        id: 1,
        title: 'Introduction à ES6',
        lessons: [
          { id: 1, title: 'Qu\'est-ce que ES6 ?', duration: '12 min', completed: true, type: 'video' },
          { id: 2, title: 'Configuration de l\'environnement', duration: '18 min', completed: true, type: 'video' },
          { id: 3, title: 'Quiz - Introduction', duration: '5 min', completed: true, type: 'quiz' }
        ]
      },
      {
        id: 2,
        title: 'Variables et Constantes',
        lessons: [
          { id: 4, title: 'Let et Const', duration: '15 min', completed: true, type: 'video' },
          { id: 5, title: 'Scope et Hoisting', duration: '20 min', completed: true, type: 'video' },
          { id: 6, title: 'Exercice pratique', duration: '30 min', completed: true, type: 'exercise' }
        ]
      },
      {
        id: 3,
        title: 'Arrow Functions',
        lessons: [
          { id: 7, title: 'Syntaxe des Arrow Functions', duration: '16 min', completed: true, type: 'video' },
          { id: 8, title: 'This dans les Arrow Functions', duration: '22 min', completed: true, type: 'video' },
          { id: 9, title: 'Quiz - Arrow Functions', duration: '8 min', completed: false, type: 'quiz' }
        ]
      },
      {
        id: 4,
        title: 'Destructuring',
        lessons: [
          { id: 10, title: 'Destructuring d\'objets', duration: '18 min', completed: false, type: 'video' },
          { id: 11, title: 'Destructuring d\'arrays', duration: '15 min', completed: false, type: 'video' },
          { id: 12, title: 'Cas pratiques', duration: '25 min', completed: false, type: 'exercise' }
        ]
      },
      {
        id: 5,
        title: 'Promises et Async/Await',
        lessons: [
          { id: 13, title: 'Introduction aux Promises', duration: '20 min', completed: false, locked: false, type: 'video' },
          { id: 14, title: 'Async/Await', duration: '25 min', completed: false, locked: false, type: 'video' },
          { id: 15, title: 'Gestion des erreurs', duration: '18 min', completed: false, locked: false, type: 'video' }
        ]
      },
      {
        id: 6,
        title: 'Projet Final',
        lessons: [
          { id: 16, title: 'Présentation du projet', duration: '10 min', completed: false, locked: true, type: 'video' },
          { id: 17, title: 'Réalisation du projet', duration: '2 heures', completed: false, locked: true, type: 'exercise' },
          { id: 18, title: 'Évaluation finale', duration: '30 min', completed: false, locked: true, type: 'quiz' }
        ]
      }
    ]
  };

  const getLessonIcon = (type: string, completed: boolean) => {
    if (completed) return <CheckCircle className="text-[#61D26A]" size={20} />;
    
    switch (type) {
      case 'video':
        return <Play className="text-[#6C63FF]" size={20} />;
      case 'quiz':
        return <FileText className="text-[#5ABFFF]" size={20} />;
      case 'exercise':
        return <FileText className="text-[#FFD15C]" size={20} />;
      default:
        return <Play className="text-[#6C63FF]" size={20} />;
    }
  };

  return (
    <div className="space-y-6">
      <button
        onClick={onBack}
        className="flex items-center gap-2 text-[#6C63FF] hover:underline"
      >
        <ArrowLeft size={20} />
        Retour aux modules
      </button>

      {/* Header du module */}
      <Card className="bg-gradient-to-r from-[#6C63FF] to-[#5ABFFF] text-white">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2">
            <h1 className="mb-4">{module.title}</h1>
            <p className="mb-6 text-white/90">{module.description}</p>
            
            <div className="flex flex-wrap gap-6 mb-6">
              <div className="flex items-center gap-2">
                <Clock size={20} className="text-white/80" />
                <span>{module.duration}</span>
              </div>
              <div className="flex items-center gap-2">
                <Play size={20} className="text-white/80" />
                <span>{module.totalLessons} leçons</span>
              </div>
            </div>

            <div className="bg-white/20 rounded-lg p-4 backdrop-blur-sm">
              <div className="flex justify-between items-center mb-2">
                <small className="text-white/90">Votre progression</small>
                <small>{module.completedLessons}/{module.totalLessons} leçons complétées</small>
              </div>
              <div className="h-3 bg-white/20 rounded-full overflow-hidden">
                <div className="h-full bg-white rounded-full" style={{ width: `${module.progress}%` }}></div>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center text-center p-6 bg-white/10 rounded-lg backdrop-blur-sm">
            <div className="w-20 h-20 rounded-full bg-white/20 flex items-center justify-center text-white mb-3">
              <span className="text-2xl">{module.instructor.avatar}</span>
            </div>
            <h3 className="mb-1">{module.instructor.name}</h3>
            <small className="text-white/80">{module.instructor.bio}</small>
          </div>
        </div>
      </Card>

      {/* Contenu du cours */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Liste des chapitres */}
        <div className="lg:col-span-2 space-y-4">
          <h2>Contenu du cours</h2>
          
          {module.chapters.map((chapter) => (
            <Card key={chapter.id}>
              <h3 className="mb-4">{chapter.title}</h3>
              <div className="space-y-2">
                {chapter.lessons.map((lesson) => (
                  <div
                    key={lesson.id}
                    className={`flex items-center gap-3 p-3 rounded-lg transition-all ${
                      lesson.locked
                        ? 'bg-[#F6F6F6] opacity-60 cursor-not-allowed'
                        : lesson.completed
                        ? 'bg-[#F0FFF1] cursor-pointer hover:bg-[#E0FFE1]'
                        : 'bg-[#F6F6F6] cursor-pointer hover:bg-[#E8E7FF]'
                    }`}
                  >
                    {lesson.locked ? (
                      <Lock className="text-[#D9D9D9]" size={20} />
                    ) : (
                      getLessonIcon(lesson.type, lesson.completed)
                    )}
                    <div className="flex-1">
                      <p className={lesson.completed ? 'line-through text-[#666]' : ''}>
                        {lesson.title}
                      </p>
                    </div>
                    <small className="text-[#666]">{lesson.duration}</small>
                    {!lesson.locked && !lesson.completed && (
                      <Button className="px-4 py-2">Commencer</Button>
                    )}
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* Sidebar - Ressources */}
        <div className="space-y-4">
          <Card>
            <h3 className="mb-4">Ressources</h3>
            <div className="space-y-3">
              <button className="w-full flex items-center gap-3 p-3 bg-[#F6F6F6] rounded-lg hover:bg-[#E8E7FF] transition-all">
                <Download className="text-[#6C63FF]" size={20} />
                <span>Support de cours (PDF)</span>
              </button>
              <button className="w-full flex items-center gap-3 p-3 bg-[#F6F6F6] rounded-lg hover:bg-[#E8E7FF] transition-all">
                <Download className="text-[#6C63FF]" size={20} />
                <span>Exercices pratiques</span>
              </button>
              <button className="w-full flex items-center gap-3 p-3 bg-[#F6F6F6] rounded-lg hover:bg-[#E8E7FF] transition-all">
                <Download className="text-[#6C63FF]" size={20} />
                <span>Code source</span>
              </button>
            </div>
          </Card>

          <Card>
            <h3 className="mb-4">Certificat</h3>
            <div className="text-center p-4">
              <div className="w-16 h-16 rounded-full bg-[#E8E7FF] flex items-center justify-center mx-auto mb-3">
                <CheckCircle className="text-[#6C63FF]" size={32} />
              </div>
              <p className="text-[#666] mb-4">
                Complétez toutes les leçons pour obtenir votre certificat
              </p>
              <div className="h-2 bg-[#F6F6F6] rounded-full overflow-hidden mb-2">
                <div className="h-full bg-[#6C63FF] rounded-full" style={{ width: `${module.progress}%` }}></div>
              </div>
              <small className="text-[#666]">{module.progress}% terminé</small>
            </div>
          </Card>

          <Card>
            <h3 className="mb-4">Statistiques</h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <small className="text-[#666]">Temps total</small>
                <p>6h 30min</p>
              </div>
              <div className="flex justify-between">
                <small className="text-[#666]">Quiz réussis</small>
                <p>2/3</p>
              </div>
              <div className="flex justify-between">
                <small className="text-[#666]">Note moyenne</small>
                <p>18/20</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
