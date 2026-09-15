import { Container } from "@/components/container";
import { SectionLabel } from "@/components/section-label";
import { siteCopy, skillGroups } from "@/lib/site-content";

export const SkillsStrip = () => {
  return (
    <section className="border-b border-line bg-background py-14 md:py-20">
      <Container>
        <SectionLabel index="02" label={siteCopy.skillsHeading} />
        <div className="mt-10 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((group) => (
            <div key={group.label}>
              <h2 className="font-display text-lg font-semibold tracking-tight">
                {group.label}
              </h2>
              <ul className="mt-4 space-y-2.5">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="border-l-2 border-primary/80 pl-3 text-sm text-muted-foreground"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
