import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import MembersSection from '@/components/MembersSection';
import LinksSection from '@/components/LinksSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <MembersSection />
      <LinksSection />
      <Footer />
    </div>
  );
};

export default Index;
