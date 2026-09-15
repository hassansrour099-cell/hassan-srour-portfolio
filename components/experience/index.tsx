import { Container } from "@/components/container";
import { SectionLabel } from "@/components/section-label";
import { experience, siteCopy } from "@/lib/site-content";

export const ExperienceSection = () => {
  return (
    <section id="experience" className="scroll-mt-24 py-16 md:py-24">
      <Container>
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <SectionLabel index="04" label={siteCopy.experienceHeading} />
            <h2 className="mt-5 font-display text-3xl font-semibold tracking-tight md:text-4xl">
              What I worked on, with stack.
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-muted-foreground md:text-right">
            Roles where I owned UI, data, and deploy work, not only isolated
            tickets.
          </p>
        </div>

        <ol className="mt-14 divide-y divide-line border-y border-line">
          {experience.map((job) => (
            <li
              key={`${job.company}-${job.period}`}
              className="grid gap-6 py-10 md:grid-cols-12 md:gap-8"
            >
              <div className="md:col-span-4">
                <div className="font-dm-mono text-xs tracking-[0.14em] text-muted-foreground uppercase">
                  {job.period}
                </div>
                <h3 className="mt-3 font-display text-xl font-semibold tracking-tight">
                  {job.role}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  {job.company} · {job.location}
                </p>
                <div className="mt-4 flex flex-wrap gap-x-3 gap-y-1">
                  {job.stack.map((tech) => (
                    <span
                      key={tech}
                      className="font-dm-mono text-[10px] tracking-[0.12em] text-muted-foreground/90 uppercase"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <ul className="space-y-3.5 md:col-span-8">
                {job.highlights.map((item) => (
                  <li
                    key={item}
                    className="relative pl-4 text-sm leading-relaxed text-foreground/85 before:absolute before:top-[0.55em] before:left-0 before:size-1.5 before:bg-primary"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
};
