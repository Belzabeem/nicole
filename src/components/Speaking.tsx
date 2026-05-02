'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { useRef, useState } from 'react';
import styles from './Speaking.module.css';

const events = [
  {
    id: 1,
    title: 'Xiaomi Redmi Note 15 Series Nigeria Launch',
    role: 'Creative Manager & Opening Host',
    location: 'Lagos, Nigeria',
    year: '2026',
    desc: "As Creative Manager of Xiaomi Nigeria, opened and hosted the official Redmi Note 15 Series launch — Nigeria's biggest Xiaomi event of the year. Delivered the opening address recapping Xiaomi's 2025 milestones: Fortune Global 500 ranking (#297), 18% unit sales growth in Nigeria, and 48% tablet market share. Introduced the full Redmi Note 15 lineup including the Pro Plus 5G to press, partners, and the MTN Nigeria team. Covered by TechEconomy.ng.",
  },
  {
    id: 2,
    title: 'POCO Triple Launch — X6 Pro 5G, C75 & C61',
    role: 'Brand Representative & Speaker',
    location: 'Lagos, Nigeria',
    year: 'Nov 2024',
    desc: "Represented Xiaomi Nigeria at the official media launch of three new POCO devices — the X6 Pro 5G, C75, and C61, marking Xiaomi's dual-brand strategy rollout in Nigeria. Communicated product positioning, specs, and market strategy to press and trade audiences. Covered by Punch Nigeria and Nairametrics.",
  },
  {
    id: 3,
    title: 'Northern Dealers Training & Investment Seminar',
    role: 'Founder & Lead Trainer',
    location: '14 Northern States, Nigeria',
    year: '2020–2021',
    desc: "Founded and led Xiaomi Nigeria's Northern Dealers Training Seminar — the first of its kind, spanning 14 northern states. Educated dealers and investors on mobile technology, product positioning, and sales strategy. The initiative grew the northern training department to 20+ staff and drove a 5% consecutive monthly sales increase over three months.",
  },
  {
    id: 4,
    title: 'Xiaomi Investor Meeting — Northern Nigeria',
    role: 'Host & Product Specialist',
    location: 'Northern Nigeria',
    year: '2020',
    desc: 'Organised and hosted a formal investor meeting for Xiaomi technology in Northern Nigeria — bringing together regional dealers, distributors, and stakeholders to align on market strategy and new product adoption.',
  },
  {
    id: 5,
    title: 'Xiaomi Remote Staff Training — COVID-19 Response',
    role: 'Lead Trainer',
    location: 'Nigeria (Remote)',
    year: '2020',
    desc: 'Designed and delivered nationwide remote training for Xiaomi Nigeria staff during the COVID-19 lockdown — covering safety protocols and the full Xiaomi 9-series product line. The online training model she built reduced inter-state physical training costs and was later adopted as the standard for ongoing cluster training.',
  },
];

const carouselImages = [1, 2, 3, 4, 5];

export default function Speaking() {
  const { ref, visible } = useScrollReveal(0.1);
  const trackRef = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(false);

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

        {/* ── Presenting Video ── */}
        <motion.div
          className={styles.presentingWrap}
          initial={{ opacity: 0, y: 40 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <p className={styles.presentingLabel}>Watch Nicole in Action</p>
          <div className={styles.presentingVideoContainer}>
            <video
              className={styles.presentingVideo}
              src="/images/presenting.mp4"
              autoPlay
              muted
              loop
              playsInline
            />
          </div>
        </motion.div>

        {/* ── Events Timeline ── */}
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
                {(e.id === 1 || e.id === 2) && (
                  <span className={styles.eventVerified}>✓ Press Verified</span>
                )}
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
