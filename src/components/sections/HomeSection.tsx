import Image from 'next/image';

export default function HomeSection() {
  return (
    <section id="home" className="relative min-h-screen w-full flex items-center justify-center text-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        {/* Desktop Image */}
        <div className="hidden md:block w-full h-full">
          <Image
            src="https://i.imgur.com/PKnSNs7.jpeg"
            alt="Portrait of the founder"
            fill
            style={{ objectFit: 'cover' }}
            quality={80}
            priority
            data-ai-hint="portrait person"
          />
        </div>
        {/* Mobile Image */}
        <div className="block md:hidden w-full h-full">
          <Image
            src="https://placehold.co/768x1024.png"
            alt="Portrait of the founder"
            fill
            style={{ objectFit: 'cover' }}
            quality={80}
            priority
            data-ai-hint="portrait person vertical"
          />
        </div>
      </div>
    </section>
  );
}
