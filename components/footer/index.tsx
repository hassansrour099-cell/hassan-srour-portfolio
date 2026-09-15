import Link from "next/link";
import { Container } from "@/components/container";
import { SectionLabel } from "@/components/section-label";
import { CopyRightIcon, LinkedIn } from "@/components/icons/general";
import { Button } from "@/components/button";
import { Logo } from "@/components/logo";
import { person, siteCopy } from "@/lib/site-content";

export const Footer = () => {
  return (
    <footer id="contact" className="scroll-mt-24 bg-natural-black text-natural-white">
      <div aria-hidden className="h-px w-full bg-primary" />
      <Container className="py-16 md:py-20">
        <SectionLabel index="07" label="Contact" tone="dark" />
        <div className="mt-8 grid gap-10 border-b border-white/12 pb-14 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-7">
            <h2 className="max-w-xl font-display text-3xl font-semibold tracking-tight text-balance md:text-4xl">
              {siteCopy.footerCta}
            </h2>
            <p className="mt-4 max-w-md text-sm text-white/55">
              {siteCopy.footerSupport}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button text="Email Hassan" variant="primary" />
              <Button
                text="LinkedIn"
                href={person.linkedIn}
                variant="ghost"
                className="border-white/20 text-natural-white hover:border-primary hover:text-primary"
              />
            </div>
            <dl className="mt-10 grid gap-4 sm:grid-cols-2">
              <div>
                <dt className="font-dm-mono text-[10px] tracking-[0.16em] text-white/35 uppercase">
                  Email
                </dt>
                <dd className="mt-1 text-sm">
                  <a
                    href={`mailto:${person.email}`}
                    className="link-underline text-white/80"
                  >
                    {person.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="font-dm-mono text-[10px] tracking-[0.16em] text-white/35 uppercase">
                  Phone
                </dt>
                <dd className="mt-1 text-sm text-white/80">
                  <a href={`tel:${person.phone.replace(/\s/g, "")}`}>
                    {person.phone}
                  </a>
                </dd>
              </div>
            </dl>
          </div>
          <div className="flex flex-col justify-between gap-8 md:col-span-5 md:items-end md:text-right">
            <Logo dark />
            <nav className="flex flex-wrap gap-x-6 gap-y-2 md:justify-end">
              {[
                { label: "Work", href: "/work" },
                { label: "Experience", href: "/#experience" },
                { label: "About", href: "/#about" },
              ].map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="font-dm-mono text-xs tracking-[0.14em] text-white/50 uppercase transition-colors hover:text-primary"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        <div className="flex flex-col justify-between gap-4 pt-8 sm:flex-row sm:items-center">
          <span className="flex items-center gap-2 text-xs text-white/35">
            <CopyRightIcon />
            {new Date().getFullYear()} {person.name}
          </span>
          <Link
            href={person.linkedIn}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-white/35 transition-colors hover:text-primary"
            aria-label="LinkedIn profile"
          >
            <LinkedIn className="size-4" />
          </Link>
        </div>
      </Container>
    </footer>
  );
};
