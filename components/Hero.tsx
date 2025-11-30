'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import GenerativeBackground from './GenerativeBackground';

export default function Hero() {
  return (
    <section className="relative overflow-hidden rounded-2xl border border-surface bg-surface/70 shadow-soft">
      <GenerativeBackground />
      <div className="relative z-10 p-8 sm:p-12 flex flex-col gap-6">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-sm uppercase tracking-[0.3em] text-textMuted"
        >
          Human-centric AI for health
        </motion.p>
        <motion.h1
          className="font-display text-4xl sm:text-5xl leading-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
        >
          Building AI for personalized, preventative health.
        </motion.h1>
        <motion.p
          className="max-w-3xl text-lg text-textMuted"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          I'm Julie Vaughn, a Brooklyn-based data scientist and entrepreneur building humane AI for health.
          I create systems that help people live healthier, happier, and longer lives.
        </motion.p>
        <motion.div
          className="flex flex-wrap gap-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <Link
            href="/projects"
            className="rounded-full bg-accent px-5 py-3 text-sm font-semibold text-base shadow-soft transition hover:-translate-y-0.5 hover:shadow-lg"
          >
            Explore Projects
          </Link>
          <Link
            href="/writing"
            className="rounded-full border border-text text-text px-5 py-3 text-sm font-semibold transition hover:border-accent hover:text-accent"
          >
            Read Writing
          </Link>
          <Link
            href="/contact"
            className="rounded-full border border-surface/70 bg-surface px-5 py-3 text-sm font-semibold text-text transition hover:border-accent hover:text-accent"
          >
            Say Hello
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
