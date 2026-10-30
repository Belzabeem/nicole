'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { playClickSound, playHoverSound } from '@/utils/sound';
import styles from './ExecutiveDossier.module.css';

const dossierTabs = [
  { id: 'story', label: '01 // EXECUTIVE STORY' },
  { id: 'philosophy', label: '02 // RETAIL & CONSUMER REALITY' },
  { id: 'radar', label: '03 // TECHNICAL COMPETENCIES' },
  { id: 'impact', label: '04 // COMMERCIAL RECORD' },
];

const skills = [
  { name: 'Smartphone Silicon and Leica Optics', level: 98, tag: 'HARDWARE' },
  { name: 'Live Keynote Hosting and Press Broadcast', level: 96, tag: 'STAGE' },
  { name: 'Emerging Market Retail Architecture', level: 95, tag: 'COMMERCE' },
  { name: 'High-Retention Video Production (TikTok & YouTube)', level: 94, tag: 'MEDIA' },
  { name: 'Dealer and Store Staff Technical Education', level: 95, tag: 'TRAINING' },
];

export default function ExecutiveDossier() {
  const { ref, visible } = useScrollReveal(0.1);
  const [activeTab, setActiveTab] = useState('story');

  return (
    <section id="dossier" className={styles.section} ref={ref}>
      <div className="container-max">
        {/* Section Header */}
        <div className={styles.sectionHeader}>
          <motion.div
            className="section-label"
            initial={{ opacity: 0, y: 15 }}
            animate={visible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            The Executive Dossier
          </motion.div>
          <motion.h2
            className={styles.title}
            initial={{ opacity: 0, y: 25 }}
            animate={visible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            Engineering Knowledge. <br />
            <span className="gold-gradient-text">Grounded in Emerging Market Realities.</span>
          </motion.h2>
        </div>

        {/* Dossier Interactive Grid */}
        <div className={styles.dossierGrid}>
          {/* Left Column: Portrait Frame */}
          <motion.div
            className={styles.imageCol}
            initial={{ opacity: 0, x: -40 }}
            animate={visible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.2 }}
          >
            <div className={styles.portraitFrame}>
              <div className={styles.imageWrap}>
                <Image
                  src="/images/about.jpg"
                  alt="Nicole Yahaya: Retail Manager at Xiaomi Nigeria and Tech Keynote Speaker"
                  fill
                  style={{ objectFit: 'cover', objectPosition: 'top' }}
                />
                <div className={styles.imageOverlay} />
              </div>

              {/* Gold Badge */}
              <div className={styles.floatingBadge}>
                <span className={styles.badgeNumber}>6+</span>
                <div className={styles.badgeText}>
                  <strong>Years in Consumer Tech</strong>
                  <span>Retail & Stage Leadership</span>
                </div>
              </div>

              {/* Xiaomi Roots Card */}
              <div className={styles.rootsCard}>
                <span className={styles.rootsTag}>VERIFIED CORPORATE PROFILE</span>
                <p className={styles.rootsTitle}>Retail Manager, Xiaomi Nigeria</p>
                <p className={styles.rootsDesc}>
                  Cited by The Guardian Nigeria. Spearheaded dealer education across 14 Northern states before opening the national launch stage in Lagos.
                </p>
              </div>

              {/* Decorative Tech Corners */}
              <div className={styles.decorCornerTL} aria-hidden="true" />
              <div className={styles.decorCornerBR} aria-hidden="true" />
            </div>
          </motion.div>

          {/* Right Column: Tabbed Intelligence Dossier */}
          <motion.div
            className={styles.contentCol}
            initial={{ opacity: 0, x: 40 }}
            animate={visible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.3 }}
          >
            {/* Tab Navigation */}
            <div className={styles.tabsRow}>
              {dossierTabs.map((tab) => (
                <button
                  key={tab.id}
                  className={`${styles.tabBtn} ${activeTab === tab.id ? styles.tabBtnActive : ''}`}
                  onClick={() => {
                    playClickSound();
                    setActiveTab(tab.id);
                  }}
                  onMouseEnter={playHoverSound}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Tab Content Box */}
            <div className={styles.tabContentBox}>
              <AnimatePresence mode="wait">
                {activeTab === 'story' && (
                  <motion.div
                    key="story"
                    className={styles.tabPane}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h3 className={styles.paneHeading}>From Retail Training Rooms to the National Stage</h3>
                    <p className={styles.bodyParagraph}>
                      Nicole Yahaya built her reputation inside the corporate mobile industry. She began as a <strong>Technical Product Specialist and Lead Trainer at Xiaomi Nigeria</strong>,
                      breaking down hardware schematics and camera algorithms for regional dealers, franchise operators, and retail staff.
                    </p>
                    <p className={styles.bodyParagraph}>
                      Her dealer training roadshows across 14 Northern Nigerian states generated consecutive monthly sales increases,
                      establishing Xiaomi retail presence across the region. Today, as <strong>Retail Manager for Xiaomi Nigeria</strong> and a national keynote speaker,
                      she opens major device launches before press corps, corporate partners, and executive audiences.
                    </p>
                    <div className={styles.keyHighlights}>
                      <div className={styles.highlightPill}>
                        <span>📍</span>
                        <span>Lagos and Abuja, Nigeria</span>
                      </div>
                      <div className={styles.highlightPill}>
                        <span>🏆</span>
                        <span>Xiaomi Retail Manager</span>
                      </div>
                      <div className={styles.highlightPill}>
                        <span>🎙️</span>
                        <span>National Launch Keynote Host</span>
                      </div>
                      <div className={styles.highlightPill}>
                        <span>👥</span>
                        <span>Your Tech Sis (1.8M+ Views)</span>
                      </div>
                    </div>
                  </motion.div>
                )}

                {activeTab === 'philosophy' && (
                  <motion.div
                    key="philosophy"
                    className={styles.tabPane}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h3 className={styles.paneHeading}>Specs Mean Nothing Without Trust</h3>
                    <p className={styles.bodyParagraph}>
                      &ldquo;In emerging markets like Nigeria, a phone is not a casual accessory. It is a merchant&apos;s point of sale, a student&apos;s textbook,
                      and a creator&apos;s workstation. Buyers do not spend savings on paper specs: they buy certainty that the device will survive real use.&rdquo;
                    </p>
                    <div className={styles.philosophyPillars}>
                      <div className={styles.pillarBox}>
                        <span className={styles.pillarNum}>01</span>
                        <h4 className={styles.pillarTitle}>Zero Fluff Testing</h4>
                        <p className={styles.pillarDesc}>Testing battery discharge on local cellular networks under West African ambient thermals.</p>
                      </div>
                      <div className={styles.pillarBox}>
                        <span className={styles.pillarNum}>02</span>
                        <h4 className={styles.pillarTitle}>Contextual Pricing</h4>
                        <p className={styles.pillarDesc}>Assessing smartphones against current naira exchange rates and real consumer budgets.</p>
                      </div>
                      <div className={styles.pillarBox}>
                        <span className={styles.pillarNum}>03</span>
                        <h4 className={styles.pillarTitle}>Direct Accountability</h4>
                        <p className={styles.pillarDesc}>Highlighting exact compromises so buyers know both the advantages and trade-offs before purchase.</p>
                      </div>
                    </div>
                  </motion.div>
                )}

                {activeTab === 'radar' && (
                  <motion.div
                    key="radar"
                    className={styles.tabPane}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h3 className={styles.paneHeading}>Technical Competence and Distribution Reach</h3>
                    <p className={styles.bodyParagraph}>
                      Direct familiarity with hardware componentry paired with high-retention digital media production:
                    </p>
                    <div className={styles.skillsStack}>
                      {skills.map((s) => (
                        <div key={s.name} className={styles.skillRow}>
                          <div className={styles.skillMeta}>
                            <span className={styles.skillName}>{s.name}</span>
                            <span className={styles.skillTag}>{s.tag}</span>
                          </div>
                          <div className={styles.skillBarTrack}>
                            <motion.div
                              className={styles.skillBarFill}
                              initial={{ width: 0 }}
                              animate={{ width: `${s.level}%` }}
                              transition={{ duration: 0.8, ease: 'easeOut' }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}

                {activeTab === 'impact' && (
                  <motion.div
                    key="impact"
                    className={styles.tabPane}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h3 className={styles.paneHeading}>Documented Commercial Milestones</h3>
                    <div className={styles.impactGrid}>
                      <div className={styles.impactCard}>
                        <span className={styles.impactNumber}>#232</span>
                        <p className={styles.impactTitle}>Fortune Global 500 Address</p>
                        <p className={styles.impactDetail}>Presented Xiaomi global ranking recap at the national launch in Lagos.</p>
                      </div>
                      <div className={styles.impactCard}>
                        <span className={styles.impactNumber}>+18%</span>
                        <p className={styles.impactTitle}>Unit Sales Growth</p>
                        <p className={styles.impactDetail}>Contributed to product launch strategy supporting regional adoption.</p>
                      </div>
                      <div className={styles.impactCard}>
                        <span className={styles.impactNumber}>14</span>
                        <p className={styles.impactTitle}>Northern States Trained</p>
                        <p className={styles.impactDetail}>Conducted technical roadshows for distributors across 14 Nigerian states.</p>
                      </div>
                      <div className={styles.impactCard}>
                        <span className={styles.impactNumber}>1.8M+</span>
                        <p className={styles.impactTitle}>Organic Views</p>
                        <p className={styles.impactDetail}>Over 1.2M TikTok views and 660K+ YouTube lifetime views across in-depth hardware media.</p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div className={styles.dossierFooter}>
              <a href="#contact" className={styles.btnDossierAction}>
                Schedule Keynote or Campaign Briefing →
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
