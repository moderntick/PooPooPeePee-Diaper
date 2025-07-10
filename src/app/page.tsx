import Header from '@/components/common/Header';
import HomeSection from '@/components/sections/HomeSection';
import AboutSection from '@/components/sections/AboutSection';
import ClientsSection from '@/components/sections/ClientsSection';
import ServicesSection from '@/components/sections/ServicesSection';
import ContactSection from '@/components/sections/ContactSection';

export default function Home() {
  const currentYear = new Date().getFullYear();
  
  return (
    <>
      <Header />
      <main>
        <HomeSection />
        <AboutSection />
        <ClientsSection />
        <ServicesSection />
        <ContactSection year={currentYear} />
      </main>
    </>
  );
}
