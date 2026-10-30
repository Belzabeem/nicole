'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { playClickSound, playHoverSound, playChimeSound } from '@/utils/sound';
import type { CinemaMedia } from './CinemaModal';
import styles from './KeynoteTheater.module.css';

interface KeynoteTheaterProps {
  onOpenCinema: (media: CinemaMedia) => void;
}

const keynoteEvents = [
  {
    id: 1,
    title: 'Xiaomi Redmi Note 15 Series Grand Premiere',
    year: '2026',
    role: 'Retail Manager and Opening Keynote Host',
    location: 'Lagos, Nigeria',
    pressVerified: 'TechEconomy.ng and Guardian Verified',
    image: '/images/speaking-1.jpg',
    audience: '500+ Press, VIP Partners and MTN Team',
    milestones: [
      'Recapped Xiaomi Fortune Global 500 milestone (#232)',
      'Presented 18% Nigerian unit sales growth data',
      'Detailed 48% Nigerian tablet market share leadership',
      'Introduced Redmi Note 15 Pro Plus 5G to national media',
    ],
    summary:
      'Opened and hosted Xiaomi Nigeria\'s flagship launch event in Lagos. Established the narrative for the national rollout before press corps, corporate partners, and regional dealer executives.',
  },
  {
    id: 2,
    title: 'POCO Triple Launch: X6 Pro 5G, C75 & C61',
    year: 'Nov 2024',
    role: 'Brand Representative and Speaker',
    location: 'Lagos, Nigeria',
    pressVerified: 'Punch and Nairametrics Verified',
    image: '/images/speaking-2.jpg',
    audience: 'National Media and Trade Importers',
    milestones: [
      'Communicated Xiaomi dual-brand commercial positioning',
      'Explained Dimensity 8300-Ultra gaming thermals and display tuning',
      'Outlined competitive pricing for younger mobile demographics',
    ],
    summary:
      'Delivered the product presentation introducing POCO hardware expansion in Nigeria, covered across Punch, Nairametrics, and business journals.',
  },
  {
    id: 3,
    title: 'Northern Dealers Training and Investment Seminar',
    year: '2020 to 2021',
    role: 'Founder and Lead Technical Trainer',
    location: '14 Northern Nigerian States',
    pressVerified: 'Executive Field Milestone',
    image: '/images/speaking-3.jpg',
    audience: 'Regional Dealers, Mobile Investors, Store Leads',
    milestones: [
      'Led Xiaomi Nigeria\'s first mobile roadshow across 14 northern states',
      'Trained and expanded the regional department to 20+ specialized staff',
      'Drove 5% consecutive monthly sales increase across three months',
    ],
    summary:
      'Built and ran the dealer education program that established Xiaomi retail presence across 14 states in Northern Nigeria.',
  },
  {
    id: 4,
    title: 'Xiaomi COVID-19 Nationwide Digital Training',
    year: '2020',
    role: 'Lead Remote Trainer and Systems Architect',
    location: 'National Remote Operations',
    pressVerified: 'Operational Standard',
    image: '/images/speaking-4.jpg',
    audience: 'Nationwide Retail Staff and Promoters',
    milestones: [
      'Designed remote digital curriculum for Xiaomi 9-series rollout',
      'Eliminated interstate physical training travel during lockdown',
      'Model adopted as standard template for ongoing cluster training',
    ],
    summary:
      'Architected remote training sessions keeping sales teams informed on product specifications during national lockdown restrictions.',
  },
  {
    id: 5,
    title: 'Xiaomi Regional Investor Summit',
    year: '2020',
    role: 'Keynote Host and Product Specialist',
    location: 'Northern Regional Headquarters',
    pressVerified: 'Trade Conference',
    image: '/images/speaking-5.jpg',
    audience: 'Tier-1 Smartphone Importers and Regional Capitalists',
    milestones: [
      'Facilitated multi-million naira dealer inventory commitments',
      'Presented consumer smartphone adoption roadmaps for West Africa',
      'Established direct communication channels between brand and trade channels',
    ],
    summary:
      'Connected product engineering specifications directly to high-volume commercial capital, accelerating dealer trust and retail adoption.',
  },
];

const stagePhotos = [
  { src: '/images/speaking-1.jpg', label: 'Redmi Note 15 Premiere', tag: 'HOSTING' },
  { src: '/images/speaking-2.jpg', label: 'POCO Triple Launch Keynote', tag: 'SPECS LEAD' },
  { src: '/images/speaking-3.jpg', label: 'Northern Nigeria Training', tag: 'TRAINER' },
  { src: '/images/speaking-4.jpg', label: 'Stage Spotlight Command', tag: 'PRESENCE' },
  { src: '/images/speaking-5.jpg', label: 'Executive Investor Summit', tag: 'STRATEGY' },
];

