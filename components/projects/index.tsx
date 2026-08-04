"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";

import { cn } from "@/lib/utils";
import { portfolioProjects } from "@/lib/site-content";

import { Container } from "@/components/container";
import { RightArrow } from "@/components/icons/general";
import { PageHeader } from "@/components/page-header";

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

  return (
    <section className="w-full">
      <Container className="relative flex w-full flex-col gap-20 overflow-hidden pt-40 pb-20 md:pt-65 md:pb-30 lg:pt-80 lg:pb-30">
        {!disabelHeader && (
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <PageHeader>Selected work</PageHeader>
          </motion.div>
        )}
        <div
          className={cn(
            "z-10 grid grid-cols-14 gap-6",
            "[--card-height:440px]",
            "*:data-[slot='card']:max-h-(--card-height) *:data-[slot='card']:min-h-(--card-height) *:data-[slot='card']:overflow-hidden *:data-[slot='card']:rounded-3xl",
          )}
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className={cn(project.className)}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-8%" }}
              transition={{
                duration: 0.55,
                delay: index * 0.08,
                ease: "easeOut",
              }}
            >
              <Link
                href={project.href}
                target={project.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  project.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                data-slot="card"
                className="group relative block h-full min-h-(--card-height) overflow-hidden rounded-3xl text-left"
              >
                <Image
                  src={project.src}
                  alt={project.alt}
                  fill
                  sizes="(min-width: 1024px) 68vw, 100vw"
                  className="rounded-3xl object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  priority={index < 2}
                />
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-70 transition-opacity duration-300 group-hover:opacity-90" />
                <div className="absolute inset-0 flex flex-col justify-end rounded-3xl p-6 md:p-8">
                  <div className="translate-y-2 space-y-2 transition-transform duration-400 ease-out group-hover:translate-y-0">
                    <div className="text-natural-white -tracking-sm text-2xl leading-8 font-medium">
                      {project.title}
                    </div>
                    <p className="text-natural-white/75 max-h-0 overflow-hidden text-base leading-6 font-medium opacity-0 transition-all duration-400 ease-out group-hover:max-h-28 group-hover:opacity-100">
                      {project.summary}
                    </p>
                    <div className="flex w-full items-center justify-between gap-4 pt-1 opacity-80 transition-opacity duration-300 group-hover:opacity-100">
                      <div className="flex items-center gap-1">
                        <span className="text-natural-white tracking-xs text-sm leading-3.5 font-medium">
                          View project
                        </span>
                        <RightArrow className="transition-transform duration-300 group-hover:translate-x-1" />
                      </div>
                      <span className="-tracking-xs text-natural-white/70 text-right text-sm leading-3.5 font-medium">
                        {project.category}
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};
