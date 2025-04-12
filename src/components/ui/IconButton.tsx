import type React from 'react';
import { cn } from '../../lib/utils';

type IconButtonProps = {
  icon: React.ReactNode;
  label?: string;
  onClick?: () => void;
  variant?: 'cyan' | 'magenta' | 'green' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  active?: boolean;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
};

export const IconButton = ({
  icon,
  label,
  onClick,
  variant = 'cyan',
  size = 'md',
  active = false,
  className,
  type = 'button',
}: IconButtonProps) => {
  const sizeClasses = {
    sm: 'p-1.5 text-sm',
    md: 'p-2 text-base',
    lg: 'p-3 text-lg',
  };

  const variantClasses = {
    cyan: 'bg-primary-light border border-neon-cyan/30 text-neon-cyan hover:border-neon-cyan hover:shadow-neon-cyan',
    magenta: 'bg-primary-light border border-neon-magenta/30 text-neon-magenta hover:border-neon-magenta hover:shadow-neon-magenta',
    green: 'bg-primary-light border border-neon-green/30 text-neon-green hover:border-neon-green hover:shadow-neon-green',
    ghost: 'bg-transparent text-white/70 hover:bg-white/10 hover:text-white',
  };

  const activeClasses = active
    ? variant === 'ghost'
      ? 'bg-white/20 text-white'
      : `border-${variant === 'cyan' ? 'neon-cyan' : variant === 'magenta' ? 'neon-magenta' : 'neon-green'} shadow-${
          variant === 'cyan' ? 'neon-cyan' : variant === 'magenta' ? 'neon-magenta' : 'neon-green'
        }`
    : '';

  return (
    <button
      onClick={onClick}
      className={cn(
        'rounded-lg transition-all duration-200 flex items-center justify-center',
        'hover:scale-105 active:scale-95 focus:outline-none',
        sizeClasses[size],
        variantClasses[variant],
        activeClasses,
        className
      )}
      aria-label={label}
      title={label}
      type={type}
    >
      {icon}
    </button>
  );
};
