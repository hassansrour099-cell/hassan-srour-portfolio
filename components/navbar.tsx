"use client";

import { cn } from "@/lib/utils";

import { Button } from "@/components/button";
import { useState } from "react";
import { IconMenu2, IconX } from "@tabler/icons-react";
import { Logo } from "@/components/logo";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";

import { person } from "@/lib/site-content";

const navItems = [
  { label: "Work", href: "/work" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: `mailto:${person.email}` },
];

export const Navbar = ({ className }: { className?: string | undefined }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const isDarkMode = pathname === "/";

  return (
    <nav
      className={cn(
        isDarkMode
          ? "absolute inset-x-0 top-4 z-50 mx-auto w-full lg:top-4 lg:max-w-[calc(100%-4rem)]"
          : "mt-4",
        className,
      )}
    >
      <div className="max-w-container mx-auto px-4 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex shrink-0 items-center gap-2 lg:min-w-45">
            <Logo className="size-8" />
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className={cn(
                    "px-3 py-2 text-sm font-medium transition-colors duration-200",
                    isDarkMode
                      ? "text-natural-white/80 hover:text-natural-white"
                      : "text-natural-black/80 hover:text-natural-black",
                  )}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Desktop Navigation */}

          {/* Desktop CTA Button */}
          <div className="hidden md:block">
            <Button />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-white/80 hover:text-white"
            >
              {isMenuOpen ? (
                <IconX
                  className={cn(
                    "size-6",
                    isDarkMode ? "text-natural-white" : "text-natural-black",
                  )}
                />
              ) : (
                <IconMenu2
                  className={cn(
                    "size-6",
                    isDarkMode ? "text-natural-white" : "text-natural-black",
                  )}
                />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ clipPath: "circle(0% at calc(100% - 2.5rem) 2.5rem)" }}
              animate={{ clipPath: "circle(150% at calc(100% - 2.5rem) 2.5rem)" }}
              exit={{ clipPath: "circle(0% at calc(100% - 2.5rem) 2.5rem)" }}
              transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
              className="fixed inset-0 z-50 flex flex-col bg-neutral-900 md:hidden"
            >
              <div className="flex h-16 items-center justify-between px-4">
                <Logo className="size-8" />
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="p-2 text-natural-white/80 hover:text-natural-white"
                  aria-label="Close menu"
                >
                  <IconX className="size-6 text-natural-white" />
                </button>
              </div>
              <div className="flex flex-1 flex-col gap-1 px-4 pt-4">
                {navItems.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="block px-3 py-3 text-lg font-medium text-white/80 transition-colors duration-200 hover:text-white"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
                <div className="px-3 pt-4">
                  <Button />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};
