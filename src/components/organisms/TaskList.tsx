import React from 'react';
import { TaskItem } from '../molecules/TaskItem';
import type { Task } from '../../types';

interface TaskListProps {
  tasks: Task[];
  onToggleTask: (id: string) => void;
  onMoreClick?: (id: string) => void;
}

export const TaskList: React.FC<TaskListProps> = ({ 
  tasks, 
  onToggleTask,
  onMoreClick 
}) => {
  if (tasks.length === 0) {
    return (
      <div className="flex items-center justify-center py-12 px-4">
        <p className="text-[15px] leading-[22px] text-text-secondary text-center">
          No tienes tareas pendientes
        </p>
      </div>
    );
  }

  return (
    <div className="divide-y divide-bg-surfaceAlt/30">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onToggle={onToggleTask}
          onMoreClick={onMoreClick}
        />
      ))}
    </div>
  );
};
