'use client';

import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react';
import type { ReactNode } from 'react';
import { Close } from './Icons';
import styles from './MediaProvider.module.css';

export type MediaItem = {
  kind: 'file' | 'youtube' | 'tiktok';
  src: string;
  title: string;
  caption?: string;
  poster?: string;
};

type MediaContextValue = { open: (media: MediaItem) => void };

const MediaContext = createContext<MediaContextValue | null>(null);

export function useMedia() {
  const ctx = useContext(MediaContext);
  if (!ctx) throw new Error('useMedia must be used inside <MediaProvider>');
  return ctx;
}

export default function MediaProvider({ children }: { children: ReactNode }) {
  const [media, setMedia] = useState<MediaItem | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);

  const open = useCallback((item: MediaItem) => setMedia(item), []);
  const close = useCallback(() => setMedia(null), []);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (media && !dialog.open) dialog.showModal();
    if (!media && dialog.open) dialog.close();
  }, [media]);

  const value = useMemo(() => ({ open }), [open]);
  const tall = media?.kind === 'tiktok' || media?.kind === 'file';

  return (
    <MediaContext.Provider value={value}>
      {children}
      <dialog
        ref={dialogRef}
        className={styles.dialog}
        aria-labelledby="media-title"
        onClose={close}
        onClick={(e) => {
          if (e.target === dialogRef.current) close();
        }}
      >
        {media ? (
          <div className={`${styles.frame} ${tall ? styles.tall : styles.wide}`}>
            <div className={styles.bar}>
              <div className={styles.meta}>
                <p id="media-title" className={styles.title}>
                  {media.title}
                </p>
                {media.caption ? <p className={styles.caption}>{media.caption}</p> : null}
              </div>
              <button type="button" className={styles.closeBtn} onClick={close} aria-label="Close video">
                <Close />
              </button>
            </div>

            <div className={styles.stage}>
              {media.kind === 'file' ? (
                <video className={styles.player} src={media.src} poster={media.poster} controls autoPlay playsInline />
              ) : media.kind === 'youtube' ? (
                <iframe
                  className={styles.player}
                  src={`https://www.youtube-nocookie.com/embed/${media.src}?autoplay=1&rel=0&modestbranding=1`}
                  title={media.title}
                  allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
                  allowFullScreen
                  referrerPolicy="strict-origin-when-cross-origin"
                />
              ) : (
                <iframe
                  className={styles.player}
                  src={`https://www.tiktok.com/embed/v2/${media.src}`}
                  title={media.title}
                  allow="autoplay; encrypted-media; fullscreen"
                  allowFullScreen
                />
              )}
            </div>
          </div>
        ) : null}
      </dialog>
    </MediaContext.Provider>
  );
}
