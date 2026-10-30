'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { playClickSound, playHoverSound } from '@/utils/sound';
import styles from './ServicesMatrix.module.css';

const services = [
  {
    num: '01',
    title: 'Flagship Launch Keynote Hosting',
    badge: 'STAGE & BROADCAST',
    desc: 'Anchoring major smartphone unveilings, press launches, and enterprise summits before live media and telecom partners.',
    deliverables: ['Full Stage Address & Keynote Delivery', 'Press Q&A & Media Briefing Host', 'Executive VIP Partner Welcoming', 'High-Res Stage Photo & Video Deliverables'],
  },
  {
    num: '02',
    title: 'Flagship Hardware & AI Deep-Dives',
    badge: 'LONG-FORM YOUTUBE',
    desc: 'Exhaustive, broadcast-quality testing grounded in real Nigerian network realities, camera shootouts, and battery torture runs.',
    deliverables: ['Cinematic 4K 60fps Long-Form Video', 'Real-World Network & Thermal Testing', 'Direct Competitor Benchmark Comparison', 'Dedicated Link & Description Placement'],
  },
  {
    num: '03',
    title: 'Viral TikTok & Reels Sprints',
    badge: 'SHORT-FORM REACH',
    desc: 'High-energy, aesthetic short-form content engineered for maximum algorithmic velocity, comment engagement, and consumer virality.',
    deliverables: ['Multi-Part Short-Form Campaign', 'Cinematic B-Roll & Macro Optics', 'Native TikTok Sound & Trend Sync', 'Story Reshares & Comment Moderation'],
  },
  {
    num: '04',
    title: 'First Look & Unboxing Ceremonies',
    badge: 'LAUNCH DAY PREMIERE',
    desc: 'Immediate, authentic reactions to newly released hardware that establish credibility and drive early pre-order velocity.',
    deliverables: ['Day-One Embargo Cleared Drop', 'Tactile Packaging & In-Box Teardown', 'Zero-Filter Initial Reactions', 'Retail Channel Call-to-Action'],
  },
  {
    num: '05',
    title: 'Emerging Market Brand Localization',
    badge: 'STRATEGIC ADVISORY',
    desc: 'Bridging global hardware features to West African consumer psychology, aligning price, specs, and marketing narratives.',
    deliverables: ['Product Positioning Consulting', 'Regional Price-to-Value Assessment', 'Key Messaging Architecture', 'Executive Launch Consulting'],
  },
  {
    num: '06',
    title: 'Dealer & Enterprise Training Roadshows',
    badge: 'FIELD EMPOWERMENT',
    desc: 'Educating regional retail networks and distribution staff on complex hardware features to directly accelerate sell-through.',
    deliverables: ['Custom Technical Training Curriculum', '14-State Roadshow Architecture Experience', 'Staff Certification Workshops', 'Dealer Sales Strategy Playbook'],
  },
];

const selectableScopes = [
  'Keynote Launch Host',
  'YouTube 4K Deep Dive',
  'TikTok 3-Video Sprint',
  'First Look Unboxing',
  'Strategic Brand Advisory',
  'Nationwide Dealer Roadshow',
];

export default function ServicesMatrix() {
  const { ref, visible } = useScrollReveal(0.1);
  const [selectedScopes, setSelectedScopes] = useState<string[]>(['Keynote Launch Host', 'YouTube 4K Deep Dive']);

  const toggleScope = (scope: string) => {
    playClickSound();
    if (selectedScopes.includes(scope)) {
      setSelectedScopes(selectedScopes.filter((s) => s !== scope));
    } else {
      setSelectedScopes([...selectedScopes, scope]);
    }
  };

  const emailSubject = encodeURIComponent(`Brand Collaboration Inquiry: ${selectedScopes.join(', ')}`);
  const emailBody = encodeURIComponent(
    `Hi Nicole,\n\nWe represent [Brand / Agency] and would love to partner with you for an upcoming campaign.\n\nSelected Scope of Work:\n${selectedScopes.map((s) => `• ${s}`).join('\n')}\n\nTarget Timeline / Launch Date: [Insert Date]\nCampaign Budget / Scope: [Insert Scope]\n\nLooking forward to speaking soon!`
  );
  const mailtoLink = `https://mail.google.com/mail/?view=cm&to=Nicolegaku23@gmail.com&su=${emailSubject}&body=${emailBody}`;

  return (
    <section id="services" className={styles.section} ref={ref}>
      <div className="container-max">
        {/* Section Header */}
        <div className={styles.header}>
          <motion.div
            className="section-label"
            initial={{ opacity: 0, y: 15 }}
            animate={visible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            Brand Partnerships & Services
          </motion.div>
          <motion.h2
            className={styles.title}
            initial={{ opacity: 0, y: 25 }}
            animate={visible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            High-Impact Collaborations <br />
            <span className="gold-gradient-text">Engineered for Results.</span>
          </motion.h2>
          <motion.p
            className={styles.description}
            initial={{ opacity: 0, y: 20 }}
            animate={visible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Every collaboration is anchored by technical authority, exceptional production standards, and deep resonance
            with high-volume African consumers.
          </motion.p>
        </div>

        {/* 6 Services Grid */}
        <div className={styles.servicesGrid}>
          {services.map((svc, i) => (
            <motion.div
              key={svc.num}
              className={styles.serviceCard}
              initial={{ opacity: 0, y: 35 }}
              animate={visible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.15 + i * 0.08 }}
            >
              <div className={styles.cardTopRow}>
                <span className={styles.serviceNum}>{svc.num}</span>
                <span className={styles.serviceBadge}>{svc.badge}</span>
              </div>

              <h3 className={styles.serviceTitle}>{svc.title}</h3>
              <p className={styles.serviceDesc}>{svc.desc}</p>

              <div className={styles.deliverablesList}>
                <span className={styles.deliverablesHeader}>KEY DELIVERABLES:</span>
                {svc.deliverables.map((del, dIdx) => (
                  <div key={dIdx} className={styles.deliverableItem}>
                    <span className={styles.delDot}>✓</span>
                    <span className={styles.delText}>{del}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Interactive Campaign Scope Inquirer */}
        <motion.div
          className={styles.campaignBuilderBox}
          initial={{ opacity: 0, y: 30 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className={styles.builderHeader}>
            <span className={styles.builderTag}>INTERACTIVE CAMPAIGN SCOPE</span>
            <h3 className={styles.builderTitle}>Assemble Your Custom Brand Package</h3>
            <p className={styles.builderSubtitle}>
              Select the deliverables you require for your upcoming launch, and generate an immediate pre-formatted briefing
              directly to Nicole&apos;s executive desk.
            </p>
          </div>

          <div className={styles.scopePillsGrid}>
            {selectableScopes.map((scope) => {
              const isSelected = selectedScopes.includes(scope);
              return (
                <button
                  key={scope}
                  className={`${styles.scopePill} ${isSelected ? styles.scopePillSelected : ''}`}
                  onClick={() => toggleScope(scope)}
                  onMouseEnter={playHoverSound}
                >
                  <span className={styles.scopeCheck}>{isSelected ? '✓' : '+'}</span>
                  <span>{scope}</span>
                </button>
              );
            })}
          </div>

          <div className={styles.builderActionRow}>
            <div className={styles.selectedCount}>
              <strong>{selectedScopes.length}</strong> Deliverables Selected
            </div>

            <a
              href={mailtoLink}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.btnLaunchProposal}
              onMouseEnter={playHoverSound}
            >
              <span>Transmit Campaign Briefing</span>
              <svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

