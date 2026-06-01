import InnerLayout from "@/components/InnerLayout";
import SecretSauce from "@/components/SecretSauce";

export default function StackPage() {
  return (
    <InnerLayout active="stack">
      <section className="pt-48 pb-40 px-10 md:px-32">
        <div className="text-center mb-20">
          <span className="font-mono text-xs tracking-[0.5em] uppercase mb-4 block" style={{ color: "var(--accent)" }}>Skills</span>
          <h1 className="text-5xl font-bold italic tracking-tighter uppercase mb-4" style={{ color: "var(--fg)" }}>Tech Stack</h1>
          <p className="font-mono text-sm max-w-xl mx-auto" style={{ color: "var(--fg2)" }}>Languages, frameworks, tools, and platforms across research, development, and design. Click any skill to visit its official site.</p>
        </div>
        <SecretSauce />
      </section>
    </InnerLayout>
  );
}
