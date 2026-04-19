# 📸 How to Add Your Images

Place all your images inside the `public/images/` folder.

---

## Required Images

| File name             | Used in         | Recommended size |
|-----------------------|-----------------|------------------|
| `hero.jpg`            | Hero section    | 800 × 1000 px    |
| `about.jpg`           | About section   | 600 × 700 px     |
| `portfolio-1.jpg`     | Portfolio card  | 600 × 400 px     |
| `portfolio-2.jpg`     | Portfolio card  | 600 × 400 px     |
| `portfolio-3.jpg`     | Portfolio card  | 600 × 400 px     |
| `portfolio-4.jpg`     | Portfolio card  | 600 × 400 px     |
| `portfolio-5.jpg`     | Portfolio card  | 600 × 400 px     |
| `portfolio-6.jpg`     | Portfolio card  | 600 × 400 px     |
| `speaking-1.jpg`      | Speaking row    | 500 × 380 px     |
| `speaking-2.jpg`      | Speaking row    | 500 × 380 px     |
| `speaking-3.jpg`      | Speaking row    | 500 × 380 px     |

---

## Steps for Each Section

### Hero Image
1. Open `src/components/Hero.tsx`
2. Find the `{/* <Image` comment block
3. Remove the `<div className={styles.placeholderInner}>...</div>`
4. Uncomment the `<Image ... />` tag

### About Image
1. Open `src/components/About.tsx`
2. Find the `{/* <Image` comment block
3. Remove the placeholder div, uncomment the `<Image>` tag

### Portfolio Images
1. Open `src/components/Portfolio.tsx`
2. In the `works` array, for each item set:
   ```js
   image: '/images/portfolio-1.jpg',  // change number for each
   ```
   The `<Image>` will appear automatically when `image` is non-empty.

### Speaking Images
1. Open `src/components/Speaking.tsx`
2. Find each `{/* <Image` comment (there are 3)
3. Remove the placeholder div inside each block, uncomment the `<Image>` tag

---

## Tips
- `.jpg`, `.png`, `.webp` all work fine
- Portrait photos work best for Hero and About
- Landscape photos work best for Portfolio and Speaking
- You can rename images anything — just update the `src` path to match
