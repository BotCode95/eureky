import React from 'react';
import { Logo, HomeIcon, CalendarIcon, TaskIcon, PlusIcon } from '../../assets/icons';
import { Avatar } from '../atoms/Avatar';
import { Button } from '../atoms/Button';

interface SidebarProps {
  userName?: string;
  userEmail?: string;
  activeId?: string;
  onNavigate?: (id: string) => void;
  lists?: Array<{ id: string; name: string; category: string }>;
}

const mainNavItems = [
  { id: 'home', label: 'Mi día', icon: HomeIcon },
  { id: '7dias', label: 'Próximos 7 días', icon: CalendarIcon },
  { id: 'tareas', label: 'Tareas', icon: TaskIcon },
  { id: 'calendario', label: 'Mi calendario', icon: CalendarIcon },
];

export const Sidebar: React.FC<SidebarProps> = ({ 
  userName = 'Roger',
  userEmail = 'roger@untitledui.com',
  activeId = 'home',
  onNavigate,
  lists = [
    { id: 'personal', name: 'Personal', category: 'MIS LISTAS' },
    { id: 'trabajo', name: 'Trabajo', category: 'MIS LISTAS' }
  ]
}) => {
  return (
    <aside className="hidden md:flex md:w-60 flex-col bg-bg-surface border-r border-bg-surfaceAlt/50 h-screen overflow-y-auto">
      {/* Logo */}
      <div className="flex items-center gap-2.5 px-5 py-5">
        <Logo className="h-5 w-auto" />
        <span className="text-[15px] leading-[20px] font-semibold">eureky</span>
      </div>

      {/* Main Navigation */}
      <nav className="flex-1 px-3 pt-2">
        <div className="space-y-0.5">
          {mainNavItems.map((item) => {
            const isActive = item.id === activeId;
            const Icon = item.icon;
            
            return (
              <button
                key={item.id}
                onClick={() => onNavigate?.(item.id)}
                className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-[14px] leading-[20px] transition-colors ${
                  isActive
                    ? 'bg-bg-surfaceAlt text-text-primary font-medium'
                    : 'text-text-secondary hover:text-text-primary hover:bg-bg-surfaceAlt/50'
                }`}
              >
                <Icon className="h-[18px] w-[18px]" />
                <span>{item.label}</span>
              </button>
            );
          })}
        </div>

        {/* Lists Section */}
        <div className="mt-6">
          <div className="flex items-center justify-between px-3 mb-2">
            <span className="text-[11px] leading-[14px] font-semibold text-text-muted uppercase tracking-[0.08em]">
              Mis Listas
            </span>
            <button 
              className="p-1 hover:bg-bg-surfaceAlt/50 rounded transition-colors"
              aria-label="Add list"
            >
              <PlusIcon className="h-3.5 w-3.5 text-text-secondary" />
            </button>
          </div>
          
          <div className="space-y-0.5">
            {lists.map((list) => (
              <button
                key={list.id}
                onClick={() => onNavigate?.(list.id)}
                className="w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-[14px] leading-[20px] text-text-secondary hover:text-text-primary hover:bg-bg-surfaceAlt/50 transition-colors"
              >
                <div className="h-1.5 w-1.5 rounded-full bg-brand-soft" />
                <span>{list.name}</span>
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Bottom Section */}
      <div className="p-3 border-t border-bg-surfaceAlt/50 space-y-3">
        <Button variant="primary" className="w-full text-[13px] leading-[18px]" size="md">
          Mejora tu plan
        </Button>
        
        <button className="w-full flex items-center gap-2.5 px-2 py-2 rounded-lg hover:bg-bg-surfaceAlt transition-colors">
          <Avatar online size="sm" />
          <div className="flex-1 text-left min-w-0">
            <p className="text-[13px] leading-[18px] font-medium text-text-primary truncate">
              {userName}
            </p>
            <p className="text-[11px] leading-[14px] text-text-secondary truncate">
              {userEmail}
            </p>
          </div>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-text-muted shrink-0">
            <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
    </aside>
  );
};
