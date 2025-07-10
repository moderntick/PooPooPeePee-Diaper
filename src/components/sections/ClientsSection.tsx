import { SectionWrapper } from '@/components/common/SectionWrapper';
import { SectionTitle } from '@/components/common/SectionTitle';

const clients = [
  { name: 'Innovate Co' },
  { name: 'Future Tech' },
  { name: 'Quantum Leap' },
  { name: 'Eco World' },
  { name: 'Apex Solutions' },
  { name: 'Stellar Goods' },
  { name: 'Momentum' },
  { name: 'Visionary Labs' },
];

export default function ClientsSection() {
  return (
    <SectionWrapper id="clients" className="bg-card">
      <SectionTitle>Trusted by Visionaries</SectionTitle>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-5xl mx-auto">
        {clients.map((client) => (
          <div key={client.name} className="flex items-center justify-center p-8 bg-background rounded-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary/10">
            <span className="font-headline text-xl text-muted-foreground">{client.name}</span>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
