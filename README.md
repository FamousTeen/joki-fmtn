# FMTN's Pilot Service Website

A professional pilot services website for gacha games built with **Nuxt 4** and **Tailwind CSS**. Features a gamified dark theme with neon accents, responsive design, and accessible components.

## 🎮 Supported Games

- **Honkai: Star Rail** - Full service packages
- **Zenless Zone Zero** - Full service packages
- **Coming Soon** - Waitlist for new games

## ✨ Features

- 🎨 Gamified dark theme with neon green/purple accents
- 📱 Fully responsive design (mobile-first)
- ♿ WCAG AA accessible with keyboard navigation
- ⚡ SSR-enabled for optimal SEO
- 🎬 Smooth animations and micro-interactions
- 📝 Google Form integration for orders
- 📸 Instagram testimonials integration (fallback-ready)

## 🛠️ Tech Stack

- **Framework**: Nuxt 4 (Vue 3 Composition API)
- **Styling**: Tailwind CSS v3 with custom theme
- **Fonts**: Inter + Orbitron (Google Fonts)
- **Build**: Vite
- **Deployment**: SSR/SSG ready

## 📁 Project Structure

```
app/
├── assets/css/main.css     # Global styles & Tailwind layers
├── components/
│   ├── HeroBanner.vue      # Hero section with game selector
│   ├── ServiceCard.vue     # Pricing card component
│   ├── ItemList.vue        # Service tier grid
│   ├── TestimonialsGallery.vue  # Reviews + Instagram
│   ├── ComingSoonTemplate.vue   # Countdown + waitlist
│   ├── FooterContact.vue   # Footer with social links
│   ├── NavBar.vue          # Navigation component
│   ├── GameSelector.vue    # Game navigation cards
│   └── ui/
│       ├── BaseButton.vue  # Reusable button
│       ├── Badge.vue       # Status badges
│       └── GlowCard.vue    # Interactive card
├── composables/
│   ├── useCountdown.ts     # Countdown timer logic
│   └── useTheme.ts         # Theme color utilities
├── layouts/
│   └── default.vue         # Main layout
└── pages/
    ├── index.vue           # Homepage
    └── games/
        ├── honkai-star-rail.vue
        ├── zenless-zone-zero.vue
        └── coming-soon.vue
```

## 🎨 Color Palette

| Token           | Hex       | Usage                           |
| --------------- | --------- | ------------------------------- |
| `primary`       | `#84cc16` | CTAs, highlights, active states |
| `primary-light` | `#a3e635` | Hover states, glow effects      |
| `accent`        | `#c026d3` | Secondary buttons, badges       |
| `bg-dark`       | `#0a0a0a` | Page background                 |
| `surface`       | `#171717` | Cards, containers               |
| `surface-light` | `#262626` | Elevated surfaces               |

## 🚀 Setup & Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Generate static site
npm run generate
```

## ⚙️ Configuration

### Environment Variables

Create a `.env` file:

```env
GOOGLE_FORM_URL=https://forms.gle/your-form-id
INSTAGRAM_HANDLE=fmtn_pilot
```

### Google Form Integration

The website links to a Google Form for order collection. To set up:

1. Create a Google Form with fields:
   - Email address
   - Game selection (HSR/ZZZ)
   - Service type (Daily/Weekly/Patch)
   - Account details (UID, server)
   - Additional notes

2. Update `GOOGLE_FORM_URL` in `.env`

3. **Privacy Note**: Add consent text explaining data collection

### Instagram Integration

Due to Instagram API limitations, the testimonials section uses:

1. **Primary**: Screenshot gallery (recommended)
2. **Fallback**: Direct link to Instagram profile

To add screenshots:

```vue
<TestimonialsGallery
  :instagram-screenshots="[
    {
      src: '/images/review-1.webp',
      alt: 'Customer review',
      caption: 'Great service!',
    },
  ]"
/>
```

## 🎯 Accessibility

- All interactive elements are keyboard navigable
- ARIA labels on buttons and links
- Skip-to-content link for screen readers
- Focus indicators meet WCAG AA contrast
- Semantic HTML structure

**Keyboard shortcuts:**

- `Tab` - Navigate interactive elements
- `Enter/Space` - Activate buttons/links
- `Escape` - Close mobile menu

## 📊 Lighthouse Targets

| Metric         | Target |
| -------------- | ------ |
| Performance    | 90+    |
| Accessibility  | 95+    |
| Best Practices | 95+    |
| SEO            | 95+    |

## 🔍 SEO Checklist

- [x] Meta titles and descriptions
- [x] Open Graph tags
- [x] Twitter cards
- [x] Semantic HTML (h1-h6, nav, main, footer)
- [x] robots.txt
- [x] Mobile-friendly viewport
- [x] Fast loading (lazy images, optimized fonts)

## 📱 Responsive Breakpoints

```css
sm: 640px   /* Mobile landscape */
md: 768px   /* Tablet */
lg: 1024px  /* Desktop */
xl: 1280px  /* Large desktop */
2xl: 1536px /* Extra large */
```

## 🧪 Testing Checklist

### Manual Tests

- [ ] Site builds without errors (`npm run build`)
- [ ] Hero loads with game selector
- [ ] Service cards display prices and CTAs
- [ ] Google Form links open in new tab
- [ ] Mobile navigation toggles correctly
- [ ] Keyboard navigation works on all pages
- [ ] Colors match design system palette

### Automated Tests

```bash
# Type checking
npm run typecheck

# Build verification
npm run build
```

## 🚢 Deployment

### Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Netlify

```toml
# netlify.toml
[build]
  command = "npm run build"
  publish = ".output/public"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

## 📝 Component Usage Examples

### ServiceCard

```vue
<ServiceCard
  variant="weekly"
  title="Weekly Package"
  description="Complete weekly coverage"
  :price="75000"
  :original-price="105000"
  :discount="29"
  price-period="week"
  :features="['Feature 1', 'Feature 2']"
  :is-popular="true"
  cta-url="https://forms.gle/xxx"
/>
```

### HeroBanner

```vue
<HeroBanner
  badge="Game Name"
  title-prefix="Brand"
  title-highlight="Service"
  description="Your tagline here"
  :show-game-selector="true"
  :games="[{ id: 'game1', name: 'Game 1', slug: 'game-1' }]"
/>
```

## 📄 License

MIT License - Feel free to use for personal or commercial projects.

---

Built with ❤️ by FMTN

````

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm dev

# yarn
yarn dev

# bun
bun run dev
````

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
