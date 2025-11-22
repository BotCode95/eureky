import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'icon';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  ...props 
}) => {
  const baseClasses = 'inline-flex items-center justify-center font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-brand-primary focus:ring-offset-2 focus:ring-offset-bg-app disabled:opacity-50 disabled:pointer-events-none';
  
  const variantClasses = {
    primary: 'bg-brand-primary text-white hover:bg-brand-soft',
    secondary: 'bg-bg-surface text-text-primary hover:bg-bg-surfaceAlt',
    ghost: 'bg-transparent text-text-secondary hover:text-text-primary hover:bg-bg-surface',
    icon: 'bg-bg-surfaceAlt text-text-secondary hover:text-text-primary'
  };

  const sizeClasses = {
    sm: 'h-8 px-3 text-body-sm rounded-lg',
    md: 'h-10 px-4 text-body-md rounded-lg',
    lg: 'h-12 px-6 text-body-md rounded-lg'
  };

  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
