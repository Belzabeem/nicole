'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import styles from './About.module.css';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.8, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] },
  }),
};

export default function About() {
  const { ref, visible } = useScrollReveal();

  return (
    <section id="about" className={styles.about} ref={ref}>
      <div className={styles.inner}>
        <motion.div className={styles.imageCol} initial={{ opacity: 0, x: -60 }} animate={visible ? { opacity: 1, x: 0 } : {}} transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}>
          <div className={styles.imageStack}>
            <div className={styles.imageMain}>
              <Image
                src="/images/about.jpg"
                alt="Nicole Yahaya"
                fill
                style={{ objectFit: 'cover', objectPosition: 'top' }}
              />
            </div>
            <div className={styles.imageBadge}>
              <span className={styles.badgeNum}>6+</span>
              <span className={styles.badgeText}>Years Experience</span>
            </div>
            <div className={styles.imageAccentLine} />
          </div>
        </motion.div>

        <div className={styles.textCol}>
          <motion.p className="section-label" custom={0} variants={fadeUp} initial="hidden" animate={visible ? 'visible' : 'hidden'}>About Nicole</motion.p>
          <motion.h2 className={styles.heading} custom={1} variants={fadeUp} initial="hidden" animate={visible ? 'visible' : 'hidden'}>
            Where Tech Expertise <br /><em>Meets Storytelling</em>
          </motion.h2>
          <div className={styles.divider} />
          <motion.p className={styles.body} custom={2} variants={fadeUp} initial="hidden" animate={visible ? 'visible' : 'hidden'}>
            I am a tech creator, product specialist, and keynote speaker with over six years of experience helping global smartphone brands educate, build trust, and accelerate adoption in high-volume and emerging markets.
          </motion.p>
          <motion.p className={styles.body} custom={3} variants={fadeUp} initial="hidden" animate={visible ? 'visible' : 'hidden'}>
            Before becoming a creator, I worked as a Tech Product Specialist and Trainer at Xiaomi — giving me a deep understanding of how products are built, positioned, and adopted in real-world markets.
          </motion.p>
          <motion.div className={styles.pillRow} custom={4} variants={fadeUp} initial="hidden" animate={visible ? 'visible' : 'hidden'}>
            {['Smartphones', 'AI Tools', 'Brand Strategy', 'Keynotes', 'Emerging Markets'].map((tag) => (
              <span key={tag} className={styles.pill}>{tag}</span>
            ))}
          </motion.div>
          <motion.a href="#contact" className={styles.btn} custom={5} variants={fadeUp} initial="hidden" animate={visible ? 'visible' : 'hidden'}>
            Get in touch →
          </motion.a>
        </div>
      </div>
    </section>
  );
}
