import { SectionWrapper } from '@/components/common/SectionWrapper';

export default function ClientsSection() {
  return (
    <SectionWrapper id="clients" className="bg-card">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col items-center justify-center gap-8 text-center">
            <h2 className="font-headline text-lg font-bold text-primary uppercase">CLIENTS...</h2>
            <p className="font-body text-foreground/80 leading-relaxed italic">wouldn't you like to know</p>
        </div>
      </div>
    </SectionWrapper>
  );
}
