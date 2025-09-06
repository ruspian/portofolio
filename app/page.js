import AboutSectionComponent from "@/components/about/AboutSectionComponent";
import HeroComponent from "@/components/hero/HeroComponent";
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
    </main>
  );
}
