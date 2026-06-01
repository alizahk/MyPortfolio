export default function ProjectShowcase() {
  const projects = [
    {
      title: "Bloomfund AI",
      category: "Tech / AI",
      desc: "An AI-powered scholarship platform built for the Anthropic AI Hackathon.",
      tags: ["Next.js", "Supabase", "LLMs"],
      color: "from-pink-500/40"
    },
    {
      title: "Laneway Suite",
      category: "Architecture",
      desc: "1:50 scale wooden model and AutoCAD drafting for Toronto residential zoning.",
      tags: ["AutoCAD", "Inventor", "Hand-Drafting"],
      color: "from-blue-500/40"
    },
    {
      title: "Cancer Kids First",
      category: "Fine Art",
      desc: "Digital and handmade artwork for pediatric cancer patients.",
      tags: ["Illustration", "UI Design", "Visual Arts"],
      color: "from-purple-500/40"
    }
  ];

  return (
    <div className="space-y-40">
      {projects.map((p, i) => (
        <div key={i} className={`flex flex-col ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 items-center`}>
          <div className={`w-full md:w-3/5 aspect-video bg-gradient-to-br ${p.color} to-black border border-white/10 rounded-[2.5rem] relative overflow-hidden group shadow-2xl`}>
             <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-all duration-700" />
             <div className="absolute top-10 left-10 text-white/20 text-6xl font-black italic uppercase">{p.category}</div>
             {/* IMAGE PLACEHOLDER */}
             <div className="absolute inset-0 flex items-center justify-center text-white/10 font-mono italic uppercase tracking-widest">Project Visual Goes Here</div>
          </div>
          <div className="w-full md:w-2/5 p-6">
            <h3 className="text-4xl md:text-6xl font-black italic uppercase tracking-tighter mb-4">{p.title}</h3>
            <p className="text-white/60 text-base md:text-lg leading-relaxed font-light mb-8">{p.desc}</p>
            <div className="flex gap-3 flex-wrap">
              {p.tags.map(t => <span key={t} className="px-4 py-2 border border-white/10 rounded-full text-[10px] font-mono uppercase bg-white/5"># {t}</span>)}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
