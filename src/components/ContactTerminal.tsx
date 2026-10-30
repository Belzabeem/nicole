'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { playClickSound, playHoverSound } from '@/utils/sound';
import styles from './ContactTerminal.module.css';

export default function ContactTerminal() {
  const { ref, visible } = useScrollReveal(0.1);
  const [copied, setCopied] = useState(false);
  const email = 'Nicolegaku23@gmail.com';

  const copyEmail = () => {
    playClickSound();
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2400);
  };

  return (
    <section id="contact" className={styles.section} ref={ref}>
      <div className="container-max">
        <div className={styles.contactGrid}>
          {/* Left Column: Direct Inquiries Narrative */}
          <div className={styles.leftCol}>
            <motion.div
              className="section-label"
              initial={{ opacity: 0, y: 15 }}
              animate={visible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              The Executive Desk
            </motion.div>
            <motion.h2
              className={styles.title}
              initial={{ opacity: 0, y: 25 }}
              animate={visible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              Let&apos;s Architect <br />
              <span className="gold-gradient-text">Your Next Milestone.</span>
            </motion.h2>
            <motion.p
              className={styles.description}
              initial={{ opacity: 0, y: 20 }}
              animate={visible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Whether you are preparing a national product launch, seeking a credible hardware reviewer, or requiring an
              authoritative voice on stage, Nicole is open to select brand partnerships and keynote engagements.
            </motion.p>

            {/* Direct Contact Cards */}
            <motion.div
              className={styles.channelList}
              initial={{ opacity: 0, y: 20 }}
              animate={visible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              {/* Copy Email Bar */}
              <div className={styles.emailBox}>
                <div className={styles.emailMeta}>
                  <span className={styles.emailLabel}>DIRECT DESK EMAIL</span>
                  <a href={`mailto:${email}`} className={styles.emailLink}>
                    {email}
                  </a>
                </div>
                <button
                  className={styles.copyBtn}
                  onClick={copyEmail}
                  onMouseEnter={playHoverSound}
                  aria-label="Copy Email Address"
                >
                  {copied ? '✓ COPIED' : 'COPY'}
                </button>
              </div>

              {/* Social Channels */}
              <div className={styles.socialChannels}>
                <a
                  href="https://youtube.com/@nicoleyahaya"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialItem}
                  onMouseEnter={playHoverSound}
                >
                  <span className={styles.socialIcon}>▶</span>
                  <div className={styles.socialInfo}>
                    <strong>YouTube Channel</strong>
                    <span>@NicoleYahaya · 660K+ Views</span>
                  </div>
                  <span className={styles.arrowIcon}>↗</span>
                </a>

                <a
                  href="https://tiktok.com/@nicoleyahaya"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialItem}
                  onMouseEnter={playHoverSound}
                >
                  <span className={styles.socialIcon}>♪</span>
                  <div className={styles.socialInfo}>
                    <strong>TikTok Media</strong>
                    <span>@nicoleyahaya · 1.2M+ Reach</span>
                  </div>
                  <span className={styles.arrowIcon}>↗</span>
                </a>

                <a
                  href="https://www.instagram.com/nicole_yayus/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialItem}
                  onMouseEnter={playHoverSound}
                >
                  <span className={styles.socialIcon}>◈</span>
                  <div className={styles.socialInfo}>
                    <strong>Instagram Official</strong>
                    <span>@nicole_yayus · Verified DMs</span>
                  </div>
                  <span className={styles.arrowIcon}>↗</span>
                </a>
              </div>
            </motion.div>
          </div>

          {/* Right Column: VIP Fast-Track Concierge Card */}
          <motion.div
            className={styles.conciergeCol}
            initial={{ opacity: 0, y: 35 }}
            animate={visible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.25 }}
          >
            <div className={styles.conciergeCard}>
              <div className={styles.conciergeHeader}>
                <span className={styles.conciergeTag}>VIP FAST-TRACK</span>
                <div className={styles.availPill}>
                  <span className={styles.availDot} />
                  <span>Q3/Q4 2026 CALENDAR OPEN</span>
                </div>
              </div>

              <h3 className={styles.conciergeTitle}>
                &ldquo;Exceptional technology deserves an unforgettable voice.&rdquo;
              </h3>

              <p className={styles.conciergeText}>
                Nicole collaborates directly with brand directors, PR leads, and event production heads.
                Expect a response within 24 business hours.
              </p>

              <div className={styles.conciergeSpecs}>
                <div className={styles.specItem}>
                  <span className={styles.specLabel}>BASE LOCATION</span>
                  <span className={styles.specValue}>Lagos & Abuja, Nigeria</span>
                </div>
                <div className={styles.specItem}>
                  <span className={styles.specLabel}>TRAVEL MOBILITY</span>
                  <span className={styles.specValue}>Global Passports Available</span>
                </div>
                <div className={styles.specItem}>
                  <span className={styles.specLabel}>LEAD TIME</span>
                  <span className={styles.specValue}>2 to 3 Weeks for Launch Prep</span>
                </div>
              </div>

              <a
                href="https://mail.google.com/mail/?view=cm&to=Nicolegaku23@gmail.com&su=VIP%20Keynote%20%26%20Campaign%20Booking&body=Hi%20Nicole%2C%0A%0AWe%20would%20love%20to%20engage%20your%20services%20for%20an%20upcoming%20launch%20event%20/%20campaign.%0A%0AOrganization%3A%20%0AProject%20Scope%3A%20%0AEvent%20Date%20/%20Timeline%3A%20%0A%0AThank%20you!"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.btnLaunchEmail}
                onMouseEnter={playHoverSound}
              >
                <span>Initiate Executive Contact</span>
                <svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

