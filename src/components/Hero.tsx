'use client';

import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';
import { featuredKeynote, heroStats, site } from '@/data/site';
import CountUp from './CountUp';
import { Play } from './Icons';
import { useMedia } from './MediaProvider';
import styles from './Hero.module.css';

const ease = [0.16, 1, 0.3, 1] as const;

export default function Hero() {
  const { open } = useMedia();
  const reduce = useReducedMotion();

  const rise = (delay: number) => ({
    initial: reduce ? false : ({ opacity: 0, y: 22 } as const),
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.9, delay, ease },
  });

  const playKeynote = () =>
    open({
      kind: 'file',
      src: featuredKeynote.video.src,
      poster: featuredKeynote.video.poster,
      title: featuredKeynote.title,
      caption: 'Keynote delivery at Jewel Aeida, Lagos · Official recap by Xiaomi Nigeria',
    });

  return (
    <section id="top" className={`section tone-light ${styles.hero}`} aria-labelledby="hero-title">
      <div className={styles.glowA} aria-hidden="true" />
      <div className={styles.glowB} aria-hidden="true" />

      {/* Main 2-column balanced lockup */}
      <div className={`container ${styles.grid}`}>
        {/* Left column: Brand lockup, headline, tagline, CTAs */}
        <div className={styles.copy}>
          {/* Brand lockup */}
          <motion.div className={styles.brandLockup} {...rise(0.08)}>
            <div className={styles.brandMonogram} aria-label="NY Monogram">
              <span className={styles.monoLetter}>N</span>
              <span className={styles.monoBar} aria-hidden="true" />
              <span className={styles.monoLetter}>Y</span>
            </div>
            <div className={styles.brandMeta}>
              <span className={styles.brandName}>{site.name}</span>
              <span className={styles.brandRole}>TECH CREATOR & KEYNOTE HOST</span>
            </div>
            <div className={styles.brandRule} aria-hidden="true" />
          </motion.div>

          {/* Main Display Headline */}
          <motion.h1 id="hero-title" className={`display ${styles.title}`} {...rise(0.2)}>
            Making flagship
            <br />
            technology
            <br />
            <span className={styles.makeSenseWrap}>
              <em className={styles.makeSense}>make sense</em>
              <svg
                className={styles.swoosh}
                viewBox="0 0 280 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M4 14C85 3 205 3 276 14"
                  stroke="var(--forest)"
                  strokeWidth="3.2"
                  strokeLinecap="round"
                />
              </svg>
            </span>
            <br />
            for Africa.
          </motion.h1>

          {/* Tagline */}
          <motion.div className={styles.tagline} {...rise(0.32)}>
            <span className={styles.taglineBar} aria-hidden="true" />
            <span className={styles.taglineText}>Keynotes. Insights. Real Impact.</span>
          </motion.div>
        </div>

        {/* Right column: Perfectly aligned arched portrait */}
        <motion.figure
          className={styles.portrait}
          initial={reduce ? false : { opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, delay: 0.18, ease }}
        >
          <div className={styles.photo}>
            <Image
              src="/images/nicole-portrait.jpg"
              alt="Portrait of Nicole Yahaya in an emerald blazer"
              fill
              priority
              sizes="(max-width: 900px) 90vw, 460px"
              className={styles.img}
            />
          </div>

          {/* Interactive Keynote Badge */}
          <button
            type="button"
            className={styles.reel}
            onClick={playKeynote}
            aria-label="Play latest keynote address from Jewel Aeida"
          >
            <span className={styles.reelThumb}>
              <Image
                src={featuredKeynote.video.poster}
                alt=""
                fill
                sizes="56px"
                className={styles.reelImg}
              />
              <span className={styles.reelPlay}>
                <Play size={12} />
              </span>
            </span>
            <span className={styles.reelText}>
              <strong>Redmi Note 17 Premiere</strong>
              <small>Jewel Aeida, Lagos · Watch stage clip</small>
            </span>
          </button>
        </motion.figure>
      </div>

      {/* Full-width Stats Bar grounded below both columns */}
      <div className={`container ${styles.statsWrap}`}>
        <motion.dl className={styles.stats} {...rise(0.52)}>
          {heroStats.map((s) => (
            <div key={s.label} className={styles.stat}>
              <dt className={styles.statLabel}>{s.label}</dt>
              <dd className={styles.statValue}>
                <CountUp to={s.value} suffix={s.suffix} decimals={s.decimals} />
              </dd>
            </div>
          ))}
        </motion.dl>
      </div>
    </section>
  );
}
