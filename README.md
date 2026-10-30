# Nicole Yahaya — Portfolio (v2)

Next.js 15 · React 19 · TypeScript · CSS Modules · Framer Motion. Fully static, self-hosted fonts, no tracking.

## Run
```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build
```

## Edit content
Every word, number, link and video lives in **`src/data/site.ts`**. Components only handle layout.

| To change…            | Edit in `site.ts`                    |
|-----------------------|--------------------------------------|
| Email / socials       | `site`, `socials`                    |
| Hero numbers          | `heroStats`                          |
| Keynote list          | `events`, `featuredKeynote`          |
| YouTube / TikTok work | `works` (`videoId` = the ID in the URL) |
| Services, impact      | `services`, `impact`                 |
| Testimonials          | `voices`                             |

Images are in `public/images`, the keynote clip in `public/video`. Replace files keeping the same names, or update the paths in `site.ts`.

## Deploy (Vercel)
Push to GitHub and import at vercel.com. Optional env var: `NEXT_PUBLIC_SITE_URL=https://your-domain` (used for SEO, sitemap and share previews).

## What changed vs v1
- Removed custom cursor, UI sound effects, grain overlay and particle deps (distracting, accessibility and performance cost).
- Media: 62 MB → under 3 MB (photos resized, keynote clip re-encoded).
- Next 14.2.3 → 15.5 (patched), unused packages dropped, CSP tightened, fonts self-hosted.
- Accessibility: skip link, keyboard-friendly native `<dialog>` video player, reduced-motion support, proper landmarks and labels.
- SEO: metadata, Open Graph image, JSON-LD Person schema, sitemap, robots.
