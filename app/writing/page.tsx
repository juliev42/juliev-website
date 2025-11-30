import Link from 'next/link';
import { getAllWritingMeta } from '@/lib/mdx';
import { formatDate } from '@/lib/utils';

const PAGE_SIZE = 5;

export const metadata = {
  title: 'Writing & Poetry — Julie Vaughn',
  description: 'Essays and poems on care, embodiment, and humane AI.',
};

export default async function WritingPage({ searchParams }: { searchParams?: { [key: string]: string | string[] | undefined } }) {
  const pageParam = Array.isArray(searchParams?.page) ? searchParams?.page[0] : searchParams?.page;
  const rawPage = Number(pageParam || 1);
  const posts = await getAllWritingMeta();
  const totalPages = Math.max(1, Math.ceil(posts.length / PAGE_SIZE));
  const page = Math.min(Math.max(rawPage, 1), totalPages);
  const slice = posts.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  return (
    <div className="space-y-8">
      <div className="space-y-3">
        <p className="text-sm uppercase tracking-[0.3em] text-textMuted">Words</p>
        <h1 className="font-display text-4xl">Writing & Poetry</h1>
        <p className="text-textMuted max-w-3xl">
          Essays on AI for health and experiments in agentic workflows, plus poems that stay close to the body.
        </p>
      </div>

      <div className="space-y-4">
        {slice.map((post) => (
          <article key={post.slug} className="rounded-2xl border border-surface bg-surface/80 p-6 shadow-soft">
            <div className="flex flex-wrap items-center gap-3 text-xs text-textMuted">
              <span className="rounded-full bg-base/70 px-3 py-1 border border-surface/70">{formatDate(post.date)}</span>
              {post.tags.map((tag) => (
                <span key={tag} className="rounded-full bg-base/70 px-3 py-1 border border-surface/70">
                  {tag}
                </span>
              ))}
            </div>
            <Link href={`/writing/${post.slug}`} className="block mt-3 font-display text-2xl hover:text-accent">
              {post.title}
            </Link>
            <p className="text-textMuted mt-2 max-w-3xl leading-relaxed">{post.description}</p>
          </article>
        ))}
      </div>

      {totalPages > 1 && (
        <div className="flex items-center gap-3 text-sm">
          <span className="text-textMuted">Page {page} of {totalPages}</span>
          <div className="flex gap-2">
            <Link
              href={`/writing?page=${Math.max(1, page - 1)}`}
              className={`rounded-full border px-3 py-1 text-textMuted hover:border-accent hover:text-accent ${
                page === 1 ? 'pointer-events-none opacity-50' : 'border-surface'
              }`}
              aria-disabled={page === 1}
            >
              Previous
            </Link>
            <Link
              href={`/writing?page=${Math.min(totalPages, page + 1)}`}
              className={`rounded-full border px-3 py-1 text-textMuted hover:border-accent hover:text-accent ${
                page === totalPages ? 'pointer-events-none opacity-50' : 'border-surface'
              }`}
              aria-disabled={page === totalPages}
            >
              Next
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
