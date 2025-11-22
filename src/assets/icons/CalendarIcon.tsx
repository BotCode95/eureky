export const CalendarIcon = ({ className = "" }: { className?: string }) => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" className={className}>
    <rect x="3" y="4" width="14" height="14" rx="2" fill="none" stroke="currentColor" strokeWidth="1.5"/>
    <line x1="3" y1="8" x2="17" y2="8" stroke="currentColor" strokeWidth="1.5"/>
    <line x1="7" y1="2" x2="7" y2="6" stroke="currentColor" strokeWidth="1.5"/>
    <line x1="13" y1="2" x2="13" y2="6" stroke="currentColor" strokeWidth="1.5"/>
  </svg>
);
