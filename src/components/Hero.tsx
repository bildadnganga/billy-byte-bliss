
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown, Github, Linkedin, Twitter } from 'lucide-react';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const fullText = "Building logic with soul, one line at a time.";
  
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setDisplayText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);
    
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-violet-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        {/* Main heading */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          <span className="text-gradient">Billy</span>
          <br />
          <span className="text-foreground">Software Engineer</span>
        </h1>
        
        {/* Typewriter tagline */}
        <div className="text-xl md:text-2xl text-muted-foreground mb-8 h-16 flex items-center justify-center">
          <span className="typewriter">{displayText}</span>
        </div>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button size="lg" className="glass glass-hover glow text-lg px-8">
            View My Work
          </Button>
          <Button variant="outline" size="lg" className="glass glass-hover text-lg px-8">
            Get In Touch
          </Button>
        </div>
        
        {/* Social Links */}
        <div className="flex justify-center space-x-6 mb-12">
          {[
            { icon: Github, href: "https://github.com/gichigig", label: "GitHub" },
            { icon: Linkedin, href: "https://www.linkedin.com/in/bildad-mwangi-a75a4636b", label: "LinkedIn" },
            { icon: Twitter, href: "https://x.com/joyshikuy", label: "Twitter" }
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              className="w-12 h-12 glass glass-hover rounded-full flex items-center justify-center glow"
              aria-label={label}
            >
              <Icon className="w-5 h-5" />
            </a>
          ))}
        </div>
        
        {/* Scroll indicator */}
        <div className="animate-bounce">
          <ArrowDown className="w-6 h-6 mx-auto text-primary" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
