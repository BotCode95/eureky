import { useState } from 'react';
import type { Task, CalendarEvent } from '../types';

const mockEvents: CalendarEvent[] = [
  {
    id: '1',
    title: 'Reunión Mónica',
    startTime: '8:00',
    endTime: '9:00',
  },
  {
    id: '2',
    title: 'Status equipo',
    startTime: '11:00',
    endTime: '12:00',
    status: 'libre',
  },
  {
    id: '3',
    title: 'Feedback',
    startTime: '15:00',
    endTime: '15:30',
  },
  {
    id: '4',
    title: 'Status equipo',
    startTime: '17:00',
    endTime: '18:00',
  },
  {
    id: '5',
    title: 'Gimnasio',
    startTime: '19:00',
    endTime: '20:00',
  },
];

const mockTasks: Task[] = [
  {
    id: '1',
    title: 'Comprar regalo',
    completed: false,
    listName: 'PERSONAL',
    listCategory: 'MIS LISTAS',
  },
  {
    id: '2',
    title: 'Planear Menú',
    completed: false,
    listName: 'PERSONAL',
    listCategory: 'MIS LISTAS',
  },
  {
    id: '3',
    title: 'Hacer presentación Q4',
    completed: false,
    listName: 'TRABAJO',
    listCategory: 'MIS LISTAS',
  },
  {
    id: '4',
    title: 'Responder Correo - Cotización',
    completed: false,
    listName: 'TRABAJO',
    listCategory: 'MIS LISTAS',
  },
];

export const useAppData = () => {
  const [tasks, setTasks] = useState<Task[]>(mockTasks);
  const [events] = useState<CalendarEvent[]>(mockEvents);
  const [hasCalendar, setHasCalendar] = useState(true);

  const toggleTask = (id: string) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const addTask = (title: string) => {
    const newTask: Task = {
      id: Date.now().toString(),
      title,
      completed: false,
      listName: 'PERSONAL',
      listCategory: 'MIS LISTAS',
    };
    setTasks([...tasks, newTask]);
  };

  const connectCalendar = () => {
    setHasCalendar(true);
  };

  return {
    tasks,
    events: hasCalendar ? events : [],
    hasCalendar,
    toggleTask,
    addTask,
    connectCalendar,
  };
};
