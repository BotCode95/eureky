import React from 'react';
import { EurekyLogo } from '../icons/EurekyLogo';
import { IoEllipsisHorizontalCircle } from "react-icons/io5";

interface TopBarProps {
  onMenuClick?: () => void;
}

export const TopBar: React.FC<TopBarProps> = ({ onMenuClick }) => {
  return (
    <header className="flex items-center justify-between px-4 py-4 border-b" style={{ borderBottomColor: '#34324A' }}>
      <div className="relative w-8 h-8 rounded-full bg-brand-soft flex items-center justify-center">
        <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-status-online rounded-full border-2 border-bg-app" />
      </div>
      <div className="flex items-center gap-2.5">
        <EurekyLogo  />
      </div>
      <button 
        onClick={onMenuClick}
        className="w-10 h-10 rounded-full bg-transparent flex items-center justify-center"
        aria-label="Menu"
      >
        <IoEllipsisHorizontalCircle size={25} />
      </button>
    </header>
  );
};
