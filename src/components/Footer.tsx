import { motion } from 'framer-motion';
import { Instagram, Mail, MapPin } from 'lucide-react';
import himakalaLogo from '@/assets/himakala-logo.png';

export default function Footer() {
  return (
    <footer className="py-12 px-6 bg-card border-t border-border">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="flex items-center gap-3 mb-4"
            >
              <div className="w-14 h-14 rounded-full bg-white p-0.5 shadow-md">
                <img 
                  src={himakalaLogo} 
                  alt="HIMAKALA Logo" 
                  className="w-full h-full rounded-full object-contain"
                />
              </div>
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
          </div>

          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['Beranda', 'Tentang', 'Anggota', 'Links'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">Kontak</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-muted-foreground text-sm">
                <MapPin className="w-4 h-4 text-primary shrink-0" />
                <span>PSDKU Lamongan, Jawa Timur</span>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground text-sm">
                <Mail className="w-4 h-4 text-primary shrink-0" />
                <span>himakala@pens.ac.id</span>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground text-sm">
                <Instagram className="w-4 h-4 text-primary shrink-0" />
                <span>@himakala_pens</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © 2024 HIMAKALA PSDKU Lamongan. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <motion.a
              href="#"
              whileHover={{ scale: 1.2, rotate: 5 }}
              className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-foreground transition-colors"
            >
              <Instagram className="w-5 h-5" />
            </motion.a>
            <motion.a
              href="mailto:himakala@pens.ac.id"
              whileHover={{ scale: 1.2, rotate: -5 }}
              className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-foreground transition-colors"
            >
              <Mail className="w-5 h-5" />
            </motion.a>
          </div>
        </div>
      </div>
    </footer>
  );
}
