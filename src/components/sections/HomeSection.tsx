import Image from 'next/image';

export default function HomeSection() {
  return (
    <section id="home" className="relative min-h-screen w-full flex items-center justify-center text-center overflow-hidden">
      <div className="absolute inset-0 z-0">
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
    </section>
  );
}
