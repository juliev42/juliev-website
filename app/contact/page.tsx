import Link from 'next/link';
import Card from '@/components/Card';

const contacts = [
  { label: 'Email', href: 'mailto:julie.r.vaughn@gmail.com' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/julievaughn' },
  { label: 'GitHub', href: 'https://github.com/juliev' },
  { label: 'Substack', href: 'https://substack.com' },
  { label: 'X/Twitter', href: 'https://twitter.com' },
  { label: 'Instagram', href: 'https://instagram.com' },
];

export const metadata = {
  title: 'Contact — Julie Vaughn',
  description: 'Collaborations, speaking, co-creating something weird and wonderful? Reach out.',
};

export default function ContactPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-3">
        <p className="text-sm uppercase tracking-[0.3em] text-textMuted">Contact</p>
        <h1 className="font-display text-4xl">Let's collaborate</h1>
        <p className="text-textMuted max-w-3xl">
          Collaborations, speaking, co-creating something weird and wonderful? — julie.r.vaughn [at] gmail.com
        </p>
      </div>

      <Card>
        <div className="flex flex-wrap gap-3">
          {contacts.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="rounded-full border border-surface px-4 py-2 text-sm text-text hover:border-accent hover:text-accent"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </Card>
    </div>
  );
}
