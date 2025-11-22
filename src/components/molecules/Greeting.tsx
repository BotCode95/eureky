import React from 'react';

interface GreetingProps {
  name?: string;
  className?: string;
}

export const Greeting: React.FC<GreetingProps> = ({ name = 'Roger', className = '' }) => {
  return (
    <h1 className={`font-display text-[32px] sm:text-[40px] lg:text-[48px] leading-tight font-bold text-text-primary ${className}`}>
      Buenos días, {name}.
    </h1>
  );
};
