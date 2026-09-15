"use client";

import Link from "next/link";
import { useState } from "react";
import { Container } from "@/components/container";
import { SectionLabel } from "@/components/section-label";
import { portfolioProjects, siteCopy, type ProjectCase } from "@/lib/site-content";
import { cn } from "@/lib/utils";

export const Projects = ({
  limit,
  showHeader = true,
}: {
  limit?: number;
  showHeader?: boolean;
  disabelHeader?: boolean;
}) => {
  const projects = limit
    ? portfolioProjects.slice(0, limit)
    : portfolioProjects;
  const [active, setActive] = useState<number | null>(null);

  return (
    <section
      id="work"
      className="scroll-mt-24 border-t border-line bg-natural-white py-16 md:py-24"
    >
      <Container>
        {showHeader && (
          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <SectionLabel index="05" label={siteCopy.workHeading} />
              <h2 className="mt-5 font-display text-3xl font-semibold tracking-tight md:text-4xl">
                Selected projects.
              </h2>
            </div>
            <Link
              href="/work"
              className="link-underline font-dm-mono text-xs font-medium tracking-[0.16em] text-muted-foreground uppercase"
            >
              View all
            </Link>
          </div>
        )}

        <div
          className={cn(
            "relative",
            showHeader ? "mt-12 border-t border-line" : "",
          )}
          onMouseLeave={() => setActive(null)}
        >
          <ul className="divide-y divide-line">
            {projects.map((project, index) => (
              <ProjectRow
                key={project.slug}
                project={project}
                index={index}
                active={active === index}
                onFocus={() => setActive(index)}
              />
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
};

function ProjectRow({
  project,
  index,
  active,
  onFocus,
}: {
  project: ProjectCase;
  index: number;
  active: boolean;
  onFocus: () => void;
}) {
  return (
    <li
      className={cn(
        "group relative grid gap-4 py-8 transition-colors duration-200 md:grid-cols-12 md:gap-6 md:py-10",
        active ? "bg-background/70" : "bg-transparent",
      )}
      onMouseEnter={onFocus}
      onFocus={onFocus}
    >
      <span
        aria-hidden
        className={cn(
          "absolute inset-y-0 left-0 w-0.5 bg-primary transition-opacity duration-200",
          active ? "opacity-100" : "opacity-0 group-focus-within:opacity-100",
        )}
      />

      <div className="pl-3 font-dm-mono text-xs tracking-[0.14em] text-muted-foreground uppercase md:col-span-2 md:pl-4">
        <span
          className={cn(
            "transition-colors",
            active ? "text-primary" : "text-muted-foreground",
          )}
        >
          {String(index + 1).padStart(2, "0")}
        </span>
        <span className="mt-1 block normal-case tracking-normal">
          {project.year}
        </span>
      </div>

      <div className="md:col-span-4">
        <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
          <h3
            className={cn(
              "font-display text-xl font-semibold tracking-tight transition-colors md:text-2xl",
              active ? "text-natural-black" : "text-natural-black/90",
            )}
          >
            <Link
              href={`/work/${project.slug}`}
              className="outline-none hover:text-natural-black focus-visible:text-primary"
            >
              {project.title}
            </Link>
          </h3>
          <span className="font-dm-mono text-[10px] tracking-[0.14em] text-muted-foreground uppercase">
            {project.type}
          </span>
        </div>
        <p className="mt-2 text-xs text-muted-foreground md:text-sm">
          {project.role}
        </p>
        <div className="mt-3 flex flex-wrap gap-x-3 gap-y-1">
          {project.stack.map((tag) => (
            <span
              key={tag}
              className="font-dm-mono text-[10px] tracking-[0.12em] text-muted-foreground uppercase"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="md:col-span-5">
        <p className="text-sm leading-relaxed text-muted-foreground">
          {project.summary}
        </p>
        <p
          className={cn(
            "mt-3 flex flex-wrap items-center gap-x-3 gap-y-1 font-dm-mono text-[11px] tracking-[0.08em] text-natural-black/80 transition-opacity duration-200",
            active
              ? "opacity-100"
              : "opacity-70 md:opacity-0 md:group-hover:opacity-100 md:group-focus-within:opacity-100",
          )}
        >
          <span>
            <span className="text-primary">●</span> {project.highlight}
          </span>
          <Link
            href={`/work/${project.slug}`}
            className="text-muted-foreground outline-none hover:text-natural-black focus-visible:text-primary"
          >
            Case study →
          </Link>
          {project.externalHref ? (
            <a
              href={project.externalHref}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary outline-none hover:underline focus-visible:underline"
            >
              Live site →
            </a>
          ) : null}
        </p>
      </div>

      <div className="flex items-start justify-end md:col-span-1">
        <Link
          href={`/work/${project.slug}`}
          aria-label={`Open case study: ${project.title}`}
          className={cn(
            "font-display text-lg text-primary outline-none transition-transform duration-200 focus-visible:translate-x-1",
            active ? "translate-x-1" : "translate-x-0",
          )}
        >
          →
        </Link>
      </div>
    </li>
  );
}
