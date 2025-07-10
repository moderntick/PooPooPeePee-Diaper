import { SectionWrapper } from '@/components/common/SectionWrapper';

export default function AboutSection() {
  return (
    <SectionWrapper id="about">
      <div className="max-w-3xl mx-auto flex flex-col items-center text-center gap-8">
        <h2 className="font-headline text-3xl font-bold text-primary uppercase">About Dream with Vision</h2>
        
        <div className="space-y-4">
          <p className="font-body text-base text-foreground/80 leading-relaxed">
            Dream with Vision is a multidisciplinary creative agency rooted in storytelling, style, and culture. Based in New York City and Our agency exists at the intersection of fashion, music, art, and strategy. We bring bold ideas to life—from concept to execution—shaping unforgettable brands and experiences along the way.
          </p>
          <p className="font-body text-base text-foreground/80 leading-relaxed">
            We specialize in product development, creative direction, brand identity, and artist management. Whether we're designing standout fashion collections, curating photoshoots, consulting talent, or producing immersive pop-ups, our approach is always intentional, refined, and real.
          </p>
        </div>

        <div className="w-full mt-4">
          <h3 className="font-headline text-2xl font-bold text-primary mb-6 uppercase">What We Do</h3>
          <div className="space-y-4 text-center">
              <div>
                <h4 className="font-headline text-lg font-semibold text-accent">Creative Direction</h4>
                <p className="font-body text-sm text-foreground/80 max-w-md mx-auto">Visual storytelling for fashion brands, musicians, and artists—from concept to set design and styling.</p>
              </div>
              <div>
                <h4 className="font-headline text-lg font-semibold text-accent">Fashion Product Development</h4>
                <p className="font-body text-sm text-foreground/80 max-w-md mx-auto">From sketch to sample, we guide apparel and accessory brands through every stage of development.</p>
              </div>
              <div>
                <h4 className="font-headline text-lg font-semibold text-accent">Brand Consulting & Strategy</h4>
                <p className="font-body text-sm text-foreground/80 max-w-md mx-auto">We help shape unique brand voices and build cohesive narratives that resonate and convert.</p>
              </div>
               <div>
                <h4 className="font-headline text-lg font-semibold text-accent">Artist & Talent Management</h4>
                <p className="font-body text-sm text-foreground/80 max-w-md mx-auto">Supporting emerging music artists with branding, bookings, image development, and more.</p>
              </div>
              <div>
                <h4 className="font-headline text-lg font-semibold text-accent">Experiential Events & Activations</h4>
                <p className="font-body text-sm text-foreground/80 max-w-md mx-auto">We produce curated experiences and pop-ups that connect creators with communities.</p>
              </div>
          </div>
        </div>

        <div className="w-full mt-8">
            <h3 className="font-headline text-2xl font-bold text-primary mb-4 uppercase">Our Philosophy</h3>
            <p className="font-body text-base text-foreground/80 leading-relaxed max-w-2xl mx-auto italic">
            We believe vision without execution is just a dream. That’s why we build with intention—honoring history, pushing boundaries, and creating work that moves culture forward. Whether you're a brand, an artist, or a creator—if you're dreaming big, we’re here to help you build it.
            </p>
        </div>
      </div>
    </SectionWrapper>
  );
}
