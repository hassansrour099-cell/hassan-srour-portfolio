"use client";

import Image from "next/image";
import { Container } from "@/components/container";
import Link from "next/link";
import { motion } from "motion/react";
import { LinkedIn } from "@/components/icons/general";
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

      <Container className="relative z-20 flex w-full flex-col gap-20 pt-20 pb-30">
        <motion.div
          className="-tracking-xl text-6xl leading-18 font-medium"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.55, ease: "easeOut" }}
        >
          {siteCopy.aboutHeading}
        </motion.div>
        <div className="grid w-full grid-cols-1 justify-between gap-16 lg:grid-cols-5">
          <motion.div
            className="relative overflow-hidden rounded-lg lg:col-span-2"
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <Image
              src={"/assets/workers.webp"}
              alt="Hassan Srour"
              width={1200}
              height={1200}
              className="w-full rounded-lg transition-transform duration-700 ease-out hover:scale-[1.03]"
            />
          </motion.div>
          <motion.div
            className="flex h-full w-full flex-col justify-between gap-12 lg:col-span-3"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          >
            <div className="flex flex-col gap-6">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="text-natural-white/70 text-sm font-medium">
                  {person.location} · {person.email} · {person.phone}
                </div>
                <Link
                  href={person.linkedIn}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LinkedIn className="text-muted-foreground hover:text-natural-white size-4 transition-colors" />
                </Link>
              </div>
              <span className="-tracking-xs text-lg leading-6.5 font-medium">
                Hi, <span className="underline">I&apos;m Hassan.</span>{" "}
                {professionalSummary}
              </span>
            </div>

            <div className="grid gap-10 md:grid-cols-2">
              <div className="space-y-4">
                <h3 className="text-natural-white/50 text-sm font-medium tracking-wide uppercase">
                  Experience
                </h3>
                <ul className="space-y-6">
                  {experience.map((job) => (
                    <li key={job.company} className="space-y-2">
                      <div className="font-medium">
                        {job.role} · {job.company}
                      </div>
                      <div className="text-natural-white/60 text-sm">
                        {job.period} · {job.location}
                      </div>
                      <ul className="text-natural-white/80 list-disc space-y-1 pl-4 text-sm">
                        {job.highlights.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="space-y-8">
                <div className="space-y-3">
                  <h3 className="text-natural-white/50 text-sm font-medium tracking-wide uppercase">
                    Skills
                  </h3>
                  <ul className="space-y-3 text-sm">
                    {skillGroups.map((group) => (
                      <li key={group.label}>
                        <span className="text-natural-white/60">
                          {group.label}:{" "}
                        </span>
                        {group.items.join(", ")}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="space-y-2">
                  <h3 className="text-natural-white/50 text-sm font-medium tracking-wide uppercase">
                    Education
                  </h3>
                  <p className="text-sm font-medium">
                    {education.degree} — {education.school}
                  </p>
                  <p className="text-natural-white/60 text-sm">
                    {education.year}
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-natural-white/50 text-sm font-medium tracking-wide uppercase">
                    Languages
                  </h3>
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
