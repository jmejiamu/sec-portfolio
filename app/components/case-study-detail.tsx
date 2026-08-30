import Link from "next/link";

export type ProjectDetailItem = {
  title: string;
  tag: string;
  overview: string;
  techStack: string[];
  architecture: string[];
  keyFeatures: string[];
  security: string[];
  demoResults: string[];
  learned: string[];
  githubUrl: string;
};

export type LabDetailItem = {
  title: string;
  tag: string;
  objective: string;
  tools: string[];
  vulnerability: string;
  exploitTest: string;
  fix: string;
  resultTakeaway: string;
};

type ProjectDetailProps = {
  item: ProjectDetailItem;
};

type LabDetailProps = {
  item: LabDetailItem;
};

function DetailShell({
  backHref,
  backLabel,
  tag,
  prompt,
  title,
  children,
}: {
  backHref: string;
  backLabel: string;
  tag: string;
  prompt: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen bg-[#090D12] px-4 py-6 font-mono text-[#E6EDF3] sm:px-6 lg:px-8">
      <article className="mx-auto max-w-5xl overflow-hidden rounded-lg border border-[#263241] bg-[#101720] shadow-2xl shadow-black/40">
        <header className="border-b border-[#263241] px-5 py-4 sm:px-7">
          <nav className="flex items-center justify-between gap-4">
            <Link
              className="text-xs font-bold uppercase tracking-[0.18em] text-[#39ff88] transition hover:text-[#7dd3fc]"
              href={backHref}
            >
              {backLabel}
            </Link>
            <span className="rounded border border-[#263241] bg-[#090D12] px-3 py-1 text-xs font-bold text-[#7dd3fc]">
              {tag}
            </span>
          </nav>
        </header>

        <section className="px-5 py-10 sm:px-7 lg:px-10">
          <p className="text-sm font-semibold text-[#39ff88]">{prompt}</p>
          <h1 className="mt-8 text-4xl font-black tracking-[0.08em] text-[#E6EDF3] sm:text-5xl">
            {title}
          </h1>
        </section>

        <div className="border-t border-[#263241]">{children}</div>
      </article>
    </main>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="border-b border-[#263241] p-5 last:border-b-0 sm:p-7">
      <h2 className="text-xl font-bold text-[#E6EDF3]">{title}</h2>
      <div className="mt-4 text-sm leading-7 text-[#8B949E]">{children}</div>
    </section>
  );
}

function BadgeList({
  items,
  color = "text-[#7dd3fc]",
}: {
  items: string[];
  color?: string;
}) {
  return (
    <div className="flex flex-wrap gap-2">
      {items.map((item) => (
        <span
          className={`rounded border border-[#263241] bg-[#090D12] px-3 py-2 text-xs font-bold ${color}`}
          key={item}
        >
          {item}
        </span>
      ))}
    </div>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li className="flex gap-3" key={item}>
          <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#39ff88]" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function ProjectDetail({ item }: ProjectDetailProps) {
  return (
    <DetailShell
      backHref="/#projects"
      backLabel="< Back to projects"
      prompt="> open project"
      tag={item.tag}
      title={item.title}
    >
      <Section title="Overview">
        <p className="max-w-3xl">{item.overview}</p>
      </Section>

      <Section title="Tech Stack">
        <BadgeList items={item.techStack} />
      </Section>

      <Section title="Architecture">
        <div className="grid gap-3 rounded border border-[#263241] bg-[#090D12] p-4 text-[#E6EDF3] md:grid-cols-3">
          {item.architecture.map((step, index) => (
            <div className="flex items-center gap-3" key={step}>
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded border border-[#263241] text-xs font-bold text-[#39ff88]">
                {index + 1}
              </span>
              <span>{step}</span>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Key Features">
        <BulletList items={item.keyFeatures} />
      </Section>

      <Section title="Security">
        <BulletList items={item.security} />
      </Section>

      <Section title="Demo / Results">
        <div className="rounded border border-[#263241] bg-[#090D12] p-4">
          <BulletList items={item.demoResults} />
        </div>
      </Section>

      <Section title="What I Learned">
        <BulletList items={item.learned.slice(0, 3)} />
        <Link
          className="mt-6 inline-flex min-h-11 items-center justify-center rounded border border-[#39ff88] bg-[#39ff88] px-4 text-xs font-bold uppercase tracking-[0.14em] text-[#090D12] transition hover:bg-transparent hover:text-[#39ff88]"
          href={item.githubUrl}
          rel="noreferrer"
          target="_blank"
        >
          View GitHub
        </Link>
      </Section>
    </DetailShell>
  );
}

export function LabDetail({ item }: LabDetailProps) {
  return (
    <DetailShell
      backHref="/#labs"
      backLabel="< Back to labs"
      prompt="> open lab"
      tag={item.tag}
      title={item.title}
    >
      <Section title="Objective">
        <p>{item.objective}</p>
      </Section>

      <Section title="Tools">
        <BadgeList color="text-[#39ff88]" items={item.tools} />
      </Section>

      <Section title="Vulnerability">
        <p>{item.vulnerability}</p>
      </Section>

      <Section title="Exploit/Test">
        <p>{item.exploitTest}</p>
      </Section>

      <Section title="Fix">
        <p>{item.fix}</p>
      </Section>

      <Section title="Result / Takeaway">
        <p>{item.resultTakeaway}</p>
      </Section>
    </DetailShell>
  );
}
