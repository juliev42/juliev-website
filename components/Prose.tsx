import { ReactNode } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export const mdxComponents = {
  a: (props: any) => (
    <Link {...props} className="text-accent hover:text-accentAlt underline underline-offset-4" />
  ),
  img: (props: any) => (
    <Image
      {...props}
      alt={props.alt || ''}
      width={props.width || 900}
      height={props.height || 600}
      className="rounded-xl border border-surface"
    />
  ),
};

export default function Prose({ children }: { children: ReactNode }) {
  return (
    <div className="prose dark:prose-invert prose-headings:font-display prose-a:text-accent prose-strong:text-text prose-blockquote:text-textMuted">
      {children}
    </div>
  );
}
