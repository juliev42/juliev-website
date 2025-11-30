'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { MoonIcon, SunIcon } from '@radix-ui/react-icons';

export default function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const current = theme || resolvedTheme;

  return (
    <button
      type="button"
      aria-label="Toggle theme"
      onClick={() => setTheme(current === 'dark' ? 'light' : 'dark')}
      className="inline-flex items-center gap-2 rounded-full border border-surface/70 bg-surface px-4 py-2 text-sm text-text transition hover:border-accent hover:text-accent"
    >
      {mounted && current === 'light' ? <SunIcon /> : <MoonIcon />}
      <span className="hidden sm:inline">Theme</span>
    </button>
  );
}
