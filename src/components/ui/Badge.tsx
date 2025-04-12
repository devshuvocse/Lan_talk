import type React from 'react';
import { cn } from '../../lib/utils';

type BadgeProps = {
  children: React.ReactNode;
  variant?: 'cyan' | 'magenta' | 'green' | 'yellow' | 'purple' | 'default';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  glowing?: boolean;
};

export const Badge = ({
  children,
  variant = 'default',
  size = 'md',
  className,
  glowing = false,
}: BadgeProps) => {
  const sizeClasses = {
    sm: 'px-1.5 py-0.5 text-xs',
    md: 'px-2 py-1 text-sm',
    lg: 'px-3 py-1.5 text-base',
  };

  const variantClasses = {
    default: 'bg-glass text-white',
    cyan: 'bg-neon-cyan/20 text-neon-cyan border border-neon-cyan/40',
    magenta: 'bg-neon-magenta/20 text-neon-magenta border border-neon-magenta/40',
    green: 'bg-neon-green/20 text-neon-green border border-neon-green/40',
    yellow: 'bg-neon-yellow/20 text-neon-yellow border border-neon-yellow/40',
    purple: 'bg-neon-purple/20 text-neon-purple border border-neon-purple/40',
  };

  const glowingClasses = {
    default: '',
    cyan: glowing ? 'shadow-neon-cyan' : '',
    magenta: glowing ? 'shadow-neon-magenta' : '',
    green: glowing ? 'shadow-neon-green' : '',
    yellow: glowing ? 'shadow-[0_0_5px_#faff00,0_0_10px_#faff00]' : '',
    purple: glowing ? 'shadow-[0_0_5px_#8b00ff,0_0_10px_#8b00ff]' : '',
  };

  return (
    <span
      className={cn(
        'inline-flex items-center justify-center rounded-full font-medium',
        sizeClasses[size],
        variantClasses[variant],
        glowingClasses[variant],
        className
      )}
    >
      {children}
    </span>
  );
};
