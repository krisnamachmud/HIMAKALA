import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { divisions } from '@/data/divisions';
import { useDivisionsData } from '@/hooks/useDivisionsData';
import { MembersModal } from './MembersModal';
import { membersDivisionVariants, containerVariants } from '@/lib/animation-variants';

export default function MembersSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [selectedDivision, setSelectedDivision] = useState<any | null>(null);
  const { data: divisionsData } = useDivisionsData();

  return (
    <section id="members" ref={ref} className="py-32 px-6 bg-gradient-to-b from-background via-card/20 to-background relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -z-10" />
      <div className="absolute top-1/2 left-1/4 w-72 h-72 bg-accent/3 rounded-full blur-3xl -z-10" />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16 md:mb-20"
        >
          <motion.div
            className="inline-block mb-4 sm:mb-6"
            animate={{ y: [0, -8, 0] }}
            transition={{ repeat: Infinity, duration: 3.5, ease: 'easeInOut' }}
          >
            <span className="px-3 sm:px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-xs font-semibold text-primary uppercase tracking-widest">
              👥 Struktur Organisasi
            </span>
          </motion.div>
          
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold mb-4 sm:mb-6">
            Pengurus <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">HIMAKALA</span>
          </h2>
          
          <p className="text-muted-foreground text-sm sm:text-base md:text-lg max-w-3xl mx-auto leading-relaxed px-4">
            Bertemu dengan para pemimpin yang berdedikasi tinggi dalam mengembangkan organisasi.
          </p>
        </motion.div>

        {/* Divisions Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 mb-16 sm:mb-20"
          variants={containerVariants}
          initial="initial"
          animate={isInView ? "animate" : "initial"}
        >
          {divisionsData.map((division, idx) => (
            <motion.div
              key={division.id}
              variants={membersDivisionVariants}
              onClick={() => setSelectedDivision(division)}
              whileHover={{ y: -16, boxShadow: '0 30px 60px -12px rgba(59, 130, 246, 0.4)' }}
              whileTap={{ scale: 0.96 }}
              className="group relative cursor-pointer h-full"
            >
              {/* Gradient Background Blur */}
              <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${division.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 blur-xl`} />
              
              {/* Glowing Border Effect */}
              <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${division.color} opacity-0 group-hover:opacity-15 blur transition-opacity duration-500 -z-10`} />

              {/* Card Container */}
              <div className="relative h-full rounded-3xl border border-white/10 group-hover:border-primary/40 bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-xl p-5 sm:p-6 md:p-8 transition-all duration-500 flex flex-col overflow-hidden">
                
                {/* Animated Top Accent Line */}
                <motion.div
                  className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${division.color} rounded-t-3xl`}
                  initial={{ scaleX: 0 }}
                  animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
                  transition={{ delay: 0.2 + idx * 0.1, duration: 0.8 }}
                  style={{ transformOrigin: 'left' }}
                />

                {/* Icon Container with Enhanced Animation */}
                <motion.div
                  className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${division.color} mb-6 text-3xl group-hover:shadow-xl group-hover:shadow-primary/30 transition-all duration-300`}
                  whileHover={{ rotate: 12, scale: 1.15 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                >
                  {division.icon}
                </motion.div>

                {/* Title with Enhanced Styling */}
                <h3 className={`text-2xl font-bold mb-3 bg-gradient-to-r ${division.color} bg-clip-text text-transparent group-hover:from-primary group-hover:to-accent transition-all duration-300 leading-tight`}>
                  {division.name}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground text-xs sm:text-sm mb-6 flex-grow leading-relaxed opacity-90 group-hover:opacity-100 transition-opacity">
                  {division.description}
                </p>

                {/* Divider Line */}
                <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-6 group-hover:via-primary/30 transition-all duration-300" />

                {/* Footer Stats with Better Layout */}
                <div className="flex items-center justify-between">
                  <motion.div
                    className="flex items-center gap-2"
                    whileHover={{ x: 4 }}
                  >
                    <motion.div 
                      className="w-2.5 h-2.5 rounded-full bg-primary"
                      animate={{ scale: [1, 1.3, 1] }}
                      transition={{ repeat: Infinity, duration: 2 }}
                    />
                    <span className="text-xs font-semibold text-primary">
                      {division.members.length} {division.members.length === 1 ? 'Anggota' : 'Anggota'}
                    </span>
                  </motion.div>

                  <motion.div
                    className="text-primary/60 group-hover:text-primary transition-colors duration-300 flex items-center gap-1 text-xs font-medium"
                    animate={{ x: [0, 6, 0] }}
                    transition={{ repeat: Infinity, duration: 2.5, ease: 'easeInOut' }}
                  >
                    Lihat Detail
                    <ArrowRight className="w-4 h-4" />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-center pt-16 border-t border-white/10"
        >
          <motion.div
            className="inline-block mb-4 px-6 py-3 rounded-full bg-primary/10 border border-primary/30 backdrop-blur-sm"
            animate={{ y: [0, -5, 0] }}
            transition={{ repeat: Infinity, duration: 3 }}
          >
            <p className="text-muted-foreground text-sm font-medium">
              💡 Klik kartu di atas untuk melihat profil lengkap anggota
            </p>
          </motion.div>
          
          <motion.div
            className="inline-flex gap-3 text-sm font-semibold text-primary mt-4"
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{ repeat: Infinity, duration: 2.5 }}
          >
            <span>↓</span> Jelajahi Divisi <span>↓</span>
          </motion.div>
        </motion.div>
      </div>

      {/* Members Modal */}
      {selectedDivision && (
        <MembersModal
          isOpen={!!selectedDivision}
          onClose={() => setSelectedDivision(null)}
          divisionName={selectedDivision.name}
          divisionIcon={selectedDivision.icon}
          divisionColor={selectedDivision.color}
          members={selectedDivision.members}
        />
      )}
    </section>
  );
}
