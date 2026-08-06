"use client";

import { Container } from "@/components/container";
import { Button } from "@/components/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { person, siteCopy } from "@/lib/site-content";

const stars = [
  { left: "8%", top: "22%", size: 2, duration: "3.2s", delay: "0.2s" },
  { left: "18%", top: "38%", size: 1.5, duration: "4.1s", delay: "1.1s" },
  { left: "28%", top: "18%", size: 1.5, duration: "2.8s", delay: "0.6s" },
  { left: "42%", top: "30%", size: 2, duration: "3.6s", delay: "1.8s" },
  { left: "58%", top: "16%", size: 1.5, duration: "4.4s", delay: "0.4s" },
  { left: "68%", top: "34%", size: 2, duration: "3s", delay: "2.2s" },
  { left: "78%", top: "24%", size: 1.5, duration: "3.8s", delay: "0.9s" },
  { left: "88%", top: "40%", size: 2, duration: "2.6s", delay: "1.5s" },
  { left: "12%", top: "48%", size: 1.5, duration: "4.2s", delay: "2.6s" },
  { left: "92%", top: "52%", size: 1.5, duration: "3.4s", delay: "0.3s" },
];

export const Hero = () => {
  const reduce = useReducedMotion();

  const fade = (delay: number) =>
    reduce
      ? undefined
      : {
          initial: { opacity: 0, y: 14 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.45, delay, ease: "easeOut" as const },
        };

  return (
    <div className="w-full p-2 md:h-screen">
      <div className="text-natural-white relative m-0 flex min-h-[min(92dvh,52rem)] w-full flex-col overflow-hidden rounded-3xl bg-black md:h-full md:min-h-0">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-40"
          style={{
            backgroundImage: `
              linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px),
              linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px)
            `,
            backgroundSize: "72px 72px",
            maskImage:
              "linear-gradient(to bottom, black 0%, black 40%, transparent 75%)",
          }}
        />

        <div
          aria-hidden
          className="hero-glow pointer-events-none absolute bottom-[-10%] left-1/2 h-[55%] w-[90%] max-w-5xl -translate-x-1/2 rounded-[100%] bg-[radial-gradient(ellipse_at_center,rgba(255,204,0,0.35)_0%,rgba(250,154,99,0.12)_35%,transparent_70%)]"
        />
        <div
          aria-hidden
          className="hero-horizon pointer-events-none absolute bottom-[-18%] left-1/2 h-[48%] w-[120%] max-w-6xl rounded-[100%] border border-white/10"
          style={{
            boxShadow:
              "0 0 80px rgba(255,204,0,0.12), inset 0 0 60px rgba(255,255,255,0.04)",
          }}
        />

        <div aria-hidden className="pointer-events-none absolute inset-0">
          {stars.map((star, i) => (
            <span
              key={i}
              className="hero-star absolute rounded-full bg-white"
              style={{
                left: star.left,
                top: star.top,
                width: star.size,
                height: star.size,
                ["--twinkle-duration" as string]: star.duration,
                ["--twinkle-delay" as string]: star.delay,
              }}
            />
          ))}
        </div>

        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black via-black/50 to-transparent"
        />

        <Container className="relative z-10 flex flex-1 flex-col justify-between pb-8 md:h-full md:pb-0">
          <div className="pt-28 sm:pt-32 md:pt-42 lg:pt-75">
            <motion.div {...fade(0)}>
              <Link
                href={person.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-fit max-w-full rounded-full bg-neutral-900/90 p-1 shadow-lg shadow-black ring-1 ring-white/15 backdrop-blur-sm transition-colors duration-250 hover:bg-neutral-800 hover:ring-white/25"
              >
                <div className="flex min-w-0 flex-wrap items-center gap-1 sm:flex-nowrap sm:gap-2">
                  <div className="shrink-0 rounded-full bg-primary px-2.5 py-1 text-[10px] font-semibold tracking-wide text-black sm:text-xs">
                    {person.title}
                  </div>
                  <div className="text-natural-white min-w-0 rounded-full pr-2.5 text-[10px] leading-snug font-medium sm:text-xs">
                    {siteCopy.heroBadge}
                  </div>
                </div>
              </Link>
            </motion.div>

            <div className="mt-6 flex flex-col items-start gap-6 md:mt-10 lg:flex-row lg:items-end lg:gap-12">
              <motion.h1
                className="font-display text-natural-white -tracking-xl max-w-4xl text-4xl font-semibold text-balance sm:text-5xl md:text-6xl lg:text-[5.25rem] lg:leading-[1.02]"
                {...fade(0.1)}
              >
                {siteCopy.heroHeadline}
              </motion.h1>
              <motion.div
                className="relative z-20 w-full max-w-md lg:pb-1"
                {...fade(0.22)}
              >
                <h2 className="max-w-[38ch] text-sm leading-relaxed font-medium text-balance text-neutral-300 sm:text-base lg:text-lg lg:leading-7">
                  {siteCopy.tagline}
                </h2>
                <div className="mt-6 flex flex-wrap items-center gap-3 md:mt-8">
                  <Button text="Email Hassan" />
                  <Button
                    text="Download CV"
                    href="/Hassan_Srour_CV.pdf"
                    download="Hassan_Srour_CV.pdf"
                    containerClassName="border-white/15 bg-transparent hover:bg-white/5"
                  />
                </div>
              </motion.div>
            </div>
          </div>

          <motion.div
            className="pointer-events-none relative z-0 mt-10 h-14 shrink-0 overflow-hidden sm:mt-0 sm:h-40 md:h-72"
            aria-hidden
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: reduce ? 0 : 0.4 }}
          >
            <p
              className={cn(
                "from-natural-white/15 -tracking-xl to-heading/0 bg-linear-to-r bg-clip-text text-transparent",
                "font-display absolute top-0 left-1/2 -translate-x-1/2 text-center text-[72px] leading-none font-semibold sm:text-[6rem] md:top-6 md:text-[160px] lg:-top-10 lg:text-[300px]",
              )}
            >
              {person.name.split(" ")[0]}
            </p>
          </motion.div>
        </Container>
      </div>
    </div>
  );
};
