"use client";

import Image from "next/image";
import { Container } from "@/components/container";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { GitHub, LinkedIn } from "@/components/icons/general";
import {
  education,
  experience,
  languages,
  person,
  professionalSummary,
  siteCopy,
  skillGroups,
} from "@/lib/site-content";

export const AboutSection = () => {
  const reduce = useReducedMotion();

  return (
    <section
      id="about"
      className="bg-natural-black text-natural-white relative w-full overflow-hidden"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: `
            radial-gradient(ellipse 50% 40% at 10% 30%, rgba(255,255,255,0.08), transparent 60%),
            radial-gradient(ellipse 45% 50% at 90% 20%, rgba(39,37,31,0.9), transparent 55%),
            linear-gradient(to right, #181816 1px, transparent 1px),
            linear-gradient(to bottom, #181816 1px, transparent 1px)
          `,
          backgroundSize: "auto, auto, 44px 44px, 44px 44px",
          maskImage:
            "radial-gradient(ellipse 70% 60% at 70% 20%, black 0%, transparent 70%)",
        }}
      />

      <Container className="relative z-20 flex w-full flex-col gap-16 pt-24 pb-28 md:gap-20 md:pt-28 md:pb-32">
        <motion.div
          className="font-display -tracking-xl text-5xl leading-none font-medium md:text-6xl md:leading-18"
          initial={reduce ? false : { opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          {siteCopy.aboutHeading}
        </motion.div>
        <div className="grid w-full grid-cols-1 justify-between gap-14 lg:grid-cols-5 lg:gap-16">
          <motion.div
            className="relative overflow-hidden rounded-lg lg:col-span-2"
            initial={reduce ? false : { opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.55, ease: "easeOut" }}
          >
            <Image
              src={"/assets/hassan.jpg"}
              alt="Hassan Srour"
              width={1200}
              height={1200}
              className="w-full rounded-lg object-cover object-top transition-transform duration-700 ease-out hover:scale-[1.03]"
              priority
            />
          </motion.div>
          <motion.div
            className="flex h-full w-full flex-col justify-between gap-12 lg:col-span-3"
            initial={reduce ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.55, delay: reduce ? 0 : 0.08, ease: "easeOut" }}
          >
            <div className="flex flex-col gap-6">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="text-natural-white/65 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm font-medium">
                  <span>{person.location}</span>
                  <span className="text-natural-white/25" aria-hidden>
                    ·
                  </span>
                  <a
                    href={`mailto:${person.email}`}
                    className="transition-colors duration-250 hover:text-natural-white"
                  >
                    {person.email}
                  </a>
                  <span className="text-natural-white/25" aria-hidden>
                    ·
                  </span>
                  <a
                    href={`tel:${person.phone.replace(/\s/g, "")}`}
                    className="transition-colors duration-250 hover:text-natural-white"
                  >
                    {person.phone}
                  </a>
                </div>
                <div className="flex flex-wrap items-center gap-3">
                  <a
                    href={person.cvPath}
                    download="Hassan_Srour_CV.pdf"
                    className="text-natural-white/80 hover:text-natural-white inline-flex min-h-11 items-center rounded-full border border-white/15 px-3 text-xs font-medium tracking-wide transition-colors duration-250"
                  >
                    Download CV
                  </a>
                  <Link
                    href={person.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    className="inline-flex min-h-11 min-w-11 items-center justify-center"
                  >
                    <GitHub className="text-muted-foreground hover:text-natural-white size-4 transition-colors duration-250" />
                  </Link>
                  <Link
                    href={person.linkedIn}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="inline-flex min-h-11 min-w-11 items-center justify-center"
                  >
                    <LinkedIn className="text-muted-foreground hover:text-natural-white size-4 transition-colors duration-250" />
                  </Link>
                </div>
              </div>
              <p className="-tracking-xs max-w-[62ch] text-lg leading-7 font-medium md:leading-8">
                Hi, <span className="underline decoration-primary/80 underline-offset-4">I&apos;m Hassan.</span>{" "}
                {professionalSummary}
              </p>
            </div>

            <div className="grid gap-12 md:grid-cols-2 md:gap-10">
              <div className="space-y-5">
                <h3 className="section-label">Experience</h3>
                <ul className="space-y-8">
                  {experience.map((job) => (
                    <li key={job.company} className="space-y-2.5">
                      <div className="font-display text-base font-semibold tracking-tight md:text-lg">
                        {job.role}
                        <span className="text-natural-white/45 font-medium">
                          {" "}
                          · {job.company}
                        </span>
                      </div>
                      <div className="text-natural-white/55 font-mono text-xs tracking-wide">
                        {job.period} · {job.location}
                      </div>
                      <ul className="text-natural-white/80 list-disc space-y-2 pl-4 text-sm leading-6">
                        {job.highlights.map((item) => (
                          <li key={item} className="max-w-[58ch]">
                            {item}
                          </li>
                        ))}
                      </ul>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="space-y-9">
                <div className="space-y-4">
                  <h3 className="section-label">Skills</h3>
                  <ul className="space-y-5">
                    {skillGroups.map((group, gi) => (
                      <motion.li
                        key={group.label}
                        initial={reduce ? false : { opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-5%" }}
                        transition={{
                          duration: 0.4,
                          delay: reduce ? 0 : gi * 0.06,
                          ease: "easeOut",
                        }}
                      >
                        <div className="text-natural-white/50 mb-2 text-xs font-medium tracking-wide">
                          {group.label}
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {group.items.map((item) => (
                            <span key={item} className="skill-pill">
                              {item}
                            </span>
                          ))}
                        </div>
                      </motion.li>
                    ))}
                  </ul>
                </div>
                <div className="space-y-2">
                  <h3 className="section-label">Education</h3>
                  <p className="text-sm font-medium leading-6">
                    {education.degree} — {education.school}
                  </p>
                  <p className="text-natural-white/55 text-sm">
                    {education.year}
                  </p>
                  <p className="text-natural-white/70 max-w-[42ch] text-sm leading-6">
                    {education.note}
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="section-label">Languages</h3>
                  <p className="text-sm">{languages.join(" · ")} (fluent)</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};
