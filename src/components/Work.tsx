'use client';

import Image from 'next/image';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { latestContent, mediaFilters, socials, works } from '@/data/site';
import type { MediaWork } from '@/data/site';
import SectionHead from './SectionHead';
import Reveal from './Reveal';
import { ArrowRight, ArrowUpRight, Play } from './Icons';
import { useMedia } from './MediaProvider';
import styles from './Work.module.css';

export default function Work() {
  const { open } = useMedia();
  const [filter, setFilter] = useState<(typeof mediaFilters)[number]>('All');
  const visible = filter === 'All' ? works : works.filter((w) => w.category === filter);

  const play = (w: MediaWork) =>
    open({
      kind: w.platform === 'YouTube' ? 'youtube' : 'tiktok',
      src: w.videoId,
      title: w.title,
      caption: `${w.platform} · ${w.category}`,
    });

  return (
    <section id="work" className="section tone-dark" aria-labelledby="work-title">
      <div className="container">
        <SectionHead
          id="work-title"
          index="03"
          label="Content · That Tech Girl"
          title={
            <>
              Tested in the real world. <em>Unfiltered verdicts.</em>
            </>
          }
          lede="Hands-on reviews and long-term battery tests built for Nigerian buyers. Over a million YouTube views reflect real-world usage across Nigeria's diverse networks and conditions."
        />

        <Reveal>
          <div className={styles.filters} role="group" aria-label="Filter content by category">
            {mediaFilters.map((f) => (
              <button
                key={f}
                type="button"
                className={`${styles.filter} ${filter === f ? styles.filterActive : ''}`}
                aria-pressed={filter === f}
                onClick={() => setFilter(f)}
              >
                {f}
              </button>
            ))}
          </div>
        </Reveal>

        <motion.ul className={styles.grid} layout>
          <AnimatePresence mode="popLayout" initial={false}>
            {visible.map((w) => (
              <motion.li
                key={w.id}
                className={styles.card}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              >
                <button type="button" className={styles.thumb} onClick={() => play(w)} aria-label={`Play: ${w.title}`}>
                  {w.platform === 'YouTube' ? (
                    <Image
                      src={`https://i.ytimg.com/vi/${w.videoId}/hqdefault.jpg`}
                      alt=""
                      fill
                      sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 400px"
                      className={styles.thumbImg}
                    />
                  ) : (
                    <span className={styles.shortPanel} aria-hidden="true">
                      <span className={styles.shortGlyph}>♪</span>
                      <span className={styles.shortText}>Short-form</span>
                    </span>
                  )}
                  <span className={styles.thumbShade} aria-hidden="true" />
                  <span className={styles.platform}>{w.platform}</span>
                  <span className={styles.play} aria-hidden="true">
                    <Play size={16} />
                  </span>
                </button>

                <div className={styles.body}>
                  <p className={styles.category}>{w.category}</p>
                  <h3 className={styles.cardTitle}>{w.title}</h3>
                  <ul className={styles.specs} aria-label="Key specs">
                    {w.specs.map((s) => (
                      <li key={s}>{s}</li>
                    ))}
                  </ul>
                  <p className={styles.verdict}>{w.verdict}</p>
                  <button type="button" className={`linkArrow ${styles.watch}`} onClick={() => play(w)}>
                    Watch breakdown <ArrowRight />
                  </button>
                </div>
              </motion.li>
            ))}
          </AnimatePresence>
        </motion.ul>

        <Reveal className={styles.fresh}>
          <div className={styles.freshHead}>
            <h3 className={styles.freshTitle}>{latestContent.heading}</h3>
            <p className={styles.freshNote}>{latestContent.note}</p>
          </div>
          <ul className={styles.freshList}>
            {latestContent.items.map((item) => (
              <li key={item.title}>
                <span className={styles.freshTag}>{item.tag}</span>
                <span>{item.title}</span>
              </li>
            ))}
          </ul>
          <div className={styles.freshLinks}>
            {socials
              .filter((x) => x.label !== 'Instagram')
              .map((x) => (
                <a key={x.label} href={x.href} target="_blank" rel="noopener noreferrer" className="btn btnGhost">
                  {x.label === 'YouTube' ? 'Subscribe on YouTube' : 'Follow on TikTok'} <ArrowUpRight size={14} />
                </a>
              ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
