import Image from 'next/image';
import Prose from '@/components/Prose';
import { getAllWritingMeta, getWritingBySlug } from '@/lib/mdx';
import { formatDate } from '@/lib/utils';

export async function generateStaticParams() {
  const posts = await getAllWritingMeta();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const { meta } = await getWritingBySlug(params.slug);
  return {
    title: `${meta.title} — Julie Vaughn`,
    description: meta.description,
    alternates: { canonical: `/writing/${meta.slug}` },
    openGraph: {
      title: meta.title,
      description: meta.description,
      images: [{ url: meta.cover, width: 1200, height: 630 }],
    },
  };
}

export default async function WritingPost({ params }: { params: { slug: string } }) {
  const { meta, content, toc } = await getWritingBySlug(params.slug);
  const isEssay = meta.tags.includes('essay');

  return (
    <article className="space-y-8">
      <header className="space-y-4">
        <p className="text-sm uppercase tracking-[0.3em] text-textMuted">{formatDate(meta.date)}</p>
        <h1 className="font-display text-4xl leading-tight">{meta.title}</h1>
        <p className="text-textMuted max-w-3xl">{meta.description}</p>
        <div className="flex flex-wrap gap-2 text-xs text-textMuted">
          {meta.tags.map((tag) => (
            <span key={tag} className="rounded-full bg-base/70 px-3 py-1 border border-surface/70">
              {tag}
            </span>
          ))}
        </div>
        <div className="relative h-64 w-full overflow-hidden rounded-2xl border border-surface">
          <Image src={meta.cover} alt={meta.title} fill className="object-cover" sizes="100vw" />
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,3fr),1fr] gap-10">
        <Prose>{content}</Prose>
        {isEssay && toc.length > 0 && (
          <aside className="lg:sticky lg:top-28 rounded-2xl border border-surface bg-surface/70 p-4">
            <p className="text-sm font-semibold text-text">On this page</p>
            <ul className="mt-3 space-y-2 text-sm text-textMuted">
              {toc.map((item) => (
                <li key={item.id} className={item.level === 3 ? 'ml-3' : ''}>
                  <a href={`#${item.id}`} className="hover:text-accent">
                    {item.text}
                  </a>
                </li>
              ))}
            </ul>
          </aside>
        )}
      </div>
    </article>
  );
}
