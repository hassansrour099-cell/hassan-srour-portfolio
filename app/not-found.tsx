import Link from "next/link";
import { Container } from "@/components/container";
import { Button } from "@/components/button";

export default function NotFound() {
  return (
    <div className="border-b border-line bg-natural-black text-natural-white">
      <div aria-hidden className="h-px w-full bg-primary" />
      <Container className="flex min-h-[70vh] flex-col justify-center py-24">
        <p className="font-dm-mono text-xs tracking-[0.2em] text-primary uppercase">
          404
        </p>
        <h1 className="mt-4 max-w-lg font-display text-4xl font-semibold tracking-tight md:text-5xl">
          This page is not here.
        </h1>
        <p className="mt-5 max-w-md text-sm leading-relaxed text-white/60 md:text-base">
          The link may be outdated, or the project slug might be wrong. Head
          back to work or home.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button text="Selected work" href="/work" />
          <Button
            text="Home"
            href="/"
            variant="ghost"
            className="border-white/25 text-natural-white hover:border-primary hover:text-primary"
          />
        </div>
        <p className="mt-12 font-dm-mono text-xs tracking-[0.14em] text-white/35 uppercase">
          <Link href="/" className="transition-colors hover:text-primary">
            hassansrour.me
          </Link>
        </p>
      </Container>
    </div>
  );
}
