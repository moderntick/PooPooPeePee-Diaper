"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, Feather } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Clients', href: '#clients' },
  { name: 'Services', href: '#services' },
  { name: 'Contact', href: '#contact' },
];

export default function Header() {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = navLinks.map(link => document.getElementById(link.href.substring(1)));
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (const section of sections) {
        if (section && scrollPosition >= section.offsetTop && scrollPosition < section.offsetTop + section.offsetHeight) {
          if (activeSection !== section.id) {
            setActiveSection(section.id);
          }
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); 
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeSection]);

  const NavLink = ({ href, children, isMobile = false }: { href: string; children: React.ReactNode; isMobile?: boolean }) => (
    <Link
      href={href}
      onClick={() => isMobile && setIsMobileMenuOpen(false)}
      className={cn(
        "font-headline uppercase tracking-wider transition-colors hover:text-primary",
        activeSection === href.substring(1) ? "text-primary" : "text-foreground/80",
        isMobile ? "py-4 text-2xl" : "text-xs"
      )}
    >
      {children}
    </Link>
  );

  const LogoLink = () => (
    <Link href="#home" className="flex items-center gap-2 font-headline text-xl font-bold text-foreground mx-8 flex-shrink-0">
        <Feather className="w-6 h-6 text-primary" />
        Visionary Canvas
    </Link>
  );
  
  const DesktopNav = () => {
      const middleIndex = Math.ceil(navLinks.length / 2);
      const leftLinks = navLinks.slice(0, 2);
      const rightLinks = navLinks.slice(2);
      
      return (
          <nav className="hidden md:flex items-center justify-center flex-grow">
            <div className="flex items-center justify-end space-x-8 w-1/3">
              {leftLinks.map(link => <NavLink key={link.href} href={link.href}>{link.name}</NavLink>)}
            </div>
            <div className="flex-shrink-0 px-8">
              <LogoLink />
            </div>
            <div className="flex items-center justify-start space-x-8 w-1/3">
              {rightLinks.map(link => <NavLink key={link.href} href={link.href}>{link.name}</NavLink>)}
            </div>
          </nav>
      )
  };
  
  const MobileNav = () => (
    <div className="md:hidden flex-1 flex justify-between items-center">
        <LogoLink />
        <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                    <Menu className="h-6 w-6" />
                    <span className="sr-only">Open menu</span>
                </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full bg-background/95 backdrop-blur-sm border-l-0">
                <div className="flex flex-col items-center justify-center h-full">
                    <nav className="flex flex-col items-center space-y-8">
                        {navLinks.map(link => (
                            <NavLink key={link.href} href={link.href} isMobile>
                                {link.name}
                            </NavLink>
                        ))}
                    </nav>
                </div>
            </SheetContent>
        </Sheet>
    </div>
  );

  return (
    <header className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-background/80 backdrop-blur-sm shadow-lg" : "bg-transparent"
    )}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center h-20">
          <DesktopNav />
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
