'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import styles from './Portfolio.module.css';

const categories = ['All', 'Reviews', 'TikTok', 'B-Roll', 'YouTube'];

type VideoEmbed =
  | { type: 'youtube'; videoId: string }
  | { type: 'tiktok'; videoId: string; username: string }
  | { type: 'placeholder'; label: string };

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
    // 4,342 likes — highest engagement found on her TikTok
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
    desc: 'Step-by-step tutorial on turning any image into a Studio Ghibli-style AI artwork using ChatGPT — 13.6K likes and one of her most viral pieces of content.',
    embed: { type: 'tiktok', videoId: '7488398527622597894', username: 'nicoleyahaya' },
  },
];

function VideoPlayer({ embed, title }: { embed: VideoEmbed; title: string }) {
  if (embed.type === 'youtube') {
    return (
      <iframe
        className={styles.videoIframe}
        src={`https://www.youtube.com/embed/${embed.videoId}?rel=0&modestbranding=1&controls=1&showinfo=0&iv_load_policy=3`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        loading="lazy"
      />
    );
  }

  if (embed.type === 'tiktok') {
    /**
     * TikTok embed v2 renders UI chrome: header (~60px) + video (~480px) + action bar (~180px).
     * We use a clipping wrapper with overflow:hidden to show only the video portion.
     * The iframe is rendered full-size and shifted up to hide the header,
     * while the wrapper height clips the bottom action bar.
     */
    return (
      <div className={styles.tiktokCrop}>
        <iframe
          className={styles.tiktokIframe}
          src={`https://www.tiktok.com/embed/v2/${embed.videoId}?hide_caption=1&hide_controls=1`}
          title={title}
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
          scrolling="no"
        />
      </div>
    );
  }

  // Fallback placeholder
  return (
    <div className={styles.imgPlaceholder}>
      <span className={styles.placeholderIcon}>▶</span>
      <span className={styles.placeholderLabel}>{(embed as { label: string }).label}</span>
      <span className={styles.placeholderSub}>Add your video URL to display here</span>
    </div>
  );
}

export default function Portfolio() {
  const { ref, visible } = useScrollReveal(0.1);
  const [active, setActive] = useState('All');
  const filtered = works.filter((w) => active === 'All' || w.category === active);

  return (
    <section id="portfolio" className={styles.portfolio} ref={ref}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <motion.p className="section-label" initial={{ opacity: 0, y: 20 }} animate={visible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>Portfolio</motion.p>
          <motion.h2 className={styles.heading} initial={{ opacity: 0, y: 30 }} animate={visible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, delay: 0.1 }}>
            Selected <em>Work</em>
          </motion.h2>
        </div>

        <motion.div className={styles.filters} initial={{ opacity: 0, y: 20 }} animate={visible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.2 }}>
          {categories.map((cat) => (
            <button key={cat} className={`${styles.filter} ${active === cat ? styles.filterActive : ''}`} onClick={() => setActive(cat)}>{cat}</button>
          ))}
        </motion.div>

        <motion.div className={styles.grid} layout>
          <AnimatePresence mode="popLayout">
            {filtered.map((w, i) => (
              <motion.div key={w.id} className={styles.card} layout
                initial={{ opacity: 0, scale: 0.95, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <div className={styles.cardVideo}>
                  <VideoPlayer embed={w.embed} title={w.title} />
                </div>
                <div className={styles.cardBody}>
                  <span className={styles.cardCat}>{w.category}</span>
                  <h3 className={styles.cardTitle}>{w.title}</h3>
                  <p className={styles.cardDesc}>{w.desc}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
