import AboutSectionComponent from "@/components/about/AboutSectionComponent";
import HeroComponent from "@/components/hero/HeroComponent";
import ProjectSectionComponent from "@/components/projects/ProjectSectionComponent";
import SkillSectionComponent from "@/components/skill/SkillSectionComponent";

export default function HomePage() {
  return (
    <main>
      <HeroComponent />

      {/* about */}
      <section className="bg-foreground h-auto">
        <AboutSectionComponent />
      </section>

      {/* skill */}
      <section className="h-auto">
        <SkillSectionComponent />
      </section>

      {/* projects */}
      <section className="h-auto">
        <ProjectSectionComponent />
      </section>
    </main>
  );
}