export default function KeynoteTheater({ onOpenCinema }: KeynoteTheaterProps) {
  const { ref, visible } = useScrollReveal(0.1);
  const [selectedEventId, setSelectedEventId] = useState(1);
  const [activePhoto, setActivePhoto] = useState(0);

  const activeEvent = keynoteEvents.find((e) => e.id === selectedEventId) || keynoteEvents[0];

  const handleOpenStageVideo = () => {
    playChimeSound();
    onOpenCinema({
      type: 'video',
      src: '/images/presenting.mp4',
      title: 'Redmi Note 15 Series Grand Premiere',
      subtitle: 'Opening Address and Keynote Presentation by Nicole Yahaya (Lagos, Nigeria)',
      eventBadge: 'Official Launch Keynote',
    });
  };

  return (
    <section id="keynotes" className={styles.section} ref={ref}>
      <div className="container-max">
        {/* Section Header */}
        <div className={styles.header}>
          <motion.div
            className="section-label"
            initial={{ opacity: 0, y: 15 }}
            animate={visible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            Live Stage and Keynotes
          </motion.div>
          <motion.h2
            className={styles.title}
            initial={{ opacity: 0, y: 25 }}
            animate={visible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            Commanding the Room. <br />
            <span className="gold-gradient-text">Delivering Under Live Pressure.</span>
          </motion.h2>
          <motion.p
            className={styles.description}
            initial={{ opacity: 0, y: 20 }}
            animate={visible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            From unveiling flagship devices before national television to training retail networks across 14 states,
            Nicole brings hands-on product knowledge and steady composure to every live stage.
          </motion.p>
        </div>

        {/* Featured Video Showcase Card */}
        <motion.div
          className={styles.featuredVideoCard}
          initial={{ opacity: 0, y: 30 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.25 }}
        >
          <div className={styles.videoCardGrid}>
            {/* Left: Video Preview Window */}
            <div className={styles.videoPreviewArea} onClick={handleOpenStageVideo}>
              <video
                className={styles.ambientVideo}
                src="/images/presenting.mp4"
                autoPlay
                muted
                loop
                playsInline
              />
              <div className={styles.videoOverlayGradient} />

              <div className={styles.videoPlayPrompt}>
                <div className={styles.playPulseRing}>
                  <svg viewBox="0 0 24 24" width="22" height="22" fill="#050508">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                <div className={styles.promptMeta}>
                  <strong>WATCH LIVE KEYNOTE STAGE VIDEO</strong>
                  <span>Click to open cinema theater player</span>
                </div>
              </div>

              <div className={styles.videoBadge}>
                <span className={styles.liveDot} />
                <span>LIVE RECORDING // LAGOS PREMIERE</span>
              </div>
            </div>

            {/* Right: Keynote Telemetry and Commercial Impact */}
            <div className={styles.videoTelemetryArea}>
              <div className={styles.telemetryHeader}>
                <span className={styles.telemetryTag}>KEYNOTE ARCHIVE</span>
                <span className={styles.verifiedBadge}>✓ TechEconomy.ng Verified</span>
              </div>

              <h3 className={styles.telemetryTitle}>
                Redmi Note 15 Series Grand Premiere
              </h3>

              <div className={styles.metaRow}>
                <div>
                  <span className={styles.metaLabel}>ROLE</span>
                  <p className={styles.metaValue}>Retail Manager and Opening Host</p>
                </div>
                <div>
                  <span className={styles.metaLabel}>VENUE</span>
                  <p className={styles.metaValue}>Lagos Flagship Center, Nigeria</p>
                </div>
              </div>

              <p className={styles.telemetryDesc}>
                Nicole delivered the official opening address for Xiaomi Nigeria&apos;s biggest event of the year, recapping
                global milestones (Fortune #232) and presenting the new generation lineup to trade partners and national media.
              </p>

              <div className={styles.telemetryStats}>
                <div className={styles.telemetryStatBox}>
                  <span className={styles.tStatVal}>500+</span>
                  <span className={styles.tStatLbl}>Press & VIP Attendees</span>
                </div>
                <div className={styles.telemetryStatBox}>
                  <span className={styles.tStatVal}>+18%</span>
                  <span className={styles.tStatLbl}>Nigeria Unit Growth</span>
                </div>
                <div className={styles.telemetryStatBox}>
                  <span className={styles.tStatVal}>48%</span>
                  <span className={styles.tStatLbl}>Tablet Market Share</span>
                </div>
              </div>

              <div className={styles.telemetryActions}>
                <button className={styles.btnLaunchTheater} onClick={handleOpenStageVideo}>
                  <span>Enter Theater Mode</span>
                  <svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
                <a href="#contact" className={styles.btnBookSpeaker}>
                  Book as Keynote Host
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Stage Moments Gallery (Photo Carousel with Click to Inspect) */}
        <div className={styles.stageGallerySection}>
          <div className={styles.galleryHeaderRow}>
            <div>
              <p className={styles.gallerySub}>HISTORICAL ARCHIVE</p>
              <h3 className={styles.galleryTitle}>Stage Moments and Field Leadership</h3>
            </div>
            <div className={styles.galleryThumbControls}>
              {stagePhotos.map((photo, i) => (
                <button
                  key={i}
                  className={`${styles.thumbBtn} ${activePhoto === i ? styles.thumbBtnActive : ''}`}
                  onClick={() => {
                    playClickSound();
                    setActivePhoto(i);
                  }}
                  onMouseEnter={playHoverSound}
                >
                  0{i + 1}
                </button>
              ))}
            </div>
          </div>

          <div className={styles.galleryMainFrame}>
            <div className={styles.galleryActiveImageWrap}>
              <Image
                src={stagePhotos[activePhoto].src}
                alt={stagePhotos[activePhoto].label}
                fill
                style={{ objectFit: 'cover' }}
              />
              <div className={styles.galleryActiveOverlay} />

              <div className={styles.galleryActiveInfo}>
                <span className={styles.galleryActiveTag}>{stagePhotos[activePhoto].tag}</span>
                <h4 className={styles.galleryActiveLabel}>{stagePhotos[activePhoto].label}</h4>
              </div>
            </div>

            {/* Quick Strip of All Moments */}
            <div className={styles.stripRow}>
              {stagePhotos.map((photo, i) => (
                <div
                  key={i}
                  className={`${styles.stripItem} ${activePhoto === i ? styles.stripItemActive : ''}`}
                  onClick={() => {
                    playClickSound();
                    setActivePhoto(i);
                  }}
                >
                  <Image src={photo.src} alt={photo.label} fill style={{ objectFit: 'cover' }} />
                  <span className={styles.stripNumber}>0{i + 1}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Comprehensive Keynotes History Tabbed Dossier */}
        <div className={styles.timelineDossier}>
          <div className={styles.dossierNav}>
            {keynoteEvents.map((evt) => (
              <button
                key={evt.id}
                className={`${styles.dossierTab} ${selectedEventId === evt.id ? styles.dossierTabActive : ''}`}
                onClick={() => {
                  playClickSound();
                  setSelectedEventId(evt.id);
                }}
                onMouseEnter={playHoverSound}
              >
                <span className={styles.dossierYear}>{evt.year}</span>
                <span className={styles.dossierTitleShort}>{evt.title}</span>
                <span className={styles.dossierRoleShort}>{evt.role}</span>
              </button>
            ))}
          </div>

          {/* Active Event Detail Panel */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeEvent.id}
              className={styles.dossierPanel}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35 }}
            >
              <div className={styles.panelHeader}>
                <div className={styles.panelTitleBlock}>
                  <div className={styles.panelYearTag}>
                    <span>{activeEvent.year}</span>
                    <span className={styles.dotSep}>•</span>
                    <span>{activeEvent.location}</span>
                  </div>
                  <h3 className={styles.panelTitle}>{activeEvent.title}</h3>
                  <p className={styles.panelRole}>{activeEvent.role}</p>
                </div>

                <div className={styles.panelBadgeBox}>
                  <span className={styles.verifiedTag}>{activeEvent.pressVerified}</span>
                  <span className={styles.audienceTag}>👥 {activeEvent.audience}</span>
                </div>
              </div>

              <p className={styles.panelSummary}>{activeEvent.summary}</p>

              <div className={styles.milestonesGrid}>
                <p className={styles.milestonesLabel}>DELIVERABLES AND OUTCOMES</p>
                <div className={styles.milestonesList}>
                  {activeEvent.milestones.map((m, idx) => (
                    <div key={idx} className={styles.milestoneItem}>
                      <span className={styles.milestoneBullet}>0{idx + 1}</span>
                      <span className={styles.milestoneText}>{m}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
