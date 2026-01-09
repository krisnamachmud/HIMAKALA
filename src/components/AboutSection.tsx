import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code, Film, Users, Trophy, Zap, Star, Heart } from 'lucide-react';
import { aboutCardVariants, aboutContainerVariants } from '@/lib/animation-variants';
import { useAdminData } from '@/hooks/useAdminData';

const ICON_MAP: Record<string, React.ComponentType<any>> = {
  Code,
  Film,
  Users,
  Trophy,
  Zap,
  Star,
  Heart,
};

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const { data } = useAdminData();

  return (
    <section id="about" ref={ref} className="w-full py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6 md:px-8 bg-gradient-to-b from-background to-card/30">
      <div className="w-full max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16 md:mb-20"
        >
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
            Tentang <span className="text-gradient-primary">HIMAKALA</span>
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-4">
            Organisasi mahasiswa yang mewadahi kreativitas dan inovasi di bidang teknologi informasi dan multimedia.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
          variants={aboutContainerVariants}
          initial="initial"
          animate={isInView ? "animate" : "initial"}
        >
          {data.aboutFeatures.map((feature) => {
            const IconComponent = ICON_MAP[feature.icon] || Code;
            return (
              <motion.div
                key={feature.id}
                variants={aboutCardVariants}
                whileHover={{ y: -12, scale: 1.05 }}
                className="glass-card p-5 sm:p-6 rounded-2xl cursor-pointer group border border-border/50 hover:border-primary/50 transition-colors"
              >
                <motion.div 
                  className={`w-14 h-14 rounded-xl ${feature.bgColor} flex items-center justify-center mb-4`}
                  whileHover={{ rotate: 10, scale: 1.15 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <IconComponent className={`w-7 h-7 ${feature.color}`} />
                </motion.div>
                <motion.h3 
                  className="font-display text-lg sm:text-xl font-semibold text-foreground mb-2"
                  whileHover={{ x: 5 }}
                >
                  {feature.title}
                </motion.h3>
                <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
