export const Logo = ({ className = "" }: { className?: string }) => (
  <svg width="32" height="20" viewBox="0 0 32 20" fill="none" className={className}>
    <rect width="32" height="20" rx="4" fill="#242865"/>
    <path d="M8 6h16M8 10h12M8 14h14" stroke="white" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);
