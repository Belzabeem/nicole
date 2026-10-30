'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { playClickSound, playHoverSound, playChimeSound } from '@/utils/sound';
import type { CinemaMedia } from './CinemaModal';
import styles from './VideoVault.module.css';

interface VideoVaultProps {
  onOpenCinema: (media: CinemaMedia) => void;
}

type MediaItem = {
  id: string;
  title: string;
  category: 'Flagship Reviews' | 'Viral Shorts' | 'Audio & Ecosystem' | 'Buying Guides';
  platform: 'YouTube' | 'TikTok';
  youtubeId?: string;
  tiktokId?: string;
  specs: string[];
  verdict: string;
  viewsBadge: string;
  ratingScore: string;
};

const mediaVault: MediaItem[] = [
  {
    id: '15t',
    title: 'Xiaomi 15T: The Flagship Disruptor of 2025',
    category: 'Flagship Reviews',
    platform: 'YouTube',
    youtubeId: 'IOnc92LsQwk',
    specs: ['Leica Summilux Optics', 'Dimensity 8400-Ultra', '1.5K 144Hz AMOLED', '5500mAh'],
    verdict: 'Punches well above its price tier. The Leica optical calibration delivers flagship-level skin tones and dynamic range.',
    viewsBadge: 'High Engagement',
    ratingScore: '9.4 / 10',
  },
  {
    id: 'pocom7',
    title: 'POCO M7: 7000mAh Battery Endurance Beast',
    category: 'Flagship Reviews',
    platform: 'YouTube',
    youtubeId: 'HQP_8C2C_SA',
    specs: ['7000mAh Silicon Battery', 'Snapdragon 685', 'FHD+ 120Hz', '33W Turbo'],
    verdict: 'A monster for Nigerian daily power realities. Three full days of battery life without touching a charger.',
    viewsBadge: 'Top Viewed',
    ratingScore: '9.1 / 10',
  },
  {
    id: 'redminote15',
    title: 'Redmi Note 15: 108MP Camera Launch Breakdown',
    category: 'Flagship Reviews',
    platform: 'YouTube',
    youtubeId: '4_vBsBKUkuk',
    specs: ['108MP Primary Sensor', 'Helio G100-Ultra', '6000mAh Battery', 'HyperOS 2.0'],
    verdict: 'Hands-on verdict straight from the Lagos launch stage. Redefines entry-tier mobile photography.',
    viewsBadge: 'Launch Special',
    ratingScore: '8.9 / 10',
  },
  {
    id: 'speaker',
    title: 'Xiaomi Bluetooth Speaker vs JBL: The True Audio Verdict',
    category: 'Audio & Ecosystem',
    platform: 'YouTube',
    youtubeId: '0acgjDrv0Ds',
    specs: ['93dB Output', '17-Hour Battery', 'IP67 Waterproof', 'RGB Audio Sync'],
    verdict: 'Tested head-to-head for acoustic depth and outdoor volume. Offers 90% of JBL performance at half the price.',
    viewsBadge: 'Viral Compare',
    ratingScore: '9.3 / 10',
  },
  {
    id: 'pad2',
    title: 'Redmi Pad 2: One Month Real-World Long-Term Test',
    category: 'Flagship Reviews',
    platform: 'YouTube',
    youtubeId: 'ri8MKpd5g5U',
    specs: ['11-inch 2K Display', 'Quad Stereo Speakers', '8000mAh', 'Multi-Window UX'],
    verdict: 'My daily driver tablet for one full month. The gold standard for Nigerian students and remote professionals.',
    viewsBadge: 'Long-Term Test',
    ratingScore: '9.0 / 10',
  },
  {
    id: 'projector',
    title: 'Xiaomi MI Compact Projector 2.0: Cinematic Living Room Test',
    category: 'Audio & Ecosystem',
    platform: 'TikTok',
    tiktokId: '7607470741042285831',
    specs: ['1080p Native HDR', 'Dolby Audio', 'Auto-Keystone', 'Ultra-Portable'],
    verdict: 'Turns any bedroom wall into a private cinema. Tested for real-world ambient brightness and fan noise.',
    viewsBadge: 'Trending Reel',
    ratingScore: '9.2 / 10',
  },
  {
    id: '17promax',
    title: 'Xiaomi 17 Pro Max Camera: Portrait & Night Mode Test',
    category: 'Viral Shorts',
    platform: 'TikTok',
    tiktokId: '7580794599015337234',
    specs: ['Triple Periscope', 'Cinematic 4K 60fps', 'Pro Portrait Bokeh'],
    verdict: 'Low light photography that will genuinely blow your mind. A creator dream rig.',
    viewsBadge: 'Viral',
    ratingScore: '9.7 / 10',
  },
  {
    id: 'under120k',
    title: 'Best Smartphones Under ₦120,000: Zero Fluff Guide',
    category: 'Buying Guides',
    platform: 'TikTok',
    tiktokId: '7509059288254500102',
    specs: ['Sub-₦120k Price Point', 'Network Reliability', 'Battery Longevity'],
    verdict: 'Practical consumer advice helping everyday Nigerians avoid buying e-waste.',
    viewsBadge: 'Viral Guide',
    ratingScore: '9.5 / 10',
  },
  {
    id: 'watch5',
    title: 'Redmi Watch 5 Active: 18-Day Battery Smartwatch',
    category: 'Audio & Ecosystem',
    platform: 'TikTok',
    tiktokId: '7463907104290508038',
    specs: ['18-Day Battery Life', '140+ Sports Modes', '5ATM Water Resistance'],
    verdict: 'Unbeatable value in the wearable market. Tracks health with zero battery anxiety.',
    viewsBadge: 'Featured',
    ratingScore: '8.8 / 10',
  },
];

