# Nicole Yahaya — Portfolio Website

A Next.js + TypeScript portfolio with dark/gold aesthetic, particle animations, scroll-triggered reveals, and count-up stats.

---

## Quick Start

```bash
cd nicole-portfolio
npm install
npm run dev
# Open http://localhost:3000
```

---

## Project Structure

```
src/
  app/
    layout.tsx        # Root layout + metadata
    page.tsx          # Assembles all sections
    globals.css       # CSS variables, fonts, base styles
  components/
    Navbar            # Fixed nav with mobile menu
    Hero              # Landing section + particle canvas
    About             # Bio + image
    Stats             # Count-up numbers
    Services          # 6-card services grid
    Portfolio         # Filterable work grid
    Speaking          # Events timeline + image row
    Contact           # Contact form
    Footer
    Cursor            # Custom animated cursor
    Noise             # Grain overlay
  hooks/
    useScrollReveal   # Intersection Observer hook
```

---

## Inserting Images

All image slots are clearly marked with comments. Here's every location:

### 1. Hero Image (`src/components/Hero.tsx`)
- Find the `{/* ── INSERT HERO IMAGE HERE ── */}` comment
- Replace the placeholder div with:
```tsx
import Image from 'next/image';
<Image src="/images/hero.jpg" alt="Nicole Yahaya" fill style={{ objectFit: 'cover' }} />
```
- Place image at: `public/images/hero.jpg`
- Recommended size: **800 × 1000px**

### 2. About Image (`src/components/About.tsx`)
- Find `{/* ── INSERT ABOUT IMAGE HERE ── */}`
- Replace with:
```tsx
<Image src="/images/about.jpg" alt="Nicole Yahaya" fill style={{ objectFit: 'cover' }} />
```
- Place image at: `public/images/about.jpg`
- Recommended size: **600 × 700px**

### 3. Portfolio Images (`src/components/Portfolio.tsx`)
- 6 portfolio cards, each marked with `{/* ── INSERT PORTFOLIO IMAGE HERE ── */}`
- Replace each placeholder with:
```tsx
<Image src={`/images/portfolio-${w.id}.jpg`} alt={w.title} fill style={{ objectFit: 'cover' }} />
```
- Place images at: `public/images/portfolio-1.jpg` through `portfolio-6.jpg`
- Recommended size: **600 × 400px** each

### 4. Speaking Images (`src/components/Speaking.tsx`)
- 3 image blocks for event photos
- Replace each `imgPlaceholder` div with:
```tsx
<Image src={`/images/speaking-${n}.jpg`} alt="Speaking event" fill style={{ objectFit: 'cover' }} />
```
- Place images at: `public/images/speaking-1.jpg` through `speaking-3.jpg`
- Recommended size: **500 × 380px** each

---

## Customisation

### Update Stats
Edit the `stats` array in `src/components/Stats.tsx`

### Update Portfolio Works
Edit the `works` array in `src/components/Portfolio.tsx`  
Update titles, categories, descriptions and add real links

### Update Speaking Events
Edit the `events` array in `src/components/Speaking.tsx`

### Update Contact Links
In `src/components/Contact.tsx` and `Footer.tsx`:
- Update the email address
- Update YouTube / TikTok URLs

### Wire Up the Contact Form
In `src/components/Contact.tsx`, replace the `handleSubmit` function with your email service.
Recommended: [Resend](https://resend.com), [Formspree](https://formspree.io), or a Next.js API route.

### Update Metadata
In `src/app/layout.tsx`, update the `metadata` object with the correct URL and OG image.

---

## Color Palette

| Variable       | Value     | Usage               |
|----------------|-----------|---------------------|
| `--black`      | `#080808` | Primary background  |
| `--dark`       | `#0f0f0f` | Section backgrounds |
| `--gold`       | `#c9a84c` | Accent color        |
| `--gold-light` | `#e8c97a` | Hover states        |
| `--white`      | `#f5f0e8` | Primary text        |
| `--white-dim`  | `#b8b0a0` | Secondary text      |

---

## Fonts
- **Cormorant Garamond** — Display headings (serif, elegant)
- **Syne** — UI labels and body text
- **DM Mono** — Labels, tags, mono accents

---

## Deploy to Vercel

```bash
npm install -g vercel
vercel
```

Or push to GitHub and import at [vercel.com](https://vercel.com).
