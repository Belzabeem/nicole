'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import styles from './TestimonialWall.module.css';

const acclaimItems = [
  {
    type: 'dm',
    handle: '@fisayofosudo',
    name: 'Fisayo Fosudo',
    role: 'Iconic Tech Creator and Visual Storyteller',
    avatar: '/images/pfp-fisayofosudo.jpg',
    initial: 'F',
    quote: "You did really great! Even when the clicker didn't work 👏👏👏❤️",
    context: 'Direct Instagram Message after the Xiaomi Flagship Launch',
    verified: true,
    platform: 'Instagram DM',
  },
  {
    type: 'dm',
    handle: '@valorreviews',
    name: 'Valor Reviews',
    role: 'Top-Tier Smartphone Reviewer (1M+ Reach)',
    avatar: '/images/pfp-valorreviews.jpg',
    initial: 'V',
    quote: 'Osheyyyy, you were amazing on stage 🙌❤️',
    context: 'Direct Message celebrating Nicole’s Redmi Note 15 Keynote',
    verified: true,
    platform: 'Instagram DM',
  },
  {
    type: 'brand',
    handle: '@xiaominigeria',
    name: 'Xiaomi Nigeria',
    role: 'Corporate Brand Partner',
    avatar: null,
    initial: 'X',
    quote:
      "Nicole's ability to break down complex silicon architecture into clear, engaging stories is exactly what our audience needs. She represents the brand with immense poise, technical depth, and authority.",
    context: 'Official Brand Partnership Endorsement',
    verified: true,
    platform: 'Official Corporate Endorsement',
  },
  {
    type: 'press',
    handle: 'The Guardian Nigeria',
    name: 'The Guardian Editorial',
    role: 'Nigeria Leading National Newspaper',
    avatar: null,
    initial: 'G',
    quote:
      "Highlighting consumer value and market expansion, Retail Manager Nicole Yahaya emphasized how accessible mobile engineering continues to drive daily business productivity across Nigerian households.",
    context: 'The Guardian National Press Feature',
    verified: true,
    platform: 'National Press Feature',
  },
  {
    type: 'press',
    handle: 'TechEconomy.ng',
    name: 'TechEconomy Editorial',
    role: 'Nigeria Premier Tech Journalism',
    avatar: null,
    initial: 'T',
    quote:
      "Nicole Yahaya opened and anchored the Redmi Note 15 Series launch, articulating Xiaomi's Fortune Global 500 ascension (#297) and establishing the commercial tone for the brand's Nigerian expansion.",
    context: 'Press Launch Coverage (Lagos Premiere)',
    verified: true,
    platform: 'Press Verification',
  },
];

export default function TestimonialWall() {
  const { ref, visible } = useScrollReveal(0.1);

  return (
    <section id="acclaim" className={styles.section} ref={ref}>
      <div className="container-max">
        {/* Section Header */}
        <div className={styles.header}>
          <motion.div
            className="section-label"
            initial={{ opacity: 0, y: 15 }}
            animate={visible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            The Wall of Acclaim
          </motion.div>
          <motion.h2
            className={styles.title}
            initial={{ opacity: 0, y: 25 }}
            animate={visible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            Respected by Creators. <br />
            <span className="gold-gradient-text">Trusted by Industry Giants.</span>
          </motion.h2>
          <motion.p
            className={styles.description}
            initial={{ opacity: 0, y: 20 }}
            animate={visible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Direct messages, executive endorsements, and press citations from the creators and publications defining
            consumer technology across West Africa.
          </motion.p>
        </div>

        {/* DMs and Endorsements Grid */}
        <div className={styles.acclaimGrid}>
          {acclaimItems.map((item, idx) => (
            <motion.div
              key={idx}
              className={styles.acclaimCard}
              initial={{ opacity: 0, y: 35 }}
              animate={visible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.15 + idx * 0.1 }}
            >
              {/* Card Top Meta */}
              <div className={styles.cardHeader}>
                <div className={styles.avatarGroup}>
                  {item.avatar ? (
                    <div className={styles.avatarImgWrap}>
                      <Image
                        src={item.avatar}
                        alt={item.name}
                        fill
                        style={{ objectFit: 'cover' }}
                      />
                    </div>
                  ) : (
                    <div className={styles.avatarInit}>{item.initial}</div>
                  )}

                  <div className={styles.nameBlock}>
                    <div className={styles.nameRow}>
                      <h4 className={styles.authorName}>{item.name}</h4>
                      {item.verified && (
                        <span className={styles.verifiedCheck} title="Verified Authority">
                          ✓
                        </span>
                      )}
                    </div>
                    <span className={styles.authorHandle}>{item.handle}</span>
                  </div>
                </div>

                <span className={styles.platformBadge}>{item.platform}</span>
              </div>

              {/* Verified Quote Bubble */}
              <div className={styles.quoteBubble}>
                <div className={styles.quoteMark}>&ldquo;</div>
                <p className={styles.quoteText}>{item.quote}</p>
              </div>

              {/* Card Footer Context */}
              <div className={styles.cardFooter}>
                <span className={styles.contextIcon}>◈</span>
                <span className={styles.contextText}>{item.context}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
