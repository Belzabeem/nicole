import { proof } from '@/data/site';
import Reveal from './Reveal';
import styles from './ProofStrip.module.css';

export default function ProofStrip() {
  return (
    <section className={`tone-paper2 ${styles.strip}`} aria-label="Brands and press">
      <Reveal className={`container ${styles.inner}`} y={14}>
        <div className={styles.group}>
          <p className={styles.label}>Launches hosted for</p>
          <ul className={styles.list}>
            {proof.brands.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
        </div>
        <span className={styles.divider} aria-hidden="true" />
        <div className={styles.group}>
          <p className={styles.label}>Press coverage</p>
          <ul className={styles.list}>
            {proof.press.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
        </div>
      </Reveal>
    </section>
  );
}
