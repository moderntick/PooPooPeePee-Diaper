import { SectionWrapper } from '@/components/common/SectionWrapper';

export default function AboutSection() {
  return (
    <SectionWrapper id="about">
      <div className="max-w-3xl mx-auto flex flex-col items-center text-center gap-8">
        <h2 className="font-headline text-lg font-bold text-primary uppercase">hello, nice to meet you</h2>
        
        <div className="space-y-2">
          <p className="font-body text-xs text-foreground/80 leading-relaxed">
            Dream with Vision is a multidisciplinary creative agency rooted in storytelling, style, and culture. Based in New York City and Our agency exists at the intersection of fashion, music, art, and strategy. We bring bold ideas to life—from concept to execution—shaping unforgettable brands and experiences along the way.
          </p>
          <p className="font-body text-xs text-foreground/80 leading-relaxed">
            We specialize in product development, creative direction, brand identity, and artist management. Whether we're designing standout fashion collections, curating photoshoots, consulting talent, or producing immersive pop-ups, our approach is always intentional, refined, and real.
          </p>
        </div>

        <div className="w-full mt-4">
            <p className="font-body text-xs text-foreground/80 leading-relaxed max-w-2xl mx-auto italic">
            We believe vision without execution is just a dream. That’s why we build with intention—honoring history, pushing boundaries, and creating work that moves culture forward. Whether you're a brand, an artist, or a creator—if you're dreaming big, we’re here to help you build it.
            </p>
        </div>
      </div>
    </SectionWrapper>
  );
}
