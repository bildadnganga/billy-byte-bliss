
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Github, Linkedin, Twitter } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    console.log('Form submitted:', formData);
    setIsSubmitting(false);
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          <span className="text-gradient">Get In Touch</span>
        </h2>
        
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="glass glass-hover glow">
            <CardHeader>
              <CardTitle className="text-primary text-2xl">Send Me a Message</CardTitle>
              <p className="text-muted-foreground">
                Have a project in mind? Let's build something amazing together.
              </p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="glass glass-hover"
                    required
                  />
                </div>
                
                <div>
                  <Input
                    name="email"
                    type="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="glass glass-hover"
                    required
                  />
                </div>
                
                <div>
                  <Textarea
                    name="message"
                    placeholder="Tell me about your project..."
                    value={formData.message}
                    onChange={handleChange}
                    className="glass glass-hover min-h-[120px]"
                    required
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full glass glass-hover glow"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </CardContent>
          </Card>
          
          {/* Contact Info & Easter Egg */}
          <div className="space-y-8">
            <Card className="glass glass-hover glow">
              <CardHeader>
                <CardTitle className="text-primary text-2xl">Let's Connect</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <p className="text-muted-foreground leading-relaxed">
                    I'm always excited to collaborate on innovative projects or discuss 
                    the latest in tech. Whether you want to build the next big app or 
                    just chat about clean code philosophy, I'm here for it.
                  </p>
                  
                  <div className="flex gap-4">
                    {[
                      { icon: Github, href: "https://github.com/gichigig", label: "GitHub", handle: "@gichigig" },
                      { icon: Linkedin, href: "https://www.linkedin.com/in/bildad-mwangi-a75a4636b", label: "LinkedIn", handle: "/in/bildad-mwangi-a75a4636b" },
                      { icon: Twitter, href: "https://x.com/joyshikuy", label: "Twitter", handle: "@joyshikuy" }
                    ].map(({ icon: Icon, href, label, handle }) => (
                      <a
                        key={label}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 glass glass-hover p-3 rounded-lg glow group"
                        aria-label={label}
                      >
                        <Icon className="w-5 h-5 text-primary" />
                        <div>
                          <div className="text-sm font-medium">{label}</div>
                          <div className="text-xs text-muted-foreground">{handle}</div>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* Easter Egg */}
            <Card className="glass glass-hover glow">
              <CardHeader>
                <CardTitle className="text-primary text-2xl">Fun Fact</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  I once wrote a haiku in JavaScript comments that actually improved 
                  the code's performance. True story! 🚀
                </p>
                <div className="glass p-4 rounded-lg font-mono text-sm">
                  <div className="text-green-400">// Async calls await</div>
                  <div className="text-green-400">// Promise resolves with clean data</div>
                  <div className="text-green-400">// Users smile with joy</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
