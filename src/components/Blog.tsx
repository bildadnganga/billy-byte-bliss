
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Blog = () => {
  const posts = [
    {
      title: "The Art of Clean Code: A Poet's Perspective",
      excerpt: "Exploring how principles of poetry can make your code more readable, maintainable, and beautiful.",
      date: "Dec 1, 2024",
      readTime: "5 min read",
      tags: ["Code Quality", "Philosophy"]
    },
    {
      title: "Flutter vs React Native: A Developer's Journey",
      excerpt: "My personal experience transitioning between frameworks and what I've learned along the way.",
      date: "Nov 28, 2024",
      readTime: "8 min read",
      tags: ["Flutter", "React Native", "Mobile"]
    },
    {
      title: "Firebase: The Invisible Backend Magic",
      excerpt: "How Firebase transformed my development workflow and why it's perfect for indie developers.",
      date: "Nov 25, 2024",
      readTime: "6 min read",
      tags: ["Firebase", "Backend", "Productivity"]
    },
    {
      title: "Debugging at 3AM: A Love Story",
      excerpt: "Tales from the trenches of late-night coding sessions and the bugs that taught me the most.",
      date: "Nov 20, 2024",
      readTime: "4 min read",
      tags: ["Debugging", "Personal", "Humor"]
    }
  ];

  return (
    <section id="blog" className="py-20 relative">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          <span className="text-gradient">Latest Thoughts</span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {posts.map((post, index) => (
            <Card key={post.title} className="glass glass-hover glow group cursor-pointer">
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <div className="text-sm text-muted-foreground">{post.date}</div>
                  <div className="text-sm text-primary">{post.readTime}</div>
                </div>
                <CardTitle className="group-hover:text-primary transition-colors duration-300">
                  {post.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {post.excerpt}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag) => (
                    <span key={tag} className="px-2 py-1 glass rounded text-xs">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <Button variant="ghost" size="sm" className="text-primary hover:text-primary/80">
                  Read More →
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center">
          <Button variant="outline" size="lg" className="glass glass-hover">
            View All Posts
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Blog;
