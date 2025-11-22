import React from 'react';
import { Badge } from '../atoms/Badge';
import type { CalendarEvent } from '../../types';

interface EventItemProps {
  event: CalendarEvent;
}

export const EventItem: React.FC<EventItemProps> = ({ event }) => {
  const isStrikethrough = event.startTime.startsWith('8:00');
  
  return (
    <div className="flex items-center justify-between py-1.5">
      <div className="flex items-center gap-4 flex-1">
        <span className={`text-[13px] leading-[20px] min-w-[90px] ${
          isStrikethrough 
            ? 'text-text-muted line-through' 
            : 'text-text-secondary'
        }`}>
          {event.startTime}–{event.endTime}
        </span>
        <span className={`text-[15px] leading-[22px] ${
          isStrikethrough 
            ? 'text-text-muted line-through' 
            : 'text-text-primary'
        }`}>
          {event.title}
        </span>
      </div>
      {event.status && (
        <Badge variant="purple" className="text-[11px] px-2.5 py-0.5">
          {event.status}
        </Badge>
      )}
    </div>
  );
};
