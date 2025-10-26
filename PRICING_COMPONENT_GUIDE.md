# Pricing Section Component - Complete Guide

## Overview
A dynamic, fully-animated fintech pricing section component built with React, Framer Motion, and Tailwind CSS. This component showcases three pricing tiers with extensive animations and interactivity.

## File Location
`src/components/products/CI/Payment.tsx`

---

## 🎨 Design Features

### Color Palette
- **Primary Brand Color**: `#625bff` (Purple)
- **Background**: White
- **Text**: Black, Gray (#6b7280), Gray-600
- **Accents**: Light grays for borders and subtle backgrounds

### Typography
- **Main Heading**: 5xl-6xl (responsive), weight-900, tracking-tight
- **Card Titles**: 3xl, bold, color-[#625bff]
- **Pricing**: 5xl, bold, black
- **Subtitle**: 2xl, semi-bold, gray-600
- **Features**: lg, gray-700

---

## 📦 Components & Sections

### 1. **Section Header**
```
PRICING THAT MAKES SENSE
[Animated Dashed Underline - 60% width]
Investment, not expense
```

**Animations**:
- Scale-up + fade-in entrance (staggered)
- Dashed underline with marching animation (4s duration)
- Heading and subtitle animate in sequence with 0.2s stagger

### 2. **Pricing Cards Carousel**

#### Three Card Types:
1. **Starter Intelligence** - $999/month
2. **Market Intelligence** - $2,999/month (Popular badge)
3. **Enterprise Intelligence** - Custom pricing

#### Card Features:
- **Left Edge Glow**: Animated gradient pulse (3s duration)
- **Right Edge Glow**: Delayed animation (4s duration, 0.5s delay)
- **Popular Badge** (Card 2 only): Animated scale pulse
- **Title**: Dynamic color change on active
- **Price**: Scale-up effect on card focus
- **Features List**: Staggered fade-in animation (50ms delay between items)
- **CTA Button**: 
  - Ripple effect on load (repeats every 2.6s)
  - Scale on hover/tap
  - Smooth transition

#### Carousel Behavior:
- Horizontal scroll with snap points (`snap-x snap-center`)
- Smooth scroll behavior
- Scroll position indicators (animated dots below cards)
- Card active state determined by viewport intersection
- Responsive: Full width on mobile, 384px (w-96) on larger screens

**Card Animations**:
```
- Initial: opacity-60%, scale-95%
- Active: opacity-100%, scale-102%
- Hover: scale-105%, enhanced shadow
- Transition: 0.4s smooth
```

### 3. **ROI Comparison Section**

#### Animated Ticker:
- 5 rotating value statements
- Slides up every 4 seconds with 3-second pause
- Shows real-world cost comparisons

#### Main ROI Message:
- "ROI in month one. Guaranteed."
- Subtitle with key benefits
- Scale animation (1 → 1.02 → 1) every 2 seconds

---

## ✨ Animation Details

### Background Animations
1. **Grid Pattern**: SVG pattern (50px grid) with #625bff stroke at 5% opacity
2. **Top Dash Line**: Marching animation (8s), moves right to left
3. **Bottom Dash Line**: Marching animation (10s), moves left to right
4. Both use CSS repeating gradients for dash effect

### Entrance Animations
- **Header**: All items animate in with stagger children (0.2s delay between)
- **Cards**: Staggered scale-fade when viewport enters (6 items max)
- **Features**: Staggered with 50ms delay per item

### Interactive Animations
- **Hover**: Cards scale to 105% with shadow enhancement
- **Active State**: Selected card scales to 102% with color change
- **Button Ripple**: White overlay that scales out (0.6s, repeats every 2s)
- **Badge Pulse**: Popular badge scales 1→1.05→1 every 2s

### Viewport-Triggered Animations
- All major sections trigger on scroll with `whileInView`
- Animations run once (`once: true`)
- Trigger at 30% viewport (`amount: 0.3`)

---

## 🎯 Accessibility Features

- **Keyboard Navigation**: 
  - Carousel dots can be clicked to scroll to specific cards
  - Interactive elements are tab-navigable
  - Proper focus states

- **Mobile Friendly**:
  - Full-width cards on mobile (responsive width)
  - Touch-friendly scroll and tap targets
  - Snap scrolling for better UX

- **Responsive Design**:
  - `md:` breakpoints for tablet+
  - Padding adjusts with screen size
  - Text scales appropriately

- **Reduced Motion Support**:
  - Already included in globals.css
  - Respect `prefers-reduced-motion` if needed

---

## 🛠️ Technology Stack

- **React 19.2.0** with TypeScript
- **Framer Motion 12.23.24**: Animation library
- **Tailwind CSS 4**: Styling
- **Next.js 16**: Framework

### Key Dependencies
```json
{
  "framer-motion": "^12.23.24",
  "react": "19.2.0",
  "react-dom": "19.2.0",
  "tailwindcss": "^4"
}
```

---

## 📋 Props & State

### Internal State
```typescript
const [activeCardId, setActiveCardId] = useState(1)
const [activeCountIndex, setActiveCountIndex] = useState(0)
const [canScrollLeft, setCanScrollLeft] = useState(false)
const [canScrollRight, setCanScrollRight] = useState(true)
```

### Data Structure
```typescript
interface PricingCard {
  id: number
  title: string
  price: string
  description: string
  features: string[]
  cta: string
}
```

---

## 🎬 Animation Timings

| Animation | Duration | Repeat | Easing |
|-----------|----------|--------|--------|
| Dashed Underline | 4s | Infinite | linear |
| Top Dash Background | 8s | Infinite | linear |
| Bottom Dash Background | 10s | Infinite | linear |
| Card Entrance | 0.6s | Once | default |
| Edge Glow (Left) | 3s | Infinite | easeInOut |
| Edge Glow (Right) | 4s | Infinite | easeInOut |
| Badge Pulse | 2s | Infinite | default |
| CTA Button Ripple | 0.6s | Every 2s | default |
| ROI Scale | 2s | Infinite | easeInOut |
| Ticker Slide | 0.6s | Every 4s | easeInOut |
| Feature List Items | 0.4s | Once | default (50ms stagger) |

---

## 🚀 Usage

### Import and Use
```typescript
import Payment from '@/components/products/CI/Payment'

export default function PricingPage() {
  return (
    <>
      <Payment />
    </>
  )
}
```

### Customization

#### Change Colors
Replace all `#625bff` instances with your brand color:
- In `text-[#625bff]`
- In `border-[#625bff]`
- In `bg-[#625bff]`
- In inline styles

#### Modify Pricing Tiers
Edit the `pricingCards` array:
```typescript
const pricingCards: PricingCard[] = [
  {
    id: 1,
    title: 'Your Tier Name',
    price: '$X,XXX',
    description: 'Your value prop',
    features: ['Feature 1', 'Feature 2', ...],
    cta: 'Button Text',
  },
  // ... more cards
]
```

#### Adjust ROI Statements
Edit the `roiProof` array:
```typescript
const roiProof = [
  'Your statement 1',
  'Your statement 2',
  // ... more statements
]
```

#### Change Animation Timings
Search for `duration: X` in motion components and adjust:
```typescript
animate={{
  opacity: [0.3, 0.8, 0.3],
}}
transition={{
  duration: 3, // Change this value
  repeat: Infinity,
}}
```

---

## 🔧 Common Issues & Solutions

### Issue: Animations feel slow
**Solution**: Decrease `duration` values in transition props

### Issue: Cards don't scroll smoothly on mobile
**Solution**: Ensure you have `snap-x snap-center` classes on scroll container

### Issue: Text is hard to read
**Solution**: Increase `opacity` on background elements from `opacity-5` or `opacity-20`

### Issue: Colors don't match brand
**Solution**: Search/replace `#625bff` with your brand color in inline styles

---

## 📱 Responsive Breakpoints

- **Mobile**: Default styles apply
- **Tablet (md)**: 
  - Text sizes increase (text-5xl → text-6xl)
  - Card width: 384px (w-96)
  - Padding increases
  - Pricing text becomes larger

- **Desktop**: Full width utilized with proper spacing

---

## 🎨 CSS Classes Used

### Layout
- `w-full`, `max-w-7xl`, `mx-auto`
- `py-24`, `px-4`, `md:px-8`
- `flex`, `gap-8`, `space-y-4`

### Typography
- `text-5xl`, `text-6xl`, `text-4xl`, `text-3xl`, `text-2xl`, `text-xl`, `text-lg`
- `font-black`, `font-bold`, `font-semibold`

### Colors
- `text-black`, `text-white`, `text-gray-*`
- `bg-white`, `bg-gradient-to-r`
- `border-gray-200`, `border-[#625bff]/10`

### Effects
- `rounded-xl`, `rounded-full`, `rounded-2xl`
- `shadow-lg`, `shadow-2xl`
- `opacity-*`
- `overflow-hidden`, `overflow-x-auto`

---

## 🎯 Performance Notes

- Component uses `whileInView` to trigger animations only when visible
- Scroll listener is cleaned up on unmount
- Resize listener is cleaned up on unmount
- Uses CSS for background animations (more efficient than JS)
- SVG grid is rendered once, not animated

---

## 📄 License

This component is part of the REMI fintech website project.

---

## 🔗 Related Files

- Global styles: `src/styles/globals.css`
- Tailwind config: `tailwind.config.ts` (implicit with @tailwindcss/postcss)
- Used in: `src/pages/product/CI/index.tsx` (or relevant product page)

---

**Last Updated**: October 26, 2025
**Component Version**: 1.0.0
