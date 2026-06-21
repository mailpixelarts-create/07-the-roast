# THE ROAST — Cinematic Coffee Roastery

A premium specialty coffee roastery website designed like a luxury industrial gallery. Fire, steel, machinery, smoke and craftsmanship become the entire digital experience.

## Brand Identity

- **Aesthetic:** Industrial Luxury, Coffee Craft, Black Steel, Heat, Smoke, Precision, Editorial, Minimalism, Machinery
- **Color Palette:** Charcoal #171717, Coffee Brown #50372D, Steel #8A8D90, Cream #F5F0EA, Copper #B76D42, Orange Ember #FF8C42, White Smoke #F6F6F6
- **Typography:** Neue Haas Grotesk Display (Display), Suisse International (Body), IBM Plex Mono (Mono)

## Tech Stack

- **Build:** Vite 6 + TypeScript
- **Framework:** React 18
- **Styling:** SCSS with design tokens
- **Animation:** GSAP 3 + ScrollTrigger
- **Smooth Scroll:** Lenis
- **Text Splitting:** SplitType
- **3D:** Three.js basics

## Project Structure

```
07-the-roast/
├── src/
│   ├── main.tsx
│   ├── App.tsx
│   ├── styles/
│   │   ├── variables.scss        # Design tokens, mixins, breakpoints
│   │   ├── global.scss           # Reset, base styles, utilities
│   │   └── animations.scss       # Keyframe definitions
│   ├── components/
│   │   ├── Loader/               # Cinematic loading sequence
│   │   ├── Navigation/           # Fixed nav with mobile menu
│   │   ├── Hero/                 # Full-screen with drum, fire, smoke
│   │   ├── TheRoastery/          # Steel panels, copper lines, images
│   │   ├── RoastingProcess/      # Interactive timeline, heat meter
│   │   ├── CoffeeOrigins/        # World map, shipping routes
│   │   ├── SignatureBeans/       # Product cards with flavor wheels
│   │   ├── FactoryGallery/       # Editorial grid, fullscreen transitions
│   │   ├── BrewingScience/       # Extraction curves, chemistry
│   │   ├── Team/                 # Team member cards
│   │   ├── Awards/               # Counter animations, trophy
│   │   ├── Contact/              # Contact form + info
│   │   ├── Footer/               # Brand footer with credits
│   │   └── Cursor/               # Custom cursor with spark emission
│   ├── hooks/
│   │   ├── useLenis.ts           # Smooth scroll setup
│   │   ├── useScrollTrigger.ts   # GSAP ScrollTrigger wrapper
│   │   └── useSplitType.ts       # Text splitting hook
│   ├── animations/
│   │   ├── loader.ts             # Loading sequence animation
│   │   ├── hero.ts               # Hero parallax and reveals
│   │   ├── sections.ts           # Section reveal animations
│   │   ├── gallery.ts            # Gallery transitions
│   │   └── cursor.ts             # Cursor follow and sparks
│   └── utils/
│       └── constants.ts          # Brand data, origins, beans, team
├── index.html
├── package.json
├── tsconfig.json
├── tsconfig.node.json
├── vite.config.ts
└── README.md
```

## Getting Started

```bash
cd 07-the-roast
npm install
npm run dev
```

## Sections

1. **Loader** — Dark screen, glowing ember, fire ignites, bean drops, drum spins, logo through smoke
2. **Hero** — Massive roasting drum, rotating beans, fire glow, rising smoke, split-text animation
3. **The Roastery** — Steel panels reveal, images from darkness, copper lines animate
4. **Roasting Process** — Interactive timeline, bean travel, heat meter, extraction curve
5. **Coffee Origins** — Interactive world map, country cards, animated shipping routes
6. **Signature Beans** — Luxury product cards, hover rotates coffee bags, ingredient wheel
7. **Factory Gallery** — Editorial grid, full-screen transitions, industrial overlays
8. **Brewing Science** — Animated extraction curves, coffee chemistry cards
9. **Team** — Craftspeople profiles with portrait frames
10. **Awards** — Counter animations, trophy reveal, magazine covers marquee
11. **Contact** — Form + info with social links
12. **Footer** — Brand credits

## Credits

A LOOKBOOK Studio Experience, &copy; Norman James
Made with &#10084; by Empathy Studio
