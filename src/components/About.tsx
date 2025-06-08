
import React from 'react';
import { Card } from '@/components/ui/card';

const About = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          <span className="text-gradient">About Me</span>
        </h2>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <Card className="glass glass-hover p-8 glow">
              <h3 className="text-2xl font-bold mb-4 text-primary">The Developer</h3>
              <p className="text-muted-foreground leading-relaxed">
                I'm Billy, a passionate software engineer who believes code is poetry in motion. 
                With over 5 years of crafting digital experiences, I specialize in Flutter, 
                Firebase, and Kotlin development. My journey began with a simple "Hello World" 
                and evolved into building applications that impact thousands of users.
              </p>
            </Card>
            
            <Card className="glass glass-hover p-8 glow">
              <h3 className="text-2xl font-bold mb-4 text-primary">The Human</h3>
              <p className="text-muted-foreground leading-relaxed">
                When I'm not debugging at 3 AM (which happens more often than I'd like to admit), 
                you'll find me exploring new technologies, writing tech poetry, or contributing to 
                open-source projects. I believe in clean code, meaningful user experiences, and 
                the power of technology to solve real-world problems.
              </p>
            </Card>
          </div>
          
          <div className="relative">
            <div className="glass p-8 rounded-2xl glow">
              <div className="space-y-6">
                <div>
                  <h4 className="text-xl font-semibold mb-3 text-primary">Core Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {['Flutter', 'Kotlin', 'Firebase', 'React', 'TypeScript', 'Node.js'].map((tech) => (
                      <span key={tech} className="px-3 py-1 glass rounded-full text-sm glow">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="text-xl font-semibold mb-3 text-primary">Philosophy</h4>
                  <blockquote className="italic text-muted-foreground border-l-2 border-primary pl-4">
                    "Code should be like poetry - elegant, meaningful, and memorable. 
                    Every function tells a story, every algorithm solves a puzzle."
                  </blockquote>
                </div>
                
                <div>
                  <h4 className="text-xl font-semibold mb-3 text-primary">Current Focus</h4>
                  <p className="text-muted-foreground">
                    Exploring AI integration in mobile apps, contributing to Flutter ecosystem, 
                    and mentoring junior developers in the art of clean architecture.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
