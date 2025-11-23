import React from 'react';
import { EurekyLogo } from '../icons/EurekyLogo';
import { RiHome6Line as HomeIcon, RiBarChartBoxLine as BarCharIcon, RiTaskLine as TaskIcon} from "react-icons/ri";
import { GoColumns as ColumnsIcon } from "react-icons/go";
import { IoAddOutline, IoHelpBuoyOutline as RescueIcon} from "react-icons/io5";
import { CiSettings as SettingIcon } from "react-icons/ci";
import { HiChevronUpDown as ChevronUpDowm } from "react-icons/hi2";
import { CreateProjectModal } from '../modals/CreateProjectModal';
import { projectsApi, authApi } from '../../api';

interface SidebarProps {
  activeId?: string;
  selectedProjectId?: string;
  onProjectSelect?: (projectId: string) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ activeId = 'home', selectedProjectId, onProjectSelect }) => {
  const [projects, setProjects] = React.useState<Array<{ _id: string; name: string }>>([]);
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const user = authApi.getCurrentUser();

  const loadProjects = React.useCallback(async () => {
    try {
      const data = await projectsApi.getAll();
      setProjects(data);
    } catch (error) {
      console.error('Error loading projects:', error);
    }
  }, []);

  React.useEffect(() => {
    loadProjects();
  }, [loadProjects]);

  const menuItems = [
    { id: 'home', icon: HomeIcon, label: 'Mi día' },
    { id: 'calendar', icon: BarCharIcon, label: 'Calendario' },
    { id: 'tasks', icon: ColumnsIcon, label: 'Todas mis tareas' },
    { id: 'lists', icon: TaskIcon, label: 'Mis listas' },
  ];

  const bottomItems = [
    { id: 'support', icon: RescueIcon, label: 'Soporte' },
    { id: 'settings', icon: SettingIcon, label: 'Ajustes' },
  ];

  return (
    <aside className="w-[300px] h-screen bg-bg-surface flex flex-col border-r border-bg-surfaceAlt sticky top-0">
      <div className="px-6 py-6">
        <EurekyLogo width={120} />
      </div>

      <nav className="flex-1 px-4 space-y-1">
        {menuItems.map((item) => (
          <button
            key={item.id}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-[15px] transition-colors ${
              activeId === item.id
                ? 'bg-bg-app text-white'
                : 'text-text-secondary hover:bg-bg-surfaceAlt hover:text-text-primary'
            }`}
          >
            <item.icon size={20} className={item.id === 'tasks' ? 'rotate-90' : ''} />
            <span>{item.label}</span>
          </button>
        ))}

        <div className="pt-6">
          <div className="flex items-center justify-between px-4 py-2">
            <span className="text-[13px] text-text-primary uppercase tracking-wider font-medium">
              Mis Listas
            </span>
            <button 
              onClick={() => setIsModalOpen(true)}
              className="text-text-secondary hover:text-text-primary transition-colors"
            >
              <IoAddOutline size={18} />
            </button>
          </div>
          <div className="space-y-1">
            {projects.map((project) => (
              <button
                key={project._id}
                onClick={() => onProjectSelect?.(project._id)}
                className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-lg text-[14px] transition-colors ${
                  selectedProjectId === project._id
                    ? 'bg-bg-surfaceAlt text-text-primary'
                    : 'text-text-secondary hover:bg-bg-surfaceAlt hover:text-text-primary'
                }`}
              >
                <span>{project.name}</span>
              </button>
            ))}
          </div>
        </div>
      </nav>

      <div className="px-4 pb-4 space-y-2">
        {bottomItems.map((item) => (
          <button
            key={item.id}
            className="w-full flex items-center gap-3 px-4 py-2.5 rounded-lg text-[16px] text-text-secondary hover:bg-bg-surfaceAlt hover:text-text-primary transition-colors"
          >
            <item.icon size={20} />
            <span>{item.label}</span>
          </button>
        ))}

        
        <button className="w-full relative overflow-hidden bg-linear-to-r bg-brand-soft text-white px-4 py-3 rounded-lg text-[16px] font-medium hover:opacity-90 transition-opacity">
          <div className="absolute -top-2 -left-2 w-8 h-8 text-[#9999FE] opacity-60">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
          </div>
          
          <div className="absolute -bottom-2 -right-2 w-8 h-8 text-brand-primary opacity-60">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
          </div>
          
          <span className="relative z-10">Mejora tu plan</span>
        </button>

        <div className="bg-bg-surfaceAlt rounded-lg p-3 flex items-center gap-3">
          <div className="relative">
            <div className="w-10 h-10 bg-brand-dark rounded-full bg-linear-to-br flex items-center justify-center text-white font-medium">
              {user?.name?.charAt(0).toUpperCase() || 'U'}
            </div>
            <div className="absolute bottom-0 right-0 w-3 h-3 bg-status-online rounded-full border-2 border-bg-surfaceAlt" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-[14px] text-text-primary font-medium truncate">{user?.name || 'Usuario'}</p>
            <p className="text-[12px] text-text-muted truncate">{user?.email || 'email@example.com'}</p>
          </div>
          <button className="text-text-secondary hover:text-text-primary transition-colors">
            <ChevronUpDowm size={18} className='text-text-muted' />
          </button>
        </div>
      </div>

      <CreateProjectModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        onProjectCreated={loadProjects}
      />
    </aside>
  );
};
