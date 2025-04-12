import React, { useState } from 'react';
import { MessageSquare, Phone, Video, Wifi, Network, BarChart, Menu } from 'lucide-react';
import { IconButton } from '../ui/IconButton';
import { Avatar } from '../ui/Avatar';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { currentUser } from '../../data/mockData';

type TopNavigationProps = {
  onMenuToggle?: () => void;
  activeView: 'chat' | 'voice' | 'video' | 'network';
  onChangeView: (view: 'chat' | 'voice' | 'video' | 'network') => void;
};

export const TopNavigation = ({
  onMenuToggle,
  activeView,
  onChangeView,
}: TopNavigationProps) => {
  return (
    <div className="glass-card flex items-center justify-between px-4 py-2">
      {/* Left side - Logo and menu toggle */}
      <div className="flex items-center">
        <IconButton
          icon={<Menu className="h-5 w-5" />}
          onClick={onMenuToggle}
          variant="ghost"
          className="mr-2 lg:hidden"
          label="Toggle Menu"
        />
        <div className="hidden items-center sm:flex">
          <img src="/images/logo.svg" alt="LAN_TALK" className="mr-2 h-8 w-8" />
          <h1 className="glow-text-cyan text-lg font-bold">LAN_TALK</h1>
        </div>
      </div>

      {/* Center - Main navigation */}
      <div className="flex">
        <button
          className={`flex flex-col items-center p-2 ${
            activeView === 'chat'
              ? 'text-neon-cyan'
              : 'text-white/60 hover:text-white'
          }`}
          onClick={() => onChangeView('chat')}
        >
          <MessageSquare className="h-5 w-5" />
          <span className="mt-1 text-xs">Chat</span>
          {activeView === 'chat' && (
            <div className="mt-1 h-0.5 w-full rounded-full bg-neon-cyan" />
          )}
        </button>

        <button
          className={`flex flex-col items-center p-2 ${
            activeView === 'voice'
              ? 'text-neon-cyan'
              : 'text-white/60 hover:text-white'
          }`}
          onClick={() => onChangeView('voice')}
        >
          <Phone className="h-5 w-5" />
          <span className="mt-1 text-xs">Voice</span>
          {activeView === 'voice' && (
            <div className="mt-1 h-0.5 w-full rounded-full bg-neon-cyan" />
          )}
        </button>

        <button
          className={`flex flex-col items-center p-2 ${
            activeView === 'video'
              ? 'text-neon-magenta'
              : 'text-white/60 hover:text-white'
          }`}
          onClick={() => onChangeView('video')}
        >
          <Video className="h-5 w-5" />
          <span className="mt-1 text-xs">Video</span>
          {activeView === 'video' && (
            <div className="mt-1 h-0.5 w-full rounded-full bg-neon-magenta" />
          )}
        </button>

        <button
          className={`flex flex-col items-center p-2 ${
            activeView === 'network'
              ? 'text-neon-green'
              : 'text-white/60 hover:text-white'
          }`}
          onClick={() => onChangeView('network')}
        >
          <Network className="h-5 w-5" />
          <span className="mt-1 text-xs">Network</span>
          {activeView === 'network' && (
            <div className="mt-1 h-0.5 w-full rounded-full bg-neon-green" />
          )}
        </button>
      </div>

      {/* Right side - User info */}
      <div className="flex items-center">
        <div className="hidden items-center md:flex">
          <div className="mr-2 flex items-center text-sm text-white/70">
            <Wifi className="mr-1 h-4 w-4 text-neon-green" />
            <span className="hidden md:inline">LAN:</span> {currentUser.ipAddress}
          </div>
          <IconButton
            icon={<BarChart className="h-5 w-5" />}
            variant="ghost"
            className="mr-2"
            label="Network Stats"
          />
        </div>
        <div className="flex items-center border-l border-white/10 pl-2">
          <Avatar
            status="online"
            size="sm"
            alt={currentUser.name}
            borderColor="cyan"
          />
        </div>
      </div>
    </div>
  );
};
