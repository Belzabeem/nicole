import { services } from '@/data/site';
import Reveal from './Reveal';
import SectionHead from './SectionHead';
import { ArrowRight, Check } from './Icons';
import styles from './Services.module.css';

export default function Services() {
  return (
    <section id="services" className="section tone-light" aria-labelledby="services-title">
      <div className="container">
        <SectionHead
          id="services-title"
          index="04"
          label="Services"
          title={
            <>
              Collaborations built for <em>results.</em>
            </>
          }
          lede="Every engagement pairs technical authority with production quality and a real feel for how African consumers buy."
        />

        <ul className={styles.grid}>
          {services.map((s, i) => (
            <Reveal as="li" key={s.num} delay={(i % 2) * 0.1} className={styles.card}>
              <span className={styles.num}>{s.num}</span>
              <h3 className={styles.title}>{s.title}</h3>
              <p className={styles.desc}>{s.desc}</p>
              <ul className={styles.items}>
                {s.items.map((item) => (
                  <li key={item}>
                    <Check className={styles.check} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </ul>

        <Reveal className={styles.cta}>
          <div>
            <p className={styles.ctaTitle}>Have a launch, campaign or training programme coming up?</p>
            <p className={styles.ctaSub}>Tell me what you’re planning, I’ll reply within 24 business hours.</p>
          </div>
          <a href="#contact" className="btn btnPrimary">
            Start a brief <ArrowRight />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
