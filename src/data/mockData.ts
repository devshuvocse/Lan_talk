export type User = {
  id: string;
  name: string;
  avatar?: string;
  status: 'online' | 'offline' | 'away' | 'busy';
  ipAddress: string;
  lastActive: string;
};

export type Message = {
  id: string;
  content: string;
  senderId: string;
  receiverId: string;
  timestamp: string;
  status: 'sending' | 'sent' | 'delivered' | 'read' | 'error';
};

export type Chat = {
  id: string;
  participants: string[];
  lastMessage?: Message;
  unreadCount: number;
};

export const currentUser: User = {
  id: 'current-user',
  name: 'Ansel Wright',
  avatar: undefined,
  status: 'online',
  ipAddress: '192.168.1.5',
  lastActive: 'now',
};

export const contacts: User[] = [
  {
    id: 'user-1',
    name: 'Morgan Zhu',
    avatar: undefined,
    status: 'online',
    ipAddress: '192.168.1.10',
    lastActive: 'now',
  },
  {
    id: 'user-2',
    name: 'Sasha Patel',
    avatar: undefined,
    status: 'away',
    ipAddress: '192.168.1.15',
    lastActive: '5m ago',
  },
  {
    id: 'user-3',
    name: 'Jordan Chen',
    avatar: undefined,
    status: 'offline',
    ipAddress: '192.168.1.20',
    lastActive: '2h ago',
  },
  {
    id: 'user-4',
    name: 'Alex Thompson',
    avatar: undefined,
    status: 'busy',
    ipAddress: '192.168.1.25',
    lastActive: '10m ago',
  },
  {
    id: 'user-5',
    name: 'Riley Brooks',
    avatar: undefined,
    status: 'online',
    ipAddress: '192.168.1.30',
    lastActive: 'now',
  },
];

export const chats: Chat[] = [
  {
    id: 'chat-1',
    participants: ['current-user', 'user-1'],
    unreadCount: 0,
  },
  {
    id: 'chat-2',
    participants: ['current-user', 'user-2'],
    unreadCount: 3,
  },
  {
    id: 'chat-3',
    participants: ['current-user', 'user-3'],
    unreadCount: 0,
  },
  {
    id: 'chat-4',
    participants: ['current-user', 'user-4'],
    unreadCount: 1,
  },
  {
    id: 'chat-5',
    participants: ['current-user', 'user-5'],
    unreadCount: 0,
  },
];

export const messages: Record<string, Message[]> = {
  'chat-1': [
    {
      id: 'msg-1-1',
      content: 'Hey, I need help with the server configuration.',
      senderId: 'user-1',
      receiverId: 'current-user',
      timestamp: '10:30 AM',
      status: 'read',
    },
    {
      id: 'msg-1-2',
      content: 'Sure, what seems to be the issue?',
      senderId: 'current-user',
      receiverId: 'user-1',
      timestamp: '10:32 AM',
      status: 'read',
    },
    {
      id: 'msg-1-3',
      content: 'I can\'t access the shared drive on 192.168.1.100',
      senderId: 'user-1',
      receiverId: 'current-user',
      timestamp: '10:35 AM',
      status: 'read',
    },
    {
      id: 'msg-1-4',
      content: 'Let me check the permissions. One moment...',
      senderId: 'current-user',
      receiverId: 'user-1',
      timestamp: '10:36 AM',
      status: 'read',
    },
    {
      id: 'msg-1-5',
      content: 'I found the issue. The firewall is blocking SMB access.',
      senderId: 'current-user',
      receiverId: 'user-1',
      timestamp: '10:40 AM',
      status: 'delivered',
    },
  ],
  'chat-2': [
    {
      id: 'msg-2-1',
      content: 'Are you coming to the team meeting?',
      senderId: 'user-2',
      receiverId: 'current-user',
      timestamp: 'Yesterday',
      status: 'read',
    },
    {
      id: 'msg-2-2',
      content: 'Yes, I\'ll be there in 5 minutes.',
      senderId: 'current-user',
      receiverId: 'user-2',
      timestamp: 'Yesterday',
      status: 'read',
    },
    {
      id: 'msg-2-3',
      content: 'Can you bring your laptop? We need to present the data.',
      senderId: 'user-2',
      receiverId: 'current-user',
      timestamp: 'Yesterday',
      status: 'read',
    },
    {
      id: 'msg-2-4',
      content: 'Already have it with me.',
      senderId: 'current-user',
      receiverId: 'user-2',
      timestamp: 'Yesterday',
      status: 'read',
    },
    {
      id: 'msg-2-5',
      content: 'Great! See you soon.',
      senderId: 'user-2',
      receiverId: 'current-user',
      timestamp: 'Yesterday',
      status: 'read',
    },
    {
      id: 'msg-2-6',
      content: 'Did you get the updated spreadsheet I sent?',
      senderId: 'user-2',
      receiverId: 'current-user',
      timestamp: '9:15 AM',
      status: 'delivered',
    },
    {
      id: 'msg-2-7',
      content: 'And the presentation slides?',
      senderId: 'user-2',
      receiverId: 'current-user',
      timestamp: '9:20 AM',
      status: 'delivered',
    },
    {
      id: 'msg-2-8',
      content: 'We need to finalize them before 2PM.',
      senderId: 'user-2',
      receiverId: 'current-user',
      timestamp: '9:30 AM',
      status: 'delivered',
    },
  ],
  'chat-4': [
    {
      id: 'msg-4-1',
      content: 'When is the next network maintenance scheduled?',
      senderId: 'user-4',
      receiverId: 'current-user',
      timestamp: '1h ago',
      status: 'read',
    },
    {
      id: 'msg-4-2',
      content: 'This Saturday at 8PM. Should last about 2 hours.',
      senderId: 'current-user',
      receiverId: 'user-4',
      timestamp: '1h ago',
      status: 'read',
    },
    {
      id: 'msg-4-3',
      content: 'Can we reschedule it to Sunday? I need to transfer some large files on Saturday.',
      senderId: 'user-4',
      receiverId: 'current-user',
      timestamp: '30m ago',
      status: 'delivered',
    },
  ],
};

// Set last messages for chats
for (const chat of chats) {
  const chatMessages = messages[chat.id];
  if (chatMessages && chatMessages.length > 0) {
    chat.lastMessage = chatMessages[chatMessages.length - 1];
  }
}
