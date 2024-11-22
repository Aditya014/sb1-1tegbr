import React from 'react';
import { FileText, Bot, Globe } from 'lucide-react';

export const Dashboard = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold neon-text mb-8">Command Center</h1>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-[var(--surface)] p-6 rounded-lg neon-border">
          <Globe className="h-8 w-8 mb-4 text-[var(--primary)]" />
          <h2 className="text-xl font-bold mb-2">AI Scraper</h2>
          <p className="opacity-80 mb-4">Scrape any type of content from any type of website with this handy tool</p>
          <button className="cyber-button w-full py-2 rounded">Scrape Now</button>
        </div>

        <div className="bg-[var(--surface)] p-6 rounded-lg neon-border">
          <FileText className="h-8 w-8 mb-4 text-[var(--primary)]" />
          <h2 className="text-xl font-bold mb-2">Chat with PDF</h2>
          <p className="opacity-80 mb-4">Chat with your personal AI assistant for info. Helpful with knowledge base</p>
          <button className="cyber-button w-full py-2 rounded">Upload PDF</button>
        </div>

        <div className="bg-[var(--surface)] p-6 rounded-lg neon-border">
          <Bot className="h-8 w-8 mb-4 text-[var(--primary)]" />
          <h2 className="text-xl font-bold mb-2">AI Assistant</h2>
          <p className="opacity-80 mb-4">Chat with your personal AI assistant for instant help and guidance</p>
          <button className="cyber-button w-full py-2 rounded">Start Chat</button>
        </div>
      </div>

      <div className="mt-8 bg-[var(--surface)] p-6 rounded-lg neon-border">
        <h2 className="text-2xl font-bold mb-4">System Status</h2>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span>AI Core Status</span>
            <span className="text-green-400">● Online</span>
          </div>
          <div className="flex items-center justify-between">
            <span>Available Compute Units</span>
            <span>1000/1000</span>
          </div>
          <div className="flex items-center justify-between">
            <span>Network Latency</span>
            <span>23ms</span>
          </div>
        </div>
      </div>
    </div>
  );
};