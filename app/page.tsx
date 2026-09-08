import Link from "next/link";

import { labs, projects, skills } from "./data/portfolio";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#090D12] px-4 py-6 font-mono text-[#E6EDF3] sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-lg border border-[#263241] bg-[#101720] shadow-2xl shadow-black/40">
        <header className="border-b border-[#263241]">
          <nav className="flex items-center justify-between px-5 py-4 sm:px-7">
            <a
              className="text-sm font-bold tracking-[0.22em] text-[#39ff88]"
              href="#"
            >
              JM.SECURITY
            </a>
            <div className="flex items-center gap-4 text-xs font-semibold uppercase tracking-[0.14em] text-[#8B949E] sm:gap-6">
              <a className="transition hover:text-[#7dd3fc]" href="#about">
                About
              </a>
              <a className="transition hover:text-[#7dd3fc]" href="#projects">
                Projects
              </a>
              <a className="transition hover:text-[#7dd3fc]" href="#labs">
                Labs
              </a>
            </div>
          </nav>
        </header>

        <section className="relative px-5 py-12 sm:px-7 sm:py-16 lg:px-10 lg:py-20">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#39ff88]/60 to-transparent" />
          <p className="text-sm font-semibold text-[#39ff88]">&gt; whoami</p>

          <div className="mt-10 max-w-4xl">
            <h1 className="text-4xl font-black tracking-[0.08em] text-[#E6EDF3] sm:text-6xl">
              JOSE H MEJIA MUNOZ
            </h1>
            <p className="mt-4 text-base font-bold uppercase tracking-[0.18em] text-[#7dd3fc] sm:text-lg">
              Software Engineer &rarr; Cybersecurity
            </p>
            <p className="mt-7 max-w-3xl text-base leading-8 text-[#8B949E] sm:text-lg">
              Building secure applications, analyzing vulnerabilities, and
              experimenting with Linux and network security.
            </p>
          </div>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              className="inline-flex min-h-12 items-center justify-center rounded border border-[#39ff88] bg-[#39ff88] px-5 text-sm font-bold uppercase tracking-[0.12em] text-[#090D12] transition hover:bg-transparent hover:text-[#39ff88]"
              href="#labs"
            >
              View Security Labs
            </a>
            <a
              className="inline-flex min-h-12 items-center justify-center rounded border border-[#263241] bg-[#090D12] px-5 text-sm font-bold uppercase tracking-[0.12em] text-[#E6EDF3] transition hover:border-[#7dd3fc] hover:text-[#7dd3fc]"
              href="https://github.com/jmejiamu"
              rel="noreferrer"
              target="_blank"
            >
              GitHub
            </a>
          </div>
        </section>
      </div>

      <section className="mx-auto max-w-6xl py-6" id="about">
        <article className="rounded-lg border border-[#263241] bg-[#101720] p-5">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#7dd3fc]">
            About
          </p>
          <h2 className="mt-3 text-2xl font-bold text-[#E6EDF3]">
            Engineer mindset, security direction
          </h2>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-[#8B949E]">
            I bring software engineering experience into cybersecurity by
            understanding how applications are built, where they fail, and how
            to document fixes clearly.
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span
                className="rounded border border-[#263241] bg-[#090D12] px-3 py-2 text-xs font-bold text-[#E6EDF3]"
                key={skill}
              >
                {skill}
              </span>
            ))}
          </div>
        </article>
      </section>

      <section
        className="mx-auto grid max-w-6xl gap-5 pb-6 md:grid-cols-3"
        id="projects"
      >
        <h1 className="text-4xl font-black tracking-[0.08em] text-[#E6EDF3] sm:col-span-3 sm:text-6xl">
          Projects
        </h1>
        {projects.map((project) => (
          <Link
            className="rounded-lg border border-[#263241] bg-[#101720] p-5 transition hover:border-[#7dd3fc]"
            href={`/projects/${project.slug}`}
            key={project.title}
          >
            <div className="flex items-center justify-between gap-4">
              <h2 className="text-base font-bold text-[#E6EDF3]">
                {project.title}
              </h2>
              <span className="rounded border border-[#263241] px-2 py-1 text-xs font-bold text-[#7dd3fc]">
                {project.tag}
              </span>
            </div>
            <p className="mt-4 text-sm leading-6 text-[#8B949E]">
              {project.detail}
            </p>
            <p className="mt-5 text-xs font-bold uppercase tracking-[0.18em] text-[#39ff88]">
              Read details
            </p>
          </Link>
        ))}
      </section>

      {/* <section className="mx-auto max-w-6xl pb-6" id="labs">
        <h1 className="mb-5 text-4xl font-black tracking-[0.08em] text-[#E6EDF3] sm:text-6xl">
          Labs
        </h1>
        <p className="mb-5 max-w-3xl text-sm leading-7 text-[#8B949E]">
          Smaller experiments that demonstrate one security concept at a time:
          access control, reconnaissance, headers, logging, and hardening.
        </p>
        <div className="grid gap-5 md:grid-cols-3">
          {labs.map((lab) => (
            <Link
              className="block rounded-lg border border-[#263241] bg-[#101720] p-5 transition hover:border-[#39ff88]"
              href={`/labs/${lab.slug}`}
              key={lab.title}
            >
              <div className="flex items-center justify-between gap-4">
                <h2 className="text-base font-bold text-[#E6EDF3]">
                  {lab.title}
                </h2>
                <span className="rounded border border-[#263241] px-2 py-1 text-xs font-bold text-[#39ff88]">
                  {lab.tag}
                </span>
              </div>
              <p className="mt-4 text-sm leading-6 text-[#8B949E]">
                {lab.detail}
              </p>
              <p className="mt-5 text-xs font-bold uppercase tracking-[0.18em] text-[#39ff88]">
                View experiment
              </p>
            </Link>
          ))}
        </div>
      </section> */}
    </main>
  );
}
