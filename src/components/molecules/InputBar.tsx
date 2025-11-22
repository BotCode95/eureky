import React from 'react';

interface InputBarProps {
  placeholder?: string;
  onSubmit?: (value: string) => void;
  actionButton?: React.ReactNode;
}

export const InputBar: React.FC<InputBarProps> = ({ 
  placeholder = 'Agregar tarea',
  onSubmit,
  actionButton 
}) => {
  const [value, setValue] = React.useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (value.trim()) {
      onSubmit?.(value);
      setValue('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center gap-3 rounded-pill bg-bg-surface px-4 py-3">
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={placeholder}
        className="flex-1 bg-transparent text-body-md text-text-primary placeholder:text-text-secondary outline-none"
      />
      {actionButton && actionButton}
    </form>
  );
};
