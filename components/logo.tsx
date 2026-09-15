import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { person } from "@/lib/site-content";

export const Logo = ({
  className,
  showWordmark = true,
  dark = false,
}: {
  className?: string;
  showWordmark?: boolean;
  dark?: boolean;
}) => {
  return (
    <Link
      href="/"
      className={cn(
        "group inline-flex items-center gap-3 focus-visible:outline-offset-4",
        className,
      )}
      aria-label={`${person.name}, home`}
    >
      <Image
        src={dark ? "/brand/mark-on-dark.webp" : "/brand/mark.webp"}
        alt=""
        width={36}
        height={36}
        className="size-9 object-contain"
        priority
      />
      {showWordmark && (
        <span className="hidden min-[420px]:flex flex-col leading-none">
          <span
            className={cn(
              "font-display text-[13px] font-bold tracking-[0.12em] uppercase",
              dark ? "text-natural-white" : "text-natural-black",
            )}
          >
            {person.name}
          </span>
          <span className="mt-1 font-dm-mono text-[10px] font-medium tracking-[0.22em] text-primary uppercase">
            {person.title}
          </span>
        </span>
      )}
    </Link>
  );
};
