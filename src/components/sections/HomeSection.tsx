import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';
import Link from 'next/link';

export default function HomeSection() {
  return (
    <section id="home" className="relative min-h-screen w-full flex items-center justify-center text-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://placehold.co/1920x1080.png"
          alt="Abstract background of soft light and textures"
          layout="fill"
          objectFit="cover"
          quality={80}
          priority
          className="filter brightness-[.4]"
          data-ai-hint="abstract texture"
        />
      </div>
      <div className="relative z-10 flex flex-col items-center text-white px-4">
        <h1 className="font-headline text-5xl md:text-7xl lg:text-8xl font-bold text-primary mb-4">
          Dream With Vision
        </h1>
        <p className="font-body text-lg md:text-xl lg:text-2xl max-w-3xl mb-8 text-foreground/90">
          Crafting digital experiences that inspire, engage, and convert. We are a creative agency for visionary brands.
        </p>
        <Link href="#about" passHref>
          <Button variant="outline" size="lg" className="bg-transparent border-primary text-primary hover:bg-primary hover:text-primary-foreground animate-bounce mt-4">
            Explore More
            <ArrowDown className="ml-2 h-5 w-5" />
          </Button>
        </Link>
      </div>
    </section>
  );
}
