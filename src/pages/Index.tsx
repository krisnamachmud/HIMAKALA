import { AnimatePresence } from 'framer-motion';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import BeritaSection from '@/components/BeritaSection';
import MembersSection from '@/components/MembersSection';
import LinksSection from '@/components/LinksSection';
import Footer from '@/components/Footer';
import PageTransition from '@/components/PageTransition';

const Index = () => {
  return (
    <AnimatePresence mode="wait">
      <PageTransition>
        <div className="min-h-screen bg-background text-foreground">
          <Navbar />
          <HeroSection />
          <AboutSection />
          <BeritaSection />
          <MembersSection />
          <LinksSection />
          <Footer />
        </div>
      </PageTransition>
    </AnimatePresence>
  );
};

export default Index;
