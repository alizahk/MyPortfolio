export default function BentoGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* MAIN BLOCK: AI */}
      <div className="md:col-span-2 bg-gradient-to-br from-pink-500/10 to-transparent border border-pink-500/20 rounded-[2rem] p-10 group hover:border-pink-500 transition-all">
        <h3 className="text-3xl font-bold italic mb-4">AI & Machine Learning</h3>
        <p className="text-lg text-white/70 leading-relaxed mb-6">
          Developing intelligent systems using RAG, NLP, and model evaluation techniques to detect ADR in elderly patients and optimize scholarship searches.
        </p>
        <div className="flex flex-wrap gap-2">
          {['Python', 'Flask', 'Prompt Engineering', 'Data Pipelines'].map(skill => (
            <span key={skill} className="bg-pink-500/20 text-pink-300 text-xs px-3 py-1 rounded-full border border-pink-500/30">{skill}</span>
          ))}
        </div>
      </div>

      {/* SMALL BLOCK: INFRA */}
      <div className="bg-white/5 border border-white/10 rounded-[2rem] p-8 flex flex-col justify-between">
        <h3 className="text-xl font-bold uppercase italic opacity-50 tracking-tighter">Infrastructure</h3>
        <p className="text-sm font-light text-white/80 leading-relaxed">Docker, CI/CD, Linux/Unix, DNS Management, M365 Administration.</p>
      </div>

      {/* NEXT BLOCK: WEB */}
      <div className="bg-white/5 border border-white/10 rounded-[2rem] p-8 flex flex-col justify-between hover:bg-white/[0.08] transition-all">
        <h3 className="text-xl font-bold uppercase italic opacity-50 tracking-tighter">Development</h3>
        <p className="text-sm font-light text-white/80 leading-relaxed">Next.js, React, Java, C++, SQL, API Integration, Unit Testing.</p>
      </div>

      {/* LARGE BLOCK: DESIGN */}
      <div className="md:col-span-2 bg-gradient-to-r from-blue-500/10 to-transparent border border-blue-500/20 rounded-[2rem] p-10 flex flex-col md:flex-row justify-between items-end">
        <div>
          <h3 className="text-3xl font-bold italic mb-2 tracking-tighter uppercase">Technical Design</h3>
          <p className="text-sm font-light text-white/80 leading-relaxed max-w-sm">Precision modeling with AutoCAD and Autodesk Inventor, combined with clean LaTeX documentation.</p>
        </div>
        <div className="text-6xl font-black italic opacity-10">CAD</div>
      </div>
    </div>
  );
}
