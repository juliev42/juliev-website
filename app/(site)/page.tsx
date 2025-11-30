import Link from 'next/link';
import Hero from '@/components/Hero';
import Card from '@/components/Card';
import ProjectsGrid, { Project } from '@/components/ProjectsGrid';
import { getAllWritingMeta } from '@/lib/mdx';
import { formatDate } from '@/lib/utils';
import geneial from '@/content/projects/geneial.json';
import reproai from '@/content/projects/reproai.json';
import loyal from '@/content/projects/loyal.json';
import mit from '@/content/projects/mit-research.json';
import legacy from '@/content/projects/legacy.json';

const projects: Project[] = [geneial as Project, reproai as Project, loyal as Project, mit as Project, legacy as Project];

export default async function HomePage() {
  const writing = await getAllWritingMeta();
  const recent = writing.slice(0, 3);

  return (
    <div className="space-y-12">
      <Hero />

      <section className="grid grid-cols-1 md:grid-cols-[2fr,1fr] gap-6 items-center">
        <div className="space-y-4">
          <p className="text-lg text-textMuted leading-relaxed">
            I focus on AI for personalized and preventative medicine. I'm a data scientist at Geneial, a rare-disease
            startup, working on ARPA-H–funded open-source LLM tooling. I co-direct Longevity Global NYC and tinker with
            wearables, CGMs, and agentic workflows. Previously Loyal (canine longevity), founder of an AI product for
            reproductive health counseling, and MIT EECS (BS/MEng). Outside work: I sing/write songs, dance, host community
            dinners, and get into the mountains.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Card className="p-4">
              <div className="text-sm text-textMuted">Rare Disease AI Toolkit</div>
              <Link href="/projects" className="text-accent text-lg font-semibold">
                See Projects →
              </Link>
            </Card>
            <Card className="p-4">
              <div className="text-sm text-textMuted">Creative Ecosystem</div>
              <Link href="/creative" className="text-accent text-lg font-semibold">
                Explore Creative →
              </Link>
            </Card>
            <Card className="p-4">
              <div className="text-sm text-textMuted">Community & Longevity</div>
              <Link href="/community" className="text-accent text-lg font-semibold">
                Join Us →
              </Link>
            </Card>
          </div>
        </div>
        <Card className="p-6 bg-gradient-to-br from-accent/10 via-surface to-accentAlt/10">
          <h3 className="font-display text-2xl mb-3">Now</h3>
          <ul className="space-y-2 text-textMuted text-sm leading-relaxed">
            <li>Building open agents for rare-disease research at Geneial.</li>
            <li>Hosting Longevity Global NYC meetups and salons.</li>
            <li>Iterating on agentic workflows that keep clinicians in the loop.</li>
          </ul>
        </Card>
      </section>

      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="font-display text-3xl">Featured Projects</h2>
          <Link href="/projects" className="text-accent hover:text-accentAlt">
            View all
          </Link>
        </div>
        <ProjectsGrid projects={projects.slice(0, 4)} />
      </section>

      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="font-display text-3xl">Recent Writing</h2>
          <Link href="/writing" className="text-accent hover:text-accentAlt">
            Read more
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {recent.map((item) => (
            <Card key={item.slug}>
              <div className="space-y-2">
                <p className="text-xs uppercase tracking-wide text-accent">{formatDate(item.date)}</p>
                <Link href={`/writing/${item.slug}`} className="font-display text-xl hover:text-accent">
                  {item.title}
                </Link>
                <p className="text-textMuted text-sm leading-relaxed">{item.description}</p>
                <div className="flex flex-wrap gap-2 text-xs text-textMuted">
                  {item.tags.map((tag) => (
                    <span key={tag} className="rounded-full bg-base/70 px-3 py-1 border border-surface/70">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
