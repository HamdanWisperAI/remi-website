/**
 * Advanced Animation & Customization Options for Pricing Component
 * 
 * This file provides examples of how to extend and customize animations
 * in the Payment/Pricing component.
 */

/**
 * ╔════════════════════════════════════════════════════════════════════════════╗
 * ║              ANIMATION TIMING REFERENCE & CUSTOMIZATION                    ║
 * ╚════════════════════════════════════════════════════════════════════════════╝
 */

export const ANIMATION_TIMINGS = {
  // Header Animations
  header: {
    heading_entrance: 0.6, // seconds
    heading_stagger: 0.2,
    underline_march: 4,
    subtitle_entrance: 0.6,
  },

  // Card Animations
  cards: {
    entrance: 0.6,
    entrance_stagger: 0.2,
    hover_scale: 0.3,
    edge_glow_left: 3,
    edge_glow_right: 4,
    edge_glow_right_delay: 0.5,
    badge_pulse: 2,
    focus_scale: 0.3,
  },

  // Button Animations
  buttons: {
    ripple_duration: 0.6,
    ripple_repeat_interval: 2,
    hover_scale: 0.2,
    tap_scale: 0.1,
  },

  // Background Animations
  background: {
    top_dash_line: 8,
    bottom_dash_line: 10,
    grid_pattern: 'static',
  },

  // ROI Section
  roi: {
    ticker_slide: 0.6,
    ticker_interval: 4,
    scale_pulse: 2,
  },

  // Features List
  features: {
    stagger: 0.05, // per item
    entrance: 0.4,
  },
}

/**
 * ╔════════════════════════════════════════════════════════════════════════════╗
 * ║                 EASING FUNCTIONS & ALTERNATIVES                            ║
 * ╚════════════════════════════════════════════════════════════════════════════╝
 */

export const EASING = {
  // Framer Motion easings
  default: 'easeInOut',
  out: 'easeOut',
  in: 'easeIn',
  smooth: [0.4, 0, 0.2, 1],
  bounce: [0.68, -0.55, 0.265, 1.55],
  smooth_in_out: [0.4, 0.0, 0.2, 1.0],
  ease_out_quad: [0.25, 0.46, 0.45, 0.94],
  ease_out_cubic: [0.215, 0.61, 0.355, 1],
  ease_out_quart: [0.165, 0.84, 0.44, 1],
  ease_out_quint: [0.23, 1, 0.32, 1],
  ease_out_sine: [0.39, 0.575, 0.565, 1],
  ease_out_expo: [0.19, 1, 0.22, 1],
  ease_out_circ: [0.075, 0.82, 0.165, 1],
  ease_out_back: [0.175, 0.885, 0.32, 1.275],
}

/**
 * ╔════════════════════════════════════════════════════════════════════════════╗
 * ║              PRESET ANIMATION CONFIGURATIONS                               ║
 * ╚════════════════════════════════════════════════════════════════════════════╝
 */

// PRESET 1: Minimal (Reduced Motion Friendly)
export const ANIMATION_PRESET_MINIMAL = {
  header_heading: {
    duration: 0.4,
    scale: [0.9, 1],
    opacity: [0, 1],
  },
  card_entrance: {
    duration: 0.4,
    scale: [0.95, 1],
  },
  background_animation: false,
  glow_animations: false,
  button_ripple: false,
}

// PRESET 2: Balanced (Default)
export const ANIMATION_PRESET_BALANCED = {
  header_heading: {
    duration: 0.6,
    scale: [0.8, 1],
    opacity: [0, 1],
  },
  card_entrance: {
    duration: 0.6,
    scale: [0.95, 1.02],
  },
  background_animation: true,
  glow_animations: true,
  button_ripple: true,
}

// PRESET 3: Premium (Highly Animated)
export const ANIMATION_PRESET_PREMIUM = {
  header_heading: {
    duration: 0.8,
    scale: [0.7, 1.05, 1],
    opacity: [0, 1],
  },
  card_entrance: {
    duration: 0.8,
    scale: [0.85, 1.05, 1.02],
    rotate: [-2, 2, 0],
  },
  background_animation: true,
  glow_animations: true,
  button_ripple: true,
  enhanced_effects: true,
}

/**
 * ╔════════════════════════════════════════════════════════════════════════════╗
 * ║                  COLOR PALETTE PRESETS                                     ║
 * ╚════════════════════════════════════════════════════════════════════════════╝
 */

