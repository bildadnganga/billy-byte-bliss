
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';

const Resume = () => {
  const skills = [
    { name: "Flutter", level: 95 },
    { name: "Kotlin", level: 90 },
    { name: "Firebase", level: 88 },
    { name: "React", level: 85 },
    { name: "TypeScript", level: 82 },
    { name: "Node.js", level: 78 }
  ];
  
  const experience = [
    {
      title: "Software Engineer",
      company: "TechFlow Solutions",
      period: "2022 - Present",
      description: "Building and maintaining mobile and web apps using Flutter, Kotlin, React, and Firebase. Shipped key features end-to-end and collaborated across teams."
    },
    {
      title: "Software Engineering Intern",
      company: "Innovation Labs",
      period: "2021 - 2022",
      description: "Completed a year-long internship focused on Flutter and Firebase. Implemented real-time features and contributed to code quality improvements."
    }
  ];

  return (
    <section id="resume" className="py-20 relative">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          <span className="text-gradient">Resume</span>
        </h2>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Skills */}
          <Card className="glass glass-hover glow">
            <CardHeader>
              <CardTitle className="text-primary text-2xl">Technical Skills</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {skills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-2">
                    <span className="text-foreground font-medium">{skill.name}</span>
                    <span className="text-muted-foreground">{skill.level}%</span>
                  </div>
                  <Progress value={skill.level} className="h-2" />
                </div>
              ))}
            </CardContent>
          </Card>
          
          {/* Experience */}
          <Card className="glass glass-hover glow">
            <CardHeader>
              <CardTitle className="text-primary text-2xl">Experience</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {experience.map((exp, index) => (
                <div key={exp.title} className="relative">
                  {index !== experience.length - 1 && (
                    <div className="absolute left-6 top-8 bottom-0 w-px bg-primary/30"></div>
                  )}
                  <div className="flex gap-4">
                    <div className="w-3 h-3 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-foreground">{exp.title}</h4>
                      <p className="text-primary text-sm font-medium">{exp.company}</p>
                      <p className="text-muted-foreground text-sm mb-2">{exp.period}</p>
                      <p className="text-muted-foreground text-sm leading-relaxed">{exp.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
        
        <div className="text-center mt-12 flex items-center justify-center gap-4">
          <Button size="lg" className="glass glass-hover glow" asChild>
            <a href="/resume?download=1" target="_blank" rel="noopener noreferrer">Download Resume (PDF)</a>
          </Button>
          <Button size="lg" variant="outline" className="glass glass-hover" asChild>
            <a href="/cv?download=1" target="_blank" rel="noopener noreferrer">Download CV (PDF)</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Resume;
