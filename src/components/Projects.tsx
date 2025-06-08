
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Github } from 'lucide-react';

const Projects = () => {
  const [filter, setFilter] = useState('All');
  
  const projects = [
    {
      title: "MindFlow",
      description: "A mindfulness app built with Flutter and Firebase, helping users track meditation habits with beautiful animations and progress insights.",
      tags: ["Flutter", "Firebase", "Dart"],
      image: "/placeholder.svg?height=200&width=300",
      github: "#",
      demo: "#"
    },
    {
      title: "CodePoetry",
      description: "An open-source platform where developers share their most elegant code snippets as poetry. Built with React and Node.js.",
      tags: ["React", "Node.js", "TypeScript"],
      image: "/placeholder.svg?height=200&width=300",
      github: "#",
      demo: "#"
    },
    {
      title: "KotlinCraft",
      description: "A comprehensive Kotlin learning app with interactive tutorials, code challenges, and a vibrant community of learners.",
      tags: ["Kotlin", "Android", "Firebase"],
      image: "/placeholder.svg?height=200&width=300",
      github: "#",
      demo: "#"
    },
    {
      title: "DevTunes",
      description: "A Spotify-like app for developers to discover coding music, focus playlists, and productivity soundscapes.",
      tags: ["Flutter", "API", "UI/UX"],
      image: "/placeholder.svg?height=200&width=300",
      github: "#",
      demo: "#"
    }
  ];
  
  const filters = ['All', 'Flutter', 'React', 'Kotlin', 'Firebase'];
  
  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(project => project.tags.includes(filter));

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          <span className="text-gradient">Featured Projects</span>
        </h2>
        
        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((filterOption) => (
            <Button
              key={filterOption}
              variant={filter === filterOption ? "default" : "outline"}
              onClick={() => setFilter(filterOption)}
              className={`glass glass-hover ${filter === filterOption ? 'glow' : ''}`}
            >
              {filterOption}
            </Button>
          ))}
        </div>
        
        {/* Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <Card key={project.title} className="glass glass-hover glow group overflow-hidden">
              <div className="relative overflow-hidden">
                <div className="w-full h-48 bg-gradient-to-br from-primary/20 to-violet-500/20 flex items-center justify-center">
                  <div className="text-6xl font-bold text-primary/30">{project.title[0]}</div>
                </div>
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <Button size="sm" className="glass">
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                  <Button size="sm" variant="outline" className="glass">
                    Demo
                  </Button>
                </div>
              </div>
              
              <CardHeader>
                <CardTitle className="text-primary">{project.title}</CardTitle>
              </CardHeader>
              
              <CardContent>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-2 py-1 glass rounded text-xs">
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
