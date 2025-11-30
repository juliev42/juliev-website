import type { Config } from 'tailwindcss';
import { fontFamily } from 'tailwindcss/defaultTheme';

const config: Config = {
  darkMode: ['class'],
  content: [
    './app/**/*.{ts,tsx,mdx}',
    './components/**/*.{ts,tsx}',
    './content/**/*.{mdx,json}',
  ],
  theme: {
    extend: {
      colors: {
        base: 'var(--color-base)',
        surface: 'var(--color-surface)',
        text: 'var(--color-text)',
        textMuted: 'var(--color-text-muted)',
        accent: 'var(--color-accent)',
        accentAlt: 'var(--color-accent-alt)',
      },
      fontFamily: {
        sans: ['var(--font-inter)', ...fontFamily.sans],
        display: ['var(--font-fraunces)', ...fontFamily.serif],
        mono: ['var(--font-mono)', ...fontFamily.mono],
      },
      boxShadow: {
        soft: '0 12px 40px rgba(0, 0, 0, 0.35)',
      },
      animation: {
        float: 'float 12s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};

export default config;
