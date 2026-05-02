'use client';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import styles from './FeaturedContent.module.css';

/* ─────────────────────────────────────────────────────────────────────────
   REAL CONTENT DATA
   All video IDs and links are verified from Nicole's actual profiles:
   TikTok:   @nicoleyahaya
   YouTube:  @NICOLEYAHAYA
   Instagram: @nicole_yayus
───────────────────────────────────────────────────────────────────────── */

const tiktoks = [
  {
    id: '7607470741042285831',
    title: 'Which Redmi Note 14 Colour Is Your Favourite?',
    views: 'Trending',
    desc: 'Nicole shows off the Redmi Note 14 colour options and lets her audience weigh in — the purple one has her heart.',
    tags: ['Redmi', 'Xiaomi', 'TikTok'],
    url: 'https://www.tiktok.com/@nicoleyahaya/video/7607470741042285831',
  },
  {
    id: '7580794599015337234',
    title: 'Redmi A5 Unboxing — Full Specs & Price Breakdown',
    views: 'Popular',
    desc: 'Unboxing the Redmi A5 with all the specs laid out clearly: 6.88″ display, 5200mAh battery, 32MP selfie camera — and what it costs in Nigeria.',
    tags: ['Redmi A5', 'Unboxing', 'TikTok'],
    url: 'https://www.tiktok.com/@nicoleyahaya/photo/7580794599015337234',
  },
  {
    id: '7509059288254500102',
    title: 'Turn Any Image into Ghibli Art Using ChatGPT — Free Tutorial',
    views: 'Viral',
    desc: 'A quick step-by-step guide to transforming your photos into Studio Ghibli-style art using ChatGPT — completely free.',
    tags: ['AI', 'ChatGPT', 'Tutorial'],
    url: 'https://www.tiktok.com/@nicoleyahaya/video/7509059288254500102',
  },
  {
    id: '7463907104290508038',
    title: 'Redmi A3 Pro — Full Unboxing & First Impressions',
    views: 'Featured',
    desc: 'Unboxing the Redmi A3 Pro (4GB + 128GB) — Nicole breaks down the specs, price, and whether it\'s worth buying.',
    tags: ['Redmi', 'Unboxing', 'TikTok'],
    url: 'https://www.tiktok.com/@nicoleyahaya/video/7463907104290508038',
  },
];

// YouTube videos — Reviews: HQP_8C2C_SA, IOnc92LsQwk, 4_vBsBKUkuk | YouTube: ri8MKpd5g5U, 0acgjDrv0Ds
const youtubeVideos = [
  {
    id: 'HQP_8C2C_SA',
    title: 'POCO M7 Review: Is This the Longest-Lasting Budget Phone of 2025?',
    views: 'Top Viewed',
    desc: 'Nicole unboxes the POCO M7 — testing the 7000mAh battery, 6.9″ 144Hz display, and 50MP camera to find out if it really replaces your power bank.',
    tags: ['POCO M7', 'Review', 'Budget Phone'],
  },
  {
    id: 'IOnc92LsQwk',
    title: 'Xiaomi 15T — The Most Underrated Flagship of 2025',
    views: 'High Views',
    desc: 'Nicole reviews the Xiaomi 15T: Leica Summilux optics, Dimensity 8400 Ultra, HyperOS 2, and a 5500mAh battery — making the case for the most slept-on flagship.',
    tags: ['Xiaomi 15T', 'Flagship', 'Leica'],
  },
  {
    id: '4_vBsBKUkuk',
    title: 'Redmi Note 15 Review: 6000mAh & 108MP for THIS Price?!',
    views: 'Trending',
    desc: 'Nicole was at the Redmi Note 15 series launch and puts it through its paces — MediaTek Helio G100-Ultra, 108MP camera, and a 6000mAh battery. Best budget phone of 2026?',
    tags: ['Redmi Note 15', 'Review', 'Budget'],
  },
  {
    id: 'ri8MKpd5g5U',
    title: 'Redmi Pad 2 One Month Later — Still the Best Budget Tablet?',
    views: 'Featured',
    desc: 'After 30 days of daily use for streaming, note-taking, gaming, and work — Nicole gives her honest long-term verdict on the Redmi Pad 2.',
    tags: ['Redmi Pad 2', 'Tablet', 'Long-term Review'],
  },
  {
    id: '0acgjDrv0Ds',
    title: 'Xiaomi Bluetooth Speaker Review — Can It Replace JBL?',
    views: 'New',
    desc: 'Nicole tests the Xiaomi Bluetooth Speaker: 93dB loudness, deep bass, 17-hour battery, RGB lighting, and IP67 water resistance — at a fraction of JBL\'s price.',
    tags: ['Xiaomi Speaker', 'Audio', 'Review'],
  },
];

