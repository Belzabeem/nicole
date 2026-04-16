'use client';
import { motion } from 'framer-motion';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import styles from './Trust.module.css';

const brands = [
  { name: 'Xiaomi', role: 'Official Creative Manager & Brand Partner' },
  { name: 'Redmi', role: 'Product Reviewer & Launch Speaker' },
  { name: 'POCO', role: 'Launch Event Keynote Speaker' },
];

const testimonials = [
  {
    quote: "Nicole's ability to break down complex tech into clear, engaging stories is exactly what our audience needs. She represents the brand with poise and authority.",
    name: 'Xiaomi Nigeria',
    role: 'Brand Partner',
    initial: 'X',
  },
  {
    quote: "Her newsletter SmartSync Living grew to 800+ subscribers in the first month — the kind of organic trust-building that money simply cannot buy.",
    name: 'SmartSync Living',
    role: 'Newsletter Community',
    initial: 'S',
  },
];

export default function Trust() {
  const { ref, visible } = useScrollReveal(0.1);

  return (
    <section id="trust" className={styles.trust} ref={ref}>
      <div className={styles.inner}>
        <motion.p
          className="section-label"
          initial={{ opacity: 0, y: 20 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Brand Partnerships
        </motion.p>
        <motion.h2
          className={styles.heading}
          initial={{ opacity: 0, y: 30 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          Trusted by <em>Leading Brands</em>
        </motion.h2>

        {/* Brand Badges */}
        <motion.div
          className={styles.brands}
          initial={{ opacity: 0, y: 30 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {brands.map((b, i) => (
            <motion.div
              key={b.name}
              className={styles.brandCard}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={visible ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
            >
              <span className={styles.brandName}>{b.name}</span>
              <span className={styles.brandRole}>{b.role}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Testimonials */}
        <div className={styles.testimonials}>
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              className={styles.testimonialCard}
              initial={{ opacity: 0, y: 40 }}
              animate={visible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.4 + i * 0.15 }}
            >
              <div className={styles.quoteIcon}>&ldquo;</div>
              <p className={styles.quoteText}>{t.quote}</p>
              <div className={styles.quoteMeta}>
                <div className={styles.quoteAvatar}>{t.initial}</div>
                <div>
                  <p className={styles.quoteName}>{t.name}</p>
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
