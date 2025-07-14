"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Dream With Vision', href: '#home', isLogo: true },
  { name: 'Clients', href: '#clients' },
  { name: 'Contact', href: '#contact' },
];

export default function Header() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map(link => {
        const el = document.getElementById(link.href.substring(1));
        return el;
      });
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      let currentSection = '';
      for (const section of sections) {
        if (section && scrollPosition >= section.offsetTop && scrollPosition < section.offsetTop + section.offsetHeight) {
          if (activeSection !== section.id) {
            currentSection = section.id;
          }
          break;
        }
      }
      if (currentSection && activeSection !== currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); 
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeSection]);

  const NavLink = ({ href, children, isLogo }: { href: string; children: React.ReactNode; isLogo?: boolean }) => (
    <Link
      href={href}
      className={cn(
        "font-headline uppercase tracking-wider transition-colors hover:text-primary text-[10px]",
        activeSection === href.substring(1) ? "text-primary" : "text-foreground/80",
        isLogo && "font-bold whitespace-nowrap"
      )}
    >
      {children}
    </Link>
  );
  
  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-background/80 backdrop-blur-sm shadow-lg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center h-8">
           <nav className="flex items-center justify-center space-x-4 sm:space-x-8">
              {navLinks.map(link => <NavLink key={link.href} href={link.href} isLogo={link.isLogo}>{link.name}</NavLink>)}
           </nav>
        </div>
      </div>
    </header>
  );
}
