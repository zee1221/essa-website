# ESSA — Ethiopian Street Sports Association Website

A modern, production-ready Next.js website for the Ethiopian Street Sports Association.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Open http://localhost:3000
```

## 🌐 Deploy to Vercel

1. Push this folder to a GitHub repository
2. Go to [vercel.com](https://vercel.com) and import the repo
3. Vercel auto-detects Next.js — click Deploy
4. Your site goes live in ~60 seconds

Or use the Vercel CLI:
```bash
npm i -g vercel
vercel
```

## 📁 Project Structure

```
essa/
├── app/                    # Next.js App Router pages
│   ├── page.tsx            # Home page
│   ├── about/page.tsx
│   ├── programs/page.tsx
│   ├── events/page.tsx
│   ├── gallery/page.tsx
│   ├── donate/page.tsx
│   ├── contact/page.tsx
│   ├── layout.tsx          # Root layout + metadata
│   └── globals.css         # Global styles & design tokens
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx      # Sticky navbar with mobile menu
│   │   └── Footer.tsx      # Full footer with newsletter
│   ├── sections/           # All page sections
│   │   ├── HeroSection.tsx
│   │   ├── AboutSection.tsx
│   │   ├── ProgramsSection.tsx
│   │   ├── ImpactSection.tsx
│   │   ├── GallerySection.tsx
│   │   ├── TestimonialsSection.tsx
│   │   ├── EventsSection.tsx
│   │   ├── PartnersSection.tsx
│   │   ├── DonateSection.tsx
│   │   └── ContactSection.tsx
│   └── ui/
│       ├── EssaLogo.tsx    # SVG logo component
│       ├── SectionHeader.tsx
│       └── AnimatedCounter.tsx
├── lib/
│   ├── data.ts             # All site content/data
│   └── utils.ts            # Utility functions
├── tailwind.config.ts      # Tailwind + ESSA design tokens
└── vercel.json             # Vercel deployment config
```

## 🎨 Design System

**Colors:**
- Green: `#078930` — Primary brand
- Yellow: `#FCDD09` — Accent / highlights
- Red: `#DA121A` — Secondary accent
- Dark: `#0a0a0a` — Background

**Typography:**
- Display: Bebas Neue (headings)
- Body: Manrope (text)
- Mono: JetBrains Mono (labels)

**Utilities (globals.css):**
- `.glass` — Glassmorphism card
- `.eth-pattern` — Ethiopian geometric background
- `.text-gradient-gold` — Gold gradient text
- `.text-gradient-tri` — Tri-color gradient text
- `.section-label` — Small uppercase mono label
- `.eth-bar` — Ethiopian flag horizontal bar

## ✏️ Customization

All site content lives in `lib/data.ts`:
- Edit stats, programs, events, testimonials, gallery images
- All colors are CSS variables in `globals.css`
- Swap Unsplash URLs for real Ethiopian photography

## 📦 Tech Stack

- **Next.js 15** — App Router, SSR, image optimization
- **Tailwind CSS** — Utility-first styling
- **Framer Motion** — Animations and transitions
- **Lucide React** — Icons
- **TypeScript** — Type safety

## 📄 License

Ethiopian Street Sports Association © 2025. All rights reserved.
