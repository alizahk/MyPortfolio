import InnerLayout from "@/components/InnerLayout";
import Timeline from "@/components/Timeline";

export default function ExperiencePage() {
  return (
    <InnerLayout active="experience">
      <section className="pt-40 pb-32 px-8 md:px-14">
        <div className="max-w-6xl mx-auto mb-16">
          <span className="font-mono text-xs tracking-[0.4em] uppercase mb-4 block font-bold" style={{ color: "var(--accent)" }}>Background</span>
          <h1 className="text-5xl md:text-6xl font-black tracking-tighter mb-4" style={{ color: "var(--fg)" }}>Experience</h1>
          <p className="text-lg max-w-2xl" style={{ color: "var(--fg2)" }}>Research, competitions, professional roles, and community involvement.</p>
        </div>
        <div className="px-0 md:px-14">
          <Timeline />
        </div>
      </section>
    </InnerLayout>
  );
}