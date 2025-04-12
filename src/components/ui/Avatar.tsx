import React from 'react';
import { cn } from '../../lib/utils';

type AvatarProps = {
  src?: string;
  alt?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  status?: 'online' | 'offline' | 'away' | 'busy' | 'none';
  className?: string;
  borderColor?: 'cyan' | 'magenta' | 'green' | 'none';
};

export const Avatar = ({
  src,
  alt = 'Avatar',
  size = 'md',
  status = 'none',
  className,
  borderColor = 'none',
}: AvatarProps) => {
  const sizeClasses = {
    xs: 'w-6 h-6 text-xs',
    sm: 'w-8 h-8 text-sm',
    md: 'w-10 h-10 text-base',
    lg: 'w-12 h-12 text-lg',
    xl: 'w-16 h-16 text-xl',
  };

  const statusColors = {
    online: 'bg-neon-green',
    offline: 'bg-gray-500',
    away: 'bg-neon-yellow',
    busy: 'bg-neon-magenta',
    none: 'hidden',
  };

  const statusSizes = {
    xs: 'w-1.5 h-1.5',
    sm: 'w-2 h-2',
    md: 'w-2.5 h-2.5',
    lg: 'w-3 h-3',
    xl: 'w-4 h-4',
  };

  const borderClasses = {
    cyan: 'border-2 border-neon-cyan shadow-neon-cyan',
    magenta: 'border-2 border-neon-magenta shadow-neon-magenta',
    green: 'border-2 border-neon-green shadow-neon-green',
    none: '',
  };

  const initials = alt
    .split(' ')
    .map((word) => word[0])
    .join('')
    .toUpperCase()
    .substring(0, 2);

  return (
    <div className="relative">
      <div
        className={cn(
          'rounded-full flex items-center justify-center bg-primary-light overflow-hidden',
          sizeClasses[size],
          borderClasses[borderColor],
          className
        )}
      >
        {src ? (
          <img src={src} alt={alt} className="w-full h-full object-cover" />
        ) : (
          <span className="font-medium text-white">{initials}</span>
        )}
      </div>
      {status !== 'none' && (
        <span
          className={cn(
            'absolute rounded-full border border-primary',
            statusColors[status],
            statusSizes[size],
            size === 'xs' || size === 'sm' ? 'right-0 top-0' : 'right-0.5 bottom-0.5'
          )}
        />
      )}
    </div>
  );
};
