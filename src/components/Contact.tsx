'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import styles from './Contact.module.css';

export default function Contact() {
  const { ref, visible } = useScrollReveal(0.1);

  return (
    <section id="contact" className={styles.contact} ref={ref}>
      <div className={styles.inner}>
        <div className={styles.leftCol}>
          <motion.p className="section-label" initial={{ opacity: 0, y: 20 }} animate={visible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
            Get In Touch
          </motion.p>
          <motion.h2 className={styles.heading} initial={{ opacity: 0, y: 30 }} animate={visible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, delay: 0.1 }}>
            Let&apos;s Build <br /><em>Something Together</em>
          </motion.h2>
          <motion.p className={styles.sub} initial={{ opacity: 0, y: 20 }} animate={visible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, delay: 0.2 }}>
            Whether you&apos;re launching a product, planning an event, or looking for a long-term content partner — I&apos;d love to hear from you.
          </motion.p>
          <motion.div className={styles.contactItems} initial={{ opacity: 0, y: 20 }} animate={visible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, delay: 0.3 }}>
            <div className={styles.contactItem}>
              <span className={styles.contactIcon}>✉</span>
              <a href="https://mail.google.com/mail/?view=cm&to=Nicolegaku23@gmail.com&su=Let's%20Work%20Together&body=Hi%20Nicole%2C%0A%0AI%20came%20across%20your%20work%20and%20would%20love%20to%20connect%20about..." className={styles.contactLink}>Nicolegaku23@gmail.com</a>
            </div>
            <div className={styles.contactItem}>
              <span className={styles.contactIcon}>▶</span>
              <a href="https://youtube.com/@nicoleyahaya" target="_blank" rel="noopener noreferrer" className={styles.contactLink}>@NicoleYahaya — YouTube</a>
            </div>
            <div className={styles.contactItem}>
              <span className={styles.contactIcon}>♪</span>
              <a href="https://tiktok.com/@nicoleyahaya" target="_blank" rel="noopener noreferrer" className={styles.contactLink}>@NicoleYahaya — TikTok</a>
            </div>
          </motion.div>
        </div>

        {/* ── Right Column ── */}
        <motion.div
          className={styles.formWrap}
          initial={{ opacity: 0, y: 40 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.25 }}
        >
          <div className={styles.ctaBox}>
            <p className={styles.ctaText}>
              &ldquo;Ready to create something remarkable?&rdquo;
              <span>
                I&apos;m open to brand deals, event coverage, sponsorships, and creative collaborations. Drop me a message and let&apos;s talk.
              </span>
            </p>
            <a
               href="https://mail.google.com/mail/?view=cm&to=Nicolegaku23@gmail.com&su=Let's%20Work%20Together&body=Hi%20Nicole%2C%0A%0AI%20came%20across%20your%20work%20and%20would%20love%20to%20connect%20about..."
  target="_blank"
  rel="noopener noreferrer"
  className={styles.submit}
>
              Send Me a Message
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}