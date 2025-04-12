import React, { useState } from 'react';
import { Sidebar } from './components/layout/Sidebar';
import { ChatArea } from './components/layout/ChatArea';
import { TopNavigation } from './components/layout/TopNavigation';

function App() {
  const [selectedChatId, setSelectedChatId] = useState<string | null>(null);
  const [activeView, setActiveView] = useState<'chat' | 'voice' | 'video' | 'network'>('chat');
  const [sidebarOpen, setSidebarOpen] = useState(true);

  // Toggle sidebar for mobile view
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="flex h-screen w-screen flex-col overflow-hidden">
      {/* Top Navigation */}
      <TopNavigation
        activeView={activeView}
        onChangeView={setActiveView}
        onMenuToggle={toggleSidebar}
      />

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <div className={`${sidebarOpen ? 'block' : 'hidden'} lg:block`}>
          <Sidebar
            onSelectChat={setSelectedChatId}
            selectedChatId={selectedChatId}
          />
        </div>

        {/* Main content */}
        <div className="flex-1">
          {activeView === 'chat' ? (
            <ChatArea chatId={selectedChatId} />
          ) : activeView === 'voice' ? (
            <div className="flex h-full items-center justify-center">
              <div className="text-center">
                <div className="mx-auto mb-4 rounded-full bg-neon-cyan/10 p-8">
                  <div className="rounded-full border-4 border-neon-cyan p-8 shadow-neon-cyan">
                    <div className="text-neon-cyan">
                      <svg className="h-16 w-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <h2 className="glow-text-cyan text-2xl font-bold">Voice Call</h2>
                <p className="mt-2 max-w-md text-white/60">
                  Voice calling feature will be available soon.
                  No internet required - all calls are routed through your local network!
                </p>
              </div>
            </div>
          ) : activeView === 'video' ? (
            <div className="flex h-full items-center justify-center">
              <div className="text-center">
                <div className="mx-auto mb-4 rounded-full bg-neon-magenta/10 p-8">
                  <div className="rounded-full border-4 border-neon-magenta p-8 shadow-neon-magenta">
                    <div className="text-neon-magenta">
                      <svg className="h-16 w-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <h2 className="glow-text-magenta text-2xl font-bold">Video Call</h2>
                <p className="mt-2 max-w-md text-white/60">
                  Video calling feature will be available soon.
                  Enjoy high-quality video calls on your local network!
                </p>
              </div>
            </div>
          ) : (
            <div className="flex h-full items-center justify-center">
              <div className="text-center">
                <div className="mx-auto mb-4 rounded-full bg-neon-green/10 p-8">
                  <div className="rounded-full border-4 border-neon-green p-8 shadow-neon-green">
                    <div className="text-neon-green">
                      <svg className="h-16 w-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <h2 className="glow-text-green text-2xl font-bold">Network Stats</h2>
                <p className="mt-2 max-w-md text-white/60">
                  Network monitoring features will be available soon.
                  Track performance and connectivity of your local network.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
