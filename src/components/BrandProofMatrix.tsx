'use client';
import { motion } from 'framer-motion';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { playHoverSound } from '@/utils/sound';
import styles from './BrandProofMatrix.module.css';

const criteria = [
  {
    code: '01 // STAGE COMMAND',
    title: 'Live Keynote & Media Room Authority',
    metric: '500+ Press & VIPs',
    label: 'Redmi Note 15 Premiere Host',
    description:
      'Brands cannot risk an untested influencer on a million-dollar launch stage. Nicole opened Xiaomi Nigeria\'s flagship premiere, addressed press corps, and handled live stage dynamics with composure.',
    checkpoints: [
      'Delivered opening address recapping Fortune Global 500 milestone (#297)',
      'Anchored product unveilings before MTN leadership and tech journalists',
      'Praised by peer creators (Fisayo Fosudo, Valor Reviews) for stage poise',
    ],
  },
  {
    code: '02 // TECHNICAL DEPTH',
    title: 'Hardware & Silicon Engineering Literacy',
    metric: '6+ Years',
    label: 'Former Xiaomi Product Specialist',
    description:
      'Nicole began as a technical trainer, not an unboxer reading spec sheets. She understands Leica optical tuning, Dimensity versus Snapdragon thermal throttling, and battery discharge curves.',
    checkpoints: [
      'In-depth testing on Leica Summilux optics and multi-camera pipelines',
      'Realistic battery torture tests tailored to Nigerian power conditions',
      'Demystifies silicon architecture for everyday buyers without losing accuracy',
    ],
  },
  {
    code: '03 // RETAIL CONVERSION',
    title: 'Proven Retail & Emerging Market Conversion',
    metric: '14 States',
    label: 'Xiaomi Nigeria Retail Manager',
    description:
      'As Retail Manager at Xiaomi Nigeria, Nicole has trained over 20 staff across 14 Northern states, translating technical specifications into direct retail sell-through.',
    checkpoints: [
      'Led the Northern Dealers Training Seminar across 14 Nigerian states',
      'Contributed to consecutive 5% monthly sales growth across retail clusters',
      'Featured in The Guardian Nigeria for retail strategy and consumer trends',
    ],
  },
  {
    code: '04 // CULTURAL REACH',
    title: 'High-Retention Production & Community Trust',
    metric: '1.8M+ Views',
    label: 'Known as Your Tech Sis',
    description:
      'Affectionately recognized as your "tech sis" across TikTok and YouTube, Nicole creates high-retention 4K hardware reviews and viral buying guides that viewers act on.',
    checkpoints: [
      'Over 1.2M organic TikTok reach with active comment interaction',
      '660K+ lifetime YouTube views focused on comprehensive hardware reviews',
      'High organic trust: viewers use her buying guides to avoid bad purchases',
    ],
  },
];

export default function BrandProofMatrix() {
  const { ref, visible } = useScrollReveal(0.1);

  return (
    <section id="brand-proof" className={styles.section} ref={ref}>
      <div className="container-max">
        {/* Header */}
        <div className={styles.header}>
          <motion.div
            className="section-label"
            initial={{ opacity: 0, y: 15 }}
            animate={visible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            What Brand Directors Look For
          </motion.div>
          <motion.h2
            className={styles.title}
            initial={{ opacity: 0, y: 25 }}
            animate={visible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            The Four Pillars Brands Evaluate <br />
            <span className="gold-gradient-text">Before Every Major Campaign.</span>
          </motion.h2>
          <motion.p
            className={styles.description}
            initial={{ opacity: 0, y: 20 }}
            animate={visible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            A breakdown of Nicole&apos;s verifiable commercial track record, stage reliability, and technical credibility for
            marketing directors, event organizers, and hardware brand managers.
          </motion.p>
        </div>

        {/* 4 Cards Grid */}
        <div className={styles.grid}>
          {criteria.map((item, idx) => (
            <motion.div
              key={item.code}
              className={styles.pillarCard}
              initial={{ opacity: 0, y: 35 }}
              animate={visible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.15 + idx * 0.1 }}
              onMouseEnter={playHoverSound}
            >
              <div className={styles.cardHeader}>
                <span className={styles.cardCode}>{item.code}</span>
                <div className={styles.statPill}>
                  <strong className={styles.statMetric}>{item.metric}</strong>
                  <span className={styles.statLabel}>{item.label}</span>
                </div>
              </div>

              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.cardDesc}>{item.description}</p>

              <div className={styles.checkpointsList}>
                <span className={styles.proofHeader}>VERIFIABLE PROOF:</span>
                {item.checkpoints.map((pt, pIdx) => (
                  <div key={pIdx} className={styles.checkpointItem}>
                    <span className={styles.checkIcon}>✓</span>
                    <span className={styles.checkText}>{pt}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