const categories = ['All Works', 'Flagship Reviews', 'Viral Shorts', 'Audio & Ecosystem', 'Buying Guides'];

export default function VideoVault({ onOpenCinema }: VideoVaultProps) {
  const { ref, visible } = useScrollReveal(0.1);
  const [activeFilter, setActiveFilter] = useState('All Works');

  const filteredMedia = activeFilter === 'All Works'
    ? mediaVault
    : mediaVault.filter((m) => m.category === activeFilter);

  const handlePlayMedia = (item: MediaItem) => {
    playChimeSound();
    if (item.platform === 'YouTube' && item.youtubeId) {
      onOpenCinema({
        type: 'youtube',
        src: item.youtubeId,
        title: item.title,
        subtitle: `Nicole Yahaya Hardware Review · ${item.verdict}`,
        eventBadge: `${item.platform} Review`,
      });
    } else if (item.tiktokId) {
      onOpenCinema({
        type: 'tiktok',
        src: item.tiktokId,
        title: item.title,
        subtitle: `Nicole Yahaya TikTok Short · ${item.verdict}`,
        eventBadge: 'TikTok Short',
      });
    }
  };

  return (
    <section id="hardware" className={styles.section} ref={ref}>
      <div className="container-max">
        {/* Section Header */}
        <div className={styles.header}>
          <motion.div
            className="section-label"
            initial={{ opacity: 0, y: 15 }}
            animate={visible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            The Hardware Lab & Vault
          </motion.div>
          <motion.h2
            className={styles.title}
            initial={{ opacity: 0, y: 25 }}
            animate={visible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            In-Depth Testing. <br />
            <span className="gold-gradient-text">Unfiltered Hardware Verdicts.</span>
          </motion.h2>
          <motion.p
            className={styles.description}
            initial={{ opacity: 0, y: 20 }}
            animate={visible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            A curated vault of hands-on smartphone teardowns, long-term battery torture tests, and ecosystem breakdowns
            trusted by hundreds of thousands of African tech buyers.
          </motion.p>
        </div>

        {/* Filter Pills */}
        <div className={styles.filterBar}>
          {categories.map((cat) => (
            <button
              key={cat}
              className={`${styles.filterBtn} ${activeFilter === cat ? styles.filterBtnActive : ''}`}
              onClick={() => {
                playClickSound();
                setActiveFilter(cat);
              }}
              onMouseEnter={playHoverSound}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Media Grid */}
        <motion.div className={styles.mediaGrid} layout>
          <AnimatePresence mode="popLayout">
            {filteredMedia.map((item, idx) => (
              <motion.article
                key={item.id}
                className={styles.card}
                layout
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.45, delay: idx * 0.05 }}
              >
                {/* Thumbnail Window */}
                <div className={styles.thumbWindow} onClick={() => handlePlayMedia(item)}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={
                      item.youtubeId
                        ? `https://img.youtube.com/vi/${item.youtubeId}/hqdefault.jpg`
                        : '/images/speaking-1.jpg'
                    }
                    alt={item.title}
                    className={styles.thumbImg}
                    loading="lazy"
                  />
                  <div className={styles.thumbOverlay} />

                  {/* Play Button Trigger */}
                  <div className={styles.playTrigger} aria-label={`Play ${item.title}`}>
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>

                  {/* Platform & Score Tag */}
                  <div className={styles.thumbTopMeta}>
                    <span className={styles.platformBadge}>
                      {item.platform === 'YouTube' ? '▶ YOUTUBE' : '♪ TIKTOK'}
                    </span>
                    <span className={styles.ratingBadge}>★ {item.ratingScore}</span>
                  </div>

                  <span className={styles.badgeBottom}>{item.viewsBadge}</span>
                </div>

                {/* Card Information Body */}
                <div className={styles.cardBody}>
                  <div className={styles.cardCategory}>{item.category}</div>
                  <h3 className={`${styles.cardTitle} ${item.title.includes('₦') ? styles.cardTitleNaira : ''}`}>{item.title}</h3>

                  {/* Specs Tags */}
                  <div className={styles.specsRow}>
                    {item.specs.map((spec, sIdx) => (
                      <span key={sIdx} className={styles.specPill}>
                        {spec}
                      </span>
                    ))}
                  </div>

                  <p className={styles.verdictText}>&ldquo;{item.verdict}&rdquo;</p>

                  <div className={styles.cardFooter}>
                    <button
                      className={styles.watchNowBtn}
                      onClick={() => handlePlayMedia(item)}
                      onMouseEnter={playHoverSound}
                    >
                      <span>Watch Breakdown</span>
                      <svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
