'use client';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import styles from './StatsCounter.module.css';

const statsData = [
  { value: 1.8, suffix: 'M+', label: 'Total Content Impressions', sub: 'Across YouTube, TikTok & Reels' },
  { value: 660.7, suffix: 'K', label: 'YouTube Lifetime Views', sub: 'Long-form reviews & deep-dives' },
  { value: 1.2, suffix: 'M', label: 'TikTok Organic Reach', sub: 'High-retention short-form tech' },
  { value: 14, suffix: ' States', label: 'Nationwide Roadshow Reach', sub: 'Comprehensive dealer network training' },
  { value: 6, suffix: '+ Years', label: 'Tech Leadership', sub: 'In consumer hardware & marketing' },
  { value: 100, suffix: '%', label: 'Launch Success Record', sub: 'Zero-fault keynote execution' },
];

function CountNumber({ target, suffix, start }: { target: number; suffix: string; start: boolean }) {
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!start) return;
    const duration = 2000;
    const steps = 50;
    const increment = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setVal(target);
        clearInterval(timer);
      } else {
        setVal(parseFloat(current.toFixed(1)));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [start, target]);

  return (
    <span>
      {val % 1 === 0 ? val : val.toFixed(1)}
      {suffix}
    </span>
  );
}

export default function StatsCounter() {
  const { ref, visible } = useScrollReveal(0.2);

  return (
    <section id="stats" className={styles.section} ref={ref}>
      <div className={styles.ambientWatermark} aria-hidden="true">
        BY THE NUMBERS
      </div>

      <div className="container-max">
        {/* Header */}
        <div className={styles.header}>
          <motion.div
            className="section-label"
            initial={{ opacity: 0, y: 15 }}
            animate={visible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            Empirical Impact
          </motion.div>
          <motion.h2
            className={styles.title}
            initial={{ opacity: 0, y: 25 }}
            animate={visible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            Reach That Commands <br />
            <span className="gold-gradient-text">Commercial Resonance.</span>
          </motion.h2>
        </div>

        {/* 6 Stats Grid */}
        <div className={styles.grid}>
          {statsData.map((stat, idx) => (
            <motion.div
              key={idx}
              className={styles.statCard}
              initial={{ opacity: 0, y: 35 }}
              animate={visible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.15 + idx * 0.08 }}
            >
              <div className={styles.statTop}>
                <span className={styles.statVal}>
                  <CountNumber target={stat.value} suffix={stat.suffix} start={visible} />
                </span>
                <span className={styles.statDot} />
              </div>

              <div className={styles.dividerLine} />

              <h4 className={styles.statLabel}>{stat.label}</h4>
              <p className={styles.statSub}>{stat.sub}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

