import { motion } from 'framer-motion';
import Scene3D from './Scene3D';
import himakalaLogo from '@/assets/himakala-logo.png';

export default function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      <Scene3D />
      
      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-transparent to-background z-10" />
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1.5s' }} />
      
      <div className="container relative z-20 mx-auto px-6 text-center">
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="mb-8"
        >
          <div className="w-36 h-36 md:w-44 md:h-44 mx-auto rounded-full bg-white p-1 shadow-2xl glow-primary">
            <img 
              src={himakalaLogo} 
              alt="HIMAKALA Logo" 
              className="w-full h-full rounded-full object-contain"
            />
          </div>
        </motion.div>
        
        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="font-display text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
        >
          <span className="text-foreground">HIMA</span>
          <span className="text-gradient-primary">KALA</span>
        </motion.h1>
        
        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-4"
        >
          Himpunan Mahasiswa PSDKU Lamongan
        </motion.p>
        
        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-base md:text-lg text-muted-foreground/80 max-w-xl mx-auto mb-10"
        >
          Program Studi Teknik Informatika & Teknik Multimedia Broadcasting
        </motion.p>
        
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <motion.a
            href="#members"
            whileHover={{ scale: 1.05, boxShadow: '0 0 40px hsl(210 80% 45% / 0.5)' }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 rounded-xl bg-gradient-primary text-foreground font-bold text-lg glow-primary transition-all"
          >
            Lihat Anggota
          </motion.a>
          <motion.a
            href="#about"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 rounded-xl border border-border bg-card/50 backdrop-blur text-foreground font-semibold text-lg hover:bg-card transition-all"
          >
            Tentang Kami
          </motion.a>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2"
          >
            <div className="w-1.5 h-2.5 bg-primary rounded-full" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
