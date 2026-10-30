'use client';
import { useEffect, useRef, useState } from 'react';

export default function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only activate custom cursor on fine pointer devices
    if (window.matchMedia('(pointer: coarse)').matches) return;

    let mouseX = -100;
    let mouseY = -100;
    let ringX = -100;
    let ringY = -100;
    let rafId: number;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      setIsVisible(true);

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
      }

      // Check if hovering interactive element via delegation
      const target = e.target as HTMLElement | null;
      if (target && target.closest('a, button, [role="button"], input, select, textarea, [data-interactive]')) {
        setIsPointer(true);
      } else {
        setIsPointer(false);
      }
    };

    const onMouseLeave = () => {
      setIsVisible(false);
    };

    const animateRing = () => {
      ringX += (mouseX - ringX) * 0.15;
      ringY += (mouseY - ringY) * 0.15;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%) scale(${isPointer ? 1.6 : 1})`;
      }
      rafId = requestAnimationFrame(animateRing);
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    document.addEventListener('mouseleave', onMouseLeave);
    rafId = requestAnimationFrame(animateRing);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      cancelAnimationFrame(rafId);
    };
  }, [isPointer]);

  return (
    <div
      style={{
        pointerEvents: 'none',
        position: 'fixed',
        inset: 0,
        zIndex: 99999,
        opacity: isVisible ? 1 : 0,
        transition: 'opacity 0.2s ease',
      }}
      aria-hidden="true"
    >
      {/* Precision Center Dot */}
      <div
        ref={dotRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: isPointer ? 12 : 7,
          height: isPointer ? 12 : 7,
          borderRadius: '50%',
          backgroundColor: '#f5d77f',
          boxShadow: '0 0 12px rgba(245, 215, 127, 0.8)',
          marginLeft: isPointer ? -6 : -3.5,
          marginTop: isPointer ? -6 : -3.5,
          transition: 'width 0.2s ease, height 0.2s ease, margin 0.2s ease',
          pointerEvents: 'none',
          willChange: 'transform',
        }}
      />

      {/* Trailing Auric Aura Ring */}
      <div
        ref={ringRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: 36,
          height: 36,
          borderRadius: '50%',
          border: isPointer ? '1.5px solid #d4af37' : '1px solid rgba(212, 175, 55, 0.4)',
          backgroundColor: isPointer ? 'rgba(212, 175, 55, 0.08)' : 'transparent',
          pointerEvents: 'none',
          transition: 'border-color 0.2s ease, background-color 0.2s ease',
          willChange: 'transform',
        }}
      />
    </div>
  );
}
