import React from 'react';
import { Sidebar } from '../organisms/Sidebar';

interface MainLayoutProps {
  children: React.ReactNode;
  showSidebar?: boolean;
  activeNavId?: string;
  onNavigate?: (id: string) => void;
}

export const MainLayout: React.FC<MainLayoutProps> = ({ 
  children, 
  showSidebar = true,
  activeNavId,
  onNavigate 
}) => {
  return (
    <div className="flex h-screen overflow-hidden bg-bg-app">
      {showSidebar && (
        <Sidebar 
          activeId={activeNavId}
          onNavigate={onNavigate}
        />
      )}
      
      <main className="flex-1 overflow-y-auto">
        {children}
      </main>
    </div>
  );
};
