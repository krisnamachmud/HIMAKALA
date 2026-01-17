import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Globe, GraduationCap, Building2, FileText, Calendar, Zap, Star, Heart } from 'lucide-react';
import { linksCardVariants, linksContainerVariants } from '@/lib/animation-variants';
import { useAdminData } from '@/hooks/useAdminData';
import pensLogo from '@/assets/pens-logo.png';

const ICON_MAP: Record<string, React.ComponentType<any>> = {
  Globe,
  GraduationCap,
  Building2,
  FileText,
  Calendar,
  Zap,
  Star,
  Heart,
};

export default function LinksSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const { data } = useAdminData();

  const getLogoForLink = (title: string) => {
    if (title === 'PENS') return pensLogo;
    return undefined;
  };

  return (
    <section id="links" ref={ref} className="w-full py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6 md:px-8 bg-gradient-to-b from-background to-card/50">
      <div className="w-full max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16 md:mb-20"
        >
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
            Quick <span className="text-gradient-primary">Links</span>
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-4">
            Akses cepat ke berbagai platform dan layanan terkait.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-5xl mx-auto"
          variants={linksContainerVariants}
          initial="initial"
          animate={isInView ? "animate" : "initial"}
        >
          {data.quickLinks.map((link) => {
            const IconComponent = ICON_MAP[link.icon] || Globe;
            const logo = getLogoForLink(link.title);

            return (
              <motion.a
                key={link.id}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                variants={linksCardVariants}
                whileHover={{ scale: 1.08, y: -8 }}
                whileTap={{ scale: 0.95 }}
                className="glass-card p-5 sm:p-6 rounded-2xl flex items-center gap-4 group cursor-pointer border border-border/50 hover:border-primary/50 transition-colors"
              >
                <motion.div 
                  className={`w-14 h-14 rounded-xl bg-gradient-to-br ${link.color} flex items-center justify-center shrink-0`}
                  whileHover={{ rotate: 10, scale: 1.15 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {logo ? (
                    <img src={logo} alt={link.title} className="w-10 h-10 object-contain" loading="lazy" />
                  ) : (
                    <IconComponent className="w-7 h-7 text-foreground" />
                  )}
                </motion.div>
                
                <div className="flex-1 min-w-0">
                  <motion.h3 
                    className="font-display text-base sm:text-lg font-semibold text-foreground mb-1 flex items-center gap-2"
                    whileHover={{ x: 5 }}
                  >
                    {link.title}
                    <motion.div
                      initial={{ opacity: 0, x: -5 }}
                      whileHover={{ opacity: 1, x: 0 }}
                    >
                      <ExternalLink className="w-4 h-4 text-primary" />
                    </motion.div>
                  </motion.h3>
                  <p className="text-muted-foreground text-xs sm:text-sm truncate">
                    {link.description}
                  </p>
                </div>
              </motion.a>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
