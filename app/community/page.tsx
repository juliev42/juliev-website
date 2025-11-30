import Link from 'next/link';
import Card from '@/components/Card';

export const metadata = {
  title: 'Community — Julie Vaughn',
  description: 'Longevity, preventative medicine, humane tech gatherings and salons.',
};

export default function CommunityPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-3">
        <p className="text-sm uppercase tracking-[0.3em] text-textMuted">Community</p>
        <h1 className="font-display text-4xl">Community & Longevity</h1>
        <p className="text-textMuted max-w-3xl">
          I convene people exploring longevity, preventative medicine, and humane tech. Join a Longevity Global NYC event
          or a dinner salon.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card>
          <h3 className="font-display text-2xl">Longevity Global NYC</h3>
          <p className="text-textMuted mt-2">Monthly gatherings with researchers, founders, and community builders.</p>
          <Link href="https://longevity.global" className="text-accent mt-4 inline-block">
            RSVP →
          </Link>
        </Card>
        <Card>
          <h3 className="font-display text-2xl">Salons & Dinners</h3>
          <p className="text-textMuted mt-2">Kamayan dinners, themed salons, and collaborative workshops in Brooklyn.</p>
          <Link href="/contact" className="text-accent mt-4 inline-block">
            Join the list →
          </Link>
        </Card>
      </div>
    </div>
  );
}
