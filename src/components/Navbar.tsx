import { motion } from 'framer-motion';
import himakalaLogo from '@/assets/himakala-logo.png';

const navLinks = [
  { name: 'Beranda', href: '#hero' },
  { name: 'Tentang', href: '#about' },
  { name: 'Anggota', href: '#members' },
  { name: 'Links', href: '#links' },
];

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-border/50 backdrop-blur-xl"
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <motion.a
            href="#hero"
            whileHover={{ scale: 1.08, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-3 cursor-pointer"
          >
            <motion.div 
              className="w-11 h-11 rounded-full bg-white p-0.5 shadow-lg"
              whileHover={{ boxShadow: '0 0 20px rgba(59, 130, 246, 0.5)' }}
            >
              <img 
                src={himakalaLogo} 
                alt="HIMAKALA Logo" 
                className="w-full h-full rounded-full object-contain"
              />
            </motion.div>
            <span className="font-display text-xl font-bold text-foreground">
              HIMA<span className="text-primary">KALA</span>
            </span>
          </motion.a>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.3 }}
                whileHover={{ y: -3, color: '#3b82f6' }}
                className="text-muted-foreground hover:text-primary transition-colors font-medium relative group"
              >
                {link.name}
                <motion.span
                  className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-primary group-hover:w-full transition-all duration-300"
                  layoutId="underline"
                />
              </motion.a>
            ))}
          </div>

          <motion.a
            href="#links"
            whileHover={{ scale: 1.08, boxShadow: '0 0 30px rgba(59, 130, 246, 0.5)' }}
            whileTap={{ scale: 0.95 }}
            className="hidden md:block px-6 py-2.5 rounded-lg bg-gradient-to-r from-primary to-primary-glow text-foreground font-semibold glow-primary transition-all hover:shadow-lg"
          >
            Explore
          </motion.a>
        </div>
      </div>
    </motion.nav>
  );
}
