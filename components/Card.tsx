import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

export default function Card({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div className={cn('relative overflow-hidden rounded-2xl border border-surface bg-surface/70 shadow-soft', className)}>
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-accentAlt/5" aria-hidden />
      <div className="relative p-6">{children}</div>
    </div>
  );
}
