"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";

import { cn } from "@/lib/utils";
import { portfolioProjects } from "@/lib/site-content";

import { Container } from "@/components/container";
import { RightArrow } from "@/components/icons/general";
import { PageHeader } from "@/components/page-header";

type Project = (typeof portfolioProjects)[number];

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const href = project.href;
  const interactive = Boolean(href);
  const isLive = project.badge === "Live demo";

  const content = (
    <>
      <Image
        src={project.src}
        alt={project.alt}
        fill
        sizes="(min-width: 1024px) 68vw, 100vw"
        className={cn(
          "rounded-3xl object-cover object-center transition-transform duration-700 ease-out",
          interactive && "group-hover:scale-[1.035]",
        )}
        priority={index < 2}
      />
      <div
        className={cn(
          "absolute inset-0 rounded-3xl bg-gradient-to-t from-black/85 via-black/25 to-black/10 opacity-75 transition-opacity duration-300",
          interactive && "group-hover:opacity-95",
        )}
      />

      <div className="absolute top-4 left-4 z-10 md:top-5 md:left-5">
        <span
          className={cn(
            "inline-flex items-center rounded-full px-2.5 py-1 font-mono text-[10px] tracking-[0.14em] uppercase backdrop-blur-sm",
            isLive
              ? "bg-primary/95 text-black"
              : "bg-white/12 text-white/90 ring-1 ring-white/20",
          )}
        >
          {project.badge}
        </span>
      </div>

      <div className="absolute inset-0 flex flex-col justify-end rounded-3xl p-6 md:p-8">
        <div
          className={cn(
            "space-y-2.5 transition-transform duration-400 ease-out",
            interactive
              ? "translate-y-2 group-hover:translate-y-0"
              : "translate-y-0",
          )}
        >
          <div className="font-display text-natural-white -tracking-sm text-2xl leading-8 font-semibold md:text-[1.65rem]">
            {project.title}
          </div>
          <p
            className={cn(
              "text-natural-white/78 max-w-[42ch] overflow-hidden text-[0.95rem] leading-6 font-medium transition-all duration-400 ease-out",
              interactive
                ? "max-h-0 opacity-0 group-hover:max-h-32 group-hover:opacity-100"
                : "max-h-32 opacity-100",
            )}
          >
            {project.summary}
          </p>
          <div
            className={cn(
              "flex w-full flex-wrap items-end justify-between gap-3 pt-1 transition-opacity duration-300",
              interactive
                ? "opacity-85 group-hover:opacity-100"
                : "opacity-100",
            )}
          >
            {interactive ? (
              <div className="flex min-h-11 items-center gap-1">
                <span className="text-natural-white tracking-xs text-sm leading-3.5 font-medium">
                  View project
                </span>
                <RightArrow className="transition-transform duration-300 group-hover:translate-x-1" />
              </div>
            ) : (
              <span className="text-natural-white/55 tracking-xs flex min-h-11 items-center text-sm leading-3.5 font-medium">
                Portfolio highlight
              </span>
            )}
            <span className="font-mono text-natural-white/65 text-right text-[11px] leading-4 tracking-[0.12em] uppercase">
              {project.category}
            </span>
          </div>
        </div>
      </div>
    </>
  );

  const className =
    "relative block h-full min-h-(--card-height) overflow-hidden rounded-3xl text-left";

  if (interactive && href) {
    return (
      <Link
        href={href}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
        data-slot="card"
        className={cn(className, "group cursor-pointer")}
      >
        {content}
      </Link>
    );
  }

  return (
    <div
      data-slot="card"
      aria-label={`${project.title} — ${project.badge}`}
      className={cn(className, "cursor-default select-none")}
    >
      {content}
    </div>
  );
}

export const Projects = ({
  disabelHeader = false,
  limit,
}: {
  disabelHeader?: boolean;
  limit?: number;
}) => {
  const projects = limit
    ? portfolioProjects.slice(0, limit)
    : portfolioProjects;
  const reduce = useReducedMotion();

  return (
    <section className="w-full">
      <Container className="relative flex w-full flex-col gap-16 overflow-hidden pt-36 pb-24 md:gap-20 md:pt-60 md:pb-28 lg:pt-72 lg:pb-32">
        {!disabelHeader && (
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <PageHeader className="font-display">Selected work</PageHeader>
          </motion.div>
        )}
        <div
          className={cn(
            "z-10 grid grid-cols-14 gap-5 md:gap-6",
            "[--card-height:440px]",
            "*:data-[slot='card']:max-h-(--card-height) *:data-[slot='card']:min-h-(--card-height) *:data-[slot='card']:overflow-hidden *:data-[slot='card']:rounded-3xl",
          )}
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className={cn(project.className)}
              initial={reduce ? false : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-8%" }}
              transition={{
                duration: 0.5,
                delay: reduce ? 0 : index * 0.07,
                ease: "easeOut",
              }}
            >
              <ProjectCard project={project} index={index} />
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};