export const COLOR_PRESETS = {
  fintech_purple: {
    primary: '#625bff',
    accent: '#10b981',
    background: '#ffffff',
    text: '#171717',
    muted: '#6b7280',
  },

  tech_blue: {
    primary: '#0066ff',
    accent: '#00d4ff',
    background: '#ffffff',
    text: '#0a0a0a',
    muted: '#6b7280',
  },

  modern_indigo: {
    primary: '#6366f1',
    accent: '#ec4899',
    background: '#ffffff',
    text: '#1f2937',
    muted: '#6b7280',
  },

  premium_gray: {
    primary: '#1f2937',
    accent: '#f59e0b',
    background: '#ffffff',
    text: '#0a0a0a',
    muted: '#9ca3af',
  },

  vibrant_teal: {
    primary: '#14b8a6',
    accent: '#f97316',
    background: '#ffffff',
    text: '#0f172a',
    muted: '#64748b',
  },
}

/**
 * ╔════════════════════════════════════════════════════════════════════════════╗
 * ║                 VARIANT COMPONENT EXAMPLES                                 ║
 * ╚════════════════════════════════════════════════════════════════════════════╝
 */

/**
 * EXAMPLE 1: Slow Motion Version (for demos/presentations)
 * 
 * Apply these durations to all animations:
 * - All durations × 1.5
 * - All repeats stay the same
 * - For demo mode
 */
export const DEMO_MODE_MULTIPLIER = 1.5

/**
 * EXAMPLE 2: Dark Mode Version
 * 
 * Colors for dark background:
 */
export const DARK_MODE_COLORS = {
  primary: '#a78bfa', // lighter purple for dark bg
  accent: '#34d399',
  background: '#0f172a',
  text: '#f3f4f6',
  muted: '#d1d5db',
  card_bg: '#1e293b',
  border: '#334155',
}

/**
 * EXAMPLE 3: High Contrast Version (Accessibility)
 * 
 * For WCAG AAA compliance:
 */
export const HIGH_CONTRAST_COLORS = {
  primary: '#0000cc',
  accent: '#ff6600',
  background: '#ffffff',
  text: '#000000',
  muted: '#333333',
  borders: '#000000',
}

/**
 * ╔════════════════════════════════════════════════════════════════════════════╗
 * ║              RESPONSIVE BREAKPOINT CUSTOMIZATION                           ║
 * ╚════════════════════════════════════════════════════════════════════════════╝
 */

export const RESPONSIVE_CONFIG = {
  mobile: {
    card_width: '100%', // w-full
    card_padding: 'px-4', // 1rem
    text_heading: 'text-4xl',
    text_price: 'text-4xl',
    section_padding: 'py-16 px-4',
  },

  tablet: {
    card_width: '384px', // w-96
    card_padding: 'px-6',
    text_heading: 'text-5xl',
    text_price: 'text-5xl',
    section_padding: 'py-20 px-8',
  },

  desktop: {
    card_width: '384px', // w-96
    card_padding: 'px-8',
    text_heading: 'text-6xl',
    text_price: 'text-5xl',
    section_padding: 'py-24 px-8',
  },

  widescreen: {
    card_width: '420px', // w-[420px]
    card_padding: 'px-8',
    text_heading: 'text-7xl',
    text_price: 'text-6xl',
    section_padding: 'py-32 px-12',
  },
}

/**
 * ╔════════════════════════════════════════════════════════════════════════════╗
 * ║                 ANIMATION SPEED PROFILES                                   ║
 * ╚════════════════════════════════════════════════════════════════════════════╝
 */

export const SPEED_PROFILES = {
  // For users with high performance devices
  performance: {
    entrance_multiplier: 1,
    background_multiplier: 1,
    ripple_multiplier: 1,
  },

  // Standard (default)
  standard: {
    entrance_multiplier: 1,
    background_multiplier: 1,
    ripple_multiplier: 1,
  },

  // Slower for accessibility
  accessible: {
    entrance_multiplier: 1.3,
    background_multiplier: 1.2,
    ripple_multiplier: 1.5,
  },

  // Very slow for presentations/walkthroughs
  showcase: {
    entrance_multiplier: 2,
    background_multiplier: 1.5,
    ripple_multiplier: 2,
  },
}

/**
 * ╔════════════════════════════════════════════════════════════════════════════╗
 * ║                 FEATURE FLAG CONFIGURATIONS                                ║
 * ╚════════════════════════════════════════════════════════════════════════════╝
 */

export const FEATURE_FLAGS = {
  // Animation toggles
  enable_background_animations: true,
  enable_glow_effects: true,
  enable_button_ripple: true,
  enable_scale_animations: true,
  enable_entrance_animations: true,

  // Feature toggles
  show_popular_badge: true,
  show_scroll_indicators: true,
  enable_scroll_snap: true,
  enable_keyboard_navigation: true,

  // ROI section
  enable_roi_ticker: true,
  enable_roi_pulse: true,

  // Accessibility
  respect_prefers_reduced_motion: true,
  high_contrast_mode: false,
}

