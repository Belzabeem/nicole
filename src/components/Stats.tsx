'use client';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import styles from './Stats.module.css';

const stats = [
  { value: 480, suffix: 'K', label: 'YouTube Lifetime Views', description: 'Consistent long-form tech content' },
  { value: 1.2, suffix: 'M', label: 'TikTok Overall Views', description: 'Viral short-form reach' },
  { value: 40, suffix: 'K', label: 'Active Monthly Reach', description: 'Engaged, returning audience' },
  { value: 6, suffix: '+', label: 'Years Experience', description: 'In tech & consumer markets' },
];

function CountUp({ target, suffix, start }: { target: number; suffix: string; start: boolean }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    const duration = 2000, steps = 60, increment = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) { setCount(target); clearInterval(timer); }
      else { setCount(parseFloat(current.toFixed(1))); }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [start, target]);
  return <span>{count % 1 === 0 ? count : count.toFixed(1)}{suffix}</span>;
}

export default function Stats() {
  const { ref, visible } = useScrollReveal(0.3);
  return (
    <section id="stats" className={styles.stats} ref={ref}>
      <div className={styles.bgText} aria-hidden="true">BY THE NUMBERS</div>
      <div className={styles.inner}>
        <div className={styles.header}>
          <motion.p className="section-label" initial={{ opacity: 0, y: 20 }} animate={visible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>Impact</motion.p>
          <motion.h2 className={styles.heading} initial={{ opacity: 0, y: 30 }} animate={visible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, delay: 0.1 }}>
            Reach That <em>Speaks Volumes</em>
          </motion.h2>
        </div>
        <div className={styles.grid}>
          {stats.map((s, i) => (
            <motion.div key={s.label} className={styles.card}
              initial={{ opacity: 0, y: 50 }} animate={visible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 + i * 0.12, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className={styles.cardTop}>
                <div className={styles.num}><CountUp target={s.value} suffix={s.suffix} start={visible} /></div>
                <div className={styles.cardLine} />
              </div>
              <p className={styles.cardLabel}>{s.label}</p>
              <p className={styles.cardDesc}>{s.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
