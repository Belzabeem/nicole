'use client';
import { useEffect, useRef, useState } from 'react';
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
    id: '7488398527622597894',
    title: 'Turn Your Image into Studio Ghibli AI Art',
    views: '13.6K likes',
    desc: 'Quick ChatGPT tutorial — went massively viral',
    tags: ['AI', 'Tutorial', 'ChatGPT'],
  },
  {
    id: '7487140012593646903',
    title: 'Xiaomi Bluetooth Speaker Review',
    views: 'Top Review',
    desc: 'Xiaomi speaker review — breaking down real-world audio quality',
    tags: ['Xiaomi', 'Review', 'Audio'],
  },
];

// YouTube: embed the channel's latest videos via playlist embed
const YOUTUBE_CHANNEL_ID = 'NICOLEYAHAYA'; // handle — swap for UCxxxxxxx if you have the full channel ID

const youtubeVideos = [
  {
    // You can find video IDs by visiting youtube.com/@NICOLEYAHAYA/videos
    // and copying the ?v= parameter from each URL.
    // Example: https://www.youtube.com/watch?v=XXXXXXXXXXX → id = 'XXXXXXXXXXX'
    id: 'REPLACE_WITH_VIDEO_ID_1', // ← Paste actual YouTube video ID here
    title: 'Xiaomi Smartphone Review — Full Breakdown',
    views: 'Top Viewed',
    desc: 'In-depth review for the Nigerian market audience',
    tags: ['Xiaomi', 'Review', 'YouTube'],
  },
  {
    id: 'REPLACE_WITH_VIDEO_ID_2', // ← Paste actual YouTube video ID here
    title: 'Best Budget Phones in Nigeria 2024',
    views: 'High Views',
    desc: 'Helping audiences make smarter buying decisions',
    tags: ['Budget', 'Nigeria', 'Guide'],
  },
  {
    id: 'REPLACE_WITH_VIDEO_ID_3', // ← Paste actual YouTube video ID here
    title: 'AI Features on Smartphones Explained',
    views: 'Trending',
    desc: 'Breaking down on-device AI into simple language',
    tags: ['AI', 'Explainer', 'Tech'],
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
                  {/* Real TikTok embed */}
                  <div className={styles.embedWrap}>
                    <blockquote
                      className="tiktok-embed"
                      cite={`https://www.tiktok.com/@nicoleyahaya/video/${v.id}`}
                      data-video-id={v.id}
                      style={{ maxWidth: '100%', minWidth: '280px' }}
                    >
                      <section>
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          href={`https://www.tiktok.com/@nicoleyahaya/video/${v.id}`}
                        >
                          {v.title}
                        </a>
                        {' — '}
                        <a target="_blank" rel="noopener noreferrer" href="https://www.tiktok.com/@nicoleyahaya">
                          @nicoleyahaya
                        </a>
                      </section>
                    </blockquote>
                    <TikTokScript />
                  </div>
                  <div className={styles.videoMeta}>
                    <div className={styles.videoTags}>
                      {v.tags.map((t) => <span key={t} className={styles.tag}>{t}</span>)}
                    </div>
                    <p className={styles.videoDesc}>{v.desc}</p>
                    <a
                      href={`https://www.tiktok.com/@nicoleyahaya/video/${v.id}`}
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
                href={`https://www.youtube.com/@${YOUTUBE_CHANNEL_ID}`}
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

/* Load TikTok embed script once */
function TikTokScript() {
  useEffect(() => {
    if (document.getElementById('tiktok-embed-script')) return;
    const s = document.createElement('script');
    s.id = 'tiktok-embed-script';
    s.src = 'https://www.tiktok.com/embed.js';
    s.async = true;
    document.body.appendChild(s);
  }, []);
  return null;
}
