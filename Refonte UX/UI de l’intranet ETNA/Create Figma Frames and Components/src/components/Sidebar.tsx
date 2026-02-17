import { Home, BookOpen, Calendar, MessageSquare, User } from 'lucide-react';

interface SidebarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export function Sidebar({ currentPage, onNavigate }: SidebarProps) {
  const menuItems = [
    { id: 'dashboard', label: 'Accueil', icon: Home },
    { id: 'modules', label: 'Apprentissage', icon: BookOpen },
    { id: 'planning', label: 'Planning', icon: Calendar },
    { id: 'support', label: 'Support', icon: MessageSquare },
    { id: 'profil', label: 'Profil', icon: User }
  ];

  return (
    <div className="w-60 h-screen bg-[--bg-secondary] border-r border-[--border-color] fixed left-0 top-0 hidden md:block">
      <div className="p-6">
        <h2 className="mb-8">Formation</h2>
        <nav className="space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = currentPage === item.id;
            
            return (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                  isActive 
                    ? 'bg-[#E8E7FF] text-[#6C63FF] dark:bg-[#6C63FF]/20' 
                    : 'text-[--text-primary] hover:bg-[--bg-tertiary]'
                }`}
              >
                <Icon size={20} />
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>
      </div>
    </div>
  );
}