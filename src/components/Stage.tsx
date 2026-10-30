'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';
import { useReducedMotion } from 'framer-motion';
import { events, featuredKeynote, gallery, galleryWide } from '@/data/site';
import Reveal from './Reveal';
import SectionHead from './SectionHead';
import { ArrowRight, Plus } from './Icons';
import styles from './Stage.module.css';

export default function Stage() {
  const reduce = useReducedMotion();
  const previewRef = useRef<HTMLVideoElement>(null);

  // Play the silent preview only while it is on screen
  useEffect(() => {
    const video = previewRef.current;
    if (!video || reduce) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) void video.play().catch(() => undefined);
        else video.pause();
      },
      { threshold: 0.4 },
    );
    observer.observe(video);
    return () => observer.disconnect();
  }, [reduce]);

  return (
    <section id="stage" className="section tone-dark" aria-labelledby="stage-title">
      <div className="container">
        <SectionHead
          id="stage-title"
          index="01"
          label="On stage"
          title={
            <>
              Flagship launches, <em>hosted live.</em>
            </>
          }
          lede="From unveiling devices before hundreds of journalists to training dealer networks across 14 states. Product mastery delivered with composure in real Nigerian conditions."
        />

        {/* Featured keynote */}
        <Reveal className={styles.featured}>
          <div className={styles.videoCard}>
            <video
              ref={previewRef}
              className={styles.video}
              style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
              src={featuredKeynote.video.src}
              poster={featuredKeynote.video.poster}
              muted
              loop
              playsInline
              preload="metadata"
              aria-hidden="true"
              tabIndex={-1}
            />
            <span className={styles.videoShade} aria-hidden="true" />
          </div>

          <div className={styles.details}>
            <p className="eyebrow">{featuredKeynote.tag}</p>
            <h3 className="h3">{featuredKeynote.title}</h3>

            <dl className={styles.meta}>
              <div>
                <dt>Role</dt>
                <dd>{featuredKeynote.role}</dd>
              </div>
              <div>
                <dt>Venue</dt>
                <dd>{featuredKeynote.venue}</dd>
              </div>
              <div>
                <dt>Audience</dt>
                <dd>{featuredKeynote.audience}</dd>
              </div>
            </dl>

            <p className={styles.summary}>{featuredKeynote.summary}</p>

            <div className={styles.presented}>
              <p className={styles.presentedLabel}>Presented on stage</p>
              <ul className={styles.presentedGrid}>
                {featuredKeynote.presented.map((p) => (
                  <li key={p.label}>
                    <span className={styles.presentedValue}>{p.value}</span>
                    <span className={styles.presentedText}>{p.label}</span>
                  </li>
                ))}
              </ul>
              <p className={styles.note}>{featuredKeynote.note}</p>
            </div>

            <div className={styles.actions}>
              <a href="#contact" className="linkArrow">
                Book a keynote host <ArrowRight />
              </a>
            </div>
          </div>
        </Reveal>

        {/* Event ledger */}
        <div className={styles.ledger}>
          <Reveal>
            <h3 className={styles.ledgerTitle}>Keynotes & training</h3>
          </Reveal>
          <ul className={styles.rows}>
            {events.map((e, i) => (
              <Reveal as="li" key={e.id} delay={i * 0.04} y={16}>
                <details className={styles.row} name="events">
                  <summary className={styles.summaryRow}>
                    <span className={styles.year}>{e.year}</span>
                    <span className={styles.rowTitle}>
                      {e.title}
                      {e.latest ? <span className={styles.latest}>Latest</span> : null}
                    </span>
                    <span className={styles.rowRole}>{e.role}</span>
                    <span className={styles.plus} aria-hidden="true">
                      <Plus />
                    </span>
                  </summary>
                  <div className={styles.panel}>
                    <p className={styles.panelSummary}>{e.summary}</p>
                    <ul className={styles.outcomes}>
                      {e.outcomes.map((o) => (
                        <li key={o}>{o}</li>
                      ))}
                    </ul>
                    <dl className={styles.panelMeta}>
                      <div>
                        <dt>Location</dt>
                        <dd>{e.location}</dd>
                      </div>
                      <div>
                        <dt>Audience</dt>
                        <dd>{e.audience}</dd>
                      </div>
                      {e.coverage ? (
                        <div>
                          <dt>Coverage</dt>
                          <dd>{e.coverage}</dd>
                        </div>
                      ) : null}
                    </dl>
                  </div>
                </details>
              </Reveal>
            ))}
          </ul>
        </div>

        {/* Gallery */}
        <div className={styles.gallery}>
          <ul className={styles.galleryGrid}>
            {gallery.map((g, i) => (
              <Reveal as="li" key={g.src} delay={i * 0.08} className={styles.tile}>
                <Image src={g.src} alt={g.alt} fill sizes="(max-width: 700px) 50vw, 300px" className={styles.tileImg} />
                <span className={styles.tileCaption}>{g.caption}</span>
              </Reveal>
            ))}
          </ul>
          <Reveal as="figure" className={styles.wide}>
            <Image src={galleryWide.src} alt={galleryWide.alt} fill sizes="(max-width: 1240px) 100vw, 1240px" className={styles.wideImg} />
            <figcaption className={styles.tileCaption}>{galleryWide.caption}</figcaption>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
