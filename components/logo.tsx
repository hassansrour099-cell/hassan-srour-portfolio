import Link from "next/link";

import { cn } from "@/lib/utils";
import { person } from "@/lib/site-content";

export const Logo = ({
  className,
  light = false,
}: {
  className?: string;
  /** Use light text (for dark backgrounds). */
  light?: boolean;
}) => {
  return (
    <Link
      href="/"
      aria-label={`${person.name} — home`}
      className={cn(
        "group inline-flex items-center gap-2.5 font-medium tracking-tight",
        className,
      )}
    >
      <span
        className={cn(
          "bg-primary text-natural-black inline-flex size-8 shrink-0 items-center justify-center rounded-lg text-xs font-bold",
          "transition-transform duration-200 group-hover:scale-105",
        )}
      >
        HS
      </span>
      <span
        className={cn(
          "hidden text-sm sm:inline",
          light ? "text-natural-white" : "text-natural-black",
        )}
      >
        {person.name}
      </span>
    </Link>
  );
};
