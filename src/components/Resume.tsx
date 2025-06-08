
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
      title: "Senior Mobile Developer",
      company: "TechFlow Solutions",
      period: "2022 - Present",
      description: "Leading mobile app development using Flutter and Kotlin. Built 5+ production apps with 100k+ downloads."
    },
    {
      title: "Full Stack Developer",
      company: "Innovation Labs",
      period: "2020 - 2022",
      description: "Developed web and mobile applications using React, Node.js, and Firebase. Mentored junior developers."
    },
    {
      title: "Mobile Developer",
      company: "StartupXYZ",
      period: "2019 - 2020",
      description: "Created the company's first mobile app using Flutter. Implemented real-time features with Firebase."
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
        
        <div className="text-center mt-12">
          <Button size="lg" className="glass glass-hover glow">
            Download Full Resume
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Resume;
