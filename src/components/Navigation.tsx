
import React, { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import { useActiveSection } from '@/hooks/use-active-section.ts';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = ['About', 'Projects', 'Blog', 'Resume', 'Contact'];
  const sectionIds = navItems.map((i) => i.toLowerCase());
  const activeId = useActiveSection(sectionIds);

  // Desktop active-link underline indicator
  const desktopNavRef = useRef<HTMLDivElement | null>(null);
  const [indicatorLeft, setIndicatorLeft] = useState(0);
  const [indicatorWidth, setIndicatorWidth] = useState(0);

  useEffect(() => {
    const updateIndicator = () => {
      const container = desktopNavRef.current;
      if (!container) return;
      const activeLink = container.querySelector<HTMLAnchorElement>(`a[data-id="${activeId}"]`);
      if (activeLink) {
        const containerRect = container.getBoundingClientRect();
        const linkRect = activeLink.getBoundingClientRect();
        setIndicatorLeft(linkRect.left - containerRect.left);
        setIndicatorWidth(linkRect.width);
      } else {
        setIndicatorWidth(0);
      }
    };

    updateIndicator();
    window.addEventListener('resize', updateIndicator);
    return () => window.removeEventListener('resize', updateIndicator);
  }, [activeId]);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'glass glow py-4' : 'py-6'
    }`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        <div className="text-2xl font-bold text-gradient">Billy</div>
        
        <div ref={desktopNavRef} className="hidden md:flex space-x-8 relative items-center pb-2">
          {navItems.map((item) => {
            const id = item.toLowerCase();
            const isActive = activeId === id;
            return (
              <a
                key={item}
                href={`#${id}`}
                data-id={id}
                className={`${isActive ? 'text-primary font-semibold' : 'text-foreground hover:text-primary'} transition-colors duration-300 py-1`}
              >
                {item}
              </a>
            );
          })}
          {/* Active link underline indicator (desktop only) */}
          <span
            className="pointer-events-none absolute bottom-0 h-0.5 bg-primary rounded-full transition-all duration-300"
            style={{ left: indicatorLeft, width: indicatorWidth }}
          />
        </div>
        
        {/* Desktop download buttons */}
        <div className="hidden md:flex items-center gap-2">
          <Button variant="outline" size="sm" className="glass glass-hover" asChild>
            <a href="/resume?download=1" target="_blank" rel="noopener noreferrer">
              Download Resume
            </a>
          </Button>
          <Button variant="outline" size="sm" className="glass glass-hover" asChild>
            <a href="/cv?download=1" target="_blank" rel="noopener noreferrer">
              Download CV
            </a>
          </Button>
        </div>

        {/* Mobile menu */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="glass glass-hover">
                <Menu className="w-5 h-5" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80">
              <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
              </SheetHeader>
              <nav className="mt-6 flex flex-col gap-4">
                {navItems.map((item) => {
                  const id = item.toLowerCase();
                  const isActive = activeId === id;
                  return (
                    <SheetClose asChild key={item}>
                      <a
                        href={`#${id}`}
                        className={`${isActive ? 'text-primary font-semibold' : 'text-foreground hover:text-primary'} transition-colors`}
                      >
                        {item}
                      </a>
                    </SheetClose>
                  );
                })}
                <div className="h-px bg-border my-2" />
                <SheetClose asChild>
                  <Button variant="outline" className="justify-start" asChild>
                    <a href="/resume?download=1" target="_blank" rel="noopener noreferrer">Download Resume</a>
                  </Button>
                </SheetClose>
                <SheetClose asChild>
                  <Button variant="outline" className="justify-start" asChild>
                    <a href="/cv?download=1" target="_blank" rel="noopener noreferrer">Download CV</a>
                  </Button>
                </SheetClose>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
