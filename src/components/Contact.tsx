'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import styles from './Contact.module.css';

export default function Contact() {
  const { ref, visible } = useScrollReveal(0.1);
  const [form, setForm] = useState({ name: '', email: '', brand: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.MouseEvent) => {
    e.preventDefault();
    try {
      const res = await fetch('https://formspree.io/f/xgvewpzn', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(form),
      });
      if (res.ok) { setSent(true); setForm({ name: '', email: '', brand: '', message: '' }); }
    } catch {
      setSent(true);
      setForm({ name: '', email: '', brand: '', message: '' });
    }
  };

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
              <a href="mailto:Nicolegaku23@gmail.com" className={styles.contactLink}>Nicolegaku23@gmail.com</a>
            </div>
            <div className={styles.contactItem}>
              <span className={styles.contactIcon}>▶</span>
              <a href="https://youtube.com/@nicoleyahaya" target="_blank" rel="noopener noreferrer" className={styles.contactLink}>@NicoleYahaya — YouTube</a>
            </div>
            <div className={styles.contactItem}>
              <span className={styles.contactIcon}>♪</span>
              <a href="https://tiktok.com/@nicoleyahaya" target="_blank" rel="noopener noreferrer" className={styles.contactLink}>@NicoleYahaya — TikTok</a>
            </div>
            <div className={styles.contactItem}>
              <span className={styles.contactIcon}>◈</span>
              <a href="https://instagram.com/nicole_yayus" target="_blank" rel="noopener noreferrer" className={styles.contactLink}>@nicole_yayus — Instagram</a>
            </div>
            <div className={styles.contactItem}>
              <span className={styles.contactIcon}>in</span>
              <a href="https://linkedin.com/in/nicole-gaku-b8327a120" target="_blank" rel="noopener noreferrer" className={styles.contactLink}>Nicole Yahaya Gaku — LinkedIn</a>
            </div>
          </motion.div>
        </div>

        <motion.div
          className={styles.formWrap}
          initial={{ opacity: 0, x: 60 }}
          animate={visible ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
        >
          {sent ? (
            <div className={styles.success}>
              <span className={styles.successIcon}>✓</span>
              <p className={styles.successText}>Message sent! I&apos;ll be in touch soon.</p>
            </div>
          ) : (
            <div className={styles.form}>
              <div className={styles.formRow}>
                <div className={styles.field}>
                  <label className={styles.label}>Your Name</label>
                  <input name="name" value={form.name} onChange={handleChange} className={styles.input} placeholder="e.g. John Smith" />
                </div>
                <div className={styles.field}>
                  <label className={styles.label}>Email Address</label>
                  <input name="email" type="email" value={form.email} onChange={handleChange} className={styles.input} placeholder="you@company.com" />
                </div>
              </div>
              <div className={styles.field}>
                <label className={styles.label}>Brand / Company</label>
                <input name="brand" value={form.brand} onChange={handleChange} className={styles.input} placeholder="Your brand or company name" />
              </div>
              <div className={styles.field}>
                <label className={styles.label}>Your Message</label>
                <textarea name="message" value={form.message} onChange={handleChange} className={styles.textarea} rows={5} placeholder="Tell me about your product, campaign, or event..." />
              </div>
              <button onClick={handleSubmit} className={styles.submit}>Send Message →</button>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
