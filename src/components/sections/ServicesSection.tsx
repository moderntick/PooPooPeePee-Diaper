import { SectionWrapper } from '@/components/common/SectionWrapper';
import { SectionTitle } from '@/components/common/SectionTitle';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Code, Palette, Megaphone, PenTool } from 'lucide-react';

const services = [
  {
    icon: <Code className="w-10 h-10 mb-4 text-primary" />,
    title: 'Web Design',
    description: 'We build beautiful, responsive, and high-performing websites that captivate your audience and drive results.',
  },
  {
    icon: <Palette className="w-10 h-10 mb-4 text-primary" />,
    title: 'Branding',
    description: 'From logo design to complete brand guidelines, we craft powerful visual identities that tell your unique story.',
  },
  {
    icon: <Megaphone className="w-10 h-10 mb-4 text-primary" />,
    title: 'Digital Strategy',
    description: 'Our data-driven strategies ensure your message reaches the right people at the right time, maximizing your impact.',
  },
  {
    icon: <PenTool className="w-10 h-10 mb-4 text-primary" />,
    title: 'Content Creation',
    description: 'Engaging copy, stunning visuals, and compelling videos. We create content that resonates with your audience.',
  },
];

export default function ServicesSection() {
  return (
    <SectionWrapper id="services">
      <SectionTitle>Our Services</SectionTitle>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {services.map((service) => (
          <Card key={service.title} className="bg-card border-border/50 text-center flex flex-col items-center p-8 transition-all duration-300 hover:border-primary hover:shadow-primary/10 hover:shadow-lg hover:-translate-y-2">
            {service.icon}
            <CardHeader className="p-0">
              <CardTitle className="font-headline text-2xl text-foreground">{service.title}</CardTitle>
            </CardHeader>
            <CardDescription className="mt-4 font-body text-muted-foreground">
              {service.description}
            </CardDescription>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  );
}
