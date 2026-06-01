"use client";
import { useEffect, useState } from "react";
import Scene from "@/components/Scene";
import ScrambleText from "@/components/ScrambleText";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import { MdContentCopy, MdCheck } from "react-icons/md";

const stats = [
  { value: "3rd", label: "Year of CS" },
  { value: "80+", label: "CGPA" },
  { value: "1", label: "Published Paper" },
  { value: "6+", label: "Languages" },
  { value: "40+", label: "Skills" },
  { value: "4+", label: "Projects" },
];

const ticker = ["CURIOUS", "ADAPTABLE", "EMPATHETIC", "COMMUNICATOR", "PROBLEM-SOLVER", "DRIVEN", "SELF-STARTER", "COLLABORATOR"];

export default function Home() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleMove = (e: MouseEvent) => setMousePos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  const copyEmail = () => {
    navigator.clipboard.writeText("alizahh33@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden noise-bg" style={{ background: "var(--bg)" }}>
      <ScrollProgress />

      {/* GRID */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-[0.04]"
        style={{ backgroundImage: `linear-gradient(var(--accent) 1px, transparent 1px), linear-gradient(90deg, var(--accent) 1px, transparent 1px)`, backgroundSize: '70px 70px' }} />

      {/* MOUSE GLOW */}
      <div className="fixed pointer-events-none z-0 h-[700px] w-[700px] rounded-full blur-[120px] transition-transform duration-700 ease-out opacity-20"
        style={{ background: `radial-gradient(circle, var(--accent), transparent 70%)`, transform: `translate(${mousePos.x - 350}px, ${mousePos.y - 350}px)` }} />

      <Navbar active="home" />

      {/* HERO */}
      <section className="relative h-screen w-full flex items-center px-8 md:px-14 overflow-hidden">
        <div className="z-20 w-full md:w-1/2 flex flex-col justify-center mt-16">

          {/* AVAILABILITY BADGE */}
          <div className="flex items-center gap-2 mb-6 w-fit px-4 py-2 rounded-full border" style={{ borderColor: "var(--border)", background: "var(--card)" }}>
            <span className="w-2 h-2 rounded-full pulse-dot" style={{ background: "#4ade80" }} />
            <span className="font-mono text-xs tracking-widest uppercase" style={{ color: "var(--fg2)" }}>Open to Co-op · Fall 2026</span>
          </div>

          <p className="font-mono text-sm font-bold mb-2 tracking-[0.3em] uppercase" style={{ color: "var(--accent)" }}>Hi, I'm</p>
          <h1 className="text-5xl md:text-6xl font-black tracking-tighter leading-tight mb-6" style={{ color: "var(--fg)" }}>Alizah Karwani</h1>

          <div className="mb-8"><ScrambleText /></div>

          <div className="flex flex-col gap-1 mb-8 pl-5 border-l-2" style={{ borderColor: "var(--accent)" }}>
            <p className="text-lg font-semibold" style={{ color: "var(--fg)" }}>Computer Science (Co-op) Honours</p>
            <p className="text-sm font-mono" style={{ color: "var(--fg2)" }}>University of Guelph · AI Area of Application</p>
          </div>

          <p className="text-base leading-relaxed mb-10 max-w-lg" style={{ color: "var(--fg2)" }}>
            Building <span className="font-semibold" style={{ color: "var(--fg)" }}>intelligent full-stack systems</span> at the intersection of AI and creativity. From RAG pipelines to pixel-perfect interfaces, guided by curiosity and a love of craft.
          </p>

          <div className="flex gap-3 flex-wrap">
            <a href="/projects"
              className="px-7 py-3 rounded-full font-bold text-sm transition-all hover:scale-105"
              style={{ background: "var(--accent)", color: "#0d0d0d" }}>
              View My Work →
            </a>
          </div>

        </div>

        <div className="absolute right-0 top-0 h-full w-full md:w-1/2 z-30 pointer-events-none">
          <div className="h-full w-full pointer-events-auto"><Scene /></div>
        </div>
      </section>

      {/* TICKER */}
      <div className="relative z-20 overflow-hidden py-4 border-y" style={{ borderColor: "var(--border)", background: "var(--card)" }}>
        <div className="flex animate-marquee whitespace-nowrap">
          {[...ticker, ...ticker].map((s, i) => (
            <span key={i} className="font-mono text-[10px] tracking-[0.4em] uppercase mx-8" style={{ color: "var(--fg2)", opacity: 0.7 }}>
              {s} <span style={{ color: "var(--accent)" }} className="mx-3">·</span>
            </span>
          ))}
        </div>
      </div>

      {/* STATS */}
      <section className="relative z-20 py-24 px-8 md:px-14">
        <div className="max-w-6xl mx-auto grid grid-cols-3 md:grid-cols-6 gap-6">
          {stats.map(stat => (
            <div key={stat.label} className="text-center">
              <div className="text-4xl md:text-5xl font-black tracking-tighter mb-1" style={{ color: "var(--accent)" }}>{stat.value}</div>
              <div className="text-xs font-mono uppercase tracking-widest" style={{ color: "var(--fg2)" }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section className="relative z-20 py-24 px-8 md:px-14 border-t" style={{ borderColor: "var(--border)" }}>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-start">
          <div>
            <span className="font-mono text-xs tracking-[0.4em] uppercase mb-4 block font-bold" style={{ color: "var(--accent)" }}>About Me</span>
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-8" style={{ color: "var(--fg)" }}>Curious by nature.<br />Creative by origin.</h2>
            <div className="space-y-5 text-base leading-relaxed" style={{ color: "var(--fg2)" }}>
              <p>I have loved art since I was young, all types of it, from photography and illustration to design and editing. That love led me to try front end development, because building for the web felt creative in a way that made sense to me. I loved it, and it pulled me deeper, into backend systems, databases, machine learning, and eventually AI infrastructure. That is the path that brought me here.</p>
              <p>Today I build full-stack AI systems, publish research, and bring that same eye for detail to everything I ship. I am currently a Research Assistant at the University of Guelph leading development of a RAG based LLM system and co-authoring a research paper with my professor. I placed 3rd out of 45 teams at the STEM Fellowship Big Data Challenge, with our machine learning work published as a peer-reviewed paper. As a woman in tech, I know curiosity and drive have to work twice as hard, and that pushes me to build better every single day.</p>
              <p>What excites me most is the frontier of AI infrastructure: systems that can reason, retrieve, and respond in ways that feel almost human. I am actively seeking Fall 2026 co-op opportunities in AI, full-stack development, and data engineering.</p>
            </div>
          </div>
          <div className="space-y-4 pt-2">
            {[
              { icon: "⚡", label: "Technical", desc: "Full-stack development, RAG-based LLMs, agentic pipelines, data engineering across Python, TypeScript, Java, SQL, and more." },
              { icon: "🔬", label: "Research", desc: "Co-authoring a published research paper, Bloom's Taxonomy evaluation frameworks, BLEU scoring, academic peer review." },
              { icon: "🎨", label: "Creative", desc: "Art, photography, yearbook design, Adobe Creative Suite, Canva, Procreate. Design thinking is baked into how I build." },
            ].map(item => (
              <div key={item.label} className="flex gap-4 p-6 rounded-2xl border transition-all"
                style={{ background: "var(--card)", borderColor: "var(--border)" }}
                onMouseEnter={e => (e.currentTarget as HTMLElement).style.borderColor = "var(--accent)"}
                onMouseLeave={e => (e.currentTarget as HTMLElement).style.borderColor = "var(--border)"}>
                <span className="text-2xl shrink-0">{item.icon}</span>
                <div>
                  <h4 className="font-bold text-base mb-1" style={{ color: "var(--fg)" }}>{item.label}</h4>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--fg2)" }}>{item.desc}</p>
                </div>
              </div>
            ))}
            <a href="/contact"
              className="flex items-center justify-center gap-2 w-full py-3 rounded-xl font-bold text-sm border transition-all"
              style={{ borderColor: "var(--accent)", color: "var(--accent)", background: "var(--card)" }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "var(--accent)"; (e.currentTarget as HTMLElement).style.color = "#0d0d0d"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "var(--card)"; (e.currentTarget as HTMLElement).style.color = "var(--accent)"; }}>
              View My Resume ↓
            </a>
          </div>
        </div>
      </section>

      {/* FEATURED PROJECT */}
      <section className="relative z-20 py-24 px-8 md:px-14 border-t" style={{ borderColor: "var(--border)" }}>
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-end mb-12">
            <div>
              <span className="font-mono text-xs tracking-[0.4em] uppercase mb-4 block font-bold" style={{ color: "var(--accent)" }}>Featured Project</span>
              <h2 className="text-4xl font-black tracking-tighter" style={{ color: "var(--fg)" }}>Code Quest</h2>
            </div>
            <a href="/projects" className="font-mono text-xs uppercase tracking-widest underline underline-offset-4 hidden md:block" style={{ color: "var(--fg2)" }}
              onMouseEnter={e => (e.currentTarget.style.color = "var(--accent)")}
              onMouseLeave={e => (e.currentTarget.style.color = "var(--fg2)")}>
              View All →
            </a>
          </div>

          <div className="rounded-3xl border overflow-hidden" style={{ borderColor: "var(--border)" }}>
            <div className="w-full h-64 md:h-80 border-b overflow-hidden" style={{ borderColor: "var(--border)" }}>
              <img src="/wip.jpg" className="w-full h-full object-cover" alt="Code Quest screenshot" />
            </div>
            <div className="p-8 md:p-10 grid md:grid-cols-2 gap-8" style={{ background: "var(--card)" }}>
              <div>
                <p className="text-base leading-relaxed mb-5" style={{ color: "var(--fg2)" }}>
                  A full-stack RAG-based LLM system that generates Bloom's Taxonomy-aligned questions from student code. Built with Next.js, FastAPI, LangChain, LangGraph, and the OpenAI API. Co-authoring a research paper based on this work.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Next.js", "FastAPI", "LangChain", "RAG", "Docker", "PostgreSQL"].map(t => (
                    <span key={t} className="text-xs font-mono px-3 py-1 rounded-full border" style={{ background: "var(--bg)", borderColor: "var(--border)", color: "var(--fg2)" }}>{t}</span>
                  ))}
                </div>
              </div>
              <div className="flex flex-col gap-3 md:items-end justify-center">
                <span className="font-mono text-xs px-3 py-1 rounded-full border w-fit" style={{ borderColor: "var(--accent)", color: "var(--accent)" }}>Research Project · 2026</span>
                <a href="/projects/tech" className="px-6 py-3 rounded-full font-bold text-sm w-fit transition-all hover:scale-105" style={{ background: "var(--accent)", color: "#0d0d0d" }}>
                  See All Projects →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT STRIP */}
      <section className="relative z-20 py-24 px-8 md:px-14 border-t" style={{ borderColor: "var(--border)" }}>
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-2" style={{ color: "var(--fg)" }}>I'm open to connect!</h2>
            <p className="text-base" style={{ color: "var(--fg2)" }}>Open to co-op opportunities, collaborations, and conversations.</p>
          </div>
          <div className="flex gap-4 flex-wrap">
            <button onClick={copyEmail}
              className="flex items-center gap-2 px-6 py-3 rounded-full font-bold text-sm border transition-all hover:scale-105"
              style={{ borderColor: "var(--accent)", color: "var(--accent)", background: "var(--card)" }}>
              {copied ? <MdCheck size={16} /> : <MdContentCopy size={16} />}
              {copied ? "Copied!" : "Copy Email"}
            </button>
            <a href="/contact"
              className="flex items-center gap-2 px-6 py-3 rounded-full font-bold text-sm transition-all hover:scale-105"
              style={{ background: "var(--accent)", color: "#0d0d0d" }}>
              Contact Info →
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}