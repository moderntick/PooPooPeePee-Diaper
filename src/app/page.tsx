import Header from '@/components/common/Header';
import HomeSection from '@/components/sections/HomeSection';
import AboutSection from '@/components/sections/AboutSection';
import ClientsSection from '@/components/sections/ClientsSection';
import ServicesSection from '@/components/sections/ServicesSection';
import ContactSection from '@/components/sections/ContactSection';

export default function Home() {
  
  return (
    <>
      <Header />
      <main>
        <HomeSection />
        <AboutSection />
        <ClientsSection />
        <ServicesSection />
        <ContactSection year={new Date().getFullYear()} />
      </main>
    </>
  );
}
