import { getSEO } from "@/lib/seo";
import { person } from "@/lib/site-content";
import { AboutSection } from "@/components/about";
import { ExperienceSection } from "@/components/experience";
import { Hero } from "@/components/hero";
import { Principles } from "@/components/principles";
import { Projects } from "@/components/projects";
import { SkillsStrip } from "@/components/skills-strip";

export const metadata = getSEO({
  title: person.title,
  path: "/",
});

export default function Home() {
  return (
    <div className="flex max-w-screen flex-col overflow-x-hidden">
      <Hero />
      <SkillsStrip />
      <Principles />
      <ExperienceSection />
      <Projects limit={3} />
      <AboutSection />
    </div>
  );
}
