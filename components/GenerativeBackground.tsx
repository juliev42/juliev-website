'use client';

import { motion, useReducedMotion } from 'framer-motion';

export default function GenerativeBackground() {
  const prefersReducedMotion = useReducedMotion();
  const paths = [
    'M10 120 C 200 80, 260 40, 520 100',
    'M20 200 C 240 140, 340 180, 520 140',
    'M0 40 C 180 80, 320 10, 520 40',
  ];

  return (
    <div className="absolute inset-0 opacity-70">
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 520 320" role="presentation">
        <defs>
          <linearGradient id="pulse" x1="0%" x2="100%" y1="0%" y2="0%">
            <stop offset="0%" stopColor="rgba(138,122,255,0.7)" />
            <stop offset="50%" stopColor="rgba(43,212,197,0.65)" />
            <stop offset="100%" stopColor="rgba(138,122,255,0.4)" />
          </linearGradient>
        </defs>
        {paths.map((d, idx) => {
          const delay = idx * 0.4;
          if (prefersReducedMotion) {
            return <path key={idx} d={d} fill="none" stroke="url(#pulse)" strokeWidth={1.2} />;
          }
          return (
            <motion.path
              key={idx}
              d={d}
              fill="none"
              stroke="url(#pulse)"
              strokeWidth={1.2}
              initial={{ pathLength: 0, opacity: 0.4 }}
              animate={{ pathLength: [0, 1, 0.9], opacity: [0.3, 0.8, 0.5] }}
              transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay }}
            />
          );
        })}
      </svg>
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-accentAlt/5" aria-hidden />
    </div>
  );
}
