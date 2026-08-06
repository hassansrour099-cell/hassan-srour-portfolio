"use client";

import { cn } from "@/lib/utils";
import { person } from "@/lib/site-content";

type ButtonProps = {
  text?: string;
  containerClassName?: string;
  href?: string;
  download?: boolean | string;
  external?: boolean;
  showAvatar?: boolean;
  avatar?: string;
};

export const Button = ({
  text = "Email Hassan",
  containerClassName,
  href,
  download,
  external,
}: ButtonProps) => {
  const resolvedHref =
    href ??
    `mailto:${person.email}?subject=${encodeURIComponent("Portfolio inquiry")}`;

  return (
    <a
      href={resolvedHref}
      download={download || undefined}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className={cn(
        "group relative inline-flex h-11 w-fit max-w-full shrink-0 cursor-pointer items-center overflow-hidden rounded-lg border border-white/20 bg-black pr-4 pl-11 tracking-tight transition-colors duration-250 hover:border-white/35 hover:bg-neutral-950",
        containerClassName,
      )}
    >
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 origin-left scale-x-0 bg-white/10 transition-transform duration-300 ease-out group-hover:scale-x-100 group-focus-visible:scale-x-100"
      />

      <span
        aria-hidden
        className="bg-primary absolute top-1/2 left-1 z-20 flex size-8 shrink-0 -translate-y-1/2 items-center justify-center rounded-[5px] transition-transform duration-300 ease-out group-hover:scale-105 group-focus-visible:scale-105"
        style={{
          backgroundImage:
            "radial-gradient(circle at 30% 30%, rgba(255,255,255,0.35) 0 1px, transparent 1.5px), radial-gradient(circle at 70% 60%, rgba(0,0,0,0.2) 0 1px, transparent 1.5px)",
          backgroundSize: "6px 6px",
        }}
      >
        <span className="block size-1.5 rounded-[1px] bg-black/30" />
      </span>

      <span className="relative z-10 inline-block whitespace-nowrap leading-none text-white">
        {text}
      </span>
    </a>
  );
};
