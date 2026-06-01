import InnerLayout from "@/components/InnerLayout";
import SecretSauce from "@/components/SecretSauce";

export default function ExpertisePage() {
  return (
    <InnerLayout active="stack">
      <section className="pt-48 pb-40 px-10 md:px-32">
        <div className="text-center mb-20">
          <span className="text-blue-300/50 font-mono text-xs tracking-[0.5em] uppercase mb-4 block">Skills</span>
          <h1 className="text-5xl font-bold italic tracking-tighter uppercase mb-4 text-white">Tech Stack</h1>
          <p className="text-white/30 font-mono text-sm max-w-xl mx-auto">Languages, frameworks, tools, and platforms across research, development, and design. Click any skill to visit its official site.</p>
        </div>
        <SecretSauce />
      </section>
    </InnerLayout>
  );
}