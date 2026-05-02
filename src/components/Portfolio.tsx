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
  /* ── Reviews (YouTube) — Nicole's specified links ── */
  {
    id: 1,
    title: 'POCO M7 Review: Is This the Longest-Lasting Budget Phone of 2025?',
    category: 'Reviews',
    platform: 'YouTube',
    desc: 'Nicole unboxes the POCO M7 — testing the 7000mAh battery, 6.9″ 144Hz display, and 50MP camera to find out if it really replaces your power bank.',
    embed: { type: 'youtube', videoId: 'HQP_8C2C_SA' },
  },
  {
    id: 2,
    title: 'Xiaomi 15T — The Most Underrated Flagship of 2025',
    category: 'Reviews',
    platform: 'YouTube',
    desc: 'Nicole reviews the Xiaomi 15T: Leica Summilux optics, Dimensity 8400 Ultra, HyperOS 2, and a 5500mAh battery — the most slept-on flagship of the year.',
    embed: { type: 'youtube', videoId: 'IOnc92LsQwk' },
  },
  {
    id: 3,
    title: 'Redmi Note 15 Review: 6000mAh & 108MP for THIS Price?!',
    category: 'Reviews',
    platform: 'YouTube',
    desc: 'Nicole was at the Redmi Note 15 launch and puts it through its paces — MediaTek Helio G100-Ultra, 108MP camera, 6000mAh battery. Best budget phone of 2026?',
    embed: { type: 'youtube', videoId: '4_vBsBKUkuk' },
  },
  /* ── YouTube ── */
  {
    id: 4,
    title: 'Redmi Pad 2 One Month Later — Still the Best Budget Tablet?',
    category: 'YouTube',
    platform: 'YouTube',
    desc: 'After 30 days of daily use for streaming, note-taking, gaming, and work — Nicole gives her honest long-term verdict on the Redmi Pad 2.',
    embed: { type: 'youtube', videoId: 'ri8MKpd5g5U' },
  },
  {
    id: 5,
    title: 'Xiaomi Bluetooth Speaker Review — Can It Replace JBL?',
    category: 'YouTube',
    platform: 'YouTube',
    desc: 'Nicole tests the Xiaomi Bluetooth Speaker: 93dB loudness, deep bass, 17-hour battery, RGB lighting, and IP67 — at a fraction of JBL\'s price.',
    embed: { type: 'youtube', videoId: '0acgjDrv0Ds' },
  },
  /* ── TikTok ── */
  {
    id: 6,
    title: 'Which Redmi Note 14 Colour Is Your Favourite?',
    category: 'TikTok',
    platform: 'TikTok',
    desc: 'Nicole shows off every Redmi Note 14 colour option and lets her audience pick — the purple one has her heart.',
    embed: { type: 'tiktok', videoId: '7607470741042285831', username: 'nicoleyahaya' },
  },
  {
    id: 7,
    title: 'Redmi A5 Unboxing — Full Specs & Nigeria Price Breakdown',
    category: 'TikTok',
    platform: 'TikTok',
    desc: 'Unboxing the Redmi A5: 6.88″ 120Hz display, 5200mAh battery, 32MP AI selfie camera — and exactly what it costs in Nigeria (₦99,700).',
    embed: { type: 'tiktok', videoId: '7580794599015337234', username: 'nicoleyahaya' },
  },
  {
    id: 8,
    title: 'Turn Any Image into Ghibli Art Using ChatGPT — Free Tutorial',
    category: 'TikTok',
    platform: 'TikTok',
    desc: 'Nicole shows how to transform your photos into Studio Ghibli-style AI art using ChatGPT for free — this one went viral with 13.6K likes.',
    embed: { type: 'tiktok', videoId: '7509059288254500102', username: 'nicoleyahaya' },
  },
  {
    id: 9,
    title: 'Redmi A3 Pro — Full Unboxing & First Impressions',
    category: 'TikTok',
    platform: 'TikTok',
    desc: 'Unboxing the Redmi A3 Pro (4GB + 128GB): 6.88″ display, 5160mAh battery, 50MP AI dual camera, MediaTek G81-Ultra — Nicole breaks down if it\'s worth buying.',
    embed: { type: 'tiktok', videoId: '7463907104290508038', username: 'nicoleyahaya' },
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
      ) : embed.type === 'tiktok' ? (
        <div className={styles.thumbSkeleton} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 8 }}>
          <svg viewBox="0 0 24 24" fill="rgba(201,168,76,0.7)" width="36" height="36">
            <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.75a8.16 8.16 0 004.78 1.52V6.82a4.85 4.85 0 01-1.01-.13z"/>
          </svg>
          <span style={{ color: 'rgba(201,168,76,0.7)', fontSize: 11, fontFamily: 'monospace', letterSpacing: '0.1em' }}>TikTok</span>
        </div>
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
