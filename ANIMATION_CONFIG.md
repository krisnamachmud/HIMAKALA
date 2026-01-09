// Animation Configuration Summary
// Ini adalah quick reference untuk semua animation setup

// ============================================
// 1. PAGE TRANSITIONS (App Level)
// ============================================
// File: src/App.tsx
// - AnimatePresence mode="wait" untuk route transitions
// - Mencegah multiple renders saat route change
// - Smooth fade in/out untuk halaman baru

// ============================================
// 2. PAGE WRAPPER (Page Level)  
// ============================================
// File: src/pages/Index.tsx & NotFound.tsx
// - PageTransition wrapper untuk setiap halaman
// - AnimatePresence mode="wait" di dalam page
// - Variasi animation dari lib/animation-variants.ts

// ============================================
// 3. ANIMATION LIBRARY
// ============================================
// File: src/lib/animation-variants.ts
// Berisi:
// - fadeInUp: Fade + slide up animation
// - fadeInScale: Fade + scale animation
// - slideInLeft/Right: Slide in dari samping
// - containerVariants: Untuk parent items dengan stagger
// - itemVariants: Untuk child items
// - pageVariants: Page enter/exit animations
// - hoverScale: Reusable hover effect
// - tapScale: Reusable tap effect

// ============================================
// 4. COMPONENT ANIMATIONS
// ============================================
// Navbar
// - Slide down saat page load
// - Hover effect pada logo dan links
// - Underline animation pada nav links

// HeroSection
// - Scale + fade in untuk logo
// - Staggered animations untuk text

// AboutSection, MembersSection, LinksSection
// - useInView hook untuk trigger animations
// - Staggered child animations
// - Hover effects pada cards

// NotFound (404)
// - Floating animation pada "404"
// - Staggered entry untuk semua elements
// - Smooth button animations

// ============================================
// 5. TIMING REFERENCES
// ============================================
// Duration:
// - Page enter: 600ms
// - Page exit: 400ms
// - Component animations: 500-800ms
// - Stagger children: 100ms gap

// Easing:
// - Page transitions: cubic-bezier(0.83, 0, 0.17, 1)
// - Component animations: 'easeOut'
// - Spring transitions: stiffness 300, damping 30

// ============================================
// 6. RESPONSIVE BEHAVIOR
// ============================================
// - All animations work on mobile/tablet/desktop
// - Navbar text hidden pada layar < sm (640px)
// - Flexible grid layouts
// - Touch-friendly animations

// ============================================
// 7. PERFORMANCE TIPS
// ============================================
// ✓ Use AnimatePresence mode="wait" untuk prevent race conditions
// ✓ Lazy load animations dengan useInView hook
// ✓ Centralize animation variants untuk reusability
// ✓ Use spring transitions untuk natural motion
// ✓ Avoid animating expensive properties (width, height)
// ✓ Use will-change sparingly

// ============================================
// 8. USAGE EXAMPLES
// ============================================

// Example 1: Using fadeInUp animation
// <motion.div variants={fadeInUp} initial="initial" animate="animate">
//   Content
// </motion.div>

// Example 2: Using containerVariants with stagger
// <motion.div variants={containerVariants} initial="initial" animate="animate">
//   <motion.div variants={itemVariants}>Item 1</motion.div>
//   <motion.div variants={itemVariants}>Item 2</motion.div>
// </motion.div>

// Example 3: Creating new variant
// const customVariant = {
//   initial: { opacity: 0, x: -50 },
//   animate: { opacity: 1, x: 0, transition: { duration: 0.6 } }
// }

// ============================================
// 9. BROWSER SUPPORT
// ============================================
// - Framer Motion v10+
// - Modern browsers (Chrome, Firefox, Safari, Edge)
// - Graceful degradation untuk older browsers

// ============================================
// Notes:
// - Semua animations dioptimasi untuk performance
// - Animasi dapat di-disable via prefers-reduced-motion
// - Consistency dalam timing dan easing di seluruh app
// ============================================
