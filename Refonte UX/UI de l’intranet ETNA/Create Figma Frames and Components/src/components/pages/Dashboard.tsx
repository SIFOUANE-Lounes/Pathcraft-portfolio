import { Card } from '../Card';
import { Button } from '../Button';
import { Calendar, FileText, MessageSquare, Clock, Bell } from 'lucide-react';

interface DashboardProps {
  onNavigate: (page: string) => void;
}

export function Dashboard({ onNavigate }: DashboardProps) {
  return (
    <div className="space-y-6">
      <h1>Tableau de bord</h1>
      
      {/* Grid layout for desktop, stack for mobile */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Prochain cours */}
        <Card className="lg:col-span-2">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <Clock className="text-[#6C63FF]" size={20} />
                <small className="text-[#6C63FF]">Prochain cours</small>
              </div>
              <h2 className="mb-2">Développement Web Avancé</h2>
              <p className="text-[#666] mb-4">Aujourd'hui à 14h00 - Salle A203</p>
              <div className="flex items-center gap-4 text-[#666]">
                <span>Prof. Martin Dubois</span>
                <span>•</span>
                <span>2h00</span>
              </div>
            </div>
            <Button>Rejoindre</Button>
          </div>
        </Card>

        {/* Notifications */}
        <Card>
          <div className="flex items-center gap-2 mb-4">
            <Bell className="text-[#6C63FF]" size={20} />
            <h3>Notifications</h3>
          </div>
          <div className="space-y-3">
            <div className="p-3 bg-[#F6F6F6] rounded-lg">
              <p className="mb-1">Nouveau cours disponible</p>
              <small className="text-[#666]">Il y a 2 heures</small>
            </div>
            <div className="p-3 bg-[#F6F6F6] rounded-lg">
              <p className="mb-1">Devoir à rendre demain</p>
              <small className="text-[#666]">Il y a 5 heures</small>
            </div>
            <div className="p-3 bg-[#F6F6F6] rounded-lg">
              <p className="mb-1">Réponse à votre ticket</p>
              <small className="text-[#666]">Hier</small>
            </div>
          </div>
        </Card>

        {/* Derniers modules */}
        <Card>
          <h3 className="mb-4">Derniers modules</h3>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between items-center mb-2">
                <p>JavaScript ES6+</p>
                <small className="text-[#6C63FF]">75%</small>
              </div>
              <div className="h-2 bg-[#F6F6F6] rounded-full overflow-hidden">
                <div className="h-full bg-[#6C63FF] rounded-full" style={{ width: '75%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between items-center mb-2">
                <p>React Fundamentals</p>
                <small className="text-[#6C63FF]">45%</small>
              </div>
              <div className="h-2 bg-[#F6F6F6] rounded-full overflow-hidden">
                <div className="h-full bg-[#6C63FF] rounded-full" style={{ width: '45%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between items-center mb-2">
                <p>TypeScript Basics</p>
                <small className="text-[#61D26A]">100%</small>
              </div>
              <div className="h-2 bg-[#F6F6F6] rounded-full overflow-hidden">
                <div className="h-full bg-[#61D26A] rounded-full" style={{ width: '100%' }}></div>
              </div>
            </div>
          </div>
          <Button variant="secondary" className="w-full mt-4" onClick={() => onNavigate('modules')}>
            Voir mes modules
          </Button>
        </Card>
      </div>

      {/* Actions rapides */}
      <div>
        <h3 className="mb-4">Actions rapides</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Card className="cursor-pointer hover:shadow-lg transition-shadow" onClick={() => onNavigate('planning')}>
            <div className="flex flex-col items-center text-center p-4">
              <div className="w-12 h-12 rounded-full bg-[#E8E7FF] flex items-center justify-center mb-3">
                <Calendar className="text-[#6C63FF]" size={24} />
              </div>
              <h3>Planning</h3>
              <small className="text-[#666] mt-1">Voir mon emploi du temps</small>
            </div>
          </Card>
          
          <Card className="cursor-pointer hover:shadow-lg transition-shadow" onClick={() => onNavigate('support')}>
            <div className="flex flex-col items-center text-center p-4">
              <div className="w-12 h-12 rounded-full bg-[#E8E7FF] flex items-center justify-center mb-3">
                <MessageSquare className="text-[#6C63FF]" size={24} />
              </div>
              <h3>Support</h3>
              <small className="text-[#666] mt-1">Créer un ticket</small>
            </div>
          </Card>
          
          <Card className="cursor-pointer hover:shadow-lg transition-shadow">
            <div className="flex flex-col items-center text-center p-4">
              <div className="w-12 h-12 rounded-full bg-[#E8E7FF] flex items-center justify-center mb-3">
                <FileText className="text-[#6C63FF]" size={24} />
              </div>
              <h3>Documents</h3>
              <small className="text-[#666] mt-1">Accéder aux ressources</small>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
