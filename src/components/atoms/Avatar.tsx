import React from 'react';

interface AvatarProps {
  src?: string;
  alt?: string;
  online?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

export const Avatar: React.FC<AvatarProps> = ({ 
  src, 
  alt = 'User', 
  online = false,
  size = 'md' 
}) => {
  const sizeClasses = {
    sm: 'h-8 w-8',
    md: 'h-10 w-10',
    lg: 'h-12 w-12'
  };

  return (
    <div className={`relative ${sizeClasses[size]}`}>
      <div className={`${sizeClasses[size]} rounded-full bg-brand-soft overflow-hidden`}>
        {src ? (
          <img src={src} alt={alt} className="h-full w-full object-cover" />
        ) : (
          <div className="h-full w-full bg-linear-to-br from-brand-soft to-brand-primary" />
        )}
      </div>
      {online && (
        <span className="absolute -right-0.5 -bottom-0.5 h-2.5 w-2.5 rounded-full border-2 border-bg-app bg-status-online" />
      )}
    </div>
  );
};
