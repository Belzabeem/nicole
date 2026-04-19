'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import styles from './Portfolio.module.css';

const categories = ['All', 'Reviews', 'TikTok', 'B-Roll', 'YouTube'];

type VideoEmbed =
  | { type: 'youtube'; videoId: string }
  | { type: 'tiktok'; videoId: string; username: string };

const works: {
  id: number;
  title: string;
  category: string;
  platform: string;
  desc: string;
  embed: VideoEmbed;
}[] = [
  {
    id: 1,
    title: 'Redmi A5 — Unboxing & First Look',
    category: 'TikTok',
    platform: 'TikTok',
    desc: 'ASMR-style unboxing of the Redmi A5 with full specs breakdown for Nigerian audiences.',
    embed: { type: 'tiktok', videoId: '7492828109486673207', username: 'nicoleyahaya' },
  },
  {
    id: 2,
    title: 'POCO M7 — Unboxing',
    category: 'TikTok',
    platform: 'TikTok',
    desc: 'Unboxing the POCO M7 with price and key specs for the Nigerian market.',
    embed: { type: 'tiktok', videoId: '7551383223364848904', username: 'nicoleyahaya' },
  },
  {
    id: 3,
    title: 'Redmi Pad SE — Full Review',
    category: 'Reviews',
    platform: 'TikTok',
    desc: 'Is the Redmi Pad SE still worth buying in 2025? An honest breakdown for budget-conscious buyers.',
    embed: { type: 'tiktok', videoId: '7495403939035237637', username: 'nicoleyahaya' },
  },
  {
    id: 4,
    title: 'Redmi Note 14 Pro — Unboxing',
    category: 'B-Roll',
    platform: 'TikTok',
    desc: 'Full unboxing of the Redmi Note 14 Pro with cinematic product visuals.',
    embed: { type: 'tiktok', videoId: '7467174045528689925', username: 'nicoleyahaya' },
  },
  {
    id: 5,
    title: 'Redmi Note 14 — Worth It?',
    category: 'Reviews',
    platform: 'TikTok',
    desc: 'Is the Redmi Note 14 the best budget phone for 2025? Honest take at ₦254,000.',
    embed: { type: 'tiktok', videoId: '7473820490952445239', username: 'nicoleyahaya' },
  },
  {
    id: 6,
    title: 'Redmi Note 14 — Colour Drop',
    category: 'TikTok',
    platform: 'TikTok',
    desc: 'Which Redmi Note 14 colour is your favourite? Short-form engagement content driving audience interaction.',
    embed: { type: 'tiktok', videoId: '7464273449700101381', username: 'nicoleyahaya' },
  },
  {
    id: 7,
    title: 'AI Ghibli Tutorial — ChatGPT Image Transform',
    category: 'YouTube',
    platform: 'TikTok → YouTube',
    desc: 'Step-by-step tutorial on turning any image into a Studio Ghibli-style AI artwork using ChatGPT — 13.6K likes.',
    embed: { type: 'tiktok', videoId: '7488398527622597894', username: 'nicoleyahaya' },
  },
];

/* ── Get the external URL for a video ── */
function getWatchUrl(embed: VideoEmbed) {
  if (embed.type === 'tiktok') {
    return `https://www.tiktok.com/@${embed.username}/video/${embed.videoId}`;
  }
  return `https://www.youtube.com/watch?v=${embed.videoId}`;
}

/* ── Fetch TikTok thumbnail via oEmbed (runs in browser only) ── */
function useTikTokThumbnail(videoId: string): string | null {
  const [thumb, setThumb] = useState<string | null>(null);
  useEffect(() => {
    if (!videoId) return;
    fetch(`https://www.tiktok.com/oembed?url=https://www.tiktok.com/@nicoleyahaya/video/${videoId}`)
      .then((r) => r.json())
      .then((d) => { if (d.thumbnail_url) setThumb(d.thumbnail_url); })
      .catch(() => {});
  }, [videoId]);
  return thumb;
}

