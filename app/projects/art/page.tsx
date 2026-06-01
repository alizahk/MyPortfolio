"use client";
import InnerLayout from "@/components/InnerLayout";
import Link from "next/link";

const artProjects = [
  {
    title: "Yearbook Design",
    category: "Editorial Design",
    year: "2022–2023",
    desc: "Led the design and layout of my high school yearbook as Head of Yearbook Committee. Designed pages using Adobe Photoshop, managed the photography team, and oversaw the full print production process from layout to final print.",
    tools: ["Adobe Photoshop", "Layout Design", "Photography", "Print Production", "Team Leadership"],
    image: null,
  },
  {
    title: "Photography",
    category: "Photography",
    year: "2020–Present",
    desc: "Head of Photography Club. Won multiple competitions. Work spans portrait, event, and editorial photography with a focus on composition, natural lighting, and storytelling through a lens.",
    tools: ["Portrait", "Event Photography", "Editorial", "Post-Processing", "Competition Winner"],
    image: null,
  },
  {
    title: "Digital Art & Illustration",
    category: "Digital Art",
    year: "2019–Present",
    desc: "Self-taught digital artist working across Procreate, Krita, Photoshop, and PicsArt. Explores character design, illustration, and experimental digital media as a creative practice.",
    tools: ["Procreate", "Krita", "Photoshop", "PicsArt", "Canva"],
    image: null,
  },
  {
    title: "Social Media & Brand Design",
    category: "Brand & Content",
    year: "2021–2023",
    desc: "Managed and designed content for school math club and prom committee social media accounts. Created graphics, layouts, and visual assets that grew engagement and built a recognizable visual identity.",
    tools: ["Canva", "Photoshop", "Content Strategy", "Social Media Management"],
    image: null,
  },
];

export default function ArtPage() {
  return (
    <InnerLayout active="projects">
      <section className="pt-40 pb-32 px-8 md:px-14">
        <div className="max-w-5xl mx-auto">
          <div className="flex justify-between items-end mb-16">
            <div>
              <div className="flex gap-6 mb-6">
                <Link href="/projects/tech" className="font-mono text-sm font-bold uppercase tracking-widest pb-1 border-b-2 border-transparent" style={{ color: "var(--fg2)" }}
                  onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = "var(--accent)"}
                  onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = "var(--fg2)"}>Tech</Link>
                <Link href="/projects/art" className="font-mono text-sm font-bold uppercase tracking-widest pb-1 border-b-2" style={{ color: "var(--accent)", borderColor: "var(--accent)" }}>Creative</Link>
              </div>
              <h1 className="text-5xl md:text-6xl font-black tracking-tighter" style={{ color: "var(--fg)" }}>Creative Works</h1>
            </div>
            <Link href="/projects" className="font-mono text-xs uppercase tracking-widest underline underline-offset-4 hidden md:block" style={{ color: "var(--fg2)" }}
              onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = "var(--accent)"}
              onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = "var(--fg2)"}>← All Projects</Link>
          </div>

          <div className="space-y-8">
            {artProjects.map((project, i) => (
              <div key={i} className="w-full rounded-3xl border overflow-hidden transition-all duration-300"
                style={{ background: "var(--card)", borderColor: "var(--border)" }}
                onMouseEnter={e => (e.currentTarget as HTMLElement).style.borderColor = "var(--accent)"}
                onMouseLeave={e => (e.currentTarget as HTMLElement).style.borderColor = "var(--border)"}>
                <div className="w-full h-64 md:h-72 flex items-center justify-center relative overflow-hidden border-b"
                  style={{ background: "color-mix(in srgb, var(--accent) 3%, var(--bg))", borderColor: "var(--border)" }}>
                  {project.image ? (
                    <img src={project.image} alt={project.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                  ) : (
                    <div className="flex flex-col items-center gap-3 opacity-20">
                      <div className="w-16 h-16 rounded-2xl border-2 flex items-center justify-center text-2xl" style={{ borderColor: "var(--border)" }}>🎨</div>
                      <span className="font-mono text-xs uppercase tracking-widest" style={{ color: "var(--fg2)" }}>Add Your Work Here</span>
                    </div>
                  )}
                  <span className="absolute top-5 left-5 font-mono text-xs px-3 py-1.5 rounded-full font-bold" style={{ background: "var(--accent)", color: "#0d0d0d" }}>{project.category}</span>
                  <span className="absolute top-5 right-5 font-mono text-xs px-3 py-1.5 rounded-full border" style={{ background: "color-mix(in srgb, var(--bg) 80%, transparent)", borderColor: "var(--border)", color: "var(--fg2)" }}>{project.year}</span>
                </div>
                <div className="p-8 md:p-10">
                  <h3 className="text-3xl font-black tracking-tighter mb-3" style={{ color: "var(--fg)" }}>{project.title}</h3>
                  <p className="text-base leading-relaxed mb-5 max-w-2xl" style={{ color: "var(--fg2)" }}>{project.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tools.map(tool => (
                      <span key={tool} className="text-xs font-mono px-3 py-1 rounded-full border" style={{ background: "var(--bg)", borderColor: "var(--border)", color: "var(--fg2)" }}>{tool}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </InnerLayout>
  );
}