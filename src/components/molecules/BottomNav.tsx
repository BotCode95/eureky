import React from 'react';

const navItems = [
  { id: 'home', label: 'MI DÍA', icon: 'home' },
  { id: '7dias', label: '7 DÍAS', icon: 'chart' },
  { id: 'tareas', label: 'TAREAS', icon: 'list' },
  { id: 'calendario', label: 'CALENDARIO', icon: 'check' },
  { id: 'listas', label: 'MIS LISTAS', icon: 'menu' },
];

interface BottomNavProps {
  activeId?: string;
  onNavigate?: (id: string) => void;
}

const Icon = ({ type, active }: { type: string; active: boolean }) => {
  const className = active ? 'text-text-primary' : 'text-text-secondary';
  
  if (type === 'home') {
    return (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className={className}>
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <polyline points="9 22 9 12 15 12 15 22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    );
  }
  
  if (type === 'chart') {
    return (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className={className}>
        <rect x="3" y="8" width="4" height="13" stroke="currentColor" strokeWidth="2"/>
        <rect x="10" y="4" width="4" height="17" stroke="currentColor" strokeWidth="2"/>
        <rect x="17" y="11" width="4" height="10" stroke="currentColor" strokeWidth="2"/>
      </svg>
    );
  }
  
  if (type === 'list') {
    return (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className={className}>
        <line x1="8" y1="6" x2="21" y2="6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <line x1="8" y1="12" x2="21" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <line x1="8" y1="18" x2="21" y2="18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <line x1="3" y1="6" x2="3.01" y2="6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <line x1="3" y1="12" x2="3.01" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <line x1="3" y1="18" x2="3.01" y2="18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    );
  }
  
  if (type === 'check') {
    return (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className={className}>
        <rect x="3" y="4" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2"/>
        <path d="M9 11l3 3 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    );
  }
  
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className={className}>
      <rect x="3" y="3" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="2"/>
      <rect x="14" y="3" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="2"/>
      <rect x="14" y="14" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="2"/>
      <rect x="3" y="14" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="2"/>
    </svg>
  );
};

export const BottomNav: React.FC<BottomNavProps> = ({ activeId = 'home', onNavigate }) => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-bg-surface border-t border-bg-surfaceAlt/30 px-2 py-2">
      <div className="flex items-center justify-between w-full max-w-screen-sm mx-auto">
        {navItems.map((item) => {
          const isActive = item.id === activeId;
          
          return (
            <button
              key={item.id}
              onClick={() => onNavigate?.(item.id)}
              className="flex flex-col items-center justify-center gap-1 py-2 px-1 flex-1"
            >
              <Icon type={item.icon} active={isActive} />
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
