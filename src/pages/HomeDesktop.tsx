import React from "react";
import { Sidebar } from "../components/layout/Sidebar";
import { Greeting } from "../components/molecules/Greeting";
import { CalendarWidget } from "../components/molecules/CalendarWidget";
import { TasksWidget } from "../components/molecules/TasksWidget";
import { AddTaskInput } from "../components/molecules/AddTaskInput";

export const HomeDesktop: React.FC = () => {
  const [tasks, setTasks] = React.useState([
    { id: '1', title: 'Comprar regalo', category: 'MIS LISTAS', list: 'PERSONAL', completed: false },
    { id: '2', title: 'Planear Menú', category: 'MIS LISTAS', list: 'PERSONAL', completed: false },
  ]);

  const events = [
    { time: '8:00-9:00', title: 'Reunión Mónica'},
    { time: '11:00-12:00', title: 'Status equipo'}
  ];

  const handleToggleTask = (id: string) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const handleAddTask = (title: string) => {
    setTasks([...tasks, {
      id: Date.now().toString(),
      title,
      category: 'MIS LISTAS',
      list: 'PERSONAL',
      completed: false
    }]);
  };

  return (
    <div className="flex h-screen bg-bg-app text-text-primary overflow-hidden">
      <Sidebar activeId="home" />

      <main className="flex-1 overflow-y-auto max-w-4xl">
        <div className="mx-auto pl-24 min-h-screen flex flex-col">
          <div className="flex-1 space-y-8">
            <Greeting name="Roger" className="lg:pt-[52px]" />
            
            <div>
              <h2 className="text-[24px] font-medium mb-4">Calendario</h2>
              <CalendarWidget month="MAR" day={21} events={events} />
            </div>
            
            <div>
              <h2 className="text-[24px] font-medium mb-4">Tareas</h2>
              <TasksWidget tasks={tasks} onToggle={handleToggleTask} />
            </div>
          </div>

          <div className="mt-auto pt-8 pb-8">
            <AddTaskInput onAdd={handleAddTask} />
          </div>
        </div>
      </main>
    </div>
  );
};
