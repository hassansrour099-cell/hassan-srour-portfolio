import { getSEO } from "@/lib/seo";
import { Container } from "@/components/container";
import { AboutSection } from "@/components/about";
import { PageHeader } from "@/components/page-header";
import { Projects } from "@/components/projects";

export const metadata = getSEO({
  title: "Work",
  description:
    "Selected projects — NGO platforms, ERPNext, and production e-commerce built with Next.js, Directus, and full-stack JavaScript.",
  path: "/work",
});

const WorkPage = () => {
  return (
    <div className="max-w-screen overflow-x-hidden">
      <Container className="relative h-38 md:h-70">
        <PageHeader className="top-10 md:top-16 lg:top-18">Work</PageHeader>
      </Container>
      <div className="**:data-[slot=container]:pt-0">
        <Projects disabelHeader />
      </div>
      <AboutSection />
    </div>
  );
};

export default WorkPage;
