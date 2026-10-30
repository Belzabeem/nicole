'use client';
import { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { playClickSound } from '@/utils/sound';
import styles from './CinemaModal.module.css';

export interface CinemaMedia {
  type: 'video' | 'youtube' | 'tiktok';
  src: string;
  title: string;
  subtitle?: string;
  eventBadge?: string;
}

interface CinemaModalProps {
  media: CinemaMedia | null;
  onClose: () => void;
}

export default function CinemaModal({ media, onClose }: CinemaModalProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        playClickSound();
        onClose();
      }
    };
    if (media) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [media, onClose]);

  return (
    <AnimatePresence>
      {media && (
        <motion.div
          className={styles.overlay}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => {
            playClickSound();
            onClose();
          }}
        >
          <div className={styles.backdropGlow} />

          <motion.div
            className={styles.modalBox}
            initial={{ scale: 0.92, opacity: 0, y: 30 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.92, opacity: 0, y: 30 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Bar */}
            <div className={styles.header}>
              <div className={styles.meta}>
                {media.eventBadge && (
                  <span className={styles.badge}>{media.eventBadge}</span>
                )}
                <h3 className={styles.title}>{media.title}</h3>
                {media.subtitle && <p className={styles.subtitle}>{media.subtitle}</p>}
              </div>

              <button
                className={styles.closeBtn}
                onClick={() => {
                  playClickSound();
                  onClose();
                }}
                aria-label="Close Cinema Player"
              >
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>

            {/* Content Player Frame */}
            <div className={styles.playerWrapper}>
              {media.type === 'video' ? (
                <video
                  ref={videoRef}
                  className={styles.nativeVideo}
                  src={media.src}
                  controls
                  autoPlay
                  playsInline
                />
              ) : media.type === 'youtube' ? (
                <iframe
                  className={styles.iframe}
                  src={`https://www.youtube.com/embed/${media.src}?autoplay=1&rel=0&modestbranding=1`}
                  title={media.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <iframe
                  className={styles.iframe}
                  src={`https://www.tiktok.com/embed/v2/${media.src}`}
                  title={media.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              )}
            </div>

            {/* Bottom Telemetry Footer */}
            <div className={styles.footer}>
              <div className={styles.footerLeft}>
                <span className={styles.liveIndicator}>
                  <span className={styles.liveDot} />
                  CINEMA ARCHIVE HD
                </span>
                <span className={styles.pressLabel}>Official Nicole Yahaya Media Feed</span>
              </div>
              <div className={styles.footerRight}>
                <span className={styles.hintKey}>ESC to exit theater</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

