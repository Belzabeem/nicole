'use client';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '@/hooks/useTheme';
import { isSoundEnabled, setSoundEnabled, playClickSound, playHoverSound, initSound } from '@/utils/sound';
import styles from './Navbar.module.css';

const navLinks = [
  { label: 'Keynotes', href: '#keynotes' },
  { label: 'Why Nicole', href: '#brand-proof' },
  { label: 'Dossier', href: '#dossier' },
  { label: 'Hardware Lab', href: '#hardware' },
  { label: 'Acclaim & DMs', href: '#acclaim' },
  { label: 'Brand Services', href: '#services' },
  { label: 'Bookings', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [audioActive, setAudioActive] = useState(false);
  const { theme, toggle } = useTheme();

  useEffect(() => {
    initSound();
    setAudioActive(isSoundEnabled());

    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleAudio = () => {
    const nextState = !audioActive;
    setSoundEnabled(nextState);
    setAudioActive(nextState);
    if (nextState) {
      playClickSound();
    }
  };

  return (
    <>
      <motion.header
        className={`${styles.navContainer} ${scrolled ? styles.scrolled : ''}`}
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className={styles.innerNav}>
          {/* Logo & Status Badge */}
          <div className={styles.leftGroup}>
            <a
              href="#home"
              className={styles.brandLogo}
              onMouseEnter={playHoverSound}
              onClick={playClickSound}
            >
              <span className={styles.brandFirst}>NICOLE</span>
              <span className={styles.brandLast}>YAHAYA</span>
            </a>

            <div className={styles.statusBadge}>
              <span className={styles.statusPulse} />
              <span className={styles.statusText}>XIAOMI NIGERIA / RETAIL MANAGER</span>
            </div>
          </div>

          {/* Desktop Nav Links */}
          <nav className={styles.desktopLinks} aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={styles.navItem}
                onMouseEnter={playHoverSound}
                onClick={playClickSound}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action Controls */}
          <div className={styles.controlsGroup}>
            {/* Audio Feedback Toggle */}
            <button
              className={`${styles.soundBtn} ${audioActive ? styles.soundBtnActive : ''}`}
              onClick={toggleAudio}
              onMouseEnter={playHoverSound}
              aria-label={`Toggle Soundscape: currently ${audioActive ? 'Active' : 'Muted'}`}
              title={`Audio UI Clicks: ${audioActive ? 'Active' : 'Off'}`}
            >
              <div className={styles.soundWave}>
                <span className={styles.waveBar} />
                <span className={styles.waveBar} />
                <span className={styles.waveBar} />
                <span className={styles.waveBar} />
              </div>
              <span className={styles.soundLabel}>{audioActive ? 'AUDIO ON' : 'AUDIO OFF'}</span>
            </button>

            {/* Theme Toggle */}
            <button
              className={styles.themeBtn}
              onClick={() => {
                playClickSound();
                toggle();
              }}
              onMouseEnter={playHoverSound}
              aria-label="Toggle Theme"
              title="Toggle Theme"
            >
              {theme === 'dark' ? (
                <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                  <path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zM2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1zm18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1zM11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1zm0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1zM5.99 4.58c-.39-.39-1.03-.39-1.41 0s-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41L5.99 4.58zm12.37 12.37c-.39-.39-1.03-.39-1.41 0s-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41l-1.06-1.06zm1.06-10.96c.39-.39.39-1.03 0-1.41s-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06zM7.05 18.36c.39-.39.39-1.03 0-1.41s-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06z"/>
                </svg>
              ) : (
                <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                  <path d="M12.3 2a10 10 0 0 0-.19 20 10.04 10.04 0 0 0 9.95-8.7c.07-.58-.45-1.07-1.03-.98a8 8 0 1 1-9.71-9.71c.09-.58-.4-1.1-.98-1.03-.35.05-.69.11-1.04.19v.23z"/>
                </svg>
              )}
            </button>

            {/* Direct Booking CTA */}
            <a
              href="#contact"
              className={styles.ctaPrimary}
              onMouseEnter={playHoverSound}
              onClick={playClickSound}
            >
              <span>VIP Booking</span>
              <svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>

            {/* Mobile Hamburger Toggle */}
            <button
              className={styles.burgerBtn}
              onClick={() => {
                playClickSound();
                setMobileMenuOpen(!mobileMenuOpen);
              }}
              aria-label="Toggle Navigation Menu"
            >
              <span className={`${styles.burgerBar} ${mobileMenuOpen ? styles.burgerBar1Open : ''}`} />
              <span className={`${styles.burgerBar} ${mobileMenuOpen ? styles.burgerBar2Open : ''}`} />
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className={styles.mobileDrawer}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div className={styles.mobileDrawerInner}>
              <div className={styles.mobileNavList}>
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    className={styles.mobileNavItem}
                    onClick={() => {
                      playClickSound();
                      setMobileMenuOpen(false);
                    }}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <span className={styles.mobileNavIdx}>0{i + 1}</span>
                    <span className={styles.mobileNavLabel}>{link.label}</span>
                  </motion.a>
                ))}
              </div>

              <div className={styles.mobileActions}>
                <button className={styles.mobileSoundToggle} onClick={toggleAudio}>
                  <span>UI SOUNDSCAPE</span>
                  <strong>{audioActive ? 'ACTIVE' : 'MUTED'}</strong>
                </button>
                <a
                  href="#contact"
                  className={styles.mobileCtaBtn}
                  onClick={() => {
                    playClickSound();
                    setMobileMenuOpen(false);
                  }}
                >
                  Initiate Brand Collaboration →
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
