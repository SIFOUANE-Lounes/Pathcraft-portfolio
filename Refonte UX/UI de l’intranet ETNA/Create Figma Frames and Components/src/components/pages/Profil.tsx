import { Card } from '../Card';
import { Button } from '../Button';
import { User, Mail, Phone, MapPin, Calendar, Award, LogOut, GraduationCap } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';

interface ProfilProps {
  onLogout?: () => void;
}

export function Profil({ onLogout }: ProfilProps) {
  const { isDark, toggleTheme } = useTheme();

  const moduleGrades = [
    {
      id: 1,
      module: 'JavaScript ES6+',
      grade: 18,
      maxGrade: 20,
      status: 'completed',
      date: '15 Nov 2025',
      color: '#61D26A'
    },
    {
      id: 2,
      module: 'React Fundamentals',
      grade: 16,
      maxGrade: 20,
      status: 'in-progress',
      date: '10 Nov 2025',
      color: '#6C63FF'
    },
    {
      id: 3,
      module: 'TypeScript Basics',
      grade: 19,
      maxGrade: 20,
      status: 'completed',
      date: '5 Nov 2025',
      color: '#61D26A'
    },
    {
      id: 4,
      module: 'CSS & Tailwind',
      grade: 15,
      maxGrade: 20,
      status: 'in-progress',
      date: '1 Nov 2025',
      color: '#6C63FF'
    },
    {
      id: 5,
      module: 'Node.js Backend',
      grade: 17,
      maxGrade: 20,
      status: 'completed',
      date: '28 Oct 2025',
      color: '#61D26A'
    }
  ];

  const averageGrade = (moduleGrades.reduce((sum, m) => sum + m.grade, 0) / moduleGrades.length).toFixed(1);
  
  return (
    <div className="space-y-6">
      <h1>Mon Profil</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Informations principales */}
        <Card className="lg:col-span-2">
          <div className="flex items-start gap-6 mb-6">
            <div className="w-24 h-24 rounded-full bg-[#6C63FF] flex items-center justify-center text-white flex-shrink-0">
              <span className="text-3xl">JD</span>
            </div>
            <div className="flex-1">
              <h2 className="mb-2">Jean Dupont</h2>
              <p className="text-[#666] mb-4">Étudiant en Développement Web</p>
              <Button variant="secondary">Modifier le profil</Button>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Mail className="text-[#6C63FF]" size={20} />
              <div>
                <small className="text-[#666] block">Email</small>
                <p>jean.dupont@formation.fr</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Phone className="text-[#6C63FF]" size={20} />
              <div>
                <small className="text-[#666] block">Téléphone</small>
                <p>+33 6 12 34 56 78</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <MapPin className="text-[#6C63FF]" size={20} />
              <div>
                <small className="text-[#666] block">Adresse</small>
                <p>123 Rue de la Formation, 75001 Paris</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Calendar className="text-[#6C63FF]" size={20} />
              <div>
                <small className="text-[#666] block">Date d'inscription</small>
                <p>1er Septembre 2025</p>
              </div>
            </div>
          </div>
        </Card>

        {/* Statistiques */}
        <div className="space-y-6">
          <Card>
            <h3 className="mb-4">Statistiques</h3>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <small className="text-[#666]">Modules complétés</small>
                  <p>2/6</p>
                </div>
                <div className="h-2 bg-[#F6F6F6] rounded-full overflow-hidden">
                  <div className="h-full bg-[#61D26A] rounded-full" style={{ width: '33%' }}></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-2">
                  <small className="text-[#666]">Heures de cours</small>
                  <p>48h</p>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-2">
                  <small className="text-[#666]">Projets réalisés</small>
                  <p>12</p>
                </div>
              </div>
            </div>
          </Card>

          <Card>
            <h3 className="mb-4">Badges & Réussites</h3>
            <div className="grid grid-cols-3 gap-3">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-[#61D26A] flex items-center justify-center text-white mb-2">
                  <Award size={24} />
                </div>
                <small className="text-center">Premier module</small>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-[#6C63FF] flex items-center justify-center text-white mb-2">
                  <Award size={24} />
                </div>
                <small className="text-center">5 modules</small>
              </div>
              <div className="flex flex-col items-center opacity-50">
                <div className="w-12 h-12 rounded-full bg-[#D9D9D9] flex items-center justify-center text-white mb-2">
                  <Award size={24} />
                </div>
                <small className="text-center">Expert</small>
              </div>
            </div>
          </Card>
        </div>
      </div>

      {/* Section Notes des modules */}
      <Card>
        <div className="flex items-center gap-3 mb-6">
          <GraduationCap className="text-[#6C63FF]" size={28} />
          <h2>Mes Notes</h2>
        </div>

        {/* Moyenne générale */}
        <div className="bg-gradient-to-r from-[#6C63FF] to-[#5ABFFF] rounded-lg p-6 text-white mb-6">
          <div className="flex items-center justify-between">
            <div>
              <small className="text-white/80 block mb-1">Moyenne générale</small>
              <h1>{averageGrade}/20</h1>
            </div>
            <div className="w-24 h-24 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm">
              <GraduationCap size={48} />
            </div>
          </div>
        </div>

        {/* Liste des notes par module */}
        <div className="space-y-3">
          <h3 className="mb-4">Détail par module</h3>
          {moduleGrades.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between p-4 bg-[--bg-secondary] rounded-lg hover:shadow-md transition-all"
            >
              <div className="flex-1">
                <p className="mb-1">{item.module}</p>
                <small className="text-[--text-secondary]">{item.date}</small>
              </div>
              
              <div className="flex items-center gap-4">
                <span
                  className={`px-3 py-1 rounded-full text-white text-sm ${
                    item.status === 'completed' ? 'bg-[#61D26A]' : 'bg-[#6C63FF]'
                  }`}
                >
                  {item.status === 'completed' ? 'Terminé' : 'En cours'}
                </span>
                
                <div className="text-right min-w-[80px]">
                  <p
                    className="text-2xl"
                    style={{ color: item.color }}
                  >
                    {item.grade}
                  </p>
                  <small className="text-[--text-secondary]">/ {item.maxGrade}</small>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Paramètres */}
      <Card>
        <h2 className="mb-4">Paramètres</h2>
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 bg-[#F6F6F6] rounded-lg">
            <div>
              <p className="mb-1">Notifications par email</p>
              <small className="text-[#666]">Recevoir les actualités et rappels</small>
            </div>
            <label className="relative inline-block w-12 h-6">
              <input type="checkbox" defaultChecked className="sr-only peer" />
              <div className="w-12 h-6 bg-[#D9D9D9] peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-6 peer-checked:after:bg-white after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#6C63FF]"></div>
            </label>
          </div>

          <div className="flex items-center justify-between p-4 bg-[#F6F6F6] rounded-lg">
            <div>
              <p className="mb-1">Mode sombre</p>
              <small className="text-[#666]">Activer le thème sombre</small>
            </div>
            <label className="relative inline-block w-12 h-6">
              <input type="checkbox" checked={isDark} onChange={toggleTheme} className="sr-only peer" />
              <div className="w-12 h-6 bg-[#D9D9D9] peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-6 peer-checked:after:bg-white after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#6C63FF]"></div>
            </label>
          </div>

          <div className="flex gap-3 pt-4">
            <Button variant="secondary">Changer le mot de passe</Button>
            <Button variant="secondary" className="text-red-500 border-red-500" onClick={onLogout}>
              <LogOut size={16} className="mr-2" />
              Déconnexion
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
}