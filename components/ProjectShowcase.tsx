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
        <div key={i} className={`flex flex-col ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 items-stretch`}>
          <div className={`w-full md:w-3/5 aspect-video bg-gradient-to-br ${p.color} to-black border border-white/10 rounded-[2.5rem] relative overflow-hidden group shadow-2xl p-6 flex items-center`}>
             <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-all duration-700" />
             <div className="absolute top-8 left-8 text-white/30 text-2xl font-black italic uppercase">{p.category}</div>
             <div className="relative z-10 w-full flex gap-6 items-center">
               <div className="w-1/2 bg-white/5 rounded-lg p-4 flex items-center justify-center">
                 <div className="w-full h-40 bg-white/6 rounded-md flex items-center justify-center text-white/20">Image</div>
               </div>
               <div className="w-1/2 text-white/80">
                 <h4 className="text-xl font-bold mb-2">Overview</h4>
                 <p className="text-sm leading-relaxed">{p.desc} This project included end-to-end implementation, testing, and deployment, focusing on maintainable code and clear UX.</p>
                 <div className="mt-4 text-xs text-white/60 space-y-1">
                   {p.tags.map((t) => <div key={t}>• {t}</div>)}
                 </div>
               </div>
             </div>
          </div>
          <div className="w-full md:w-2/5 p-6 flex flex-col justify-center bg-white/2 border border-white/6 rounded-2xl">
            <h3 className="text-3xl md:text-4xl font-bold italic tracking-tighter mb-4">{p.title}</h3>
            <p className="text-white/60 text-base leading-relaxed mb-4">{p.desc}</p>
            <ul className="text-sm text-white/60 space-y-2 mb-4">
              <li>• Role: Lead developer</li>
              <li>• Highlights: Architecture, deployment, model integration</li>
              <li>• Timeframe: 8 weeks</li>
            </ul>
            <div className="flex gap-3 flex-wrap mt-auto">
              {p.tags.map(t => <span key={t} className="px-3 py-1 border border-white/10 rounded-full text-[11px] font-mono uppercase bg-white/5">{t}</span>)}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
