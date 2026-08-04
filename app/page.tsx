import { getSEO } from "@/lib/seo";
import { person } from "@/lib/site-content";
import { AboutSection } from "@/components/about";
import { Hero } from "@/components/hero";
import { Projects } from "@/components/projects";

export const metadata = getSEO({
  title: person.title,
  path: "/",
});

export default function Home() {
  return (
    <section className="flex max-w-screen overflow-x-hidden flex-col items-center justify-center">
      <Hero />
      <Projects limit={4} />
      <AboutSection />
    </section>
  );
}
