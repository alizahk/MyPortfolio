"use client";
const experiences = [
  {
    year: "2026",
    role: "Research Assistant",
    company: "University of Guelph — School of Computer Science",
    desc: "Leading development of Code Quest, a full-stack RAG-based LLM system built with Next.js, TypeScript, FastAPI, LangChain, LangGraph, and the OpenAI API with local model inference through Ollama. Work spans backend architecture, agentic pipeline design, prompt engineering, and comparative model evaluation across Claude, GPT, and Gemma. Applying Bloom's Taxonomy and BLEU scoring as evaluation frameworks. Co-authoring a peer-reviewed research paper with supervising professor.",
    tags: ["Next.js", "FastAPI", "LangChain", "LangGraph", "OpenAI API", "Ollama", "PostgreSQL", "Redis", "Docker"],
    links: {}
  },
  {
    year: "2025",
    role: "AI Developer",
    company: "Anthropic AI Hackathon — Bloomfund",
    desc: "Led full-stack development of Bloomfund, an AI-powered scholarship matching platform. Designed the frontend, implemented secure email authentication, managed data flow, and integrated the full product end-to-end using Next.js, React, and Supabase.",
    tags: ["Next.js", "React", "Supabase", "OpenAI API"],
    links: { demo: "https://bloomfund-lac.vercel.app/" }
  },
  {
    year: "2025",
    role: "ML Researcher — 3rd / 45 Teams",
    company: "STEM Fellowship Big Data Challenge — University of Toronto",
    desc: "Placed 3rd out of 45 teams. Built an end-to-end ML pipeline detecting adverse drug reactions in elderly patients using the MIMIC-IV clinical database. Covered data cleaning, feature engineering, and model evaluation using Random Forest, XGBoost, and Linear Regression, achieving 83% accuracy. Work published as a peer-reviewed research paper.",
    tags: ["Python", "NLP", "scikit-learn", "Random Forest", "XGBoost"],
    links: { paper: "https://doi.org/10.48448/1rpd-7x32", cert: "https://drive.google.com/file/d/1pjuwaT7781zhzRZXE30TfKkD-8CrUzDf/view" }
  },
  {
    year: "2024–2026",
    role: "IT & Web Administrator",
    company: "Huda Law",
    desc: "Designed and launched a production website for a live legal practice. Configured DNS using GoDaddy and Vercel, set up DKIM, SPF, and DMARC email authentication, and managed Microsoft 365 infrastructure including user accounts, email systems, and access permissions.",
    tags: ["DNS", "DKIM/SPF/DMARC", "Microsoft 365", "Vercel"],
    links: {}
  },
  {
    year: "2024–Present",
    role: "Member",
    company: "Google Developer Student Club — University of Guelph",
    desc: "Applied Git-based collaboration workflows and built responsive front-end components as part of a collaborative developer community at the University of Guelph.",
    tags: ["Git", "HTML/CSS", "Frontend"],
    links: {}
  },
  {
    year: "2022–2024",
    role: "Tutor",
    company: "Toronto Public Library",
    desc: "Worked one-on-one with young students in English, math, and other subjects. Adapted teaching approach for different learning styles and communicated regularly with parents on progress.",
    tags: ["Communication", "Mentorship", "Adaptability"],
    links: {}
  }
];

const tagLinks: Record<string, string> = {
  "Next.js": "https://nextjs.org",
  "FastAPI": "https://fastapi.tiangolo.com",
  "LangChain": "https://www.langchain.com",
  "LangGraph": "https://langchain-ai.github.io/langgraph",
  "OpenAI API": "https://platform.openai.com",
  "Ollama": "https://ollama.com",
  "PostgreSQL": "https://www.postgresql.org",
  "Redis": "https://redis.io",
  "Docker": "https://www.docker.com",
  "React": "https://react.dev",
  "Supabase": "https://supabase.com",
  "Python": "https://www.python.org",
  "scikit-learn": "https://scikit-learn.org",
};

export default function Timeline() {
  return (
    <div className="space-y-16 max-w-4xl">
      {experiences.map((exp, i) => (
        <div key={i} className="group relative flex gap-8 md:gap-14">
          <div className="text-3xl font-black italic w-28 md:w-36 shrink-0 pt-1 font-mono"
            style={{ color: "var(--border)" }}
            onMouseEnter={e => (e.currentTarget.style.color = "var(--accent)")}
            onMouseLeave={e => (e.currentTarget.style.color = "var(--border)")}>
            {exp.year}
          </div>
          <div className="pl-8 pb-8 relative flex-1 border-l" style={{ borderColor: "var(--border)" }}>
            <div className="absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full"
              style={{ background: "var(--accent)", boxShadow: "0 0 12px var(--accent)" }} />
            <h3 className="text-xl md:text-2xl font-bold tracking-tight mb-1" style={{ color: "var(--fg)" }}>{exp.role}</h3>
            <p className="font-mono text-xs mb-4 uppercase tracking-widest" style={{ color: "var(--accent)" }}>{exp.company}</p>
            <p className="text-base leading-relaxed mb-5" style={{ color: "var(--fg2)" }}>{exp.desc}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {exp.tags.map(tag => {
                const link = tagLinks[tag];
                const pill = (
                  <span className="text-xs font-mono px-3 py-1 rounded-full border transition-all cursor-pointer"
                    style={{ background: "var(--card)", borderColor: "var(--border)", color: "var(--fg2)" }}
                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = "var(--accent)"; (e.currentTarget as HTMLElement).style.color = "var(--accent)"; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "var(--border)"; (e.currentTarget as HTMLElement).style.color = "var(--fg2)"; }}>
                    {tag}
                  </span>
                );
                return link
                  ? <a key={tag} href={link} target="_blank" rel="noreferrer">{pill}</a>
                  : <span key={tag} className="text-xs font-mono px-3 py-1 rounded-full border" style={{ background: "var(--card)", borderColor: "var(--border)", color: "var(--fg2)" }}>{tag}</span>;
              })}
            </div>
            {Object.keys(exp.links).length > 0 && (
              <div className="flex gap-5">
                {exp.links.demo && <a href={exp.links.demo} target="_blank" rel="noreferrer" className="text-xs font-mono font-bold uppercase tracking-widest underline underline-offset-4" style={{ color: "var(--accent)" }}>Live Demo →</a>}
                {exp.links.paper && <a href={exp.links.paper} target="_blank" rel="noreferrer" className="text-xs font-mono font-bold uppercase tracking-widest underline underline-offset-4" style={{ color: "var(--accent)" }}>Published Paper →</a>}
                {exp.links.cert && <a href={exp.links.cert} target="_blank" rel="noreferrer" className="text-xs font-mono font-bold uppercase tracking-widest underline underline-offset-4" style={{ color: "var(--accent)" }}>Certificate →</a>}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}