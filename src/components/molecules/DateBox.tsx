import React from 'react';

interface DateBoxProps {
  month: string;
  day: number;
}

export const DateBox: React.FC<DateBoxProps> = ({ month, day }) => {
  return (
    <div className="flex w-[64px] shrink-0 flex-col items-center justify-center rounded-xl bg-bg-surfaceAlt py-2.5 text-center">
      <span className="text-[11px] leading-[14px] font-medium text-text-secondary tracking-[0.12em] uppercase">
        {month}
      </span>
      <span className="mt-1 text-[32px] leading-[36px] font-semibold text-text-primary">
        {day}
      </span>
    </div>
  );
};
