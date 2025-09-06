import AboutSectionComponent from "@/components/about/AboutSectionComponent";
import HeroComponent from "@/components/hero/HeroComponent";

export default function HomePage() {
  return (
    <main>
      <HeroComponent />

      {/* about */}
      <section className="bg-foreground h-auto">
        <AboutSectionComponent />
      </section>
    </main>
  );
}
