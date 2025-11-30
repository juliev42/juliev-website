import { cn } from '@/lib/utils';

export function Tag({ label, active = false, onClick }: { label: string; active?: boolean; onClick?: () => void }) {
  const Component = onClick ? 'button' : 'span';
  return (
    <Component
      onClick={onClick}
      className={cn(
        'inline-flex items-center rounded-full border px-3 py-1 text-xs uppercase tracking-wide transition',
        active
          ? 'border-accent bg-accent/20 text-accent'
          : 'border-surface/70 bg-surface text-textMuted hover:border-accent hover:text-accent'
      )}
    >
      {label}
    </Component>
  );
}
