import type React from 'react';
import { cn } from '../../lib/utils';

type CardProps = {
  children: React.ReactNode;
  className?: string;
  glowBorder?: 'none' | 'cyan' | 'magenta' | 'green';
  hoverEffect?: boolean;
  onClick?: () => void;
};

export const Card = ({
  children,
  className,
  glowBorder = 'none',
  hoverEffect = false,
  onClick,
}: CardProps) => {
  const glowBorderClasses = {
    none: '',
    cyan: 'border-neon-cyan/30 hover:border-neon-cyan/70 hover:shadow-neon-cyan',
    magenta: 'border-neon-magenta/30 hover:border-neon-magenta/70 hover:shadow-neon-magenta',
    green: 'border-neon-green/30 hover:border-neon-green/70 hover:shadow-neon-green',
  };

  const hoverClasses = hoverEffect
    ? 'transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]'
    : '';

  const clickableClasses = onClick ? 'cursor-pointer' : '';

  return (
    <div
      className={cn(
        'glass-card',
        glowBorderClasses[glowBorder],
        hoverClasses,
        clickableClasses,
        className
      )}
      onClick={onClick}
    >
      {children}
    </div>
  );
};
