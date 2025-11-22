import React from 'react';
import { IoClose } from 'react-icons/io5';
import { projectsApi } from '../../api';
import { toast } from 'react-toastify';

interface CreateProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  onProjectCreated: () => void;
}

export const CreateProjectModal: React.FC<CreateProjectModalProps> = ({ 
  isOpen, 
  onClose, 
  onProjectCreated 
}) => {
  const [name, setName] = React.useState('');
  const [description, setDescription] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name.trim()) {
      toast.error('El nombre del proyecto es requerido');
      return;
    }

    setIsLoading(true);
    try {
      await projectsApi.create({
        name: name.trim(),
        description: description.trim(),
        status: 'active'
      });
      
      toast.success('Proyecto creado exitosamente');
      setName('');
      setDescription('');
      onProjectCreated();
      onClose();
    } catch (error) {
      toast.error('Error al crear el proyecto');
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-bg-surface rounded-2xl w-full max-w-md p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-text-secondary hover:text-text-primary transition-colors"
        >
          <IoClose size={24} />
        </button>

        <h2 className="text-[24px] font-semibold text-text-primary mb-6">
          Crear Proyecto
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-[14px] text-text-secondary mb-2">
              Nombre del proyecto
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Ej: Personal, Trabajo, Estudios"
              className="w-full bg-bg-app border border-bg-surfaceAlt rounded-lg px-4 py-3 text-text-primary placeholder:text-text-muted focus:outline-none focus:border-brand-primary transition-colors"
              disabled={isLoading}
            />
          </div>

          <div>
            <label className="block text-[14px] text-text-secondary mb-2">
              Descripción (opcional)
            </label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Describe tu proyecto..."
              rows={3}
              className="w-full bg-bg-app border border-bg-surfaceAlt rounded-lg px-4 py-3 text-text-primary placeholder:text-text-muted focus:outline-none focus:border-brand-primary transition-colors resize-none"
              disabled={isLoading}
            />
          </div>

          <div className="flex gap-3 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-4 py-3 rounded-lg bg-bg-surfaceAlt text-text-primary font-medium hover:bg-bg-app transition-colors"
              disabled={isLoading}
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="flex-1 px-4 py-3 rounded-lg bg-brand-primary text-white font-medium hover:opacity-90 transition-opacity disabled:opacity-50"
              disabled={isLoading}
            >
              {isLoading ? 'Creando...' : 'Crear'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
