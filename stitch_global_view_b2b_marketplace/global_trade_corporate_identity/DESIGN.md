---
name: Global Trade Corporate Identity
colors:
  surface: '#f7f9fb'
  surface-dim: '#d8dadc'
  surface-bright: '#f7f9fb'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f4f6'
  surface-container: '#eceef0'
  surface-container-high: '#e6e8ea'
  surface-container-highest: '#e0e3e5'
  on-surface: '#191c1e'
  on-surface-variant: '#41484c'
  inverse-surface: '#2d3133'
  inverse-on-surface: '#eff1f3'
  outline: '#71787d'
  outline-variant: '#c1c7cc'
  surface-tint: '#36647a'
  primary: '#00374a'
  on-primary: '#ffffff'
  primary-container: '#1d4e63'
  on-primary-container: '#91bed7'
  inverse-primary: '#9fcde6'
  secondary: '#006d3d'
  on-secondary: '#ffffff'
  secondary-container: '#97f3b5'
  on-secondary-container: '#047240'
  tertiary: '#00374a'
  on-tertiary: '#ffffff'
  tertiary-container: '#154e65'
  on-tertiary-container: '#8cbed9'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#c0e8ff'
  primary-fixed-dim: '#9fcde6'
  on-primary-fixed: '#001e2b'
  on-primary-fixed-variant: '#1a4c61'
  secondary-fixed: '#9af6b8'
  secondary-fixed-dim: '#7ed99e'
  on-secondary-fixed: '#00210f'
  on-secondary-fixed-variant: '#00522d'
  tertiary-fixed: '#c0e8ff'
  tertiary-fixed-dim: '#9bcde9'
  on-tertiary-fixed: '#001e2b'
  on-tertiary-fixed-variant: '#124c63'
  background: '#f7f9fb'
  on-background: '#191c1e'
  surface-variant: '#e0e3e5'
typography:
  headline-xl:
    fontFamily: Outfit
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Outfit
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Outfit
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Outfit
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Outfit
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-md:
    fontFamily: Outfit
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
  headline-lg-mobile:
    fontFamily: Outfit
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 36px
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  container-max: 1280px
  gutter: 1.5rem
  margin-mobile: 1rem
  margin-desktop: 2.5rem
  unit: 4px
---

## Brand & Style
The design system is anchored in a **Corporate / Modern** aesthetic that emphasizes authority, global reach, and professional precision. It targets high-level stakeholders in international trade, logistics, and consulting. 

The visual language balances the stability of a deep navy blue with the growth-oriented energy of a vibrant corporate green. The interface uses generous whitespace and a "High-Contrast" approach to ensure maximum readability and a premium feel. Movement and depth are subtle, utilizing layered surfaces rather than aggressive effects, maintaining an atmosphere of institutional trust and modern efficiency.

## Colors
The palette is derived directly from the corporate mark, optimized for digital accessibility.

- **Primary (Navy Blue):** Used for headers, primary navigation, and foundational brand elements. It represents the "Global" aspect of the brand.
- **Secondary (Vibrant Green):** Reserved for actions, progress indicators, and accents. It represents "View" and growth.
- **Neutral (Slate/Light Gray):** Backgrounds utilize a very light cool gray (`#F8FAFC`) to maintain a clean, crisp environment.

### Category Coding
To aid navigation within complex data, a strict color-coding system is applied:
- **Agro/Energy:** High-saturation greens.
- **Technology:** Medium-tone blues.
- **Logistics:** Deep navy tones.
- **Consulting/Others:** Muted Slate/Teal tones to differentiate from active logistics.

## Typography
This design system utilizes **Outfit** across all levels to maintain a geometric, clean, and highly legible appearance. 

Headlines use tighter letter spacing and heavier weights to command attention, mirroring the bold presence of the corporate logo. Body text is set with generous line heights to ensure readability in long-form reports or data-heavy tables. Labels are frequently uppercase to distinguish them from interactive text elements.

## Layout & Spacing
The layout follows a **Fluid Grid** model with a maximum width container for desktop viewing. 

- **Desktop:** 12-column grid with 24px (1.5rem) gutters.
- **Tablet:** 8-column grid with 20px gutters.
- **Mobile:** 4-column grid with 16px margins.

The spacing rhythm is built on a 4px base unit. Component internal padding should always be a multiple of this unit (e.g., 8px, 16px, 24px). Vertical rhythm is maintained through consistent stack spacing between sections, typically 48px or 64px on desktop.

## Elevation & Depth
This design system employs **Tonal Layers** and **Low-Contrast Outlines** to create hierarchy without clutter.

1.  **Level 0 (Base):** Light gray background (`#F8FAFC`).
2.  **Level 1 (Cards/Containers):** Pure white surfaces with a 1px border in a very light slate (`#E2E8F0`).
3.  **Level 2 (Active/Hover):** A subtle, extra-diffused shadow (0px 4px 20px rgba(29, 78, 99, 0.05)) is applied only to interactive elements to suggest lift.

Depth is used sparingly to keep the interface feeling professional and "flat-modern," ensuring that data remains the focus.

## Shapes
The shape language is **Soft (0.25rem)**. This provides a professional edge that is not overly aggressive (sharp) nor too casual (rounded/pill). 

Buttons and input fields use the base 4px (0.25rem) radius. Larger components like cards or modal containers may scale up to 8px or 12px to maintain visual harmony with their larger surface area.

## Components

### Buttons
- **Primary:** Solid Deep Navy Blue (`#1D4E63`) with White text. Bold weight.
- **Secondary/Accent:** Solid Corporate Green (`#2E8B57`) with White text.
- **Ghost:** Transparent background with Navy border and text.

### Input Fields
- Outline style with 1px light slate border. 
- Focus state: 2px border in Primary Navy with a subtle blue outer glow.
- Labels are positioned above the field in `label-md` style.

### Category Chips
- Small, rounded labels used for data categorization.
- Backgrounds use a 10% opacity version of the category color, with the text using the full saturation color for contrast and accessibility.

### Cards
- White background, 1px border, 4px corner radius.
- Headers within cards should use the category color coding as a top-border accent (3px height) to immediately identify the content type.

### Lists & Tables
- Data-heavy tables use "Zebra Striping" with the base neutral color.
- Row heights are generous (min 48px) to accommodate the Outfit body text comfortably.