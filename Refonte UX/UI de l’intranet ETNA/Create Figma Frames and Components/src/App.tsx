import { useState } from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import { Sidebar } from './components/Sidebar';
import { BottomNav } from './components/BottomNav';
import { TopBar } from './components/TopBar';
import { Login } from './components/pages/Login';
import { Dashboard } from './components/pages/Dashboard';
import { Modules } from './components/pages/Modules';
import { ModuleDetail } from './components/pages/ModuleDetail';
import { Planning } from './components/pages/Planning';
import { Support } from './components/pages/Support';
import { Profil } from './components/pages/Profil';
import { Community } from './components/pages/Community';

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentPage, setCurrentPage] = useState('dashboard');
  const [selectedModuleId, setSelectedModuleId] = useState<number | null>(null);

  const handleModuleClick = (moduleId: number) => {
    setSelectedModuleId(moduleId);
  };

  const handleBackToModules = () => {
    setSelectedModuleId(null);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setCurrentPage('dashboard');
    setSelectedModuleId(null);
  };

  if (!isLoggedIn) {
    return (
      <ThemeProvider>
        <Login onLogin={() => setIsLoggedIn(true)} />
      </ThemeProvider>
    );
  }

  const renderPage = () => {
    if (currentPage === 'modules' && selectedModuleId !== null) {
      return <ModuleDetail moduleId={selectedModuleId} onBack={handleBackToModules} />;
    }

    switch (currentPage) {
      case 'dashboard':
        return <Dashboard onNavigate={setCurrentPage} />;
      case 'modules':
        return <Modules onModuleClick={handleModuleClick} />;
      case 'planning':
        return <Planning />;
      case 'support':
        return <Support />;
      case 'profil':
        return <Profil onLogout={handleLogout} />;
      case 'community':
        return <Community />;
      default:
        return <Dashboard onNavigate={setCurrentPage} />;
    }
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-[--bg-secondary]">
        {/* Desktop Sidebar */}
        <Sidebar currentPage={currentPage} onNavigate={setCurrentPage} />

        {/* Main Content */}
        <div className="md:ml-60">
          {/* Top Bar - Desktop only */}
          <div className="hidden md:block">
            <TopBar />
          </div>

          {/* Page Content */}
          <main className="p-4 md:p-8 pb-24 md:pb-8">
            {renderPage()}
          </main>
        </div>

        {/* Mobile Bottom Navigation */}
        <BottomNav currentPage={currentPage} onNavigate={setCurrentPage} />
      </div>
    </ThemeProvider>
  );
}