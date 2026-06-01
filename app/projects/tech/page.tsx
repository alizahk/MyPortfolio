"use client";
import InnerLayout from "@/components/InnerLayout";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";

const tagLinks: Record<string, string> = {
  "Next.js": "https://nextjs.org",
  "React": "https://react.dev",
  "Supabase": "https://supabase.com",
  "FastAPI": "https://fastapi.tiangolo.com",
  "LangChain": "https://www.langchain.com",
  "LangGraph": "https://langchain-ai.github.io/langgraph",
  "OpenAI API": "https://platform.openai.com",
  "Ollama": "https://ollama.com",
  "Python": "https://www.python.org",
  "scikit-learn": "https://scikit-learn.org",
  "Docker": "https://www.docker.com",
  "PostgreSQL": "https://www.postgresql.org",
  "Redis": "https://redis.io",
  "TypeScript": "https://www.typescriptlang.org",
  "NLP": "https://en.wikipedia.org/wiki/Natural_language_processing",
};

const projects = [
  {
    title: "Code Quest",
    category: "Research Project",
    year: "2026",
    description: "A full-stack RAG-based LLM system that automatically generates Bloom's Taxonomy-aligned questions from student-submitted C code. Work spans backend architecture, agentic pipeline design, prompt engineering, and comparative model evaluation across Claude, GPT, and Gemma. Applying BLEU scoring and Bloom's Taxonomy as evaluation frameworks. Co-authoring a research paper with my professor.",
    tags: ["Next.js", "TypeScript", "FastAPI", "LangChain", "LangGraph", "OpenAI API", "Ollama", "PostgreSQL", "Redis", "Docker"],
    links: {},
    image: "/wip.jpg",
  },
  {
    title: "Bloomfund",
    category: "Hackathon Project",
    year: "2025",
    description: "An AI-powered scholarship matching platform built at the Anthropic AI Hackathon. Led full-stack development including frontend design, secure email authentication, persistent sessions, and scalable backend workflows.",
    tags: ["Next.js", "React", "Supabase", "OpenAI API"],
    links: { demo: "https://bloomfund-lac.vercel.app/", github: "https://github.com/alizahk" },
    image: "/bloomfund.png",
  },
  {
    title: "ADR Detection — STEM Fellowship",
    category: "Published Research · 3rd / 45 Teams",
    year: "2025",
    description: "Placed 3rd out of 45 teams at the STEM Fellowship Inter-University Big Data Challenge. Built an end-to-end machine learning pipeline detecting adverse drug reactions in elderly patients using the MIMIC-IV clinical database. Achieved 83% accuracy using Random Forest, XGBoost, and Linear Regression. Work published as a peer-reviewed research paper.",
    tags: ["Python", "scikit-learn", "NLP", "Random Forest", "XGBoost"],
    links: { paper: "https://doi.org/10.48448/1rpd-7x32", cert: "https://drive.google.com/file/d/1pjuwaT7781zhzRZXE30TfKkD-8CrUzDf/view" },
    image: "/adr.pdf",
  },
  {
    title: "AI Closet",
    category: "In Progress",
    year: "2026",
    description: "An AI-powered wardrobe app that lets users organize their clothing and receive personalized outfit recommendations using LLM APIs. Building with React, Next.js, Supabase, and the OpenAI API.",
    tags: ["React", "Next.js", "Supabase", "OpenAI API"],
    links: {},
    image: "/wip.jpg",
  },
  {
    title: "Rosewood Reveries",
    category: "Personal Project",
    year: "2025",
    description: "An elegant web experience featuring immersive visuals and responsive front-end development, showcasing creative design sensibility alongside technical execution.",
    tags: ["Next.js", "React", "TypeScript"],
    links: { demo: "https://rosewood-reveries.vercel.app/", github: "https://github.com/alizahk/rosewood-reveries" },
    image: "/header.png",
  },
];

