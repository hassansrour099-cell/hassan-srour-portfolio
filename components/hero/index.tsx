import { Container } from "@/components/container";
import { Button } from "@/components/button";
import { SectionLabel } from "@/components/section-label";
import { person, siteCopy } from "@/lib/site-content";

export const Hero = () => {
  return (
    <section className="relative w-full bg-natural-black text-natural-white">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-primary"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-[max(1rem,calc((100%-1120px)/2))] hidden w-px bg-white/8 lg:block"
      />

      <Container className="flex min-h-[88vh] flex-col justify-end pb-16 pt-28 md:min-h-[92vh] md:pb-24 md:pt-36">
        <div className="grid max-w-4xl gap-7 md:gap-9">
          <SectionLabel
            index="01"
            label="Introduction"
            tone="dark"
          />
          <p className="font-dm-mono text-xs font-medium tracking-[0.2em] text-primary uppercase">
            {siteCopy.heroEyebrow}
          </p>
          <h1 className="font-display text-4xl leading-[1.05] font-semibold tracking-tight text-balance sm:text-5xl md:text-6xl lg:text-[4.35rem]">
            {siteCopy.heroHeadline}
          </h1>
          <p className="max-w-xl text-base leading-relaxed text-white/68 md:text-lg">
            {siteCopy.heroSupport}
          </p>
          <div className="flex flex-wrap items-center gap-3 pt-1">
            <Button text={siteCopy.heroCta} href={`mailto:${person.email}`} />
            <Button
              text={siteCopy.heroSecondary}
              href="#work"
              variant="ghost"
              className="border-white/25 text-natural-white hover:border-primary hover:bg-transparent hover:text-primary"
            />
          </div>
        </div>

        <dl className="mt-16 grid grid-cols-2 gap-x-6 gap-y-8 border-t border-white/12 pt-8 sm:grid-cols-4 md:mt-24">
          {[
            { label: "Based in", value: person.location },
            { label: "Focus", value: "Full-stack web" },
            { label: "Status", value: "Open to roles" },
            { label: "Languages", value: "AR · EN · FR" },
          ].map((item) => (
            <div key={item.label} className="min-w-0">
              <dt className="font-dm-mono text-[10px] tracking-[0.18em] text-white/40 uppercase">
                {item.label}
              </dt>
              <dd className="mt-2 truncate text-sm font-medium text-natural-white md:text-[15px]">
                {item.value}
              </dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
};
