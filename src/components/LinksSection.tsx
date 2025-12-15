import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Globe, GraduationCap, Building2, FileText, Calendar } from 'lucide-react';
import pensLogo from '@/assets/pens-logo.png';

const quickLinks = [
  {
    title: 'PENS',
    description: 'Politeknik Elektronika Negeri Surabaya',
    url: 'https://www.pens.ac.id',
    icon: GraduationCap,
    color: 'from-primary to-primary-glow',
    logo: pensLogo,
  },
  {
    title: 'PSDKU Lamongan',
    description: 'Program Studi Diluar Kampus Utama',
    url: '#',
    icon: Building2,
    color: 'from-accent to-yellow-500',
  },
  {
    title: 'Sistem Akademik',
    description: 'Portal informasi akademik mahasiswa',
    url: '#',
    icon: FileText,
    color: 'from-primary-glow to-cyan-400',
  },
  {
    title: 'Kalender Akademik',
    description: 'Jadwal kegiatan akademik',
    url: '#',
    icon: Calendar,
    color: 'from-accent to-orange-500',
  },
  {
    title: 'E-Learning',
    description: 'Platform pembelajaran daring',
    url: '#',
    icon: Globe,
    color: 'from-primary to-blue-400',
  },
];

export default function LinksSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="links" ref={ref} className="py-24 px-6 bg-gradient-to-b from-background to-card/50">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            Quick <span className="text-gradient-primary">Links</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Akses cepat ke berbagai platform dan layanan terkait.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {quickLinks.map((link, index) => (
            <motion.a
              key={link.title}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ scale: 1.03, y: -5 }}
              whileTap={{ scale: 0.98 }}
              className="glass-card p-6 rounded-2xl flex items-center gap-4 group cursor-pointer hover-lift"
            >
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${link.color} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform`}>
                {link.logo ? (
                  <img src={link.logo} alt={link.title} className="w-10 h-10 object-contain" />
                ) : (
                  <link.icon className="w-7 h-7 text-foreground" />
                )}
              </div>
              
              <div className="flex-1 min-w-0">
                <h3 className="font-display text-lg font-semibold text-foreground mb-1 flex items-center gap-2">
                  {link.title}
                  <ExternalLink className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                </h3>
                <p className="text-muted-foreground text-sm truncate">
                  {link.description}
                </p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
