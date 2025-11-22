import React from 'react';
import { DateBox } from '../molecules/DateBox';
import { EventItem } from '../molecules/EventItem';
import { PlusIcon } from '../../assets/icons';
import type { CalendarEvent } from '../../types';

interface CalendarSectionProps {
  date: {
    month: string;
    day: number;
  };
  events?: CalendarEvent[];
  onConnectCalendar?: () => void;
  onAddEvent?: () => void;
}

export const CalendarSection: React.FC<CalendarSectionProps> = ({ 
  date, 
  events = [],
  onConnectCalendar,
  onAddEvent
}) => {
  const isEmpty = events.length === 0;

  return (
    <div className="relative">
      <div className="flex gap-4 rounded-2xl bg-bg-surface p-4">
        <DateBox month={date.month} day={date.day} />
        
        <div className="flex-1 flex flex-col justify-center py-1">
          {isEmpty ? (
            <>
              <p className="text-[15px] leading-[22px] text-text-secondary">
                No tienes calendarios sincronizados
              </p>
              <button 
                onClick={onConnectCalendar}
                className="mt-1 w-fit text-[13px] leading-[18px] font-medium text-brand-link hover:text-brand-soft transition-colors"
              >
                Conectar calendario
              </button>
            </>
          ) : (
            <div className="space-y-0.5">
              {events.map((event) => (
                <EventItem key={event.id} event={event} />
              ))}
            </div>
          )}
        </div>

        {!isEmpty && (
          <button
            onClick={onAddEvent}
            className="absolute top-3 right-3 w-6 h-6 flex items-center justify-center rounded bg-bg-surfaceAlt hover:bg-bg-app transition-colors"
            aria-label="Agregar evento"
          >
            <PlusIcon className="w-3 h-3 text-text-secondary" />
          </button>
        )}
      </div>
    </div>
  );
};
