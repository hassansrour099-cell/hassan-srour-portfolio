"use client";

import { Container } from "@/components/container";
import { Button } from "@/components/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { motion } from "motion/react";
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
  return (
    <div className="h-[60vh] w-full p-2 md:h-screen">
      <div className="text-natural-white relative m-0 h-full w-full overflow-hidden rounded-3xl bg-black">
        {/* Grid atmosphere */}
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

        {/* Warm horizon glow — CSS only, GPU-friendly */}
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

        {/* Twinkling stars */}
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

        <Container className="relative z-10 flex h-full flex-col justify-between">
          <div className="pt-32 md:pt-42 lg:pt-75">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <Link
                href={person.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-fit rounded-full bg-neutral-900/90 p-1 shadow-lg shadow-black ring-1 ring-white/10 backdrop-blur-sm transition-colors hover:bg-neutral-800"
              >
                <div className="flex items-center gap-1 sm:gap-2">
                  <div className="rounded-full bg-neutral-950 px-2 py-1 text-[10px] sm:text-xs">
                    {person.title}
                  </div>
                  <div className="text-natural-white rounded-full pr-2 text-[10px] sm:text-xs">
                    {siteCopy.heroBadge}
                  </div>
                </div>
              </Link>
            </motion.div>

            <div className="mt-6 flex flex-col items-start gap-6 md:mt-10 lg:flex-row lg:gap-10">
              <motion.h1
                className="text-natural-white -tracking-xl text-3xl font-semibold text-balance sm:text-4xl md:text-5xl lg:text-7xl"
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.12, ease: "easeOut" }}
              >
                {siteCopy.heroHeadline}
              </motion.h1>
              <motion.div
                className="lg:max-w-md"
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.28, ease: "easeOut" }}
              >
                <h2 className="text-sm font-medium text-balance text-neutral-300 sm:text-base lg:text-lg">
                  {siteCopy.tagline}
                </h2>
                <Button
                  containerClassName="mt-6 md:mt-8"
                  text="Email Hassan"
                />
              </motion.div>
            </div>
          </div>

          <motion.div
            className="relative h-18 sm:h-48 md:h-72"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.45 }}
          >
            <p
              className={cn(
                "from-natural-white/15 -tracking-xl to-heading/0 bg-linear-to-r bg-clip-text text-transparent",
                "absolute -top-10 left-1/2 -translate-x-1/2 text-center text-[100px] font-semibold sm:text-[6rem] md:-top-6 md:mt-10 md:text-[160px] lg:-top-18 lg:text-[300px]",
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
