export default function BentoGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* MAIN BLOCK: AI */}
      <div className="md:col-span-2 bg-gradient-to-br from-pink-500/10 to-transparent border border-pink-500/20 rounded-[2rem] p-10 group hover:border-pink-500 transition-all">
        <h3 className="text-3xl font-bold italic mb-4">AI & Machine Learning</h3>
        <p className="text-lg text-white/70 leading-relaxed mb-4">
          Building production-ready AI features and research prototypes using LLMs, model evaluation, and scalable data pipelines. Projects include LLM-driven scholarship matching and ADR detection in healthcare datasets.
        </p>
        <p className="text-sm text-white/60 leading-relaxed mb-4">Typical responsibilities: designing backend architectures, containerized data flows, prompt engineering, and integrating models into user-facing applications.</p>
        <div className="flex flex-wrap gap-2">
          {['Python', 'Next.js', 'Supabase', 'Docker', 'Data Pipelines'].map(skill => (
            <span key={skill} className="bg-pink-500/20 text-pink-300 text-xs px-3 py-1 rounded-full border border-pink-500/30">{skill}</span>
          ))}
        </div>
      </div>

      {/* SMALL BLOCK: INFRA */}
      <div className="bg-white/5 border border-white/10 rounded-[2rem] p-8 flex flex-col justify-between">
        <h3 className="text-xl font-bold uppercase italic opacity-50 tracking-tighter">Infrastructure</h3>
        <p className="text-sm text-white/70 leading-relaxed mb-3">Design and maintain reliable infrastructure for web and AI applications, from DNS and email auth to container orchestration and deployments.</p>
        <ul className="text-sm text-white/70 space-y-1">
          <li>• Containerization & CI/CD: Docker, CI pipelines, deployment automation</li>
          <li>• Cloud & Hosting: Vercel deployments, Supabase hosting, platform integrations</li>
          <li>• Ops & Admin: DNS, DKIM/SPF/DMARC, Microsoft 365 administration</li>
        </ul>
      </div>

      {/* NEXT BLOCK: WEB */}
      <div className="bg-white/5 border border-white/10 rounded-[2rem] p-8 flex flex-col justify-between hover:bg-white/[0.08] transition-all">
        <h3 className="text-xl font-bold uppercase italic opacity-50 tracking-tighter">Development</h3>
        <p className="text-sm text-white/70 leading-relaxed mb-3">Full-stack development experience building responsive web apps, APIs, and interactive experiences with a focus on maintainability and performance.</p>
        <ul className="text-sm text-white/70 space-y-1">
          <li>• Web: Next.js, React, responsive layouts, accessibility</li>
          <li>• Backend & Data: Node, SQL, Supabase, API integration</li>
          <li>• Testing & Tools: Unit testing, Git workflows, VS Code, GitHub</li>
        </ul>
      </div>

      {/* LARGE BLOCK: DESIGN */}
        <div className="md:col-span-2 bg-gradient-to-r from-blue-500/10 to-transparent border border-blue-500/20 rounded-[2rem] p-10 grid md:grid-cols-2 gap-6 items-start">
          <div>
            <h3 className="text-3xl font-bold italic mb-4 tracking-tighter uppercase">Technical Design</h3>
            <p className="text-white/70 text-base leading-relaxed mb-4 max-w-lg">I combine precise CAD modeling with production-aware documentation to deliver fabrication-ready designs, clear assembly instructions, and reproducible manufacturing files. My process emphasizes accuracy, iteration, and readable deliverables so engineers and fabricators can build with confidence.</p>

            <ul className="text-sm text-white/70 space-y-2">
              <li>• AutoCAD & Inventor: detailed part + assembly modeling</li>
              <li>• Documentation: LaTeX reports, annotated drawings, and versioned assets</li>
            </ul>
          </div>

          <div className="bg-white/3 border border-white/5 rounded-xl p-4">
            <h4 className="text-sm font-mono text-white/60 mb-3">Recent Design Highlights</h4>
            <div className="space-y-3">
              <div className="bg-white/5 p-3 rounded-md">
                <p className="text-sm text-white/80">Laneway Suite — 1:50 scale model + AutoCAD construction drawings for zoning submission.</p>
              </div>
              
            </div>
          </div>
        </div>
    </div>
  );
}
