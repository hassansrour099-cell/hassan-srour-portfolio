import { cn } from "@/lib/utils";
import { person } from "@/lib/site-content";

type ButtonProps = {
  text?: string;
  href?: string;
  variant?: "primary" | "ghost" | "dark";
  className?: string;
  external?: boolean;
  download?: boolean | string;
  /** Ignored: kept so leftover template call sites still typecheck */
  showAvatar?: boolean;
  containerClassName?: string;
  avatar?: string;
};

export const Button = ({
  text = "Email me",
  href = `mailto:${person.email}?subject=${encodeURIComponent("Portfolio inquiry")}`,
  variant = "primary",
  className,
  containerClassName,
  external,
  download,
}: ButtonProps) => {
  const isExternal = external ?? href.startsWith("http");

  return (
    <a
      href={href}
      download={download || undefined}
      {...(isExternal
        ? { target: "_blank", rel: "noopener noreferrer" }
        : {})}
      className={cn(
        "inline-flex min-h-11 items-center justify-center px-5 text-sm font-semibold tracking-tight transition-colors",
        variant === "primary" &&
          "bg-primary text-natural-black hover:bg-[#e6b800]",
        variant === "ghost" &&
          "border border-line bg-transparent text-natural-black hover:border-natural-black",
        variant === "dark" &&
          "bg-natural-white text-natural-black hover:bg-primary",
        containerClassName,
        className,
      )}
    >
      {text}
    </a>
  );
};
