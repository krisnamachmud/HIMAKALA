import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import himakalaLogo from '@/assets/himakala-logo.png';
import AdminPanel from './AdminPanel';
import { AnimatePresence } from 'framer-motion';

const navLinks = [
  { name: '', href: '#hero' },
  { name: '', href: '#links' },
];

export default function Navbar() {
  const [showAdminPanel, setShowAdminPanel] = useState(false);

  useEffect(() => {
    // Handle keyboard shortcut: Ctrl+Shift+A to open admin panel
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.shiftKey && e.key === 'A') {
        e.preventDefault();
        setShowAdminPanel(true);
      }
    };

    // Handle close event
    const handleCloseAdmin = () => {
      setShowAdminPanel(false);
    };

    window.addEventListener('keydown', handleKeyPress);
    window.addEventListener('closeAdminPanel', handleCloseAdmin);

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
      window.removeEventListener('closeAdminPanel', handleCloseAdmin);
    };
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="fixed top-0 left-0 right-0 z-50 bg-transparent border-b border-transparent backdrop-blur-0"
      >
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-4">
          <div className="flex items-center justify-between">
            {/* Logo & Brand */}
            <motion.a
              href="#hero"
              whileHover={{ scale: 1.08, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 sm:gap-3 cursor-pointer group shrink-0"
            >
              <motion.div 
                className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white p-0.5 shadow-lg group-hover:shadow-xl transition-shadow"
                whileHover={{ boxShadow: '0 0 20px rgba(59, 130, 246, 0.5)' }}
              >
                <img 
                  src={himakalaLogo} 
                  alt="HIMAKALA Logo" 
                  className="w-full h-full rounded-full object-contain"
                />
              </motion.div>
              <span className="font-display text-xl font-bold text-foreground hidden sm:inline">
                HIMA<span className="text-primary">KALA</span>
              </span>
            </motion.a>

            {/* Navigation Links */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link, index) => (
                <motion.a
                  key={`nav-${link.name}`}
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
                    layoutId={`underline-${link.name}`}
                  />
                </motion.a>
              ))}
              
              {/* Hidden Admin Button */}
              <button
                onClick={() => setShowAdminPanel(true)}
                title="Admin Panel (Ctrl+Shift+A)"
                className="w-1 h-1 rounded-full opacity-0 hover:opacity-100 transition-opacity cursor-pointer"
                style={{ background: 'transparent' }}
              />
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Admin Panel Modal */}
      <AnimatePresence>
        {showAdminPanel && <AdminPanel />}
      </AnimatePresence>
    </>
  );
}
