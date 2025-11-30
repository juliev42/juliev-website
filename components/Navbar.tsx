'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import ThemeToggle from './ThemeToggle';
import { cn } from '@/lib/utils';

const links = [
  { href: '/', label: 'Home' },
  { href: '/projects', label: 'Projects' },
  { href: '/creative', label: 'Creative' },
  { href: '/writing', label: 'Writing' },
  { href: '/community', label: 'Community' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 backdrop-blur border-b border-surface/80 bg-base/75">
      <nav className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 py-4 flex items-center justify-between gap-4">
        <Link href="/" className="font-display text-xl tracking-tight hover:text-accent transition">
          Julie Vaughn
        </Link>
        <div className="flex items-center gap-3">
          <div className="hidden lg:flex items-center gap-1 rounded-full border border-surface/80 bg-surface/80 px-2 py-1">
            {links.map((link) => {
              const active = pathname === link.href || pathname.startsWith(`${link.href}/`);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    'relative px-3 py-2 text-sm rounded-full transition hover:text-accent focus-visible:outline-none',
                    active ? 'text-text' : 'text-textMuted'
                  )}
                >
                  {active && (
                    <motion.span
                      layoutId="nav-highlight"
                      className="absolute inset-0 rounded-full bg-accent/15"
                      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{link.label}</span>
                </Link>
              );
            })}
          </div>
          <ThemeToggle />
        </div>
      </nav>
      <div className="lg:hidden max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 pb-3">
        <div className="flex gap-2 overflow-x-auto no-scrollbar" aria-label="Primary navigation">
          {links.map((link) => {
            const active = pathname === link.href || pathname.startsWith(`${link.href}/`);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'px-3 py-2 text-sm rounded-full border transition whitespace-nowrap',
                  active
                    ? 'border-accent bg-accent/15 text-text'
                    : 'border-surface/80 bg-surface/60 text-textMuted hover:border-accent hover:text-accent'
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
      </div>
    </header>
  );
}
