const experiences = [
  {
    year: "2025",
    role: "AI Developer / Lead",
    company: "Bloomfund (Anthropic Hackathon)",
    desc: "Led full-stack development of an AI platform using Next.js and Supabase. Implemented LLM-driven scholarship matching and secure container data flow."
  },
  {
    year: "2025",
    role: "STEM Fellowship Finalist",
    company: "University of Toronto (IUBDC)",
    desc: "3rd place out of 45 teams. Developed a machine learning project using NLP to detect adverse drug reactions in elderly patients."
  },
  {
    year: "2024",
    role: "IT & Web Administrator",
    company: "Huda Law",
    desc: "Managed DNS, M365, and email authentication (DMARC/DKIM/SPF) to secure firm communications."
  },
  {
    year: "2022-24",
    role: "Literacy Tutor",
    company: "Agincourt Public Library",
    desc: "Assessed reading levels and created personalized lesson plans for students to build academic confidence."
  }
];

export default function Timeline() {
  return (
    <div className="space-y-24 max-w-5xl mx-auto">
      {experiences.map((exp, i) => (
        <div key={i} className="group relative flex gap-12">
          <div className="text-4xl font-bold italic text-white/10 group-hover:text-pink-500/40 transition-colors w-32 shrink-0">
            {exp.year}
          </div>
          <div className="border-l border-white/10 pl-12 pb-12 relative">
            <div className="absolute -left-[5px] top-2 h-2 w-2 rounded-full bg-pink-500 shadow-[0_0_10px_#db2777]" />
            <h3 className="text-3xl font-bold italic tracking-tighter uppercase mb-2">{exp.role}</h3>
            <p className="text-pink-500 font-mono text-xs mb-4 uppercase tracking-widest">{exp.company}</p>
            <p className="text-white/60 text-base leading-relaxed font-light max-w-2xl">{exp.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
