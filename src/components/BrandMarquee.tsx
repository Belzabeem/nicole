'use client';
import styles from './BrandMarquee.module.css';

const marqueeItems = [
  { name: 'XIAOMI NIGERIA', role: 'Official Creative Manager' },
  { name: 'REDMI GLOBAL', role: 'Flagship Launch Host' },
  { name: 'POCO NIGERIA', role: 'Dual-Brand Keynote Speaker' },
  { name: 'FORTUNE 500', role: 'Milestone Keynote Lead' },
  { name: 'MTN PARTNER', role: 'Telecom Ecosystem Lead' },
  { name: 'TECHECONOMY', role: 'Verified Press Feature' },
  { name: 'PUNCH NIGERIA', role: 'Launch Press Feature' },
  { name: 'NAIRAMETRICS', role: 'Market Review Feature' },
];

export default function BrandMarquee() {
  const repeated = [...marqueeItems, ...marqueeItems, ...marqueeItems];

  return (
    <div className={styles.marqueeSection} aria-label="Brand Collaborations and Press Features">
      <div className={styles.fadeLeft} aria-hidden="true" />
      <div className={styles.fadeRight} aria-hidden="true" />

      <div className={styles.track}>
        {repeated.map((item, idx) => (
          <div key={idx} className={styles.marqueeCard}>
            <span className={styles.cardDot}>◆</span>
            <span className={styles.cardName}>{item.name}</span>
            <span className={styles.cardRole}>{item.role}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

