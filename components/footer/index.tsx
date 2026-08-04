import Link from "next/link";

import { cn } from "@/lib/utils";
import { Container } from "@/components/container";
import {
  ArrowRightLongerIcon,
  CopyRightIcon,
  LinkedIn,
} from "@/components/icons/general";
import { Button } from "@/components/button";
import { Logo } from "@/components/logo";

import { person, siteCopy } from "@/lib/site-content";

const data = {
  Navigate: [
    { label: "Home", href: "/" },
    { label: "Work", href: "/work" },
    { label: "About", href: "/#about" },
  ],
  Contact: [
    { label: "Email", href: `mailto:${person.email}` },
    { label: "LinkedIn", href: person.linkedIn },
    { label: "Phone", href: `tel:${person.phone.replace(/\s/g, "")}` },
  ],
};

export const Footer = () => {
  return (
    <footer className="bg-natural-black relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: `
            radial-gradient(ellipse 55% 45% at 55% 10%, rgba(39,37,31,0.95), transparent 60%),
            radial-gradient(ellipse 40% 50% at 15% 70%, rgba(255,255,255,0.06), transparent 55%)
          `,
        }}
      />
      <Container className="flex flex-col gap-30 pt-20 pb-10">
        <div className="bg-natural-white/5 shadow-card-xl relative h-112 overflow-hidden rounded-4xl">
          <div
            className={cn(
              "-tracking-xl absolute top-51 -left-3.25 justify-start text-[132px] leading-75 font-medium opacity-25 md:text-[240px] lg:text-[300px]",
              "bg-[linear-gradient(90deg,#FFFFFF_0%,rgba(52,52,52,0)_100%)] bg-clip-text text-transparent",
            )}
          >
            {person.name.split(" ")[0]}
          </div>
          <div className="absolute inset-0 flex h-fit w-full flex-col items-start justify-between px-6 pt-10 md:flex-row md:px-15 md:pt-16">
            <div className="text-natural-white -tracking-lg w-full max-w-135 justify-center text-[32px] font-medium md:text-5xl md:leading-14 lg:text-[56px] lg:leading-16">
              {siteCopy.footerCta}
            </div>
            <div className="inline-flex w-16 flex-col items-start justify-start gap-2.5 py-6">
              <Link
                href={`mailto:${person.email}`}
                className="bg-natural-white shadow-card-md inline-flex items-center justify-center gap-2.5 self-stretch rounded-xl px-6 py-2"
              >
                <ArrowRightLongerIcon className="scale-150" />
              </Link>
            </div>
          </div>
        </div>
        <div className="relative z-10 flex flex-col items-center justify-center gap-18">
          <div className="grid w-full grid-cols-1 gap-15 lg:grid-cols-2 lg:gap-0">
            <div className="flex flex-col gap-4">
              <Logo className="size-8" />
              <span className="text-muted-foreground text-sm leading-5">
                {siteCopy.tagline}
              </span>
              <div>
                <Button text="Get in touch" />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-10 md:grid-cols-4 md:gap-0">
              {Object.entries(data).map(([key, value]) => (
                <div key={key} className="flex flex-col gap-4">
                  <h3 className="text-muted-foreground -tracking-sm text-xs leading-5 font-medium">
                    {key}
                  </h3>
                  <ul className="flex flex-col gap-4">
                    {value.map((item, index) => (
                      <li key={index}>
                        <Link
                          href={item.href}
                          className="text-natural-white -tracking-sm text-sm leading-5 font-medium hover:underline"
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          <div className="flex w-full flex-col justify-between gap-6 md:flex-row md:items-center md:gap-0">
            <div>
              <span className="flex items-center gap-1">
                <CopyRightIcon />
                <span className="text-muted-foreground text-xs leading-5 font-medium">
                  {new Date().getFullYear()} {person.name}
                </span>
              </span>
            </div>
            <div className="flex items-center gap-5">
              <Link href={person.linkedIn} target="_blank" rel="noopener noreferrer">
                <LinkedIn className="text-muted-foreground hover:text-natural-white size-4 transition-colors" />
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};

