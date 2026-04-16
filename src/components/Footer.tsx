import styles from './Footer.module.css';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.top}>
          <div className={styles.brand}>
            <span className={styles.brandName}>Nicole</span>
            <span className={styles.brandGold}> Yahaya</span>
            <p className={styles.brandTagline}>Tech Content Creator & Keynote Speaker</p>
          </div>

          <nav className={styles.nav}>
            {['About', 'Stats', 'Services', 'Portfolio', 'Speaking', 'Contact'].map((l) => (
              <a key={l} href={`#${l.toLowerCase()}`} className={styles.navLink}>
                {l}
              </a>
            ))}
          </nav>

          <div className={styles.socials}>
            <a
              href="https://youtube.com/@nicoleyahaya"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.social}
            >
              YouTube
            </a>
            <a
              href="https://tiktok.com/@nicoleyahaya"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.social}
            >
              TikTok
            </a>
            <a href="mailto:Nicolegaku23@gmail.com" className={styles.social}>
              Email
            </a>
          </div>
        </div>

        <div className={styles.divider} />

       
      </div>
    </footer>
  );
}
