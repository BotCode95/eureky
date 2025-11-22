import React from 'react';
import { HomeIcon, CalendarIcon, TaskIcon, ListIcon } from '../../assets/icons';

const navItems = [
  { id: 'home', label: 'MI DÍA', icon: HomeIcon },
  { id: '7dias', label: '7 DÍAS', icon: CalendarIcon },
  { id: 'tareas', label: 'TAREAS', icon: TaskIcon },
  { id: 'calendario', label: 'CALENDARIO', icon: CalendarIcon },
  { id: 'listas', label: 'MIS LISTAS', icon: ListIcon },
];

interface BottomNavigationProps {
  activeId?: string;
  onNavigate?: (id: string) => void;
}

export const BottomNavigation: React.FC<BottomNavigationProps> = ({ 
  activeId = 'home',
  onNavigate 
}) => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 flex h-16 items-center justify-between border-t border-bg-surfaceAlt bg-bg-surface px-2 md:hidden">
      {navItems.map((item) => {
        const isActive = item.id === activeId;
        const Icon = item.icon;
        
        return (
          <button
            key={item.id}
            onClick={() => onNavigate?.(item.id)}
            className={`flex flex-1 flex-col items-center justify-center gap-1 py-2 transition-colors ${
              isActive
                ? 'text-brand-primary'
                : 'text-text-secondary hover:text-text-primary'
            }`}
          >
            <div className={`h-5 w-5 rounded-lg flex items-center justify-center ${
              isActive ? 'bg-brand-primary' : 'bg-transparent'
            }`}>
              <Icon className={`h-3 w-3 ${isActive ? 'text-white' : 'text-current'}`} />
            </div>
            <span className={`text-[10px] tracking-[0.14em] ${isActive ? 'font-semibold' : 'font-medium'}`}>
              {item.label}
            </span>
          </button>
        );
      })}
    </nav>
  );
};
