import Link from 'next/link';
import { SectionWrapper } from '@/components/common/SectionWrapper';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

const services = [
  {
    title: 'Creative Direction',
    description: 'Visual storytelling for fashion brands, musicians, and artists—from concept to set design and styling.',
  },
  {
    title: 'Fashion Product Development',
    description: 'From sketch to sample, we guide apparel and accessory brands through every stage of development.',
  },
  {
    title: 'Brand Consulting & Strategy',
    description: 'We help shape unique brand voices and build cohesive narratives that resonate and convert.',
  },
  {
    title: 'Artist & Talent Management',
    description: 'Supporting emerging music artists with branding, bookings, image development, and more.',
  },
    {
    title: 'Experiential Events & Activations',
    description: 'We produce curated experiences and pop-ups that connect creators with communities.',
  },
];

export default function ServicesSection() {
  return (
    <SectionWrapper id="services">
      <div className="max-w-3xl mx-auto text-center mb-12 space-y-4">
        <p className="font-headline text-xl sm:text-2xl md:text-4xl font-bold text-primary uppercase">SERVICES</p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {services.map((service) => (
          <Link key={service.title} href="#contact">
            <Card className="bg-card border-foreground/20 text-center flex flex-col items-center p-8 h-full transition-all duration-300 hover:border-primary hover:shadow-primary/10 hover:shadow-lg hover:-translate-y-2">
              <CardHeader className="p-0">
                <CardTitle className="font-headline text-2xl sm:text-3xl md:text-4xl text-foreground">{service.title}</CardTitle>
              </CardHeader>
              <CardDescription className="mt-4 font-body text-base text-muted-foreground">
                {service.description}
              </CardDescription>
            </Card>
          </Link>
        ))}
      </div>
    </SectionWrapper>
  );
}
