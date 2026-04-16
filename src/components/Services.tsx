'use client';
import { motion } from 'framer-motion';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import styles from './Services.module.css';

const services = [
  { num: '01', title: 'Real-World Tech Testing', desc: 'In-depth smartphone and AI product reviews grounded in hands-on experience — not just spec sheets.', tags: ['Smartphones', 'AI Tools', 'Reviews'] },
  { num: '02', title: 'First Impressions & Unboxing', desc: 'Honest, authentic "out of the box" reactions that build credibility and drive purchase decisions.', tags: ['Unboxing', 'First Look', 'Trust'] },
  { num: '03', title: 'High-Aesthetic TikTok & B-Roll', desc: 'Clean, punchy visuals engineered to make your product shine — combining storytelling with cinematic quality.', tags: ['TikTok', 'B-Roll', 'Visuals'] },
  { num: '04', title: 'Feature Breakdowns', desc: 'Complex specs translated into relatable stories your audience actually understands and cares about.', tags: ['Education', 'Explainer', 'UX'] },
  { num: '05', title: 'Keynote Speaking', desc: 'Professional brand representation at product launches, conferences, and industry events across Africa and beyond.', tags: ['Speaking', 'Events', 'Launches'] },
  { num: '06', title: 'Emerging Market Strategy', desc: 'Bridging global products to local markets — translating brand messaging for high-volume emerging audiences.', tags: ['Africa', 'Localisation', 'Strategy'] },
];

export default function Services() {
  const { ref, visible } = useScrollReveal(0.1);
  return (
    <section id="services" className={styles.services} ref={ref}>
      <div className={styles.inner}>
        <div className={styles.headerRow}>
          <div>
            <motion.p className="section-label" initial={{ opacity: 0, y: 20 }} animate={visible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>How I Work With Brands</motion.p>
            <motion.h2 className={styles.heading} initial={{ opacity: 0, y: 30 }} animate={visible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, delay: 0.1 }}>
              Services &<br /> <em>Collaborations</em>
            </motion.h2>
          </div>
          <motion.p className={styles.intro} initial={{ opacity: 0, y: 20 }} animate={visible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, delay: 0.25 }}>
            From product launches to ongoing content partnerships — I bring both creator instincts and product expertise to every collaboration.
          </motion.p>
        </div>
        <div className={styles.grid}>
          {services.map((s, i) => (
            <motion.div key={s.num} className={styles.card}
              initial={{ opacity: 0, y: 50 }} animate={visible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.15 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className={styles.cardNum}>{s.num}</span>
              <h3 className={styles.cardTitle}>{s.title}</h3>
              <p className={styles.cardDesc}>{s.desc}</p>
              <div className={styles.cardTags}>{s.tags.map((t) => <span key={t} className={styles.tag}>{t}</span>)}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
