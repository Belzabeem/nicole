'use client';

import { useEffect, useRef, useState } from 'react';
import { useInView, useReducedMotion } from 'framer-motion';

type CountUpProps = {
  to: number;
  decimals?: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
};

/** Counts up once when visible. Screen readers get the final value immediately. */
export default function CountUp({ to, decimals = 0, suffix = '', prefix = '', duration = 1.8 }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '0px 0px -10% 0px' });
  const reduce = useReducedMotion();
  const [value, setValue] = useState(reduce ? to : 0);

  useEffect(() => {
    if (!inView || reduce) {
      if (reduce) setValue(to);
      return;
    }
    let raf = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const t = Math.min((now - start) / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - t, 4);
      setValue(to * eased);
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, reduce, to, duration]);

  const final = `${prefix}${to.toFixed(decimals)}${suffix}`;
  return (
    <span ref={ref} style={{ fontVariantNumeric: 'tabular-nums' }}>
      <span className="sr-only">{final}</span>
      <span aria-hidden="true">
        {prefix}
        {value.toFixed(decimals)}
        {suffix}
      </span>
    </span>
  );
}
