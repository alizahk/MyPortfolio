"use client";
import { useTheme } from "./ThemeProvider";

const skillLinks: Record<string, string> = {
  "Python": "https://www.python.org",
  "JavaScript": "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  "TypeScript": "https://www.typescriptlang.org",
  "Java": "https://www.java.com",
  "SQL": "https://www.mysql.com",
  "C / C++": "https://isocpp.org",
  "HTML/CSS": "https://developer.mozilla.org/en-US/docs/Web/HTML",
  "Assembly": "https://en.wikipedia.org/wiki/Assembly_language",
  "MATLAB": "https://www.mathworks.com/products/matlab.html",
  "Fortran": "https://fortran-lang.org",
  "COBOL": "https://en.wikipedia.org/wiki/COBOL",
  "LangChain": "https://www.langchain.com",
  "LangGraph": "https://langchain-ai.github.io/langgraph",
  "OpenAI API": "https://platform.openai.com",
  "Ollama": "https://ollama.com",
  "Agentic AI / RAG": "https://python.langchain.com/docs/concepts/rag",
  "PyTorch": "https://pytorch.org",
  "NumPy": "https://numpy.org",
  "scikit-learn": "https://scikit-learn.org",
  "scipy": "https://scipy.org",
  "Jupyter": "https://jupyter.org",
  "React": "https://react.dev",
  "Next.js": "https://nextjs.org",
  "FastAPI": "https://fastapi.tiangolo.com",
  "Supabase": "https://supabase.com",
  "PostgreSQL": "https://www.postgresql.org",
  "Redis": "https://redis.io",
  "SQLAlchemy": "https://www.sqlalchemy.org",
  "REST APIs": "https://restfulapi.net",
  "Docker": "https://www.docker.com",
  "Git / GitHub": "https://github.com",
  "CI/CD": "https://docs.github.com/en/actions",
  "Vercel": "https://vercel.com",
  "Linux": "https://www.linux.org",
  "VS Code": "https://code.visualstudio.com",
  "Canva": "https://www.canva.com",
  "Photoshop": "https://www.adobe.com/products/photoshop.html",
  "Procreate": "https://procreate.com",
  "Figma": "https://www.figma.com",
  "Krita": "https://krita.org",
};

const DVI = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";
const SI  = "https://cdn.jsdelivr.net/npm/simple-icons/icons";