const platforms = ['TikTok', 'YouTube', 'Instagram'];

export default function FeaturedContent() {
  const { ref, visible } = useScrollReveal(0.1);
  const [activePlatform, setActivePlatform] = useState('TikTok');

  return (
    <section id="featured" className={styles.section} ref={ref}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <motion.p
            className="section-label"
            initial={{ opacity: 0, y: 20 }}
            animate={visible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            Featured Content
          </motion.p>
          <motion.h2
            className={styles.heading}
            initial={{ opacity: 0, y: 30 }}
            animate={visible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            Watch the <em>Work</em>
          </motion.h2>
          <motion.p
            className={styles.sub}
            initial={{ opacity: 0 }}
            animate={visible ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
          >
            Real content, real results — across TikTok, YouTube, and Instagram.
          </motion.p>
        </div>

        {/* Platform tabs */}
        <motion.div
          className={styles.tabs}
          initial={{ opacity: 0, y: 20 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.25 }}
        >
          {platforms.map((p) => (
            <button
              key={p}
              className={`${styles.tab} ${activePlatform === p ? styles.tabActive : ''}`}
              onClick={() => setActivePlatform(p)}
            >
              <span className={styles.tabIcon}>{p === 'TikTok' ? '♪' : p === 'YouTube' ? '▶' : '◈'}</span>
              {p}
            </button>
          ))}
        </motion.div>

        {/* TikTok panel */}
        {activePlatform === 'TikTok' && (
          <motion.div
            className={styles.panel}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className={styles.tiktokGrid}>
              {tiktoks.map((v, i) => (
                <motion.div
                  key={v.id}
                  className={styles.tiktokCard}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.15 }}
                >
                  {/* TikTok iframe embed — real video ID, same style as YouTube */}
                  <div className={styles.embedWrap}>
                    <iframe
                      className={styles.tiktokEmbed}
                      src={`https://www.tiktok.com/embed/v2/${v.id}`}
                      title={v.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                  <div className={styles.videoMeta}>
                    <div className={styles.videoTags}>
                      {v.tags.map((t) => <span key={t} className={styles.tag}>{t}</span>)}
                    </div>
                    <p className={styles.videoDesc}>{v.desc}</p>
                    <a
                      href={v.url || `https://www.tiktok.com/@nicoleyahaya/video/${v.id}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.watchLink}
                    >
                      Watch on TikTok →
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className={styles.profileLink}>
              <a
                href="https://www.tiktok.com/@nicoleyahaya"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.profileBtn}
              >
                <span>♪</span> View Full TikTok Profile @nicoleyahaya
              </a>
            </div>
          </motion.div>
        )}

        {/* YouTube panel */}
        {activePlatform === 'YouTube' && (
          <motion.div
            className={styles.panel}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className={styles.youtubeGrid}>
              {youtubeVideos.map((v, i) => (
                <motion.div
                  key={v.id}
                  className={styles.ytCard}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  {v.id.startsWith('REPLACE') ? (
                    /* Placeholder until real IDs are added */
                    <div className={styles.ytPlaceholder}>
                      <span className={styles.ytIcon}>▶</span>
                      <p className={styles.ytPlaceholderTitle}>{v.title}</p>
                      <p className={styles.ytPlaceholderHint}>
                        Add YouTube video ID in FeaturedContent.tsx
                      </p>
                    </div>
                  ) : (
                    <iframe
                      className={styles.ytEmbed}
                      src={`https://www.youtube.com/embed/${v.id}?rel=0&modestbranding=1`}
                      title={v.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  )}
                  <div className={styles.videoMeta}>
                    <div className={styles.videoTags}>
                      {v.tags.map((t) => <span key={t} className={styles.tag}>{t}</span>)}
                    </div>
                    <p className={styles.videoDesc}>{v.desc}</p>
                    {!v.id.startsWith('REPLACE') && (
                      <a
                        href={`https://www.youtube.com/watch?v=${v.id}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.watchLink}
                      >
                        Watch on YouTube →
                      </a>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            <div className={styles.profileLink}>
              <a
                href="https://www.youtube.com/@NICOLEYAHAYA"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.profileBtn}
              >
                <span>▶</span> View Full YouTube Channel @NICOLEYAHAYA
              </a>
            </div>
          </motion.div>
        )}

        {/* Instagram panel */}
        {activePlatform === 'Instagram' && (
          <motion.div
            className={styles.panel}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className={styles.igPanel}>
              <div className={styles.igLeft}>
                <p className={styles.igHandle}>@nicole_yayus</p>
                <h3 className={styles.igTitle}>Nicole Yahaya Gaku</h3>
                <p className={styles.igBio}>
                  Tech Content Creator · 6+ years Tech Keynote Speaker · Leading with tech
                </p>
                <div className={styles.igStats}>
                  <div className={styles.igStat}>
                    <span className={styles.igStatNum}>164+</span>
                    <span className={styles.igStatLabel}>Posts</span>
                  </div>
                  <div className={styles.igStat}>
                    <span className={styles.igStatNum}>997</span>
                    <span className={styles.igStatLabel}>Followers</span>
                  </div>
                  <div className={styles.igStat}>
                    <span className={styles.igStatNum}>Tech</span>
                    <span className={styles.igStatLabel}>Niche</span>
                  </div>
                </div>
                <a
                  href="https://www.instagram.com/nicole_yayus/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.profileBtn}
                >
                  <span>◈</span> Follow on Instagram
                </a>
              </div>

              <div className={styles.igRight}>
                {/* Instagram reel embed — from search results */}
                <div className={styles.igEmbed}>
                  <iframe
                    src="https://www.instagram.com/nicole_yayus/embed"
                    className={styles.igIframe}
                    allowFullScreen
                    scrolling="no"
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  />
                </div>
                <p className={styles.igNote}>
                  Latest posts from{' '}
                  <a href="https://www.instagram.com/nicole_yayus/" target="_blank" rel="noopener noreferrer">
                    @nicole_yayus
                  </a>
                </p>
              </div>
            </div>

            {/* Highlighted reel */}
            <div className={styles.igReelRow}>
              <p className={styles.igReelLabel}>Featured Reel</p>
              <div className={styles.igReelEmbed}>
                {/* Xiaomi upgrade reel found in search results */}
                <iframe
                  src="https://www.instagram.com/reel/DGK8PwCs2Lx/embed"
                  className={styles.igReelIframe}
                  allowFullScreen
                  scrolling="no"
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                />
              </div>
              <p className={styles.igReelDesc}>
                &ldquo;Watch this before upgrading your phone&rdquo; — high-engagement reel
              </p>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}



/* Load TikTok embed script once — handles both full video IDs and short URLs */
function TikTokScript() {
  useEffect(() => {
    if (document.getElementById('tiktok-embed-script')) {
      if (typeof (window as any).tiktokEmbed !== 'undefined') {
        (window as any).tiktokEmbed.lib.render(document.querySelectorAll('.tiktok-embed'));
      }
      return;
    }
    const s = document.createElement('script');
    s.id = 'tiktok-embed-script';
    s.src = 'https://www.tiktok.com/embed.js';
    s.async = true;
    document.body.appendChild(s);
  }, []);
  return null;
}
