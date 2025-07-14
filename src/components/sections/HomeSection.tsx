import Image from 'next/image';

export default function HomeSection() {
  return (
    <section id="home" className="relative min-h-screen w-full flex items-center justify-center text-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        {/* Default Image (Mobile) */}
        <div className="block sm:hidden w-full h-full">
            <Image
                src="https://i.imgur.com/UTBFkD4.jpeg"
                alt="Portrait of the founder"
                fill
                style={{ objectFit: 'cover' }}
                quality={100}
                priority
                data-ai-hint="portrait person vertical"
            />
        </div>

        {/* sm */}
        <div className="hidden sm:block md:hidden w-full h-full">
            <Image
                src="https://i.imgur.com/bWZd4Nu.jpeg"
                alt="Portrait of the founder"
                fill
                style={{ objectFit: 'cover' }}
                quality={100}
                priority
                data-ai-hint="portrait person"
            />
        </div>

        {/* md */}
        <div className="hidden md:block lg:hidden w-full h-full">
            <Image
                src="https://i.imgur.com/bWZd4Nu.jpeg"
                alt="Portrait of the founder"
                fill
                style={{ objectFit: 'cover' }}
                quality={100}
                priority
                data-ai-hint="portrait person"
            />
        </div>
        
        {/* lg */}
        <div className="hidden lg:block xl:hidden w-full h-full">
            <Image
                src="https://i.imgur.com/bWZd4Nu.jpeg"
                alt="Portrait of the founder"
                fill
                style={{ objectFit: 'cover' }}
                quality={100}
                priority
                data-ai-hint="portrait person"
            />
        </div>
        
        {/* xl */}
        <div className="hidden xl:block 2xl:hidden w-full h-full">
            <Image
                src="https://i.imgur.com/8n6xRRr.jpeg"
                alt="Portrait of the founder"
                fill
                style={{ objectFit: 'cover' }}
                quality={100}
                priority
                data-ai-hint="portrait person"
            />
        </div>
        
        {/* 2xl */}
        <div className="hidden 2xl:block w-full h-full">
            <Image
                src="https://i.imgur.com/8n6xRRr.jpeg"
                alt="Portrait of the founder"
                fill
                style={{ objectFit: 'cover' }}
                quality={100}
                priority
                data-ai-hint="portrait person"
            />
        </div>
      </div>
    </section>
  );
}
