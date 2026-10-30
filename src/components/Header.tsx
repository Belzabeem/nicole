'use client';

import { useEffect, useState } from 'react';
import { nav, site } from '@/data/site';
import { ArrowRight } from './Icons';
import styles from './Header.module.css';

export default function Header() {
  const [active, setActive] = useState<string>('');
  const [menuOpen, setMenuOpen] = useState(false);

  // Highlight the section currently in view
  useEffect(() => {
    const targets = ['top', ...nav.map((n) => n.id)]
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id === 'top' ? '' : entry.target.id);
        });
      },
      { rootMargin: '-45% 0px -50% 0px' },
    );
    targets.forEach((t) => observer.observe(t));
    return () => observer.disconnect();
  }, []);

  // Close the mobile menu on Escape
  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setMenuOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [menuOpen]);

  return (
    <header className={styles.wrap}>
      <div className={styles.bar}>
        <a href="#top" className={styles.logo} aria-label={`${site.name} - home`} onClick={() => setMenuOpen(false)}>
          <span className={styles.mark} aria-hidden="true">
            NY
          </span>
          <span className={styles.logoText}>{site.name}</span>
        </a>

        <nav className={styles.links} aria-label="Primary">
          {nav.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`${styles.link} ${active === item.id ? styles.linkActive : ''}`}
              aria-current={active === item.id ? 'true' : undefined}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className={styles.actions}>
          <a href="#contact" className={styles.cta}>
            <span>Book Nicole</span>
            <ArrowRight size={13} />
          </a>
          <button
            type="button"
            className={styles.burger}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span className={`${styles.burgerLine} ${menuOpen ? styles.open : ''}`} />
            <span className={`${styles.burgerLine} ${menuOpen ? styles.open : ''}`} />
          </button>
        </div>
      </div>

      <div id="mobile-menu" className={`${styles.mobile} ${menuOpen ? styles.mobileOpen : ''}`} hidden={!menuOpen}>
        <nav aria-label="Mobile">
          <ul>
            {nav.map((item, i) => (
              <li key={item.id}>
                <a href={`#${item.id}`} className={styles.mobileLink} onClick={() => setMenuOpen(false)}>
                  <span className={styles.mobileIdx}>0{i + 1}</span>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <a href="#contact" className={`btn btnPrimary ${styles.mobileCta}`} onClick={() => setMenuOpen(false)}>
          Book Nicole <ArrowRight />
        </a>
      </div>
    </header>
  );
}
