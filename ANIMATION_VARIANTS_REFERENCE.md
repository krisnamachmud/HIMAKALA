# 🎬 Animation Variants Quick Reference

## Section-Specific Animations

### Hero Section
```
Logo: Spring animation (scale + rotate + easeOut)
  - scale: 0.5 → 1
  - rotate: -10° → 0°
  - duration: 800ms
  - spring: stiffness 100, damping 15

Title: Slide down
  - y: 60px → 0
  - opacity: 0 → 1
  - duration: 800ms
  - delay: 200ms

Subtitle: Slide down
  - y: 40px → 0
  - opacity: 0 → 1
  - duration: 700ms
  - delay: 400ms

Scroll Indicator: Floating
  - y: [0, 8, 0]
  - duration: 2s infinite
  - timing: easeInOut
```

### About Section
```
Container: Staggered
  - staggerChildren: 150ms
  - delayChildren: 300ms

Card: Rotated entrance
  - opacity: 0 → 1
  - y: 40px → 0
  - rotateX: -20° → 0°
  - duration: 600ms
  - easing: easeOut

Icon Hover:
  - rotate: 0° → 10°
  - scale: 1 → 1.15
  - type: spring
```

### Members Section
```
Container: Staggered
  - staggerChildren: 150ms
  - delayChildren: varies

Division Card: Pop-in with bounce
  - opacity: 0 → 1
  - scale: 0.7 → 1
  - y: 40px → 0
  - duration: 500ms
  - type: spring
  - easing: [0.34, 1.56, 0.64, 1] (bouncy)

Hover Effect:
  - y: -10px
  - scale: 1.02
  - transition: smooth
```

### Links Section
```
Container: Staggered
  - staggerChildren: 120ms
  - delayChildren: 200ms

Card: Horizontal slide
  - opacity: 0 → 1
  - x: -60px → 0
  - duration: 600ms
  - easing: easeOut

Hover:
  - scale: 1 → 1.08
  - y: 0 → -8px
```

### Footer Section
```
Container: Full staggered
  - staggerChildren: varies
  - delayChildren: 0

Column:
  - opacity: 0 → 1
  - y: 20px → 0
  - duration: 600ms
  - easing: easeOut
  - individual delay: 200ms

Hover Effects:
  - Link: x: 0 → 5px
  - Icon: scale + rotate
```

---

## Reusable Variants

### Core Animations
```tsx
fadeInUp: Fade + slide up (50px)
fadeInScale: Fade + scale (0.8 → 1)
slideInLeft: Slide from left (-50px)
slideInRight: Slide from right (50px)
```

### Container Variants
```tsx
containerVariants: Parent for staggered children
  - staggerChildren: 100ms
  - delayChildren: 200ms

itemVariants: Child items
  - opacity: 0 → 1
  - y: 20px → 0
  - duration: 500ms
```

### Hover Effects
```tsx
cardHoverVariants: Scale + Y-axis
  - scale: 1 → 1.02
  - y: 0 → -8px
  - type: spring

buttonHoverVariants: Scale with spring
  - scale: 1 → 1.08
  - stiffness: 400
  - damping: 25
```

---

## Animation Easing Functions

| Name | Function | Use Case |
|------|----------|----------|
| easeOut | smooth deceleration | entrance animations |
| easeIn | smooth acceleration | exit animations |
| easeInOut | both | smooth transitions |
| spring | natural bounce | interactive elements |
| cubic-bezier | custom | page transitions |

---

## Timing Patterns

| Element | Duration | Delay | Total |
|---------|----------|-------|-------|
| Section Title | 800ms | 0ms | 800ms |
| Section Subtitle | 800ms | 200ms | 1000ms |
| Card 1 | 600ms | 0ms | 600ms |
| Card 2 | 600ms | 150ms | 750ms |
| Card 3 | 600ms | 300ms | 900ms |
| Card 4 | 600ms | 450ms | 1050ms |

---

## Performance Checklist

✅ All animations use transform/opacity
✅ No expensive layout animations
✅ Lazy loading with useInView
✅ Staggered animations for sequence
✅ Spring timings for natural feel
✅ Consistent across all sections
✅ 60fps target maintained
✅ Responsive on all devices

---

## Common Animation Patterns

### Pattern 1: Staggered List
```tsx
<motion.div variants={containerVariants} animate="animate">
  {items.map((item) => (
    <motion.div variants={itemVariants}>{item}</motion.div>
  ))}
</motion.div>
```

### Pattern 2: On Scroll
```tsx
const isInView = useInView(ref, { once: true });
animate={isInView ? "animate" : "initial"}
```

### Pattern 3: On Hover
```tsx
<motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
  Content
</motion.div>
```

### Pattern 4: Infinite Loop
```tsx
<motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity }}>
  Content
</motion.div>
```

---

**Updated**: January 5, 2026
**Version**: 2.0 (Optimized)
