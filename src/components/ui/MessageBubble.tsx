import React from 'react';
import { cn } from '../../lib/utils';

type MessageBubbleProps = {
  content: string;
  timestamp: string;
  isSent?: boolean;
  status?: 'sending' | 'sent' | 'delivered' | 'read' | 'error';
  className?: string;
};

export const MessageBubble = ({
  content,
  timestamp,
  isSent = false,
  status = 'sent',
  className,
}: MessageBubbleProps) => {
  // Determine styles based on whether the message is sent or received
  const bubbleStyles = isSent
    ? 'bg-neon-cyan/10 border-neon-cyan/20 ml-auto'
    : 'bg-glass border-white/5 mr-auto';

  // Status indicator for sent messages
  const statusIndicator = () => {
    if (!isSent) return null;

    const statusIcons = {
      sending: '⋯',
      sent: '✓',
      delivered: '✓✓',
      read: <span className="text-neon-cyan">✓✓</span>,
      error: <span className="text-neon-magenta">!</span>,
    };

    return <span className="ml-1 text-xs opacity-70">{statusIcons[status]}</span>;
  };

  return (
    <div
      className={cn(
        'max-w-[80%] rounded-xl border px-3 py-2 backdrop-blur-sm',
        'transition-all duration-300 hover:backdrop-blur-md',
        bubbleStyles,
        className
      )}
    >
      <p className="text-sm text-white/90">{content}</p>
      <div className="mt-1 flex items-center justify-end gap-0.5 text-xs text-white/40">
        <span>{timestamp}</span>
        {statusIndicator()}
      </div>
    </div>
  );
};
