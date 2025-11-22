import React from 'react';
import { IoClose } from 'react-icons/io5';
import { tasksApi, projectsApi, type Project } from '../../api';
import { toast } from 'react-toastify';

interface CreateTaskModalProps {
  isOpen: boolean;
  onClose: () => void;
  onTaskCreated: () => void;
}

export const CreateTaskModal: React.FC<CreateTaskModalProps> = ({ 
  isOpen, 
  onClose, 
  onTaskCreated 
}) => {
  const [name, setName] = React.useState('');
  const [description, setDescription] = React.useState('');
  const [projectId, setProjectId] = React.useState('');
  const [projects, setProjects] = React.useState<Project[]>([]);
  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(() => {
    if (isOpen) {
      loadProjects();
    }
  }, [isOpen]);

  const loadProjects = async () => {
    try {
      const data = await projectsApi.getAll();
      setProjects(data);
      if (data.length > 0) {
        setProjectId(data[0]._id);
      }
    } catch (error) {
      toast.error('Error al cargar proyectos');
      console.error(error);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name.trim()) {
      toast.error('El nombre de la tarea es requerido');
      return;
    }

    if (!projectId) {
      toast.error('Selecciona un proyecto');
      return;
    }

    setIsLoading(true);
    try {
      await tasksApi.create({
        name: name.trim(),
        description: description.trim(),
        projectId,
        status: 'todo',
        priority: 'medium'
      });
      
      toast.success('Tarea creada exitosamente');
      setName('');
      setDescription('');
      onTaskCreated();
      onClose();
    } catch (error) {
      toast.error('Error al crear la tarea');
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
          Agregar Tarea
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-[14px] text-text-secondary mb-2">
              Nombre de la tarea
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Ej: Comprar regalo, Llamar a Mónica..."
              className="w-full bg-bg-app border border-bg-surfaceAlt rounded-lg px-4 py-3 text-text-primary placeholder:text-text-muted focus:outline-none focus:border-brand-primary transition-colors"
              disabled={isLoading}
            />
          </div>

          <div>
            <label className="block text-[14px] text-text-secondary mb-2">
              Proyecto
            </label>
            <select
              value={projectId}
              onChange={(e) => setProjectId(e.target.value)}
              className="w-full bg-bg-app border border-bg-surfaceAlt rounded-lg px-4 py-3 text-text-primary focus:outline-none focus:border-brand-primary transition-colors"
              disabled={isLoading || projects.length === 0}
            >
              {projects.length === 0 ? (
                <option value="">No hay proyectos disponibles</option>
              ) : (
                projects.map((project) => (
                  <option key={project._id} value={project._id}>
                    {project.name}
                  </option>
                ))
              )}
            </select>
          </div>

          <div>
            <label className="block text-[14px] text-text-secondary mb-2">
              Descripción (opcional)
            </label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Agrega detalles sobre la tarea..."
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
              disabled={isLoading || projects.length === 0}
            >
              {isLoading ? 'Creando...' : 'Agregar'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
