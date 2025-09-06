import HeroComponent from "@/components/hero/HeroComponent";

export default function HomePage() {
  return (
    <main>
      <HeroComponent />

      <div className="border-[1px] border-slate-400 mx-auto"></div>

      {/* about */}
      <section className="my-6">
        <div>
          <p>ini about</p>
        </div>
      </section>
    </main>
  );
}
