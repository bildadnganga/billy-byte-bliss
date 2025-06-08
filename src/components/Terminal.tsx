
import React, { useState, useEffect, useRef } from 'react';
import { Card } from '@/components/ui/card';

const Terminal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<string[]>([
    'Welcome to Billy\'s terminal! Type "help" for available commands.',
    ''
  ]);
  const inputRef = useRef<HTMLInputElement>(null);
  
  const commands = {
    help: () => 'Available commands: about, projects, skills, contact, clear, resume, fun',
    about: () => 'Passionate software engineer specializing in Flutter, Kotlin, and Firebase development.',
    projects: () => 'Featured projects: MindFlow, CodePoetry, KotlinCraft, DevTunes. Check them out above!',
    skills: () => 'Core skills: Flutter (95%), Kotlin (90%), Firebase (88%), React (85%), TypeScript (82%)',
    contact: () => 'Email: billy@example.com | GitHub: @billy-dev | Let\'s build something amazing!',
    resume: () => 'Downloading resume... Just kidding! Scroll up to the resume section.',
    clear: () => { setHistory([]); return ''; },
    fun: () => 'console.log("Building logic with soul, one line at a time 💻✨");',
    date: () => new Date().toLocaleString(),
    whoami: () => 'billy@digital-mixtape:~$ You are in Billy\'s portfolio terminal',
  };

  const handleCommand = (cmd: string) => {
    const command = cmd.toLowerCase().trim();
    const output = commands[command as keyof typeof commands];
    
    if (output) {
      const result = output();
      if (result) {
        setHistory(prev => [...prev, `$ ${cmd}`, result, '']);
      }
    } else {
      setHistory(prev => [...prev, `$ ${cmd}`, `Command '${cmd}' not found. Type 'help' for available commands.`, '']);
    }
    
    setInput('');
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleCommand(input);
    }
  };

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="w-12 h-12 glass glass-hover rounded-full flex items-center justify-center glow animate-pulse"
          title="Open Terminal"
        >
          <span className="terminal-text text-lg">$</span>
        </button>
      )}
      
      {isOpen && (
        <Card className="w-96 h-80 glass glow flex flex-col">
          <div className="flex items-center justify-between p-3 border-b border-white/10">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
            <span className="terminal-text text-sm">billy@portfolio:~$</span>
            <button
              onClick={() => setIsOpen(false)}
              className="text-muted-foreground hover:text-foreground"
            >
              ×
            </button>
          </div>
          
          <div className="flex-1 p-3 overflow-y-auto font-mono text-sm">
            {history.map((line, index) => (
              <div key={index} className={line.startsWith('$') ? 'terminal-text' : 'text-foreground'}>
                {line}
              </div>
            ))}
            
            <div className="flex items-center terminal-text">
              <span>$ </span>
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                className="flex-1 bg-transparent border-none outline-none ml-1"
                placeholder="Type a command..."
              />
            </div>
          </div>
        </Card>
      )}
    </div>
  );
};

export default Terminal;
