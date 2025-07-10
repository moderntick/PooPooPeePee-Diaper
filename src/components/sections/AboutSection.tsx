import { Info } from 'lucide-react';
import { SectionWrapper } from '@/components/common/SectionWrapper';
import { SectionTitle } from '@/components/common/SectionTitle';

export default function AboutSection() {
  return (
    <SectionWrapper id="about">
      <SectionTitle>About Us</SectionTitle>
      <div className="max-w-3xl mx-auto flex flex-col items-center gap-8">
        <Info className="w-16 h-16 text-accent" />
        <p className="font-body text-lg md:text-xl text-foreground/80 leading-relaxed">
          We are a collective of dreamers and innovators dedicated to pushing the boundaries of digital creativity. Our philosophy is built on a foundation of collaboration, strategic thinking, and a relentless pursuit of excellence. We believe that great design is not just about aesthetics, but about creating meaningful connections and solving complex problems.
        </p>
        <p className="font-body text-lg md:text-xl text-foreground/80 leading-relaxed">
          Founded by Michael Write, Dream With Vision partners with ambitious brands to create iconic identities, build exceptional digital products, and launch campaigns that capture hearts and minds. Our passion is to transform your vision into a reality that resonates and endures.
        </p>
      </div>
    </SectionWrapper>
  );
}
