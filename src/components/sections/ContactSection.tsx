import { SectionWrapper } from '@/components/common/SectionWrapper';
import { SectionTitle } from '@/components/common/SectionTitle';
import Link from 'next/link';

export default function ContactSection({ year }: { year: number }) {
  return (
    <SectionWrapper id="contact" className="bg-card">
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center gap-8">
        <h2 className="font-headline text-5xl font-bold text-foreground tracking-widest uppercase">GET IN TOUCH...</h2>
        
        <div className="space-y-4 font-code text-sm text-foreground/80 leading-relaxed max-w-2xl">
            <p>
                Thanks for checking out our website. Please get in touch via the email below & we aim to respond swiftly, but first of all, be sure to check we cover what you need in our <Link href="#services" className="font-bold text-primary hover:underline">services section</Link>
            </p>
        </div>

        <a href="mailto:dreambig@dreamwithvision.com" className="font-headline text-2xl text-primary hover:underline mt-4">
            dreambig@dreamwithvision.com
        </a>
      </div>
      <footer className="mt-24 border-t border-border/20 pt-8 w-full max-w-7xl mx-auto">
        <p className="text-muted-foreground">&copy; {year} Dream With Vision. All Rights Reserved.</p>
      </footer>
    </SectionWrapper>
  );
}
