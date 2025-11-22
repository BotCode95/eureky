import React from 'react';
import { TfiMenuAlt } from "react-icons/tfi";
interface AddTaskInputProps {
  onAdd: (task: string) => void;
}

export const AddTaskInput: React.FC<AddTaskInputProps> = ({ onAdd }) => {
  const [value, setValue] = React.useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (value.trim()) {
      onAdd(value);
      setValue('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-bg-surface rounded-full border border-brand-primary/30 px-6 py-4 flex items-center gap-4">
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Agregar tarea"
        className="flex-1 bg-transparent text-[16px] text-text-secondary placeholder:text-text-secondary outline-none"
      />
      
      <button 
        type="button"
        className="w-10 h-10 rounded-full bg-bg-surfaceAlt flex items-center justify-center shrink-0"
      >
          <TfiMenuAlt size={20} className="text-text-primary" />
      </button>
    </form>
  );
};
