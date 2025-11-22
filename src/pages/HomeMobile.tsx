import React from "react";
import { TopBar } from "../components/molecules/TopBar";
import { Greeting } from "../components/molecules/Greeting";
import { CalendarWidget } from "../components/molecules/CalendarWidget";
import { TasksWidget } from "../components/molecules/TasksWidget";
import { AddTaskInput } from "../components/molecules/AddTaskInput";
import { BottomNav } from "../components/molecules/BottomNav";

export const HomeMobile: React.FC = () => {
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
    <div className="min-h-screen bg-bg-app text-text-primary flex flex-col w-full">
      <TopBar />

      <div className="flex-1 flex flex-col px-6 pt-6 pb-24">
        <div className="space-y-6 mt-6">
          <Greeting name="Roger" />
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
    </div>
  );
};
