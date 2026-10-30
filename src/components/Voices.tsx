import Image from 'next/image';
import { pressCoverage, voices } from '@/data/site';
import { ArrowUpRight } from './Icons';
import Reveal from './Reveal';
import SectionHead from './SectionHead';
import styles from './Voices.module.css';

export default function Voices() {
  return (
    <section id="voices" className="section tone-light" aria-labelledby="voices-title">
      <div className="container">
        <SectionHead
          id="voices-title"
          index="06"
          label="In their words"
          title={
            <>
              Respected by peers, <em>covered by the press.</em>
            </>
          }
        />

        <ul className={styles.grid}>
          {voices.map((v, i) => (
            <Reveal as="li" key={v.name} delay={i * 0.1} className={styles.card}>
              <span className={styles.kind}>{v.kind}</span>
              <blockquote className={styles.quote}>
                <p>{v.quote}</p>
              </blockquote>
              <footer className={styles.footer}>
                {v.avatar ? (
                  <span className={styles.avatar}>
                    <Image src={v.avatar} alt="" fill sizes="48px" className={styles.avatarImg} />
                  </span>
                ) : (
                  <span className={`${styles.avatar} ${styles.avatarInitial}`} aria-hidden="true">
                    {v.name.charAt(0)}
                  </span>
                )}
                <div>
                  <p className={styles.name}>{v.name}</p>
                  <p className={styles.role}>
                    {v.role} · {v.handle}
                  </p>
                  <p className={styles.context}>{v.context}</p>
                </div>
              </footer>
            </Reveal>
          ))}
        </ul>

        <div className={styles.press}>
          <Reveal>
            <h3 className={styles.pressTitle}>In the press</h3>
          </Reveal>
          <ul className={styles.pressList}>
            {pressCoverage.map((a, i) => (
              <Reveal as="li" key={a.url} delay={i * 0.06} y={14}>
                <a href={a.url} target="_blank" rel="noopener noreferrer" className={styles.pressRow}>
                  <span className={styles.pressMeta}>
                    <strong>{a.outlet}</strong>
                    <small>{a.date}</small>
                  </span>
                  <span className={styles.pressBody}>
                    <span className={styles.pressHeadline}>{a.headline}</span>
                    <span className={styles.pressNote}>{a.note}</span>
                  </span>
                  <ArrowUpRight size={16} className={styles.pressArrow} />
                </a>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
