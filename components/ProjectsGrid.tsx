'use client';

import Image from 'next/image';
import { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Tag } from './Tag';
import { cn } from '@/lib/utils';

export type Project = {
  title: string;
  oneLiner: string;
  role: string;
  dates: string;
  links: { repo?: string; demo?: string; paper?: string; deck?: string };
  tags: string[];
  cover: string;
};

export default function ProjectsGrid({ projects }: { projects: Project[] }) {
  const [query, setQuery] = useState('');
  const [activeTag, setActiveTag] = useState<string>('All');

  const tags = useMemo(() => ['All', ...Array.from(new Set(projects.flatMap((p) => p.tags)))], [projects]);

  const filtered = useMemo(() => {
    return projects.filter((project) => {
      const matchesTag = activeTag === 'All' || project.tags.includes(activeTag);
      const normalized = query.toLowerCase();
      const matchesQuery =
        project.title.toLowerCase().includes(normalized) || project.oneLiner.toLowerCase().includes(normalized);
      return matchesTag && matchesQuery;
    });
  }, [projects, activeTag, query]);

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center gap-3">
        {tags.map((tag) => (
          <Tag key={tag} label={tag} active={activeTag === tag} onClick={() => setActiveTag(tag)} />
        ))}
      </div>
      <div className="flex flex-col sm:flex-row gap-3 items-start">
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search title or one-liner"
          className="w-full sm:w-80 rounded-xl border border-surface/80 bg-surface px-4 py-3 text-sm text-text placeholder:text-textMuted focus:border-accent focus:outline-none"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <AnimatePresence mode="popLayout">
          {filtered.map((project) => (
            <motion.article
              key={project.title}
              layout
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="relative overflow-hidden rounded-2xl border border-surface bg-surface/70 shadow-soft"
            >
              <div className="relative h-48 w-full">
                <Image
                  src={project.cover}
                  alt={`${project.title} cover`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority={false}
                />
              </div>
              <div className="p-6 space-y-3">
                <div className="flex flex-wrap gap-2 text-xs text-textMuted">
                  <span className="rounded-full bg-base/60 px-3 py-1 border border-surface/70">{project.role}</span>
                  <span className="rounded-full bg-base/60 px-3 py-1 border border-surface/70">{project.dates}</span>
                </div>
                <div className="flex items-center justify-between gap-2">
                  <h3 className="font-display text-xl text-text">{project.title}</h3>
                  <div className="flex gap-2 text-xs text-accent">
                    {project.links.demo && (
                      <a href={project.links.demo} className="hover:underline" target="_blank" rel="noreferrer">
                        Demo
                      </a>
                    )}
                    {project.links.repo && (
                      <a href={project.links.repo} className="hover:underline" target="_blank" rel="noreferrer">
                        Repo
                      </a>
                    )}
                    {project.links.paper && (
                      <a href={project.links.paper} className="hover:underline" target="_blank" rel="noreferrer">
                        Paper
                      </a>
                    )}
                    {project.links.deck && (
                      <a href={project.links.deck} className="hover:underline" target="_blank" rel="noreferrer">
                        Deck
                      </a>
                    )}
                  </div>
                </div>
                <p className="text-textMuted leading-relaxed">{project.oneLiner}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={`${project.title}-${tag}`}
                      className={cn(
                        'rounded-full bg-base/60 px-3 py-1 text-xs border border-surface/60',
                        tag === activeTag ? 'border-accent text-accent' : 'text-textMuted'
                      )}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
