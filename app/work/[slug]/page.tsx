import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/container";
import { Button } from "@/components/button";
import { getSEO } from "@/lib/seo";
import {
  getProjectBySlug,
  portfolioProjects,
  person,
} from "@/lib/site-content";

type Params = { slug: string };

export function generateStaticParams() {
  return portfolioProjects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: "Project not found" };
  return getSEO({
    title: project.seoTitle ?? project.title,
    description: project.seoDescription ?? project.summary,
    path: `/work/${project.slug}`,
  });
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  return (
    <article className="max-w-screen overflow-x-hidden">
      <header className="border-b border-line bg-natural-black text-natural-white">
        <div aria-hidden className="h-px w-full bg-primary" />
        <Container className="pt-24 pb-14 md:pt-28 md:pb-16">
          <Link
            href="/work"
            className="font-dm-mono text-xs tracking-[0.16em] text-white/45 uppercase transition-colors hover:text-primary"
          >
            ← Work
          </Link>
          <p className="mt-8 font-dm-mono text-xs tracking-[0.18em] text-primary uppercase">
            {project.type} · {project.year}
          </p>
          <h1 className="mt-4 max-w-3xl font-display text-4xl font-semibold tracking-tight text-balance md:text-5xl lg:text-[3.5rem]">
            {project.title}
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/65 md:text-lg">
            {project.summary}
          </p>
          {project.relatedNote && (
            <p className="mt-4 max-w-2xl text-sm text-white/45">
              {project.relatedNote}
            </p>
          )}

          <dl className="mt-12 grid grid-cols-2 gap-6 border-t border-white/12 pt-8 sm:grid-cols-4">
            <div className="sm:col-span-2">
              <dt className="font-dm-mono text-[10px] tracking-[0.16em] text-white/40 uppercase">
                My role
              </dt>
              <dd className="mt-2 text-sm leading-snug">{project.role}</dd>
            </div>
            <div>
              <dt className="font-dm-mono text-[10px] tracking-[0.16em] text-white/40 uppercase">
                Type
              </dt>
              <dd className="mt-2 text-sm">{project.type}</dd>
            </div>
            <div>
              <dt className="font-dm-mono text-[10px] tracking-[0.16em] text-white/40 uppercase">
                Focus
              </dt>
              <dd className="mt-2 text-sm text-primary">{project.highlight}</dd>
            </div>
          </dl>
        </Container>
      </header>

      <Container className="py-14 md:py-20">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-12">
          <aside className="space-y-10 lg:col-span-4 lg:sticky lg:top-24 lg:self-start">
            <div>
              <h2 className="font-dm-mono text-xs tracking-[0.16em] text-muted-foreground uppercase">
                Technologies
              </h2>
              <ul className="mt-4 space-y-2">
                {project.stack.map((tech) => (
                  <li
                    key={tech}
                    className="border-l-2 border-primary pl-3 text-sm"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="font-dm-mono text-xs tracking-[0.16em] text-muted-foreground uppercase">
                Flow
              </h2>
              <ol className="mt-4 space-y-2">
                {project.architecture.map((step, index) => (
                  <li key={step} className="flex gap-3 text-sm">
                    <span className="font-dm-mono w-5 shrink-0 text-xs text-primary">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="text-muted-foreground">{step}</span>
                  </li>
                ))}
              </ol>
            </div>

            <div className="flex flex-col gap-3">
              {project.externalHref && (
                <Button
                  text="Open live site"
                  href={project.externalHref}
                  className="w-fit"
                />
              )}
              {project.githubHref && (
                <Button
                  text="View on GitHub"
                  href={project.githubHref}
                  variant="ghost"
                  external
                  className="w-fit"
                />
              )}
              <Button
                text="Email about this work"
                href={`mailto:${person.email}?subject=${encodeURIComponent(`About ${project.title}`)}`}
                variant="ghost"
                className="w-fit"
              />
            </div>
          </aside>

          <div className="space-y-12 lg:col-span-8">
            {(
              [
                ["Context", project.overview],
                ["Problem", project.problem],
                ["Approach", project.approach],
                ["Challenges", project.challenges],
                ["Decisions", project.decisions],
                ["Result", project.result],
              ] as const
            ).map(([title, body]) => (
              <section key={title}>
                <h2 className="font-display text-2xl font-semibold tracking-tight">
                  {title}
                </h2>
                <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-[15px]">
                  {body}
                </p>
              </section>
            ))}

            <section>
              <h2 className="font-display text-2xl font-semibold tracking-tight">
                Implementation
              </h2>
              <ul className="mt-4 space-y-3">
                {project.implementation.map((item) => (
                  <li
                    key={item}
                    className="relative max-w-2xl pl-4 text-sm leading-relaxed text-muted-foreground before:absolute before:top-[0.55em] before:left-0 before:size-1.5 before:bg-primary md:text-[15px]"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </div>

        <nav
          aria-label="Case study footer"
          className="mt-16 flex flex-col gap-6 border-t border-line pt-8 sm:flex-row sm:items-center sm:justify-between"
        >
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <Link
              href="/work"
              className="link-underline font-dm-mono text-xs tracking-[0.14em] uppercase"
            >
              ← All work
            </Link>
            {project.slug === "nexus" && (
              <>
                <Link
                  href="/work/urban-compact"
                  className="link-underline font-dm-mono text-xs tracking-[0.14em] uppercase"
                >
                  Related: Urban Compact
                </Link>
                <Link
                  href="/work/performance-street"
                  className="link-underline font-dm-mono text-xs tracking-[0.14em] uppercase"
                >
                  Related: Performance Street
                </Link>
              </>
            )}
            {project.slug === "urban-compact" && (
              <>
                <Link
                  href="/work/nexus"
                  className="link-underline font-dm-mono text-xs tracking-[0.14em] uppercase"
                >
                  Related: NEXUS
                </Link>
                <Link
                  href="/work/performance-street"
                  className="link-underline font-dm-mono text-xs tracking-[0.14em] uppercase"
                >
                  Related: Performance Street
                </Link>
              </>
            )}
            {project.slug === "performance-street" && (
              <>
                <Link
                  href="/work/nexus"
                  className="link-underline font-dm-mono text-xs tracking-[0.14em] uppercase"
                >
                  Related: NEXUS
                </Link>
                <Link
                  href="/work/urban-compact"
                  className="link-underline font-dm-mono text-xs tracking-[0.14em] uppercase"
                >
                  Related: Urban Compact
                </Link>
              </>
            )}
            {project.slug === "dar-al-rafidain" && (
              <Link
                href="/work/book-search"
                className="link-underline font-dm-mono text-xs tracking-[0.14em] uppercase"
              >
                Related: Book search
              </Link>
            )}
            {project.slug === "book-search" && (
              <Link
                href="/work/dar-al-rafidain"
                className="link-underline font-dm-mono text-xs tracking-[0.14em] uppercase"
              >
                Related: Dar Al-Rafidain
              </Link>
            )}
            {project.slug === "ngo-platforms" && (
              <Link
                href="/work/erpnext-ngo"
                className="link-underline font-dm-mono text-xs tracking-[0.14em] uppercase"
              >
                Related: ERPNext
              </Link>
            )}
            {project.slug === "erpnext-ngo" && (
              <Link
                href="/work/ngo-platforms"
                className="link-underline font-dm-mono text-xs tracking-[0.14em] uppercase"
              >
                Related: NGO platforms
              </Link>
            )}
          </div>
          <Link
            href="/#contact"
            className="link-underline font-dm-mono text-xs tracking-[0.14em] uppercase"
          >
            Contact
          </Link>
        </nav>
      </Container>
    </article>
  );
}
