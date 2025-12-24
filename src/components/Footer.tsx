import { motion } from 'framer-motion';
import { Instagram, Mail, MapPin } from 'lucide-react';
import himakalaLogo from '@/assets/himakala-logo.png';

export default function Footer() {
  return (
    <footer className="py-12 px-6 bg-gradient-to-b from-card to-background border-t border-border/50">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.div
              whileHover={{ scale: 1.05, rotate: 2 }}
              className="flex items-center gap-3 mb-4 cursor-pointer"
            >
              <motion.div 
                className="w-14 h-14 rounded-full bg-white p-0.5 shadow-md"
                whileHover={{ boxShadow: '0 0 20px rgba(59, 130, 246, 0.3)' }}
              >
                <img 
                  src={himakalaLogo} 
                  alt="HIMAKALA Logo" 
                  className="w-full h-full rounded-full object-contain"
                />
              </motion.div>
              <div>
                <h3 className="font-display text-xl font-bold">
                  HIMA<span className="text-primary">KALA</span>
                </h3>
                <p className="text-muted-foreground text-xs">
                  PSDKU Lamongan
                </p>
              </div>
            </motion.div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Himpunan Mahasiswa PSDKU Lamongan - Program Studi Teknik Informatika dan Multimedia Broadcasting.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="font-display font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['Beranda', 'Tentang', 'Anggota', 'Links'].map((item) => (
                <li key={item}>
                  <motion.a 
                    href={`#${item.toLowerCase()}`}
                    whileHover={{ x: 5, color: '#3b82f6' }}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm inline-block"
                  >
                    {item}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="font-display font-semibold text-foreground mb-4">Kontak</h4>
            <ul className="space-y-3">
              <motion.li 
                className="flex items-center gap-3 text-muted-foreground text-sm"
                whileHover={{ x: 5 }}
              >
                <MapPin className="w-4 h-4 text-primary shrink-0" />
                <span>PSDKU Lamongan, Jawa Timur</span>
              </motion.li>
              <motion.li 
                className="flex items-center gap-3 text-muted-foreground text-sm"
                whileHover={{ x: 5 }}
              >
                <Mail className="w-4 h-4 text-primary shrink-0" />
                <span>himakala@pens.ac.id</span>
              </motion.li>
              <motion.li 
                className="flex items-center gap-3 text-muted-foreground text-sm"
                whileHover={{ x: 5 }}
              >
                <Instagram className="w-4 h-4 text-primary shrink-0" />
                <span>@himakala_pens</span>
              </motion.li>
            </ul>
          </motion.div>
        </div>

        <motion.div 
          className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p className="text-muted-foreground text-sm">
            © 2024 HIMAKALA PSDKU Lamongan. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <motion.a
              href="#"
              whileHover={{ scale: 1.3, rotate: 10 }}
              whileTap={{ scale: 0.9 }}
              className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-400 to-pink-600 flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-shadow"
            >
              <Instagram className="w-5 h-5" />
            </motion.a>
            <motion.a
              href="mailto:himakala@pens.ac.id"
              whileHover={{ scale: 1.3, rotate: -10 }}
              whileTap={{ scale: 0.9 }}
              className="w-10 h-10 rounded-full bg-gradient-to-br from-red-400 to-red-600 flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-shadow"
            >
              <Mail className="w-5 h-5" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
