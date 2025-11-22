import React from "react";
import { TopBar } from "../components/molecules/TopBar";
import { Greeting } from "../components/molecules/Greeting";
import { CalendarWidget } from "../components/molecules/CalendarWidget";
import { TasksWidget } from "../components/molecules/TasksWidget";
import { AddTaskInput } from "../components/molecules/AddTaskInput";
import { BottomNav } from "../components/molecules/BottomNav";
import { CreateTaskModal } from "../components/modals/CreateTaskModal";
import { tasksApi, projectsApi, authApi, type Task } from "../api";
import { toast } from 'react-toastify';

export const HomeMobile: React.FC = () => {
  const [tasks, setTasks] = React.useState<Array<{ id: string; title: string; category: string; list: string; completed: boolean }>>([]);
  const [isTaskModalOpen, setIsTaskModalOpen] = React.useState(false);
  const user = authApi.getCurrentUser();

  const events = [
    { time: '8:00-9:00', title: 'Reunión Mónica'},
    { time: '11:00-12:00', title: 'Status equipo'}
  ];

  React.useEffect(() => {
    loadTasks();
  }, []);

  const loadTasks = async () => {
    try {
      const projects = await projectsApi.getAll();
      const allTasks: Array<{ id: string; title: string; category: string; list: string; completed: boolean }> = [];
      
      for (const project of projects) {
        const projectTasks = await tasksApi.getByProject(project._id);
        projectTasks.forEach((task: Task) => {
          if (task.status !== 'done') {
            allTasks.push({
              id: task._id,
              title: task.name,
              category: 'MIS LISTAS',
              list: project.name.toUpperCase(),
              completed: false
            });
          }
        });
      }
      
      setTasks(allTasks);
    } catch (error) {
      console.error('Error loading tasks:', error);
    }
  };

  const handleToggleTask = async (id: string) => {
    try {
      await tasksApi.update(id, { status: 'done' });
      setTasks(tasks.filter(task => task.id !== id));
      toast.success('Tarea completada');
    } catch (error) {
      toast.error('Error al actualizar la tarea');
      console.error(error);
    }
  };

  const handleAddTask = () => {
    setIsTaskModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-bg-app text-text-primary flex flex-col w-full">
      <TopBar />

      <div className="flex-1 flex flex-col px-6 pt-6 pb-24">
        <div className="space-y-6 mt-6">
          <Greeting name={user?.name || 'Usuario'} />
          <div>
            <h2 className="text-[20px] font-medium mb-3">Calendario</h2>
            <CalendarWidget month="MAR" day={21} events={events} />
          </div>
          <div>
            <h2 className="text-[20px] font-medium mb-3">Tareas</h2>
            <TasksWidget tasks={tasks} onToggle={handleToggleTask} />
          </div>
        </div>
        
        <div className="mt-auto pt-6">
          <AddTaskInput onAdd={handleAddTask} />
        </div>
      </div>
      
      <BottomNav activeId="home" />
      
      <CreateTaskModal 
        isOpen={isTaskModalOpen} 
        onClose={() => setIsTaskModalOpen(false)} 
        onTaskCreated={loadTasks}
      />
    </div>
  );
};
