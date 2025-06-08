
import React from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Blog from '@/components/Blog';
import Resume from '@/components/Resume';
import Contact from '@/components/Contact';
import Terminal from '@/components/Terminal';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Projects />
      <Blog />
      <Resume />
      <Contact />
      <Terminal />
    </div>
  );
};

export default Index;
