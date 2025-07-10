"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Clients', href: '#clients' },
  { name: 'Contact', href: '#contact' },
];

export default function Header() {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = navLinks.map(link => {
        const el = document.getElementById(link.href.substring(1));
        return el;
      });
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

  const NavLink = ({ href, children }: { href: string; children: React.ReactNode; }) => (
    <Link
      href={href}
      className={cn(
        "font-headline uppercase tracking-wider transition-colors hover:text-primary text-xs",
        activeSection === href.substring(1) ? "text-primary" : "text-foreground/80"
      )}
    >
      {children}
    </Link>
  );
  
  return (
    <header className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-background/80 backdrop-blur-sm shadow-lg" : "bg-transparent"
    )}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center h-8">
           <nav className="flex items-center justify-center space-x-8">
              {navLinks.map(link => <NavLink key={link.href} href={link.href}>{link.name}</NavLink>)}
           </nav>
        </div>
      </div>
    </header>
  );
}
