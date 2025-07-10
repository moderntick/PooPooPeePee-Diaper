import { SectionWrapper } from '@/components/common/SectionWrapper';
import { SectionTitle } from '@/components/common/SectionTitle';
import { MapPin, Phone, Mail } from 'lucide-react';

const contactDetails = [
  {
    icon: <MapPin className="w-8 h-8 text-primary" />,
    title: 'Our Studio',
    info: '123 Visionary Way, San Francisco, CA 94105',
  },
  {
    icon: <Phone className="w-8 h-8 text-primary" />,
    title: 'Call Us',
    info: '(123) 456-7890',
  },
  {
    icon: <Mail className="w-8 h-8 text-primary" />,
    title: 'Email Us',
    info: 'hello@dreamwithvision.com',
  },
];

export default function ContactSection({ year }: { year: number }) {
  return (
    <SectionWrapper id="contact" className="bg-card">
      <SectionTitle>Get In Touch</SectionTitle>
      <div className="grid md:grid-cols-3 gap-12 max-w-4xl mx-auto">
        {contactDetails.map((detail) => (
          <div key={detail.title} className="flex flex-col items-center">
            <div className="mb-4">{detail.icon}</div>
            <h3 className="font-headline text-2xl font-semibold mb-2 text-foreground">{detail.title}</h3>
            <p className="font-body text-lg text-muted-foreground">{detail.info}</p>
          </div>
        ))}
      </div>
      <footer className="mt-24 border-t border-border/20 pt-8 w-full max-w-7xl mx-auto">
        <p className="text-muted-foreground">&copy; {year} Dream With Vision. All Rights Reserved.</p>
      </footer>
    </SectionWrapper>
  );
}