/**
 * ╔════════════════════════════════════════════════════════════════════════════╗
 * ║              CUSTOM ANIMATION SEQUENCES                                    ║
 * ╚════════════════════════════════════════════════════════════════════════════╝
 */

/**
 * Sequential entrance animation for all cards
 * Card 1 → 0.3s → Card 2 → 0.3s → Card 3
 */
export const SEQUENTIAL_ENTRANCE = {
  card_1_delay: 0,
  card_2_delay: 0.3,
  card_3_delay: 0.6,
  total_duration: 0.9,
}

/**
 * Cascading wave entrance
 * Each feature in a card enters after previous one
 */
export const CASCADE_WAVE = {
  feature_item_delay: 0.08,
  heading_delay: 0,
  price_delay: 0.1,
  description_delay: 0.15,
  features_start_delay: 0.25,
}

/**
 * ╔════════════════════════════════════════════════════════════════════════════╗
 * ║                 PERFORMANCE OPTIMIZATION TIPS                              ║
 * ╚════════════════════════════════════════════════════════════════════════════╝
 */

/**
 * 1. USE WILL-CHANGE SPARINGLY
 *    - Only on elements with frequent animations
 *    - Remove after animation completes
 * 
 * 2. PREFER TRANSFORM & OPACITY
 *    - Fastest CSS properties to animate
 *    - Avoid animating dimensions (width, height)
 *    - Avoid animating left/top (use transform instead)
 * 
 * 3. USE CSS ANIMATIONS OVER JS
 *    - Current component already does this well
 *    - CSS animations run on GPU
 *    - More efficient for continuous animations
 * 
 * 4. THROTTLE SCROLL LISTENERS
 *    - Component already handles this with events
 *    - Add throttle to resize listener if needed
 * 
 * 5. LAZY LOAD ANIMATIONS
 *    - whileInView already implemented
 *    - Animations only trigger on viewport enter
 * 
 * 6. MONITOR PERFORMANCE
 *    - Chrome DevTools: Performance tab
 *    - Look for 60fps (16.67ms frame budget)
 *    - Use Lighthouse for overall metrics
 */

/**
 * ╔════════════════════════════════════════════════════════════════════════════╗
 * ║                 CSS UTILITY CLASSES FOR QUICK TWEAKS                       ║
 * ╚════════════════════════════════════════════════════════════════════════════╝
 */

/**
 * Add these to globals.css for quick overrides:
 * 
 * .pricing-no-animations * {
 *   animation: none !important;
 *   transition: none !important;
 * }
 * 
 * .pricing-fast-animations {
 *   --animation-multiplier: 0.5;
 * }
 * 
 * .pricing-slow-animations {
 *   --animation-multiplier: 1.5;
 * }
 * 
 * .pricing-high-contrast {
 *   --color-primary: #0000cc;
 *   --color-text: #000000;
 * }
 */

/**
 * ╔════════════════════════════════════════════════════════════════════════════╗
 * ║                 THEME SWITCHING EXAMPLE                                    ║
 * ╚════════════════════════════════════════════════════════════════════════════╝
 */

/**
 * To implement theme switching:
 * 
 * 1. Create a context for animation settings:
 * 
 *    const AnimationContext = createContext({
 *      colorPreset: COLOR_PRESETS.fintech_purple,
 *      animationPreset: ANIMATION_PRESET_BALANCED,
 *      speedProfile: SPEED_PROFILES.standard,
 *    })
 * 
 * 2. Use in component:
 * 
 *    const { colorPreset } = useContext(AnimationContext)
 *    const primaryColor = colorPreset.primary
 * 
 * 3. Apply to styles:
 * 
 *    <div style={{ borderColor: primaryColor }}>
 *      Content
 *    </div>
 */

export const EXAMPLE_THEME_CONTEXT = `
import { createContext, useState } from 'react'

export const ThemeContext = createContext()

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('fintech_purple')
  const [animationSpeed, setAnimationSpeed] = useState('standard')

  const value = {
    theme,
    setTheme,
    animationSpeed,
    setAnimationSpeed,
    colors: COLOR_PRESETS[theme],
    timings: ANIMATION_TIMINGS,
  }

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  )
}
`

export default {
  ANIMATION_TIMINGS,
  EASING,
  ANIMATION_PRESET_MINIMAL,
  ANIMATION_PRESET_BALANCED,
  ANIMATION_PRESET_PREMIUM,
  COLOR_PRESETS,
  DARK_MODE_COLORS,
  HIGH_CONTRAST_COLORS,
  RESPONSIVE_CONFIG,
  SPEED_PROFILES,
  FEATURE_FLAGS,
}
