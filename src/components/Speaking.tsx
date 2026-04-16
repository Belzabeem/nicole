'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { useEffect, useRef, useState } from 'react';
import styles from './Speaking.module.css';

const events = [
  { id: 1, title: 'Xiaomi Smartphone Launch', role: 'Keynote Speaker', location: 'Lagos, Nigeria', year: '2023', desc: 'Represented Xiaomi as keynote speaker at a major product launch event, presenting the POCO series to consumer and press audiences.' },
  { id: 2, title: 'Consumer Tech Summit', role: 'Panel Speaker', location: 'Abuja, Nigeria', year: '2022', desc: 'Delivered insights on smartphone adoption trends and emerging market dynamics to industry professionals.' },
  { id: 3, title: 'Brand Ambassador Training', role: 'Product Trainer', location: 'Multiple Cities', year: '2021–2023', desc: 'Trained sales teams and brand ambassadors across Nigeria on product positioning, specs communication and customer education.' },
];

const carouselImages = [1, 2, 3, 4, 5];

export default function Speaking() {
  const { ref, visible } = useScrollReveal(0.1);
  const trackRef = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(false);

  // Duplicate images for seamless loop
  const repeated = [...carouselImages, ...carouselImages, ...carouselImages];

  return (
    <section id="speaking" className={styles.speaking} ref={ref}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <motion.p className="section-label" initial={{ opacity: 0, y: 20 }} animate={visible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>Speaking & Events</motion.p>
          <motion.h2 className={styles.heading} initial={{ opacity: 0, y: 30 }} animate={visible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, delay: 0.1 }}>
            On Stage & <em>On Screen</em>
          </motion.h2>
          <motion.p className={styles.sub} initial={{ opacity: 0, y: 20 }} animate={visible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, delay: 0.2 }}>
            From product launches to professional panels — I bring expertise, poise and clarity to every stage.
          </motion.p>
        </div>

        {/* ── Infinite Carousel ── */}
        <motion.div
          className={styles.carouselOuter}
          initial={{ opacity: 0, y: 40 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.25 }}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className={styles.carouselFade} />
          <div className={styles.carouselFadeRight} />
          <div
            ref={trackRef}
            className={`${styles.carouselTrack} ${paused ? styles.paused : ''}`}
          >
            {repeated.map((n, i) => (
              <div key={i} className={styles.carouselCard}>
                <Image
                  src={`/images/speaking-${n}.jpg`}
                  alt={`Speaking event ${n}`}
                  fill
                  style={{ objectFit: 'cover' }}
                />
                <div className={styles.imageGlow} />
              </div>
            ))}
          </div>
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
          <p className={styles.ctaText}>Interested in having me speak at your event?</p>
          <a href="#contact" className={styles.ctaBtn}>Book a Speaker Enquiry →</a>
        </motion.div>
      </div>
    </section>
  );
}