'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import styles from './Speaking.module.css';

const events = [
  { id: 1, title: 'Xiaomi Redmi Note 15 Series Launch', role: 'Creative Manager & Keynote Speaker', location: 'Nigeria', year: '2026', desc: 'Opened the official Xiaomi Redmi Note 15 Nigeria launch as Creative Manager — presenting Xiaomi\'s Fortune 500 growth, 18% unit sales increase, and 48% tablet market share to press and consumer audiences.' },
  { id: 2, title: 'Xiaomi Smartphone Launch', role: 'Keynote Speaker', location: 'Lagos, Nigeria', year: '2023', desc: 'Represented Xiaomi as keynote speaker at a major product launch event, presenting the POCO series to consumer and press audiences.' },
  { id: 3, title: 'Brand Ambassador Training Programme', role: 'Product Trainer', location: 'Multiple Cities, Nigeria', year: '2021–2023', desc: 'Trained sales teams and brand ambassadors across Nigeria on product positioning, specs communication and customer education.' },
];

export default function Speaking() {
  const { ref, visible } = useScrollReveal(0.1);

  return (
    <section id="speaking" className={styles.speaking} ref={ref}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <motion.p className="section-label" initial={{ opacity: 0, y: 20 }} animate={visible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>Speaking & Events</motion.p>
          <motion.h2 className={styles.heading} initial={{ opacity: 0, y: 30 }} animate={visible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, delay: 0.1 }}>
            On Stage & <em>On Screen</em>
          </motion.h2>
          <motion.p className={styles.sub} initial={{ opacity: 0, y: 20 }} animate={visible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, delay: 0.2 }}>
            From product launches to professional panels — Nicole brings expertise, poise and clarity to every stage.
          </motion.p>
        </div>

        <motion.div className={styles.imageRow} initial={{ opacity: 0, y: 50 }} animate={visible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 1, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}>
          {[1, 2, 3].map((n) => (
            <div key={n} className={styles.imageBlock}>
              <Image
                src={`/images/speaking-${n}.jpg`}
                alt={`Speaking event ${n}`}
                fill
                style={{ objectFit: 'cover' }}
              />
              <div className={styles.imageGlow} />
            </div>
          ))}
        </motion.div>

        <div className={styles.events}>
          {events.map((e, i) => (
            <motion.div key={e.id} className={styles.event}
              initial={{ opacity: 0, x: -40 }} animate={visible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.3 + i * 0.12 }}
            >
              <div className={styles.eventYear}><span>{e.year}</span></div>
              <div className={styles.eventLine} />
              <div className={styles.eventContent}>
                <div className={styles.eventMeta}>
                  <span className={styles.eventRole}>{e.role}</span>
                  <span className={styles.eventLocation}>📍 {e.location}</span>
                </div>
                <h3 className={styles.eventTitle}>{e.title}</h3>
                <p className={styles.eventDesc}>{e.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div className={styles.cta} initial={{ opacity: 0, y: 30 }} animate={visible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, delay: 0.6 }}>
          <p className={styles.ctaText}>Interested in having Nicole speak at your event?</p>
          <a href="#contact" className={styles.ctaBtn}>Book a Speaker Enquiry →</a>
        </motion.div>
      </div>
    </section>
  );
}
