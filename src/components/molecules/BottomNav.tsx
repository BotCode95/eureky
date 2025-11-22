import React from 'react';
import { RiHome6Line as HomeIcon, RiBarChartBoxLine as BarCharIcon, RiTaskLine as TaskIcon} from "react-icons/ri";
import { GoColumns as ColumnsIcon } from "react-icons/go";

const navItems = [
  { id: 'home', label: 'MI DÍA', icon: HomeIcon },
  { id: '7dias', label: '7 DÍAS', icon: BarCharIcon },
  { id: 'tareas', label: 'TAREAS', icon: TaskIcon },
  { id: 'calendario', label: 'CALENDARIO', icon: ColumnsIcon },
  { id: 'listas', label: 'MIS LISTAS', icon: TaskIcon },
];

interface BottomNavProps {
  activeId?: string;
  onNavigate?: (id: string) => void;
}



export const BottomNav: React.FC<BottomNavProps> = ({ activeId = 'home', onNavigate }) => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-bg-surface border-t border-bg-surfaceAlt/30 px-2 py-2">
      <div className="flex items-center justify-between w-full max-w-screen-sm mx-auto">
        {navItems.map((item) => {
          const isActive = item.id === activeId;
          const IconComponent = item.icon;
          
          return (
            <button
              key={item.id}
              onClick={() => onNavigate?.(item.id)}
              className="flex flex-col items-center justify-center gap-1 py-2 px-1 flex-1"
            >
              <IconComponent 
                size={20} 
                className={`${isActive ? 'text-text-primary' : 'text-text-secondary'} ${item.id === 'calendario' ? 'rotate-90' : ''}`} 
              />
              <span className={`text-[10px] font-medium tracking-wider ${
                isActive ? 'text-text-primary' : 'text-text-secondary'
              }`}>
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};
