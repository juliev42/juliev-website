'use client';

import { useState } from 'react';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';

export type CreativeItem = {
  title: string;
  category: string;
  excerpt: string;
  image: string;
};

export default function CreativeMosaic({ items }: { items: CreativeItem[] }) {
  const [active, setActive] = useState<CreativeItem | null>(null);

  return (
    <div>
      <div className="masonry" aria-label="Creative mosaic">
        {items.map((item) => (
          <button
            key={item.title}
            type="button"
            onClick={() => setActive(item)}
            className="group relative w-full overflow-hidden rounded-2xl border border-surface bg-surface/80 shadow-soft"
          >
            <div className="relative w-full" style={{ minHeight: 220 }}>
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition duration-300 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-base/80 via-base/30 to-transparent opacity-80" />
              <div className="absolute inset-x-0 bottom-0 p-4 text-left">
                <p className="text-xs uppercase tracking-wide text-accent">{item.category}</p>
                <h3 className="font-display text-xl text-text">{item.title}</h3>
                <p className="text-sm text-textMuted line-clamp-2 transition group-hover:text-text">{item.excerpt}</p>
              </div>
            </div>
          </button>
        ))}
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
          >
            <motion.div
              className="relative max-w-3xl w-full overflow-hidden rounded-2xl bg-surface border border-surface"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 260, damping: 24 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative h-80 w-full">
                <Image src={active.image} alt={active.title} fill className="object-cover" sizes="100vw" />
              </div>
              <div className="p-6 space-y-2">
                <p className="text-xs uppercase tracking-wide text-accent">{active.category}</p>
                <h3 className="font-display text-2xl">{active.title}</h3>
                <p className="text-textMuted leading-relaxed">{active.excerpt}</p>
                <button
                  onClick={() => setActive(null)}
                  className="mt-4 rounded-full border border-accent px-4 py-2 text-sm text-accent hover:bg-accent/10"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
