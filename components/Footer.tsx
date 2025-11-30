import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-surface/80 bg-base px-6 sm:px-10 lg:px-16 py-10 text-sm text-textMuted">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <p className="text-text">Julie Vaughn</p>
          <p>Brooklyn • AI for health & community</p>
        </div>
        <div className="flex gap-4">
          <Link href="/projects" className="hover:text-accent">
            Projects
          </Link>
          <Link href="/writing" className="hover:text-accent">
            Writing
          </Link>
          <Link href="/contact" className="hover:text-accent">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}
