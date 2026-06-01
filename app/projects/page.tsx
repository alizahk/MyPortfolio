"use client";
import InnerLayout from "@/components/InnerLayout";
import Link from "next/link";

export default function ProjectsPage() {
  return (
    <InnerLayout active="projects">
      <section className="pt-40 pb-32 px-8 md:px-14">
        <div className="max-w-6xl mx-auto">
          <span className="font-mono text-xs tracking-[0.4em] uppercase mb-4 block font-bold" style={{ color: "var(--accent)" }}>My Work</span>
          <h1 className="text-5xl md:text-6xl font-black tracking-tighter mb-4" style={{ color: "var(--fg)" }}>Projects</h1>
          <p className="text-lg mb-20 max-w-2xl" style={{ color: "var(--fg2)" }}>From AI research systems to creative design work. Two sides of the same curiosity.</p>

          <div className="grid md:grid-cols-2 gap-6">
            <Link href="/projects/tech"
              className="group rounded-3xl border overflow-hidden transition-all duration-300 hover:scale-[1.02] block"
              style={{ background: "var(--card)", borderColor: "var(--border)" }}
              onMouseEnter={e => (e.currentTarget as HTMLElement).style.borderColor = "var(--accent)"}
              onMouseLeave={e => (e.currentTarget as HTMLElement).style.borderColor = "var(--border)"}>
              <div className="h-56 flex items-center justify-center text-7xl border-b" style={{ background: "color-mix(in srgb, var(--accent) 5%, var(--bg))", borderColor: "var(--border)" }}>⚡</div>
              <div className="p-8">
                <span className="font-mono text-xs tracking-[0.4em] uppercase mb-3 block" style={{ color: "var(--accent)" }}>5 Projects</span>
                <h2 className="text-3xl font-black tracking-tighter mb-3" style={{ color: "var(--fg)" }}>Tech Projects</h2>
                <p className="text-base leading-relaxed mb-5" style={{ color: "var(--fg2)" }}>Full-stack apps, AI systems, ML pipelines, and research. Built with Next.js, Python, LangChain, FastAPI, and more.</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {["AI/ML", "Full-Stack", "Research", "Published Paper"].map(t => (
                    <span key={t} className="text-xs font-mono px-3 py-1 rounded-full border" style={{ background: "var(--bg)", borderColor: "var(--border)", color: "var(--fg2)" }}>{t}</span>
                  ))}
                </div>
                <div className="flex items-center gap-2 font-bold text-sm" style={{ color: "var(--accent)" }}>
                  View Tech Projects <span className="group-hover:translate-x-1 transition-transform inline-block">→</span>
                </div>
              </div>
            </Link>

            <Link href="/projects/art"
              className="group rounded-3xl border overflow-hidden transition-all duration-300 hover:scale-[1.02] block"
              style={{ background: "var(--card)", borderColor: "var(--border)" }}
              onMouseEnter={e => (e.currentTarget as HTMLElement).style.borderColor = "var(--accent)"}
              onMouseLeave={e => (e.currentTarget as HTMLElement).style.borderColor = "var(--border)"}>
              <div className="h-56 flex items-center justify-center text-7xl border-b" style={{ background: "color-mix(in srgb, var(--accent) 5%, var(--bg))", borderColor: "var(--border)" }}>🎨</div>
              <div className="p-8">
                <span className="font-mono text-xs tracking-[0.4em] uppercase mb-3 block" style={{ color: "var(--accent)" }}>4 Projects</span>
                <h2 className="text-3xl font-black tracking-tighter mb-3" style={{ color: "var(--fg)" }}>Creative Works</h2>
                <p className="text-base leading-relaxed mb-5" style={{ color: "var(--fg2)" }}>Photography, yearbook design, digital illustration, and social media content. Where it all started.</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {["Photography", "Design", "Editorial", "Digital Art"].map(t => (
                    <span key={t} className="text-xs font-mono px-3 py-1 rounded-full border" style={{ background: "var(--bg)", borderColor: "var(--border)", color: "var(--fg2)" }}>{t}</span>
                  ))}
                </div>
                <div className="flex items-center gap-2 font-bold text-sm" style={{ color: "var(--accent)" }}>
                  View Creative Works <span className="group-hover:translate-x-1 transition-transform inline-block">→</span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </InnerLayout>
  );
}