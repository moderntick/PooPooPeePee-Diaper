import { SectionWrapper } from '@/components/common/SectionWrapper';
import Image from 'next/image';

export default function ClientsSection() {
  return (
    <SectionWrapper id="clients" className="bg-card">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col items-center justify-center gap-8 text-center">
            <h2 className="font-headline text-lg font-bold text-primary uppercase">CLIENTS...</h2>
            <p className="font-body text-foreground/80 leading-relaxed">We work with a wide range of clients</p>
            <div className="flex items-center justify-center p-8 bg-background rounded-lg mt-4">
                <Image
                  src="https://i.imgur.com/c0pvHle.jpeg"
                  alt="Client logo"
                  width={200}
                  height={100}
                  style={{ objectFit: 'contain' }}
                  data-ai-hint="logo company"
                />
            </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
