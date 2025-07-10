import { SectionWrapper } from '@/components/common/SectionWrapper';
import Image from 'next/image';

export default function ClientsSection() {
  return (
    <SectionWrapper id="clients" className="bg-card">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center justify-center p-8 bg-background rounded-lg">
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
    </SectionWrapper>
  );
}
