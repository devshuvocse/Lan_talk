import type React from 'react';
import { useState, useRef, useEffect } from 'react';
import { Phone, Video, MoreVertical, Send, Mic, Paperclip, Image as ImageIcon } from 'lucide-react';
import { IconButton } from '../ui/IconButton';
import { MessageBubble } from '../ui/MessageBubble';
import { Avatar } from '../ui/Avatar';
import { Card } from '../ui/Card';
import { contacts, currentUser, messages } from '../../data/mockData';

type ChatAreaProps = {
  chatId: string | null;
};

export const ChatArea = ({ chatId }: ChatAreaProps) => {
  const [newMessage, setNewMessage] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const chatMessages = chatId ? messages[chatId] || [] : [];

  // Find contact based on chatId
  const getContact = () => {
    if (!chatId) return null;

    const contactId = chatId.split('-')[1];
    return contacts.find(c => c.id === `user-${contactId}`);
  };

  const contact = getContact();

  // Scroll to bottom of messages when messages change or chatId changes
  // biome-ignore lint/correctness/useExhaustiveDependencies: We need to scroll when chatMessages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [chatMessages]);

  // Focus input when chat changes
  useEffect(() => {
    if (chatId) {
      inputRef.current?.focus();
    }
  }, [chatId]);

  // Handle send message - form submission
  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMessage.trim() || !chatId || !contact) return;

    // In a real app, we would send this to a backend
    console.log('Sending message:', newMessage);

    // Clear input
    setNewMessage('');
  };

  // Handle send message button click
  const handleSendButtonClick = () => {
    if (!newMessage.trim() || !chatId || !contact) return;

    // In a real app, we would send this to a backend
    console.log('Sending message:', newMessage);

    // Clear input
    setNewMessage('');
  };

  // If no chat is selected
  if (!chatId || !contact) {
    return (
      <div className="flex h-full flex-col items-center justify-center">
        <div className="text-center">
          <img src="/images/logo.svg" alt="LAN_TALK" className="mx-auto mb-4 h-32 w-32" />
          <h2 className="glow-text-cyan text-2xl font-bold">LAN_TALK</h2>
          <p className="mt-2 max-w-md text-white/60">
            Select a chat to start communicating over your local network.
            No internet required!
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex h-full flex-1 flex-col overflow-hidden">
      {/* Chat header */}
      <div className="flex items-center justify-between border-b border-white/10 px-4 py-2">
        <div className="flex items-center">
          <Avatar
            status={contact.status}
            size="md"
            alt={contact.name}
          />
          <div className="ml-2">
            <h3 className="font-medium text-white">{contact.name}</h3>
            <p className="text-xs text-white/60">
              {contact.status === 'online'
                ? 'Online'
                : contact.status === 'away'
                ? 'Away'
                : contact.status === 'busy'
                ? 'Busy'
                : `Last seen ${contact.lastActive}`}
            </p>
          </div>
        </div>
        <div className="flex space-x-1">
          <IconButton
            icon={<Phone className="h-4 w-4" />}
            variant="cyan"
            label="Voice Call"
          />
          <IconButton
            icon={<Video className="h-4 w-4" />}
            variant="magenta"
            label="Video Call"
          />
          <IconButton
            icon={<MoreVertical className="h-4 w-4" />}
            variant="ghost"
            label="More Options"
          />
        </div>
      </div>

      {/* Messages area */}
      <div className="flex-1 overflow-y-auto p-4">
        <div className="space-y-4">
          {chatMessages.map((message) => (
            <MessageBubble
              key={message.id}
              content={message.content}
              timestamp={message.timestamp}
              isSent={message.senderId === currentUser.id}
              status={message.status}
            />
          ))}
          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Message input */}
      <Card className="m-4 overflow-hidden">
        <form onSubmit={handleSendMessage} className="flex items-center p-2">
          <IconButton
            icon={<Paperclip className="h-4 w-4" />}
            variant="ghost"
            label="Attach File"
            className="text-white/70"
          />
          <IconButton
            icon={<ImageIcon className="h-4 w-4" />}
            variant="ghost"
            label="Attach Image"
            className="text-white/70"
          />
          <input
            type="text"
            ref={inputRef}
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Type a message..."
            className="mx-2 flex-1 bg-transparent px-2 py-1 text-white placeholder:text-white/40 focus:outline-none"
          />
          <IconButton
            icon={<Mic className="h-4 w-4" />}
            variant="ghost"
            label="Voice Message"
            className="text-white/70"
          />
          <IconButton
            icon={<Send className="h-4 w-4" />}
            variant={newMessage.trim() ? 'green' : 'ghost'}
            label="Send Message"
            onClick={handleSendButtonClick}
            type="submit"
          />
        </form>
      </Card>
    </div>
  );
};
