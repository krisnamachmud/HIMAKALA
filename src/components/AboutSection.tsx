import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code, Film, Users, Trophy } from 'lucide-react';

const features = [
  {
    icon: Code,
    title: 'Teknik Informatika',
    description: 'Mengembangkan keahlian programming, software development, dan teknologi informasi terkini.',
    color: 'text-primary',
    bgColor: 'bg-primary/10',
  },
  {
    icon: Film,
    title: 'Multimedia Broadcasting',
    description: 'Mempelajari produksi konten multimedia, broadcasting, dan teknologi media digital.',
    color: 'text-accent',
    bgColor: 'bg-accent/10',
  },
  {
    icon: Users,
    title: 'Komunitas Solid',
    description: 'Wadah berkumpul dan berkolaborasi untuk mahasiswa PSDKU Lamongan.',
    color: 'text-primary-glow',
    bgColor: 'bg-primary-glow/10',
  },
  {
    icon: Trophy,
    title: 'Prestasi Gemilang',
    description: 'Menghasilkan prestasi di berbagai kompetisi tingkat regional dan nasional.',
    color: 'text-accent',
    bgColor: 'bg-accent/10',
  },
];

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" ref={ref} className="py-24 px-6 bg-gradient-to-b from-background to-card/30">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            Tentang <span className="text-gradient-primary">HIMAKALA</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Organisasi mahasiswa yang mewadahi kreativitas dan inovasi di bidang teknologi informasi dan multimedia.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50, rotateX: 20 }}
              animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
              transition={{ delay: index * 0.15, duration: 0.6, type: 'spring' }}
              whileHover={{ y: -12, scale: 1.05, boxShadow: '0 20px 40px rgba(0, 0, 0, 0.2)' }}
              className="glass-card p-6 rounded-2xl hover-lift cursor-pointer group border border-border/50 hover:border-primary/50 transition-colors"
            >
              <motion.div 
                className={`w-14 h-14 rounded-xl ${feature.bgColor} flex items-center justify-center mb-4`}
                whileHover={{ rotate: 10, scale: 1.15 }}
                whileTap={{ scale: 0.95 }}
              >
                <feature.icon className={`w-7 h-7 ${feature.color}`} />
              </motion.div>
              <motion.h3 
                className="font-display text-xl font-semibold text-foreground mb-2"
                whileHover={{ x: 5 }}
              >
                {feature.title}
              </motion.h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