/* ── Platform icon SVGs ── */
function TikTokIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="12" height="12">
      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.75a8.16 8.16 0 004.78 1.52V6.82a4.85 4.85 0 01-1.01-.13z"/>
    </svg>
  );
}
function YouTubeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="12" height="12">
      <path d="M23.5 6.19a3.02 3.02 0 00-2.12-2.14C19.54 3.5 12 3.5 12 3.5s-7.54 0-9.38.55A3.02 3.02 0 00.5 6.19C0 8.04 0 12 0 12s0 3.96.5 5.81a3.02 3.02 0 002.12 2.14C4.46 20.5 12 20.5 12 20.5s7.54 0 9.38-.55a3.02 3.02 0 002.12-2.14C24 15.96 24 12 24 12s0-3.96-.5-5.81zM9.75 15.5v-7l6.5 3.5-6.5 3.5z"/>
    </svg>
  );
}

/* ── Single card thumbnail ── */
function CardThumbnail({ embed, title }: { embed: VideoEmbed; title: string }) {
  const tiktokThumb = useTikTokThumbnail(
    embed.type === 'tiktok' ? embed.videoId : ''
  );
  const src = embed.type === 'tiktok'
    ? tiktokThumb
    : `https://img.youtube.com/vi/${embed.videoId}/hqdefault.jpg`;

  return (
    <div className={`${styles.thumb} ${embed.type === 'tiktok' ? styles.thumbPortrait : styles.thumbLandscape}`}>
      {/* Thumbnail */}
      {src ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={src}
          alt={title}
          className={styles.thumbImg}
          loading="lazy"
        />
      ) : (
        <div className={styles.thumbSkeleton} />
      )}

      {/* Gradient overlay */}
      <div className={styles.thumbOverlay} />

      {/* Play circle */}
      <div className={styles.playCircle} aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
          <path d="M8 5v14l11-7z" />
        </svg>
      </div>

      {/* Platform pill */}
      <span className={styles.platformPill}>
        {embed.type === 'tiktok' ? <TikTokIcon /> : <YouTubeIcon />}
        {embed.type === 'tiktok' ? 'TikTok' : 'YouTube'}
      </span>
    </div>
  );
}

/* ── Portfolio section ── */
export default function Portfolio() {
  const { ref, visible } = useScrollReveal(0.1);
  const [active, setActive] = useState('All');
  const filtered = works.filter((w) => active === 'All' || w.category === active);

  return (
    <section id="portfolio" className={styles.portfolio} ref={ref}>
      <div className={styles.inner}>

        {/* Header */}
        <div className={styles.header}>
          <motion.p className="section-label"
            initial={{ opacity: 0, y: 20 }} animate={visible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
            Portfolio
          </motion.p>
          <motion.h2 className={styles.heading}
            initial={{ opacity: 0, y: 30 }} animate={visible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, delay: 0.1 }}>
            Selected <em>Work</em>
          </motion.h2>
          <motion.p className={styles.sub}
            initial={{ opacity: 0, y: 20 }} animate={visible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, delay: 0.2 }}>
            A curated selection of content created across platforms — from viral TikToks to in-depth reviews.
          </motion.p>
        </div>

        {/* Filters */}
        <motion.div className={styles.filters}
          initial={{ opacity: 0, y: 20 }} animate={visible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.25 }}>
          {categories.map((cat) => (
            <button key={cat}
              className={`${styles.filter} ${active === cat ? styles.filterActive : ''}`}
              onClick={() => setActive(cat)}>
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <motion.div className={styles.grid} layout>
          <AnimatePresence mode="popLayout">
            {filtered.map((w, i) => (
              <motion.article key={w.id} className={styles.card} layout
                initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.45, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}>

                {/* Entire top area is a link to the video */}
                <a
                  href={getWatchUrl(w.embed)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.cardLink}
                  aria-label={`Watch ${w.title}`}
                >
                  <CardThumbnail embed={w.embed} title={w.title} />
                </a>

                {/* Card body */}
                <div className={styles.cardBody}>
                  <div className={styles.cardMeta}>
                    <span className={styles.cardCat}>{w.category}</span>
                    <span className={styles.cardPlatformLabel}>{w.platform}</span>
                  </div>
                  <h3 className={styles.cardTitle}>{w.title}</h3>
                  <p className={styles.cardDesc}>{w.desc}</p>

                  {/* Watch button */}
                  <a
                    href={getWatchUrl(w.embed)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.watchBtn}
                  >
                    <span>{w.embed.type === 'tiktok' ? 'Watch on TikTok' : 'Watch on YouTube'}</span>
                    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" width="12" height="12">
                      <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </a>
                </div>

              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
