import React from 'react';
import { SlOptionsVertical } from "react-icons/sl";
interface Task {
  id: string;
  title: string;
  category: string;
  list: string;
  completed: boolean;
}

interface TasksWidgetProps {
  tasks: Task[];
  onToggle: (id: string) => void;
}

export const TasksWidget: React.FC<TasksWidgetProps> = ({ tasks, onToggle }) => {
  return (
    <div className="space-y-4">
      {tasks.map((task) => (
        <div key={task.id} className="bg-bg-surface rounded-lg p-4 flex items-center justify-between gap-4">
          {/* Checkbox - 16x16 */}
          <div className='flex items-center gap-5'>
          <button
            onClick={() => onToggle(task.id)}
            className="w-4 h-4 rounded-xl border border-text-primary shrink-0"
            />
          <div className="shrink-0">
            <p className="text-[11px] flex flex-start text-text-primary uppercase tracking-wider mb-1">
              {task.category} - {task.list}
            </p>
            <p 
              className="text-[16px] leading-[150%] text-text-primary font-normal"
              style={{ fontFamily: 'DM Sans', fontVariantNumeric: 'lining-nums tabular-nums' }}
              >
              {task.title}
            </p>
          </div>
              </div>

          <button className="shrink-0 w-5 h-5">
            <SlOptionsVertical size={20} className="text-text-primary" />
          </button>
        </div>
      ))}
    </div>
  );
};
