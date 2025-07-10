import Image from 'next/image';

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
    </section>
  );
}
