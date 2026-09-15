import { cn } from "@/lib/utils";

export function SectionLabel({
  index,
  label,
  className,
  tone = "light",
}: {
  index: string;
  label: string;
  className?: string;
  tone?: "light" | "dark";
}) {
  return (
    <div
      className={cn(
        "flex items-center gap-3 font-dm-mono text-[11px] font-medium tracking-[0.18em] uppercase",
        tone === "light" ? "text-muted-foreground" : "text-white/50",
        className,
      )}
    >
      <span
        className={cn(
          "inline-flex size-1.5 shrink-0",
          tone === "light" ? "bg-primary" : "bg-primary",
        )}
        aria-hidden
      />
      <span className={tone === "light" ? "text-natural-black" : "text-primary"}>
        {index}
      </span>
      <span
        className={cn(
          "h-px w-6",
          tone === "light" ? "bg-line" : "bg-white/20",
        )}
        aria-hidden
      />
      <span>{label}</span>
    </div>
  );
}
