import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

interface ScrollIndicatorProps {
  href?: string;
}

export const ScrollIndicator: React.FC<ScrollIndicatorProps> = ({ href = '#about' }) => (
  <motion.a
    href={href}
    initial={{ opacity: 0, y: -10, z: 500}}
    animate={{ opacity: 1, y: 0, z: 100 }}
    transition={{ delay: 1.4, duration: 0.8, ease: 'easeOut' }}
    className="absolute bottom-6 sm:bottom-8 md:bottom-10 left-1/2 -translate-x-1/2 group cursor-pointer z-30 flex flex-col items-center"
  >
    {/* Label Text */}
    <motion.div
      className="mb-2"
      animate={{ opacity: [0.6, 1, 0.6] }}
      transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
    >
      <span className="text-xs text-primary/70 font-medium uppercase tracking-widest whitespace-nowrap">
        Scroll untuk Lanjut
      </span>
    </motion.div>

    {/* Chevron Container */}
    <motion.div
      className="flex flex-col items-center"
      animate={{ y: [0, 10, 0] }}
      transition={{ repeat: Infinity, duration: 2.5, ease: 'easeInOut', delay: 0.2 }}
    >
      {/* Multiple chevrons for effect */}
      <motion.div
        className="text-primary/90 group-hover:text-primary transition-colors duration-300"
        animate={{ y: [0, 4, 0], opacity: [0.4, 1, 0.4] }}
        transition={{ repeat: Infinity, duration: 2.5, ease: 'easeInOut' }}
      >
        <ChevronDown className="w-5 h-5 sm:w-6 sm:h-6 drop-shadow-lg" strokeWidth={2.5} />
      </motion.div>

      <motion.div
        className="text-primary/60 -mt-2"
        animate={{ y: [0, 4, 0], opacity: [0, 0.7, 0] }}
        transition={{ repeat: Infinity, duration: 2.5, ease: 'easeInOut', delay: 0.1 }}
      >
        <ChevronDown className="w-5 h-5 sm:w-6 sm:h-6" strokeWidth={2} />
      </motion.div>
    </motion.div>

    {/* Glow effect on hover */}
    <motion.div
      className="absolute -inset-4 rounded-full opacity-0 group-hover:opacity-30 transition-opacity duration-300 pointer-events-none"
      style={{
        background: 'radial-gradient(circle, rgba(59, 130, 246, 0.3), transparent)',
      }}
    />
  </motion.a>
);

export default ScrollIndicator;
