"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { person } from "@/lib/site-content";

export const Button = ({
  text = "Email Hassan",
  containerClassName,
}: {
  text?: string;
  showAvatar?: boolean;
  containerClassName?: string;
  avatar?: string;
}) => {
  const ref = useRef<HTMLAnchorElement>(null);
  const [slidePx, setSlidePx] = useState(0);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const measure = () => {
      // left inset (4px) + chip (32px) + right inset (4px) = 40
      setSlidePx(Math.max(0, el.offsetWidth - 40));
    };

    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(el);
    return () => observer.disconnect();
  }, [text]);

  return (
    <a
      ref={ref}
      href={`mailto:${person.email}?subject=${encodeURIComponent("Portfolio inquiry")}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocus={() => setHovered(true)}
      onBlur={() => setHovered(false)}
      className={cn(
        "group relative flex w-fit cursor-pointer items-center overflow-hidden rounded-lg border border-white/20 bg-black py-2 pr-4 pl-11 tracking-tight",
        containerClassName,
      )}
    >
      {/* Soft wipe — scaleX is cheap */}
      <span
        aria-hidden
        className={cn(
          "pointer-events-none absolute inset-0 origin-left bg-white/15 transition-transform duration-300 ease-out will-change-transform",
          hovered ? "scale-x-100" : "scale-x-0",
        )}
      />

      {/* Yellow chip — transform only (translate + rotate) */}
      <span
        aria-hidden
        className="bg-primary absolute top-1/2 left-1 z-20 flex size-8 items-center justify-center rounded-[5px] will-change-transform"
        style={{
          transform: hovered
            ? `translate3d(${slidePx}px, -50%, 0) rotate(180deg)`
            : "translate3d(0, -50%, 0) rotate(0deg)",
          transition: "transform 300ms ease-out",
          backgroundImage:
            "radial-gradient(circle at 30% 30%, rgba(255,255,255,0.35) 0 1px, transparent 1.5px), radial-gradient(circle at 70% 60%, rgba(0,0,0,0.2) 0 1px, transparent 1.5px)",
          backgroundSize: "6px 6px",
        }}
      >
        <span className="block size-1.5 rounded-[1px] bg-black/30" />
      </span>

      <span
        className="relative z-10 inline-block text-white will-change-transform"
        style={{
          transform: hovered ? "translate3d(-1.5rem, 0, 0)" : "translate3d(0, 0, 0)",
          transition: "transform 300ms ease-out",
        }}
      >
        {text}
      </span>
    </a>
  );
};
