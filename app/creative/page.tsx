import CreativeMosaic, { CreativeItem } from '@/components/CreativeMosaic';

const items: CreativeItem[] = [
  {
    title: 'Writing & Poetry',
    category: 'Words',
    excerpt: 'Selected poems & essays on care, embodiment, and building humane systems.',
    image: '/images/covers/geneial.jpg',
  },
  {
    title: 'Music',
    category: 'Sound',
    excerpt: 'Vocal sketches and guitar-first songs; late-night jam harmonies.',
    image: '/images/covers/reproai.jpg',
  },
  {
    title: 'Dance & Movement',
    category: 'Motion',
    excerpt: 'Running, dance, and pole as embodied systems design.',
    image: '/images/covers/loyal.jpg',
  },
  {
    title: 'Cooking & Hosting',
    category: 'Gatherings',
    excerpt: 'Kamayan dinners, themed salons — food as community infrastructure.',
    image: '/images/covers/mit.jpg',
  },
  {
    title: 'Visual Art & Design',
    category: 'Visual',
    excerpt: 'Watercolor and data-poetry studies.',
    image: '/images/covers/legacy.jpg',
  },
];

export const metadata = {
  title: 'Creative — Julie Vaughn',
  description: 'Poems, music, movement, food, and visual explorations that shape how I build.',
};

export default function CreativePage() {
  return (
    <div className="space-y-8">
      <div className="space-y-3">
        <p className="text-sm uppercase tracking-[0.3em] text-textMuted">Creative</p>
        <h1 className="font-display text-4xl">Creative Ecosystem</h1>
        <p className="text-textMuted max-w-3xl">
          Creativity isn't separate from my work — it's how I listen for patterns and possibility. Music, movement, food,
          and words help me prototype futures.
        </p>
      </div>
      <CreativeMosaic items={items} />
    </div>
  );
}
