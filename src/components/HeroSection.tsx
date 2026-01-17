import { motion } from 'framer-motion';
import Scene3D from './Scene3D';
import { heroLogoVariants, heroTitleVariants, heroSubtitleVariants } from '@/lib/animation-variants';
import himakalaLogo from '@/assets/himakala-logo.png';

export default function HeroSection() {
  return (
    <section id="hero" className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      <Scene3D />
      
      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-transparent to-background z-10" />
      <div className="absolute top-0 left-0 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-0 right-0 w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80 bg-accent/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1.5s' }} />
      
      <div className="w-full relative z-20 mx-auto px-4 sm:px-6 md:px-8 text-center">
        {/* Logo */}
        <motion.div
          variants={heroLogoVariants}
          initial="initial"
          animate="animate"
          className="mb-6 sm:mb-8 md:mb-10"
        >
          <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 mx-auto rounded-full bg-white p-1 shadow-2xl glow-primary">
            <img 
              src={himakalaLogo} 
              alt="HIMAKALA Logo" 
              className="w-full h-full rounded-full object-contain"
              loading="lazy"
            />
          </div>
        </motion.div>
        
        {/* Title */}
        <motion.h1
          variants={heroTitleVariants}
          initial="initial"
          animate="animate"
          className="font-display text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 md:mb-8 leading-tight"
        >
          <span className="text-foreground">HIMA</span>
          <span className="text-gradient-primary">KALA</span>
        </motion.h1>
        
        {/* Subtitle 1 */}
        <motion.p
          variants={heroSubtitleVariants}
          initial="initial"
          animate="animate"
          className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-3 sm:mb-4 px-4"
        >
          Himpunan Mahasiswa PSDKU Lamongan
        </motion.p>
        
        {/* Subtitle 2 */}
        <motion.p
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.5 }}
          className="text-sm sm:text-base md:text-lg text-muted-foreground/80 max-w-2xl mx-auto mb-8 sm:mb-10 md:mb-12 px-4"
        >
          Program Studi Teknik Informatika & Teknik Multimedia Broadcasting
        </motion.p>
      </div>
    </section>
  );
}
