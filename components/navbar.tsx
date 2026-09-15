"use client";

import { cn } from "@/lib/utils";
import { useState } from "react";
import { IconMenu2, IconX } from "@tabler/icons-react";
import { Logo } from "@/components/logo";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { person } from "@/lib/site-content";
import { Button } from "@/components/button";

const navItems = [
  { label: "Work", href: "/work", match: "/work" },
  { label: "Experience", href: "/#experience" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/#contact" },
];

export const Navbar = ({ className }: { className?: string }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const reduceMotion = useReducedMotion();
  const isHome = pathname === "/";
  const isProject = pathname.startsWith("/work/");

  return (
    <nav
      className={cn(
        "relative z-50 w-full",
        isHome
          ? "absolute inset-x-0 top-0 border-transparent bg-transparent"
          : "sticky top-0 border-b border-line/80 bg-background/95 backdrop-blur-sm",
        className,
      )}
    >
      <div className="mx-auto flex h-16 max-w-container items-center justify-between px-4 sm:px-6 lg:px-8">
        <Logo dark={isHome || isProject} />

        <div className="hidden items-center gap-7 md:flex">
          {navItems.map((item) => {
            const active =
              item.match != null && pathname.startsWith(item.match);
            return (
              <Link
                key={item.label}
                href={item.href}
                className={cn(
                  "relative font-dm-mono text-xs font-medium tracking-[0.16em] uppercase transition-colors",
                  isHome || isProject
                    ? active
                      ? "text-primary"
                      : "text-natural-white/65 hover:text-natural-white"
                    : active
                      ? "text-natural-black"
                      : "text-muted-foreground hover:text-natural-black",
                )}
              >
                {item.label}
                {active && (
                  <span
                    aria-hidden
                    className="absolute -bottom-1 left-0 h-px w-full bg-primary"
                  />
                )}
              </Link>
            );
          })}
          <Button
            text="Download CV"
            href={person.cvPath}
            download="Hassan_Srour_CV.pdf"
            className="min-h-9 px-4 text-xs tracking-[0.08em] uppercase"
          />
          <Button
            text="Email"
            href={`mailto:${person.email}`}
            className="min-h-9 px-4 text-xs tracking-[0.08em] uppercase"
          />
        </div>

        <button
          type="button"
          onClick={() => setIsMenuOpen(true)}
          className={cn(
            "p-2 md:hidden",
            isHome || isProject ? "text-natural-white" : "text-natural-black",
          )}
          aria-label="Open menu"
        >
          <IconMenu2 className="size-6" />
        </button>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={reduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={reduceMotion ? undefined : { opacity: 0 }}
            className="fixed inset-0 z-50 flex flex-col bg-natural-black md:hidden"
          >
            <div className="flex h-16 items-center justify-between px-4">
              <Logo dark />
              <button
                type="button"
                onClick={() => setIsMenuOpen(false)}
                className="p-2 text-natural-white"
                aria-label="Close menu"
              >
                <IconX className="size-6" />
              </button>
            </div>
            <div className="flex flex-1 flex-col gap-1 px-6 pt-6">
              {navItems.map((item, index) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="flex items-baseline gap-4 border-b border-white/10 py-4"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span className="font-dm-mono text-xs text-primary">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="font-display text-3xl font-semibold text-natural-white">
                    {item.label}
                  </span>
                </Link>
              ))}
              <div className="flex flex-col gap-3 pt-10">
                <Button
                  text="Download CV"
                  href={person.cvPath}
                  download="Hassan_Srour_CV.pdf"
                  className="w-full"
                />
                <Button text="Email Hassan" className="w-full" />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
