import React, { useState } from 'react';
import { Search, Users, Wifi, Network, Settings, Plus } from 'lucide-react';
import { Avatar } from '../ui/Avatar';
import { Badge } from '../ui/Badge';
import { IconButton } from '../ui/IconButton';
import { Card } from '../ui/Card';
import { contacts, chats, currentUser, type User } from '../../data/mockData';

type SidebarProps = {
  onSelectChat: (chatId: string) => void;
  selectedChatId: string | null;
};

type ContactWithChat = User & {
  chatId: string;
  unreadCount: number;
  lastMessage?: {
    content: string;
    timestamp: string;
    senderId: string;
  };
};

export const Sidebar = ({ onSelectChat, selectedChatId }: SidebarProps) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState<'chats' | 'contacts'>('chats');

  // Filter contacts or chats based on search term
  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Get contacts that have chats
  const contactsWithChats: ContactWithChat[] = chats.map((chat) => {
    const contactId = chat.participants.find((id) => id !== currentUser.id);
    const contact = contacts.find((c) => c.id === contactId);

    if (!contact) {
      throw new Error(`Contact not found for chat ${chat.id}`);
    }

    return {
      ...contact,
      chatId: chat.id,
      unreadCount: chat.unreadCount,
      lastMessage: chat.lastMessage,
    };
  });

  const filteredChats = contactsWithChats.filter((contact) =>
    contact.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex h-full w-64 flex-col">
      {/* User profile section */}
      <div className="flex items-center justify-between space-x-2 border-b border-white/10 p-3">
        <div className="flex items-center space-x-2">
          <Avatar
            status="online"
            borderColor="cyan"
            size="sm"
            alt={currentUser.name}
          />
          <div>
            <h3 className="text-sm font-semibold text-white">{currentUser.name}</h3>
            <div className="flex items-center text-xs text-white/60">
              <Wifi className="mr-1 h-3 w-3 text-neon-green" />
              <span>{currentUser.ipAddress}</span>
            </div>
          </div>
        </div>
        <IconButton
          icon={<Settings className="h-4 w-4" />}
          variant="ghost"
          size="sm"
          label="Settings"
        />
      </div>

      {/* Search section */}
      <div className="border-b border-white/10 p-3">
        <div className="relative">
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full rounded-lg border border-white/20 bg-glass py-1.5 pl-8 pr-2 text-sm text-white placeholder:text-white/40 focus:border-neon-cyan/50 focus:outline-none focus:ring-1 focus:ring-neon-cyan/30"
          />
          <Search className="absolute left-2.5 top-1/2 h-4 w-4 -translate-y-1/2 text-white/40" />
        </div>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-white/10">
        <button
          className={`flex-1 py-2 text-sm font-medium ${
            activeTab === 'chats'
              ? 'border-b-2 border-neon-cyan text-neon-cyan'
              : 'text-white/60'
          }`}
          onClick={() => setActiveTab('chats')}
        >
          Chats
        </button>
        <button
          className={`flex-1 py-2 text-sm font-medium ${
            activeTab === 'contacts'
              ? 'border-b-2 border-neon-cyan text-neon-cyan'
              : 'text-white/60'
          }`}
          onClick={() => setActiveTab('contacts')}
        >
          Contacts
        </button>
      </div>

      {/* Contacts/Chats list */}
      <div className="flex-1 overflow-y-auto p-2">
        {activeTab === 'chats' ? (
          <div className="space-y-2">
            {filteredChats.map((contact) => (
              <Card
                key={contact.chatId}
                className={`cursor-pointer p-2 transition-colors ${
                  selectedChatId === contact.chatId
                    ? 'border-neon-cyan/70 shadow-neon-cyan'
                    : 'hover:border-white/30'
                }`}
                onClick={() => onSelectChat(contact.chatId)}
              >
                <div className="flex items-center space-x-2">
                  <Avatar status={contact.status} size="md" alt={contact.name} />
                  <div className="flex-1 overflow-hidden">
                    <div className="flex items-center justify-between">
                      <h3 className="truncate text-sm font-medium text-white">{contact.name}</h3>
                      {contact.lastMessage && (
                        <span className="text-xs text-white/40">{contact.lastMessage.timestamp}</span>
                      )}
                    </div>
                    {contact.lastMessage && (
                      <p className="truncate text-xs text-white/60">
                        {contact.lastMessage.senderId === currentUser.id ? 'You: ' : ''}
                        {contact.lastMessage.content}
                      </p>
                    )}
                  </div>
                  {contact.unreadCount > 0 && (
                    <Badge variant="cyan" glowing size="sm">
                      {contact.unreadCount}
                    </Badge>
                  )}
                </div>
              </Card>
            ))}
          </div>
        ) : (
          <div className="space-y-2">
            {filteredContacts.map((contact) => (
              <div
                key={contact.id}
                className="flex cursor-pointer items-center space-x-2 rounded-lg p-2 transition-colors hover:bg-glass"
                onClick={() => {
                  const chat = chats.find((c) =>
                    c.participants.includes(contact.id)
                  );
                  if (chat) {
                    onSelectChat(chat.id);
                  }
                }}
              >
                <Avatar status={contact.status} size="md" alt={contact.name} />
                <div className="flex-1">
                  <h3 className="text-sm font-medium text-white">{contact.name}</h3>
                  <div className="flex items-center text-xs text-white/60">
                    <Network className="mr-1 h-3 w-3" />
                    <span>{contact.ipAddress}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Add new button */}
      <div className="border-t border-white/10 p-3">
        <button className="flex w-full items-center justify-center space-x-1 rounded-lg border border-neon-cyan/40 bg-glass py-1.5 text-neon-cyan transition-all hover:border-neon-cyan hover:shadow-neon-cyan">
          <Plus className="h-4 w-4" />
          <span className="text-sm font-medium">New {activeTab === 'chats' ? 'Chat' : 'Contact'}</span>
        </button>
      </div>
    </div>
  );
};
