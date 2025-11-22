import React from 'react';
import { Checkbox } from '../atoms/Checkbox';
import { MoreIcon } from '../../assets/icons';
import type { Task } from '../../types';

interface TaskItemProps {
  task: Task;
  onToggle: (id: string) => void;
  onMoreClick?: (id: string) => void;
}

export const TaskItem: React.FC<TaskItemProps> = ({ task, onToggle, onMoreClick }) => {
  return (
    <div className="flex items-center gap-3 px-0 py-3 group">
      <Checkbox 
        checked={task.completed}
        onChange={() => onToggle(task.id)}
        id={`task-${task.id}`}
      />
      
      <div className="flex-1 min-w-0">
        <p className={`text-[15px] leading-[22px] mb-0.5 ${
          task.completed ? 'line-through text-text-muted' : 'text-text-primary'
        }`}>
          {task.title}
        </p>
        <p className="text-[10px] leading-[14px] text-text-muted uppercase tracking-[0.08em]">
          {task.listCategory} › {task.listName}
        </p>
      </div>

      <button
        onClick={() => onMoreClick?.(task.id)}
        className="opacity-0 group-hover:opacity-100 transition-opacity p-1.5 hover:bg-bg-surfaceAlt rounded"
        aria-label="More options"
      >
        <MoreIcon className="text-text-secondary w-4 h-4" />
      </button>
    </div>
  );
};
