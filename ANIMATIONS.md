## 🎨 Struktur Komponen & Animasi

### Page Transitions
Setiap halaman memiliki animasi masuk (enter) dan keluar (exit) yang smooth menggunakan Framer Motion:
- **Fade In**: Opacity dari 0 ke 1
- **Slide In**: Y-axis dari 20px ke 0
- **Duration**: 600ms untuk enter, 400ms untuk exit

### Konfigurasi
```tsx
// App.tsx
<AnimatePresence mode="wait">
  <Routes>
    <Route path="/" element={<Index />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
</AnimatePresence>

// pages/Index.tsx
<PageTransition>
  {/* All page content */}
</PageTransition>
```

### Komponen Animasi
1. **Navbar** - Slide down saat load
2. **HeroSection** - Scale & fade in
3. **AboutSection** - Staggered animations untuk items
4. **MembersSection** - Division cards dengan hover effects
5. **LinksSection** - Fade in dengan stagger
6. **Footer** - Fade in
7. **NotFound (404)** - Smooth entry dengan floating animation

### Responsive Design
- Mobile-first approach
- Navbar logo text hidden pada layar kecil
- Flexbox layout responsive untuk semua section
- Breakpoints: sm (640px), md (768px), lg (1024px)

### Color System
- Primary: `#3b82f6` (Blue)
- Accent: `#8b5cf6` (Purple)
- Background: Dark theme dengan gradients
- Glassmorphism effects dengan backdrop blur

### Performance Tips
- Animations use `will-change` implicitly
- `AnimatePresence mode="wait"` mencegah multiple renders
- Lazy loading di section menggunakan `useInView`
- Page transitions keep animations smooth
