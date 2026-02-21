export default function SecretSauce() {
  const skills = [
    { name: "Docker", icon: "/docker.png" },
    { name: "Figma", icon: "/figma.png" },
    { name: "React", icon: "/reactjs.png" },
    { name: "JavaScript", icon: "/javascript.png" },
    { name: "C++", icon: "/C++.png" },
    { name: "Supabase", icon: "/supabase.png" },
    { name: "Vercel", icon: "/vercel.png" },
    { name: "Next.js", icon: "/nextjs.png" },
    { name: "SQL", icon: "/SQL.png" },
    { name: "AutoCAD", icon: "/autocad.png" },
    { name: "Linux", icon: "/linux.png" },
    { name: "Java", icon: "/java.png" },
    { name: "Python", icon: "/python" },
    { name: "VS Code", icon: "/vscode.png" }
  ];

  return (
    <div className="text-center">
      <h3 className="font-mono text-sm mb-12 tracking-[0.3em] uppercase opacity-90">The technical foundation behind my development and design projects</h3>

      <div className="grid grid-cols-4 sm:grid-cols-7 gap-4 max-w-5xl mx-auto px-6">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="w-full h-24 bg-white/[0.03] border border-white/10 rounded-2xl flex flex-col items-center justify-center group hover:bg-pink-500/20 hover:border-pink-500/50 transition-all duration-300 p-2"
            title={skill.name}
          >
            <img
              src={skill.icon}
              alt={skill.name}
              className="w-10 h-10 object-contain mb-2"
              onError={(e) => {(e.currentTarget as HTMLImageElement).style.display = 'none';}}
            />
            <span className="text-xs font-mono text-white/70 group-hover:text-white uppercase">{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
