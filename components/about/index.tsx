import Link from "next/link";
import { Container } from "@/components/container";
import { SectionLabel } from "@/components/section-label";
import { LinkedIn } from "@/components/icons/general";
import {
  aboutExtended,
  education,
  languages,
  person,
  professionalSummary,
  siteCopy,
} from "@/lib/site-content";

export const AboutSection = () => {
  return (
    <section
      id="about"
      className="scroll-mt-24 border-t border-line bg-background py-16 md:py-24"
    >
      <Container>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <SectionLabel index="06" label={siteCopy.aboutHeading} />
            <h2 className="mt-5 font-display text-3xl font-semibold tracking-tight md:text-4xl">
              Background and current focus.
            </h2>
            <div className="mt-8 space-y-2 text-sm text-muted-foreground">
              <p>{person.location}</p>
              <p>
                <a
                  href={`mailto:${person.email}`}
                  className="link-underline text-natural-black"
                >
                  {person.email}
                </a>
              </p>
              <p>
                <a
                  href={`tel:${person.phone.replace(/\s/g, "")}`}
                  className="link-underline"
                >
                  {person.phone}
                </a>
              </p>
              <p className="pt-3">
                <Link
                  href={person.linkedIn}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-natural-black transition-colors hover:text-muted-foreground"
                >
                  <LinkedIn className="size-4" />
                  <span className="font-dm-mono text-xs tracking-[0.12em] uppercase">
                    LinkedIn
                  </span>
                </Link>
              </p>
            </div>
          </div>

          <div className="space-y-8 lg:col-span-8">
            <p className="max-w-2xl text-lg leading-relaxed text-foreground/90 md:text-xl">
              Hi, I&apos;m Hassan. {professionalSummary}
            </p>
            {aboutExtended.map((paragraph) => (
              <p
                key={paragraph}
                className="max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-[15px]"
              >
                {paragraph}
              </p>
            ))}

            <div className="grid gap-8 border-t border-line pt-10 sm:grid-cols-2">
              <div>
                <h3 className="font-dm-mono text-xs tracking-[0.16em] text-muted-foreground uppercase">
                  Education
                </h3>
                <p className="mt-3 font-display text-lg font-semibold tracking-tight">
                  {education.degree}
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  {education.school}
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  {education.year}
                </p>
              </div>
              <div>
                <h3 className="font-dm-mono text-xs tracking-[0.16em] text-muted-foreground uppercase">
                  Languages
                </h3>
                <p className="mt-3 text-sm leading-relaxed">
                  Fluent in {languages.join(", ")}.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