export default function TechProjectsPage() {
  return (
    <InnerLayout active="projects">
      <section className="pt-40 pb-32 px-8 md:px-14">
        <div className="max-w-5xl mx-auto">
          <div className="flex justify-between items-end mb-16">
            <div>
              <div className="flex gap-6 mb-6">
                <Link href="/projects/tech" className="font-mono text-sm font-bold uppercase tracking-widest pb-1 border-b-2" style={{ color: "var(--accent)", borderColor: "var(--accent)" }}>Tech</Link>
                <Link href="/projects/art" className="font-mono text-sm font-bold uppercase tracking-widest pb-1 border-b-2 border-transparent" style={{ color: "var(--fg2)" }}
                  onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = "var(--accent)"}
                  onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = "var(--fg2)"}>Creative</Link>
              </div>
              <h1 className="text-5xl md:text-6xl font-black tracking-tighter" style={{ color: "var(--fg)" }}>Tech Projects</h1>
            </div>
            <Link href="/projects" className="font-mono text-xs uppercase tracking-widest underline underline-offset-4 hidden md:block" style={{ color: "var(--fg2)" }}
              onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = "var(--accent)"}
              onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = "var(--fg2)"}>← All Projects</Link>
          </div>

          <div className="space-y-8">
            {projects.map((project, i) => (
              <div key={i} className="w-full rounded-3xl border overflow-hidden transition-all duration-300"
                style={{ background: "var(--card)", borderColor: "var(--border)" }}
                onMouseEnter={e => (e.currentTarget as HTMLElement).style.borderColor = "var(--accent)"}
                onMouseLeave={e => (e.currentTarget as HTMLElement).style.borderColor = "var(--border)"}>

                <div className="w-full h-64 md:h-72 flex items-center justify-center relative overflow-hidden border-b"
                  style={{ background: "color-mix(in srgb, var(--accent) 3%, var(--bg))", borderColor: "var(--border)" }}>
                  {project.image ? (
                    project.image.endsWith(".pdf") ? (
                      <object data={`${project.image}#page=1&toolbar=0&navpanes=0&scrollbar=0`} type="application/pdf" className="w-full h-full" aria-label={project.title}>
                        <span className="font-mono text-xs" style={{ color: "var(--fg2)" }}>PDF preview unavailable</span>
                      </object>
                    ) : (
                      <img src={project.image} alt={project.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                    )
                  ) : (
                    <div className="flex flex-col items-center gap-3 opacity-20">
                      <div className="w-16 h-16 rounded-2xl border-2 flex items-center justify-center text-2xl" style={{ borderColor: "var(--border)" }}>🖼</div>
                      <span className="font-mono text-xs uppercase tracking-widest" style={{ color: "var(--fg2)" }}>Add Screenshot Here</span>
                    </div>
                  )}
                  <span className="absolute top-5 left-5 font-mono text-xs px-3 py-1.5 rounded-full font-bold" style={{ background: "var(--accent)", color: "#0d0d0d" }}>{project.category}</span>
                  <span className="absolute top-5 right-5 font-mono text-xs px-3 py-1.5 rounded-full border" style={{ background: "color-mix(in srgb, var(--bg) 80%, transparent)", borderColor: "var(--border)", color: "var(--fg2)" }}>{project.year}</span>
                </div>

                <div className="p-8 md:p-10 flex flex-col md:flex-row gap-8 items-start">
                  <div className="flex-1">
                    <h3 className="text-3xl font-black tracking-tighter mb-3" style={{ color: "var(--fg)" }}>{project.title}</h3>
                    <p className="text-base leading-relaxed mb-5 max-w-2xl" style={{ color: "var(--fg2)" }}>{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map(tag => {
                        const link = tagLinks[tag];
                        const pill = (
                          <span className="text-xs font-mono px-3 py-1 rounded-full border transition-all cursor-pointer"
                            style={{ background: "var(--bg)", borderColor: "var(--border)", color: "var(--fg2)" }}
                            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = "var(--accent)"; (e.currentTarget as HTMLElement).style.color = "var(--accent)"; }}
                            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "var(--border)"; (e.currentTarget as HTMLElement).style.color = "var(--fg2)"; }}>
                            {tag}
                          </span>
                        );
                        return link
                          ? <a key={tag} href={link} target="_blank" rel="noreferrer">{pill}</a>
                          : <span key={tag} className="text-xs font-mono px-3 py-1 rounded-full border" style={{ background: "var(--bg)", borderColor: "var(--border)", color: "var(--fg2)" }}>{tag}</span>;
                      })}
                    </div>
                  </div>

                  {Object.keys(project.links).length > 0 && (
                    <div className="flex flex-row md:flex-col gap-3 shrink-0 flex-wrap">
                      {project.links.demo && (
                        <a href={project.links.demo} target="_blank" rel="noreferrer"
                          className="flex items-center gap-2 px-5 py-2.5 rounded-full font-bold text-sm transition-all hover:scale-105 whitespace-nowrap"
                          style={{ background: "var(--accent)", color: "#0d0d0d" }}>
                          ▶ Live Demo
                        </a>
                      )}
                      {project.links.github && (
                        <a href={project.links.github} target="_blank" rel="noreferrer"
                          className="flex items-center gap-2 px-5 py-2.5 rounded-full font-bold text-sm border transition-all hover:scale-105 whitespace-nowrap"
                          style={{ borderColor: "var(--border)", color: "var(--fg2)", background: "var(--bg)" }}
                          onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = "var(--accent)"; (e.currentTarget as HTMLElement).style.color = "var(--accent)"; }}
                          onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "var(--border)"; (e.currentTarget as HTMLElement).style.color = "var(--fg2)"; }}>
                          <FaGithub size={14} /> GitHub
                        </a>
                      )}
                      {project.links.paper && (
                        <a href={project.links.paper} target="_blank" rel="noreferrer"
                          className="flex items-center gap-2 px-5 py-2.5 rounded-full font-bold text-sm border transition-all hover:scale-105 whitespace-nowrap"
                          style={{ borderColor: "var(--border)", color: "var(--fg2)", background: "var(--bg)" }}
                          onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = "var(--accent)"; (e.currentTarget as HTMLElement).style.color = "var(--accent)"; }}
                          onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "var(--border)"; (e.currentTarget as HTMLElement).style.color = "var(--fg2)"; }}>
                          📄 Paper
                        </a>
                      )}
                      {project.links.cert && (
                        <a href={project.links.cert} target="_blank" rel="noreferrer"
                          className="flex items-center gap-2 px-5 py-2.5 rounded-full font-bold text-sm border transition-all hover:scale-105 whitespace-nowrap"
                          style={{ borderColor: "var(--border)", color: "var(--fg2)", background: "var(--bg)" }}
                          onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = "var(--accent)"; (e.currentTarget as HTMLElement).style.color = "var(--accent)"; }}
                          onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "var(--border)"; (e.currentTarget as HTMLElement).style.color = "var(--fg2)"; }}>
                          🏆 Certificate
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </InnerLayout>
  );
}