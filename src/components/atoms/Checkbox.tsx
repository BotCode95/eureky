import React from 'react';

interface CheckboxProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  id?: string;
}

export const Checkbox: React.FC<CheckboxProps> = ({ checked, onChange, id }) => {
  return (
    <button
      type="button"
      role="checkbox"
      aria-checked={checked}
      id={id}
      onClick={() => onChange(!checked)}
      className={`h-5 w-5 rounded-full border-2 transition-all flex items-center justify-center ${
        checked 
          ? 'bg-brand-primary border-brand-primary' 
          : 'bg-transparent border-text-muted hover:border-text-secondary'
      }`}
    >
      {checked && (
        <svg width="12" height="10" viewBox="0 0 12 10" fill="none">
          <path 
            d="M1 5L4.5 8.5L11 1.5" 
            stroke="white" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          />
        </svg>
      )}
    </button>
  );
};
