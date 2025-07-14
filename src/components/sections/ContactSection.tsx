import { SectionWrapper } from '@/components/common/SectionWrapper';
import { SectionTitle } from '@/components/common/SectionTitle';
import Link from 'next/link';

export default function ContactSection({ year }: { year: number }) {
  return (
    <SectionWrapper id="contact" className="bg-card">
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center gap-8">
        <h2 className="font-headline text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground tracking-widest uppercase">GET IN TOUCH...</h2>
        
        <a href="mailto:dreambig@dreamwithvision.com" className="font-headline text-2xl sm:text-3xl md:text-4xl text-primary hover:underline mt-4">
            dreambig@dreamwithvision.com
        </a>
      </div>
      <footer className="mt-24 border-t border-border/20 pt-8 w-full max-w-7xl mx-auto">
        <p className="text-muted-foreground text-sm sm:text-lg md:text-xl">&copy; {year} Dream With Vision. All Rights Reserved.</p>
      </footer>
    </SectionWrapper>
  );
}
