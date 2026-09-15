import { Container } from "@/components/container";
import { SectionLabel } from "@/components/section-label";
import { principles, siteCopy } from "@/lib/site-content";

export const Principles = () => {
  return (
    <section className="border-b border-line bg-natural-white py-16 md:py-20">
      <Container>
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-4">
            <SectionLabel index="03" label={siteCopy.principlesHeading} />
            <h2 className="mt-5 max-w-sm font-display text-3xl font-semibold tracking-tight md:text-4xl">
              Habits from shipping, not slogans.
            </h2>
          </div>
          <ol className="divide-y divide-line border-y border-line lg:col-span-8">
            {principles.map((item, index) => (
              <li
                key={item.title}
                className="grid gap-3 py-7 sm:grid-cols-[3rem_1fr] sm:gap-6"
              >
                <span className="font-dm-mono text-xs tracking-[0.16em] text-primary">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-display text-lg font-semibold tracking-tight md:text-xl">
                    {item.title}
                  </h3>
                  <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted-foreground md:text-[15px]">
                    {item.body}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
};
