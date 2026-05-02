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
    title: 'Xiaomi MI Compact Projector 2.0 — Is This the Best Budget Projector?',
    views: 'Trending',
    desc: 'I put the MI Compact Projector 2.0 to the test — picture quality, brightness, portability, and whether it is actually worth the price. Here is my full honest verdict',
    tags: ['Mi Compact Projector 2.0', 'Xiaomi', 'TikTok'],
    url: 'https://www.tiktok.com/@nicoleyahaya/video/7607470741042285831',
  },
  {
    id: '7580794599015337234',
    title: 'Xiaomi 17 Pro Max — This Camera Will Blow Your Mind',
    views: 'Popular',
    desc: ' I put the Xiaomi 17 Pro Max camera through its paces — from stunning portrait shots to low-light performance and cinematic video. Is this the best smartphone camera you can get right now?',
    tags: ['Xiaomi 17 Pro Max', 'Camera', 'TikTok'],
    url: 'https://www.tiktok.com/@nicoleyahaya/photo/7580794599015337234',
  },
  {
    id: '7509059288254500102',
    title: 'Top Smartphones Under ₦120,000 — Best Picks Right Now',
    views: 'Viral',
    desc: 'I break down the best smartphones you can get for under ₦120,000 in Nigeria right now — no fluff, just the ones actually worth your money.',
    tags: ['Phone', 'Under ₦120,000 ($75)', 'Tutorial'],
    url: 'https://www.tiktok.com/@nicoleyahaya/video/7509059288254500102',
  },
  {
    id: '7463907104290508038',
    title: 'Redmi Watch 5 Active — The Best Smartwatch Under ₦200,000?',
    views: 'Featured',
    desc: ' I review the Redmi Watch 5 Active — 18-day battery life, 140+ workout modes, 200+ watch faces, and 5ATM water resistance, all for under ₦200,000 ($132). What more could you need in a smartwatch?',
    tags: ['Redmi', 'Unboxing', 'TikTok'],
    url: 'https://www.tiktok.com/@nicoleyahaya/video/7463907104290508038',
  },
];

// YouTube videos — Reviews: HQP_8C2C_SA, IOnc92LsQwk, 4_vBsBKUkuk | YouTube: ri8MKpd5g5U, 0acgjDrv0Ds
const youtubeVideos = [
  {
    id: 'HQP_8C2C_SA',
    title: 'POCO M7 — Is This the Longest-Lasting Budget Phone of 2025?',
    views: 'Top Viewed',
    desc: 'Full POCO M7 review — Nicole unpacks the massive 7000mAh battery, Snapdragon 685, and whether this budget beast is worth your money in Nigeria.',
    tags: ['POCO M7', 'Review', 'Budget Phone'],
  },
  {
    id: 'IOnc92LsQwk',
    title: ' Xiaomi 15T — The Most Underrated Flagship of 2025',
    views: 'High Views',
    desc: 'Nicole puts the Xiaomi 15T to the test — Leica Summilux camera, Dimensity 8400 Ultra chip, 1.5K AMOLED display, and a 5500mAh battery. Is this the flagship that punches above its price tag?',
    tags: ['Xiaomi 15T', 'Review', 'Xiaomi'],
  },
  {
    id: '4_vBsBKUkuk',
    title: 'Redmi Note 15 Review — 6000mAh & 108MP for This Price?!',
    views: 'Trending',
    desc: 'I was at the official Redmi Note 15 launch and here is my full verdict — MediaTek Helio G100-Ultra processor, 108MP camera, and a massive 6000mAh battery. Is this the best budget phone of 2026?',
    tags: ['Redmi Note 15', 'Review', 'Xiaomi'],
  },
  {
    id: 'ri8MKpd5g5U',
    title: 'Redmi Pad 2 — One Month Later, Still Worth It?',
    views: 'Featured',
    desc: 'I used the Redmi Pad 2 every single day for a month — streaming, note-taking, gaming, and work. Here is my honest long-term verdict on whether it is still the best budget tablet you can buy.',
    tags: ['Redmi Pad 2', 'Unboxing', 'Xiaomi'],
  },
  {
    id: '0acgjDrv0Ds',
    title: 'Poco M7 Unboxing — First Look at Xiaomi\'s Newest Budget King',
    views: 'New',
    desc: ' I put the Xiaomi Bluetooth Speaker head-to-head against JBL — testing 93dB loudness, deep bass, 17-hour battery life, RGB lighting, and IP67 water resistance. All at a fraction of the price. Can Xiaomi take the crown?',
    tags: ['Poco M7', 'Unboxing', 'First Look'],
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
