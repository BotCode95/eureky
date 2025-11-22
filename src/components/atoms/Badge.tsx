import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'purple' | 'success';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({ 
  children, 
  variant = 'default',
  className = '' 
}) => {
  const variantClasses = {
    default: 'bg-bg-surfaceAlt text-text-secondary',
    purple: 'bg-brand-primary text-white',
    success: 'bg-status-online text-white'
  };

  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-body-xs font-medium ${variantClasses[variant]} ${className}`}>
      {children}
    </span>
  );
};
