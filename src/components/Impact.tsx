import { impact } from '@/data/site';
import CountUp from './CountUp';
import Reveal from './Reveal';
import SectionHead from './SectionHead';
import styles from './Impact.module.css';

export default function Impact() {
  return (
    <section id="impact" className="section tone-emerald" aria-labelledby="impact-title">
      <div className="container">
        <SectionHead
          id="impact-title"
          index="05"
          label="Impact"
          title={
            <>
              Reach that turns into <em>results.</em>
            </>
          }
        />

        <dl className={styles.grid}>
          {impact.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.09} className={styles.stat}>
              <dd className={styles.value}>
                <CountUp to={s.value} suffix={s.suffix} decimals={s.decimals} />
              </dd>
              <dt className={styles.label}>{s.label}</dt>
              <dd className={styles.body}>{s.body}</dd>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  );
}
