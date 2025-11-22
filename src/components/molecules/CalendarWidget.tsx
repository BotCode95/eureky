import React from 'react';

interface CalendarEvent {
  time: string;
  title: string;
  strikethrough?: boolean;
  badge?: string;
}

interface CalendarWidgetProps {
  month: string;
  day: number;
  events: CalendarEvent[];
}

export const CalendarWidget: React.FC<CalendarWidgetProps> = ({ month, day, events }) => {
  return (
    <div className="bg-bg-surface rounded-lg p-6">
      <div className="flex gap-6 items-center">
        {/* Date Box - 41x71 */}
        <div className="w-[41px] shrink-0 rounded-lg flex flex-col items-center justify-center py-2">
          <span className="text-[18px] font-bold text-text-primary tracking-wider uppercase">
            {month}
          </span>
          <span className="text-[40px] leading-[32px] font-bold text-text-primary mt-0.5">
            {day}
          </span>
        </div>

        {/* Events List - each row h-6 (24px) with gap-7 (27px) */}
        <div className="flex-1 space-y-0 min-w-0">
          {events.map((event, index) => (
            <div key={index} className="flex items-center space-around gap-4 h-6">
              <div className="flex items-center gap-7 min-w-0 flex-1">
                <span className={`text-[14px] text-text-primary shrink-0 ${
                  event.strikethrough ? 'line-through opacity-50' : ''
                }`}>
                  {event.time}
                </span>
                <span className={`text-[16px] text-text-primary flex-start truncate ${
                  event.strikethrough ? 'line-through opacity-50' : ''
                }`}>
                  {event.title}
                </span>
              </div>
              {event.badge && (
                <div className="bg-brand-primary text-white text-[11px] px-2.5 py-0.5 rounded-full font-medium shrink-0">
                  {event.badge}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
