import { Info } from 'lucide-react';
import { SectionWrapper } from '@/components/common/SectionWrapper';

export default function AboutSection() {
  return (
    <SectionWrapper id="about">
      <div className="max-w-3xl mx-auto flex flex-col items-start text-left gap-8">
        <h2 className="font-headline text-4xl md:text-5xl font-bold text-primary self-center">About Dream with Vision</h2>
        <p className="font-body text-lg md:text-xl text-foreground/80 leading-relaxed">
          Dream with Vision is a multidisciplinary creative agency rooted in storytelling, style, and culture. Based in New York City and Our agency exists at the intersection of fashion, music, art, and strategy. We bring bold ideas to life—from concept to execution—shaping unforgettable brands and experiences along the way.
        </p>
        <p className="font-body text-lg md:text-xl text-foreground/80 leading-relaxed">
          We specialize in product development, creative direction, brand identity, and artist management. Whether we're designing standout fashion collections, curating photoshoots, consulting talent, or producing immersive pop-ups, our approach is always intentional, refined, and real.
        </p>
        
        <div className="w-full mt-4">
          <h3 className="font-headline text-3xl font-bold text-primary mb-6 self-center text-center">What We Do</h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 list-none p-0">
            <li>
              <h4 className="font-headline text-xl font-semibold text-accent">Creative Direction</h4>
              <p className="font-body text-foreground/80">Visual storytelling for fashion brands, musicians, and artists—from concept to set design and styling.</p>
            </li>
            <li>
              <h4 className="font-headline text-xl font-semibold text-accent">Fashion Product Development</h4>
              <p className="font-body text-foreground/80">From sketch to sample, we guide apparel and accessory brands through every stage of development.</p>
            </li>
            <li>
              <h4 className="font-headline text-xl font-semibold text-accent">Brand Consulting & Strategy</h4>
              <p className="font-body text-foreground/80">We help shape unique brand voices and build cohesive narratives that resonate and convert.</p>
            </li>
            <li>
              <h4 className="font-headline text-xl font-semibold text-accent">Artist & Talent Management</h4>
              <p className="font-body text-foreground/80">Supporting emerging music artists with branding, bookings, image development, and more.</p>
            </li>
            <li className="md:col-span-2 md:text-center">
              <h4 className="font-headline text-xl font-semibold text-accent">Experiential Events & Activations</h4>
              <p className="font-body text-foreground/80">We produce curated experiences and pop-ups that connect creators with communities.</p>
            </li>
          </ul>
        </div>

        <div className="w-full mt-8 text-center">
            <h3 className="font-headline text-3xl font-bold text-primary mb-4">Our Philosophy</h3>
            <p className="font-body text-lg md:text-xl text-foreground/80 leading-relaxed max-w-2xl mx-auto italic">
            We believe vision without execution is just a dream. That’s why we build with intention—honoring history, pushing boundaries, and creating work that moves culture forward. Whether you're a brand, an artist, or a creator—if you're dreaming big, we’re here to help you build it.
            </p>
        </div>
      </div>
    </SectionWrapper>
  );
}
