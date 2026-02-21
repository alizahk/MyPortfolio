export default function SkillsIcons() {
  const logos = [
    { name: "React", url: "/logos/react.svg" },
    { name: "Next.js", url: "/logos/next.svg" },
    { name: "Python", url: "/logos/python.svg" },
    // Add all logos from your resume here
  ];

  return (
    <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto opacity-70">
      {Array.from({ length: 24 }).map((_, i) => (
        <div key={i} className="w-16 h-16 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center grayscale hover:grayscale-0 hover:bg-white/10 hover:scale-110 transition-all cursor-pointer">
          <div className="w-8 h-8 bg-white/10 rounded-sm" /> {/* Replace with <img src={logo.url} /> */}
        </div>
      ))}
    </div>
  );
}