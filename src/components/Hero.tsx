'use client';

import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';
import { featuredKeynote, heroStats, site } from '@/data/site';
import CountUp from './CountUp';
import { ArrowRight, Play } from './Icons';
import { useMedia } from './MediaProvider';
import styles from './Hero.module.css';

const ease = [0.16, 1, 0.3, 1] as const;

export default function Hero() {
  const { open } = useMedia();
  const reduce = useReducedMotion();

  const rise = (delay: number) => ({
    initial: reduce ? false : ({ opacity: 0, y: 26 } as const),
    animate: { opacity: 1, y: 0 },
    transition: { duration: 1, delay, ease },
  });

  const playKeynote = () =>
    open({
      kind: 'file',
      src: featuredKeynote.video.src,
      poster: featuredKeynote.video.poster,
      title: featuredKeynote.title,
      caption: 'Opening address · Lagos, Nigeria',
    });

  return (
    <section id="top" className={`section tone-dark ${styles.hero}`} aria-labelledby="hero-title">
      <div className={styles.glowA} aria-hidden="true" />
      <div className={styles.glowB} aria-hidden="true" />

      <div className={`container ${styles.grid}`}>
        <div className={styles.copy}>
          <motion.p className="eyebrow" {...rise(0.1)}>
            <span>{site.tagline}</span>
            <span className="rule" aria-hidden="true" />
            <span>{site.location}</span>
          </motion.p>

          <motion.h1 id="hero-title" className={`display ${styles.title}`} {...rise(0.2)}>
            Making flagship technology <em>make sense</em> for Africa.
          </motion.h1>

          <motion.p className={`lede ${styles.lede}`} {...rise(0.38)}>
            I’m Nicole Yahaya, Retail Manager at Xiaomi Nigeria. I host national launch keynotes, train dealer networks
            across 14 states and review hardware as "That Tech Girl" 1M+ YouTube views, always grounded in how
            Nigerians actually use their phones.
          </motion.p>

          <motion.div className={styles.ctas} {...rise(0.52)}>
            <a href="#contact" className="btn btnPrimary">
              Book Nicole <ArrowRight />
            </a>
            <button type="button" className="btn btnGhost" onClick={playKeynote}>
              <Play size={13} /> Watch the keynote
            </button>
          </motion.div>
        </div>

        <motion.figure
          className={styles.portrait}
          initial={reduce ? false : { opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.4, delay: 0.25, ease }}
        >
          <div className={styles.frameLine} aria-hidden="true" />
          <div className={styles.photo}>
            <Image
              src="/images/nicole-portrait.jpg"
              alt="Portrait of Nicole Yahaya in an emerald blazer"
              fill
              priority
              sizes="(max-width: 900px) 88vw, 460px"
              className={styles.img}
            />
          </div>

          <button type="button" className={styles.reel} onClick={playKeynote} aria-label="Play the Redmi Note 15 keynote clip">
            <span className={styles.reelThumb}>
              <Image src={featuredKeynote.video.poster} alt="" fill sizes="56px" className={styles.reelImg} />
              <span className={styles.reelPlay}>
                <Play size={12} />
              </span>
            </span>
            <span className={styles.reelText}>
              <strong>Redmi Note 15 premiere</strong>
              <small>Keynote clip {featuredKeynote.video.duration}</small>
            </span>
          </button>
        </motion.figure>

        <motion.dl className={styles.stats} {...rise(0.7)}>
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
