import Image from 'next/image';
import { about } from '@/data/site';
import Reveal from './Reveal';
import styles from './About.module.css';

export default function About() {
  return (
    <section id="about" className="section tone-light" aria-labelledby="about-title">
      <div className={`container ${styles.grid}`}>
        <Reveal className={styles.visual}>
          <div className={styles.photo}>
            <Image
              src="/images/nicole-poco.jpg"
              alt="Nicole Yahaya in a blue suit at a POCO partner event"
              fill
              sizes="(max-width: 900px) 90vw, 440px"
              className={styles.img}
            />
          </div>
          <p className={styles.badge}>
            <span className={styles.badgeNum}>6+</span>
            <span>
              years in
              <br />
              consumer tech
            </span>
          </p>
        </Reveal>

        <div className={styles.copy}>
          <Reveal>
            <p className="eyebrow">
              <span className="idx">02</span>
              <span className="rule" aria-hidden="true" />
              <span>About</span>
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 id="about-title" className="h2">
              I started <em>inside</em> the product.
            </h2>
          </Reveal>
          <Reveal delay={0.16} className={styles.paras}>
            {about.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </Reveal>

          <Reveal as="figure" delay={0.1} className={styles.quote}>
            <blockquote>
              <p>{about.quote}</p>
            </blockquote>
          </Reveal>

          <ul className={styles.pillars}>
            {about.pillars.map((p, i) => (
              <Reveal as="li" key={p.title} delay={i * 0.08} y={18} className={styles.pillar}>
                <span className={styles.pillarNum}>0{i + 1}</span>
                <h3 className={styles.pillarTitle}>{p.title}</h3>
                <p>{p.body}</p>
              </Reveal>
            ))}
          </ul>

          <Reveal className={styles.tags}>
            <p className={styles.tagsLabel}>Expertise</p>
            <ul className={styles.tagList}>
              {about.expertise.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
