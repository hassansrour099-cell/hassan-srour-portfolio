import { cn } from "@/lib/utils";

/**
 * Geometric HS mark: angular black H interlocking with yellow S.
 */
export function HsMark({
  className,
  title = "Hassan Srour",
}: {
  className?: string;
  title?: string;
}) {
  return (
    <svg
      viewBox="0 0 72 72"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("shrink-0 text-natural-black", className)}
      role="img"
      aria-label={title}
    >
      <title>{title}</title>
      <path
        fill="currentColor"
        d="M4 16L16 6v24l12-8V6l12 10v46L28 66V42l-12 8v16L4 62V16z"
      />
      <path
        fill="#ffcc00"
        d="M36 16l12-10 20 10v16L52 38l16 6v18L48 72 36 62V48l16-6-16-6V16z"
      />
    </svg>
  );
}
