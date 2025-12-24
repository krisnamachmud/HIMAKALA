import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { User, Instagram, Linkedin } from 'lucide-react';

const members = [
  {
    name: 'Krisna Machmud Irfandi',
    role: 'Wakil Divisi',
    department: 'Teknik Informatika',
    image: null,
  },
  {
    name: 'Khoirul Yarrdan',
    role: 'Wakil Ketua',
    department: 'Multimedia Broadcasting',
    image: null,
  },
  {
    name: 'Nauril Putri',
    role: 'Sekretaris',
    department: 'Teknik Informatika',
    image: null,
  },
  {
    name: 'Entitas',
    role: 'Bendahara',
    department: 'Multimedia Broadcasting',
    image: null,
  },
  {
    name: 'Entitas',
    role: 'Koordinator Acara',
    department: 'Teknik Informatika',
    image: null,
  },
  {
    name: 'Entitas',
    role: 'Koordinator Media',
    department: 'Multimedia Broadcasting',
    image: null,
  },
  {
    name: 'Entitas',
    role: 'Koordinator IT',
    department: 'Teknik Informatika',
    image: null,
  },
  {
    name: 'Entitas',
    role: 'Koordinator Humas',
    department: 'Multimedia Broadcasting',
    image: null,
  },
];

export default function MembersSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="members" ref={ref} className="py-24 px-6 bg-gradient-to-b from-card/30 to-background">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            Pengurus <span className="text-gradient-accent">HIMAKALA</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Berkenalan dengan tim pengurus yang menggerakkan organisasi dengan dedikasi tinggi.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {members.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -15, boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)' }}
              className="glass-card rounded-2xl overflow-hidden group cursor-pointer border border-border/50 hover:border-primary/50 transition-colors"
            >
              <div className="relative h-48 bg-gradient-to-br from-primary/20 via-card to-accent/20 flex items-center justify-center overflow-hidden">
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-br from-primary/0 to-accent/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
                <motion.div 
                  className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center relative z-10"
                  whileHover={{ scale: 1.15, rotate: 10 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <User className="w-12 h-12 text-foreground" />
                </motion.div>
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
              </div>
              
              <div className="p-5 text-center">
                <motion.h3 
                  className="font-display text-lg font-semibold text-foreground mb-1"
                  whileHover={{ scale: 1.05 }}
                >
                  {member.name}
                </motion.h3>
                <motion.p 
                  className="text-primary font-medium text-sm mb-1"
                  whileHover={{ color: '#60a5fa' }}
                >
                  {member.role}
                </motion.p>
                <p className="text-muted-foreground text-xs mb-4">
                  {member.department}
                </p>
                
                <motion.div 
                  className="flex justify-center gap-3"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.2 }}
                >
                  <motion.button
                    whileHover={{ scale: 1.25, rotate: 5 }}
                    whileTap={{ scale: 0.85 }}
                    className="w-9 h-9 rounded-full bg-gradient-to-br from-pink-400 to-pink-600 flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-shadow"
                  >
                    <Instagram className="w-4 h-4" />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.25, rotate: -5 }}
                    whileTap={{ scale: 0.85 }}
                    className="w-9 h-9 rounded-full bg-gradient-to-br from-blue-400 to-blue-700 flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-shadow"
                  >
                    <Linkedin className="w-4 h-4" />
                  </motion.button>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