const skills = [
  { name: "Python",           icon: "/python.png",                                         cat: "Languages" },
  { name: "JavaScript",       icon: "/javascript.png",                                     cat: "Languages" },
  { name: "TypeScript",       icon: `${DVI}/typescript/typescript-original.svg`,           cat: "Languages" },
  { name: "Java",             icon: "/java.png",                                           cat: "Languages" },
  { name: "SQL",              icon: "/SQL.png",                                            cat: "Languages" },
  { name: "C / C++",          icon: "/C++.png",                                            cat: "Languages" },
  { name: "HTML/CSS",         icon: `${DVI}/html5/html5-original.svg`,                    cat: "Languages" },
  { name: "Assembly",         icon: "/assembly.jpg",                                       cat: "Languages" },
  { name: "MATLAB",           icon: `${DVI}/matlab/matlab-original.svg`,                   cat: "Languages" },
  { name: "Fortran",          icon: `${DVI}/fortran/fortran-original.svg`,                 cat: "Languages" },
  { name: "COBOL",            icon: `${DVI}/cobol/cobol-original.svg`,                    cat: "Languages" },
  { name: "LangChain",        icon: `${SI}/langchain.svg`,                                cat: "AI & ML",  mono: true },
  { name: "LangGraph",        icon: `${SI}/langgraph.svg`,                                cat: "AI & ML",  mono: true },
  { name: "OpenAI API",       icon: `${SI}/openai.svg`,                                   cat: "AI & ML",  mono: true },
  { name: "Ollama",           icon: `${SI}/ollama.svg`,                                   cat: "AI & ML",  mono: true },
  { name: "Agentic AI / RAG", icon: "/rag.jpg",                                                   cat: "AI & ML" },
  { name: "PyTorch",          icon: `${DVI}/pytorch/pytorch-original.svg`,                cat: "AI & ML" },
  { name: "NumPy",            icon: `${DVI}/numpy/numpy-original.svg`,                    cat: "AI & ML" },
  { name: "scikit-learn",     icon: `${DVI}/scikitlearn/scikitlearn-original.svg`,        cat: "AI & ML" },
  { name: "scipy",            icon: `${SI}/scipy.svg`,                                    cat: "AI & ML",  mono: true },
  { name: "Jupyter",          icon: `${DVI}/jupyter/jupyter-original.svg`,                cat: "AI & ML" },
  { name: "React",            icon: "/reactjs.png",                                       cat: "Web & Backend" },
  { name: "Next.js",          icon: "/nextjs.png",                                        cat: "Web & Backend" },
  { name: "FastAPI",          icon: `${DVI}/fastapi/fastapi-original.svg`,                cat: "Web & Backend" },
  { name: "Supabase",         icon: "/supabase.png",                                      cat: "Web & Backend" },
  { name: "PostgreSQL",       icon: `${DVI}/postgresql/postgresql-original.svg`,          cat: "Web & Backend" },
  { name: "Redis",            icon: `${DVI}/redis/redis-original.svg`,                    cat: "Web & Backend" },
  { name: "SQLAlchemy",       icon: `${DVI}/sqlalchemy/sqlalchemy-original.svg`,          cat: "Web & Backend" },
  { name: "REST APIs",        icon: "/API.jpg",                                                   cat: "Web & Backend" },
  { name: "Docker",           icon: "/docker.png",                                        cat: "DevOps & Tools" },
  { name: "Git / GitHub",     icon: `${DVI}/git/git-original.svg`,                       cat: "DevOps & Tools" },
  { name: "CI/CD",            icon: `${DVI}/githubactions/githubactions-original.svg`,    cat: "DevOps & Tools" },
  { name: "Vercel",           icon: "/vercel.png",                                        cat: "DevOps & Tools" },
  { name: "Linux",            icon: "/linux.png",                                         cat: "DevOps & Tools" },
  { name: "VS Code",          icon: "/vscode.png",                                        cat: "DevOps & Tools" },
  { name: "Canva",            icon: `${DVI}/canva/canva-original.svg`,                   cat: "Design & Creative" },
  { name: "Photoshop",        icon: `${DVI}/photoshop/photoshop-original.svg`,            cat: "Design & Creative" },
  { name: "Procreate",        icon: "/procreate.png",                                                   cat: "Design & Creative" },
  { name: "Figma",            icon: "/figma.png",                                         cat: "Design & Creative" },
  { name: "Krita",            icon: `${SI}/krita.svg`,                                   cat: "Design & Creative", mono: true },
];

const categories = ["Languages", "AI & ML", "Web & Backend", "DevOps & Tools", "Design & Creative"];

export default function SecretSauce() {
  const { theme } = useTheme();
  const monoFilter = theme === "dark" ? "invert(1)" : "none";

  return (
    <div className="space-y-16 max-w-6xl mx-auto">
      {categories.map(cat => (
        <div key={cat}>
          <div className="flex items-center gap-4 mb-8">
            <p className="font-mono text-xs tracking-[0.4em] uppercase font-bold whitespace-nowrap" style={{ color: "var(--accent)" }}>{cat}</p>
            <div className="flex-1 h-px" style={{ background: "var(--border)" }} />
          </div>
          <div className="flex flex-wrap gap-3">
            {skills.filter(s => s.cat === cat).map((skill) => {
              const link = skillLinks[skill.name];
              const content = (
                <div
                  className="group flex items-center gap-3 px-4 py-3 rounded-xl border transition-all duration-200 cursor-pointer hover:scale-105"
                  style={{ background: "var(--card)", borderColor: "var(--border)" }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLElement).style.borderColor = "var(--accent)";
                    (e.currentTarget as HTMLElement).style.background = "color-mix(in srgb, var(--accent) 8%, var(--card))";
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
                    (e.currentTarget as HTMLElement).style.background = "var(--card)";
                  }}>
                  <img
                      src={skill.icon}
                      alt={skill.name}
                      className="w-6 h-6 object-contain shrink-0"
                      style={(skill as any).mono ? { filter: monoFilter } : undefined}
                      onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = "none"; }}
                    />
                  <span className="text-sm font-medium" style={{ color: "var(--fg2)" }}>{skill.name}</span>
                </div>
              );
              return link ? (
                <a key={skill.name} href={link} target="_blank" rel="noreferrer">{content}</a>
              ) : (
                <div key={skill.name}>{content}</div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}
