import { nav, site, socials } from '@/data/site';
import { ArrowUpRight } from './Icons';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={`tone-dark ${styles.footer}`}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.brand}>
          <p className={styles.name}>{site.name}</p>
          <p className={styles.tag}>
            {site.jobTitle}. Keynote host, product specialist and tech creator translating hardware into trust across
            Africa.
          </p>
        </div>

        <nav aria-label="Footer" className={styles.col}>
          <p className={styles.colTitle}>Explore</p>
          <ul>
            {nav.map((n) => (
              <li key={n.id}>
                <a href={`#${n.id}`}>{n.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.col}>
          <p className={styles.colTitle}>Elsewhere</p>
          <ul>
            {socials.map((s) => (
              <li key={s.label}>
                <a href={s.href} target="_blank" rel="noopener noreferrer">
                  {s.label} <ArrowUpRight size={12} />
                </a>
              </li>
            ))}
            <li>
              <a href={`mailto:${site.email}`}>Email</a>
            </li>
          </ul>
        </div>
      </div>

      <div className={`container ${styles.bottom}`}>
        <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
        <a href="#top" className={styles.top}>
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}
