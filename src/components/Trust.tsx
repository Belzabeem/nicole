'use client';
import { motion } from 'framer-motion';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import styles from './Trust.module.css';

const brands = [
  { name: 'Xiaomi', role: 'Official Creative Manager & Brand Partner' },
  { name: 'Redmi', role: 'Product Reviewer & Launch Speaker' },
  { name: 'POCO', role: 'Launch Event Keynote Speaker' },
];

/*
  Real feedback received from fellow content creators via Instagram DMs.
  Screenshots provided — messages reproduced exactly as sent.
  avatarUrl: drop a real image at public/images/pfp-<slug>.jpg to replace initials.
*/
const testimonials = [
  {
    quote: 'Osheyyyy, you were amazing on stage 🙌❤️',
    name: 'valorreviews',
    handle: '@valorreviews',
    role: 'Tech Content Creator',
    initial: 'V',
    avatarUrl: '/images/pfp-valorreviews.jpg',
    platform: 'instagram',
  },
  {
    quote: 'You did really great! Even when the clicker didn\'t work 👏👏👏❤️',
    name: 'Fisayo F.',
    handle: '@fisayofosudo',
    role: 'Content Creator',
    initial: 'F',
    avatarUrl: '/images/pfp-fisayofosudo.jpg',
    platform: 'instagram',
  },
  {
    quote: "Nicole's ability to break down complex tech into clear, engaging stories is exactly what our audience needs. She represents the brand with poise and authority.",
    name: 'Xiaomi Nigeria',
    handle: '@xiaominigeria',
    role: 'Brand Partner',
    initial: 'X',
    avatarUrl: null,
    platform: 'brand',
  },
];

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="11" height="11">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
    </svg>
  );
}

export default function Trust() {
  const { ref, visible } = useScrollReveal(0.1);

  return (
    <section id="trust" className={styles.trust} ref={ref}>
      <div className={styles.inner}>

        <motion.p className="section-label"
          initial={{ opacity: 0, y: 20 }} animate={visible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
          Brand Partnerships
        </motion.p>
        <motion.h2 className={styles.heading}
          initial={{ opacity: 0, y: 30 }} animate={visible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, delay: 0.1 }}>
          Trusted by <em>Leading Brands</em>
        </motion.h2>

        {/* Brand Badges */}
        <motion.div className={styles.brands}
          initial={{ opacity: 0, y: 30 }} animate={visible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, delay: 0.2 }}>
          {brands.map((b, i) => (
            <motion.div key={b.name} className={styles.brandCard}
              initial={{ opacity: 0, scale: 0.9 }} animate={visible ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}>
              <span className={styles.brandName}>{b.name}</span>
              <span className={styles.brandRole}>{b.role}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Section label for testimonials */}
        <motion.p className={styles.feedbackLabel}
          initial={{ opacity: 0, y: 20 }} animate={visible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.35 }}>
          What people are saying
        </motion.p>

        {/* Testimonials */}
        <div className={styles.testimonials}>
          {testimonials.map((t, i) => (
            <motion.div key={t.name} className={styles.testimonialCard}
              initial={{ opacity: 0, y: 40 }} animate={visible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.4 + i * 0.15 }}>

              {/* Quote mark */}
              <div className={styles.quoteIcon}>&ldquo;</div>

              {/* The message */}
              <p className={styles.quoteText}>{t.quote}</p>

              {/* Avatar + name row */}
              <div className={styles.quoteMeta}>
                <div className={styles.avatarWrap}>
                  {t.avatarUrl ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={t.avatarUrl}
                      alt={t.name}
                      className={styles.avatarImg}
                      onError={(e) => {
                        /* fallback to initial if image 404s */
                        (e.currentTarget as HTMLImageElement).style.display = 'none';
                        const next = e.currentTarget.nextElementSibling as HTMLElement;
                        if (next) next.style.display = 'flex';
                      }}
                    />
                  ) : null}
                  <div
                    className={styles.avatarInitial}
                    style={{ display: t.avatarUrl ? 'none' : 'flex' }}
                  >
                    {t.initial}
                  </div>
                </div>

                <div className={styles.quoteInfo}>
                  <p className={styles.quoteName}>{t.name}</p>
                  <div className={styles.quoteHandleRow}>
                    {t.platform === 'instagram' && <InstagramIcon />}
                    <span className={styles.quoteHandle}>{t.handle}</span>
                  </div>
                  <p className={styles.quoteRole}>{t.role}</p>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
