import type React from 'react';
import { cn } from '../../lib/utils';

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'cyan' | 'magenta' | 'green' | 'ghost' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  className?: string;
  disabled?: boolean;
  icon?: React.ReactNode;
  type?: 'button' | 'submit' | 'reset';
};

export const Button = ({
  children,
  onClick,
  variant = 'cyan',
  size = 'md',
  fullWidth = false,
  className = '',
  disabled = false,
  icon,
  type = 'button',
}: ButtonProps) => {
  const sizeClasses = {
    sm: 'py-1 px-3 text-sm',
    md: 'py-2 px-4 text-base',
    lg: 'py-3 px-6 text-lg',
  };

  const variantClasses = {
    cyan: 'bg-primary-light border border-neon-cyan/30 text-neon-cyan hover:border-neon-cyan hover:shadow-neon-cyan',
    magenta: 'bg-primary-light border border-neon-magenta/30 text-neon-magenta hover:border-neon-magenta hover:shadow-neon-magenta',
    green: 'bg-primary-light border border-neon-green/30 text-neon-green hover:border-neon-green hover:shadow-neon-green',
    ghost: 'bg-transparent text-white/70 hover:bg-white/10 hover:text-white',
    outline: 'bg-transparent border border-white/30 text-white hover:bg-white/10',
  };

  const disabledClasses = disabled ? 'opacity-50 cursor-not-allowed' : '';
  const fullWidthClasses = fullWidth ? 'w-full' : '';

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={cn(
        'rounded-md transition-all duration-200 flex items-center justify-center',
        'hover:scale-105 active:scale-95 focus:outline-none font-medium',
        sizeClasses[size],
        variantClasses[variant],
        disabledClasses,
        fullWidthClasses,
        className
      )}
    >
      {icon && <span className="mr-2">{icon}</span>}
      {children}
    </button>
  );
};
