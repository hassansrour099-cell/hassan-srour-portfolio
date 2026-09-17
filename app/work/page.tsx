import { getSEO } from "@/lib/seo";
import { Container } from "@/components/container";
import { SectionLabel } from "@/components/section-label";
import { Projects } from "@/components/projects";

export const metadata = getSEO({
  title: "Work",
  description:
    "Explore Hassan Srour's software engineering work across production ecommerce platforms, Medusa.js, Next.js, ERP systems, APIs, and AI-enabled applications.",
  path: "/work",
});

const WorkPage = () => {
  return (
    <div className="max-w-screen overflow-x-hidden">
      <Container className="border-b border-line pt-20 pb-12 md:pt-28 md:pb-16">
        <SectionLabel index="W" label="Archive" />
        <h1 className="mt-5 font-display text-4xl font-semibold tracking-tight md:text-5xl">
          Selected work
        </h1>
        <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground md:text-base">
          Case studies from Harmonically Labs and Brain Solutions, plus live
          Medusa.js storefronts. Open any row for context, role, architecture,
          decisions, and result.
        </p>
      </Container>
      <Projects showHeader={false} />
    </div>
  );
};

export default WorkPage;
