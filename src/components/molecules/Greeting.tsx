import React from 'react';

interface GreetingProps {
  name?: string;
}

export const Greeting: React.FC<GreetingProps> = ({ name = 'Roger' }) => {
  return (
    <h1 className="font-display text-[32px] sm:text-[40px] lg:text-[48px] leading-tight font-bold text-text-primary">
      Buenos días, {name}.
    </h1>
  );
};
