import ProjectsGrid, { Project } from '@/components/ProjectsGrid';
import geneial from '@/content/projects/geneial.json';
import reproai from '@/content/projects/reproai.json';
import loyal from '@/content/projects/loyal.json';
import mit from '@/content/projects/mit-research.json';
import legacy from '@/content/projects/legacy.json';

const projects: Project[] = [geneial as Project, reproai as Project, loyal as Project, mit as Project, legacy as Project];

export const metadata = {
  title: 'Projects — Julie Vaughn',
  description: "Open-source agents for rare disease, women's health products, and longevity data science.",
};

export default function ProjectsPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <p className="text-sm uppercase tracking-[0.3em] text-textMuted">Work</p>
        <h1 className="font-display text-4xl">Projects</h1>
        <p className="text-textMuted max-w-3xl">
          Agentic tooling for rare disease, women&apos;s health counseling, canine longevity science, and more. Filter and
          search through highlights.
        </p>
      </div>
      <ProjectsGrid projects={projects} />
    </div>
  );
}
