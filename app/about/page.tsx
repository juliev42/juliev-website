import Card from '@/components/Card';

const memories = [
  { title: 'San Diego beach', caption: 'Pacific light, salt, and singing with cousins.' },
  { title: 'Filipino American roots', caption: 'Kamayan tables and family health stories.' },
  { title: 'Early wet-lab', caption: 'Pipettes and patience before code.' },
  { title: 'East Campus', caption: 'Roller coasters and MIT maker energy.' },
  { title: 'India glove project', caption: 'Building haptic gloves with students in Pune.' },
];

const problems = [
  'Mental health',
  "Women's health",
  'Rare diseases',
  'Longevity / preventative medicine',
  'Emotionally healthy teams',
];

export const metadata = {
  title: 'About — Julie Vaughn',
  description: 'Hapa/Filipino American data scientist building humane AI for health.',
};

export default function AboutPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-3">
        <p className="text-sm uppercase tracking-[0.3em] text-textMuted">About</p>
        <h1 className="font-display text-4xl">About Julie</h1>
        <p className="text-textMuted max-w-4xl">
          San Diego sunsets to MIT maker culture to rare-disease AI — I'm hapa/Filipino American, raised by family health
          stories and a love for building. Wet-lab taught me respect for biology; data gave me a language for patterns. I
          try to hold both: rigor and care.
        </p>
      </div>

      <Card>
        <div className="space-y-4">
          <h3 className="font-display text-2xl">Memories</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {memories.map((memory) => (
              <div key={memory.title} className="rounded-xl border border-surface/60 bg-base/60 p-3">
                <p className="text-sm uppercase tracking-wide text-accent">{memory.title}</p>
                <p className="text-textMuted text-sm mt-1">{memory.caption}</p>
              </div>
            ))}
          </div>
        </div>
      </Card>

      <Card>
        <div className="space-y-3">
          <h3 className="font-display text-2xl">Problems I care about</h3>
          <ul className="list-disc list-inside text-textMuted space-y-2">
            {problems.map((problem) => (
              <li key={problem}>{problem}</li>
            ))}
          </ul>
        </div>
      </Card>
    </div>
  );
}
