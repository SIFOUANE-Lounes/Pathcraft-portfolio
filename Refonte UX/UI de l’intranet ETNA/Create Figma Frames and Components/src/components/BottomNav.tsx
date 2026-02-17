import { Home, BookOpen, Calendar, Users, User } from 'lucide-react';

interface BottomNavProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export function BottomNav({ currentPage, onNavigate }: BottomNavProps) {
  const menuItems = [
    { id: 'dashboard', label: 'Accueil', icon: Home },
    { id: 'modules', label: 'Apprentissage', icon: BookOpen },
    { id: 'planning', label: 'Planning', icon: Calendar },
    { id: 'community', label: 'Communauté', icon: Users },
    { id: 'profil', label: 'Profil', icon: User }
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-[--bg-tertiary] h-16 shadow-[0_-4px_12px_var(--card-shadow)] md:hidden flex items-center justify-around z-50 border-t border-[--border-color]">
      {menuItems.map((item) => {
        const Icon = item.icon;
        const isActive = currentPage === item.id;
        
        return (
          <button
            key={item.id}
            onClick={() => onNavigate(item.id)}
            className={`flex flex-col items-center gap-1 ${
              isActive ? 'text-[#6C63FF]' : 'text-[--text-primary]'
            }`}
          >
            <Icon size={20} />
            <small className="text-[10px]">{item.label}</small>
          </button>
        );
      })}
    </div>
  );
}