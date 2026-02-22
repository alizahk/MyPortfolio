"use client";
import { useEffect, useState } from "react";
import Scene from "@/components/Scene";
import ScrambleText from "@/components/ScrambleText";
import BentoGrid from "@/components/BentoGrid";
import Timeline from "@/components/Timeline";
import SecretSauce from "@/components/SecretSauce";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Home() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMove = (e: MouseEvent) => setMousePos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden bg-[#050505] text-white selection:bg-blue-500/30">
      
      {/* BACKGROUND: GRID */}
      <div 
        className="fixed inset-0 z-0 opacity-10 pointer-events-none"
        style={{ 
          backgroundImage: `linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)`, 
          backgroundSize: '50px 50px' 
        }}
      />

      {/* BACKGROUND: DYNAMIC BLUE GLOW */}
      <div 
        className="fixed pointer-events-none z-0 h-[800px] w-[800px] rounded-full bg-blue-600/25 blur-[120px] transition-transform duration-500 ease-out"
        style={{ 
          transform: `translate(${mousePos.x - 400}px, ${mousePos.y - 400}px)` 
        }}
      />

      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-10 py-8 bg-black/20 backdrop-blur-md border-b border-white/5">
        <div className="flex items-center gap-4">
          <div className="font-black text-2xl tracking-tighter uppercase italic text-white hover:text-blue-500 transition-colors cursor-pointer">
            ALIZAHK
          </div>
          <div className="flex gap-3 items-center ml-2">
            <a href="https://github.com/alizahk" target="_blank" rel="noreferrer" className="opacity-70 hover:opacity-100 transition-opacity">
              <FaGithub size={18} />
            </a>
            <a href="https://www.linkedin.com/in/alizahkarwani" target="_blank" rel="noreferrer" className="opacity-70 hover:opacity-100 transition-opacity">
              <FaLinkedin size={18} />
            </a>
          </div>
        </div>
        <div className="hidden md:flex gap-8 text-[11px] font-mono tracking-[0.2em] items-center">
          <a href="#expertise" className="hover:text-blue-400 transition-colors uppercase">Expertise</a>
          <a href="#experience" className="hover:text-blue-400 transition-colors uppercase">Experience</a>
          <a href="#projects" className="hover:text-blue-400 transition-colors uppercase">Projects</a>
          <a href="mailto:aalizah29@gmail.com" className="bg-white text-black px-5 py-2 rounded-full font-bold hover:bg-blue-600 hover:text-white transition-all">CONTACT</a>
        </div>
      </nav>

      {/* SECTION 1: HERO */}
      <section className="relative h-screen w-full flex items-center px-10 md:px-32 overflow-hidden">
        {/* TEXT CONTENT CONTAINER */}
        <div className="z-20 w-full md:w-3/5 flex flex-col justify-center mt-10">
          <p className="text-white font-mono font-bold text-sm mb-1 tracking-[0.3em] uppercase opacity-90">
            Hi, I'm
          </p>
          
          <h1 className="text-4xl md:text-5xl font-bold tracking-tighter leading-tight mb-6 whitespace-nowrap">
            Alizah Karwani
          </h1>

          <div className="mb-8">
            <ScrambleText />
          </div>

          <div className="flex flex-col gap-2 mb-10 border-l-2 border-blue-500 pl-5">
            <p className="text-lg md:text-xl font-semibold tracking-tight text-white/95 leading-snug">
              Computer Science (Co-op) Honors @ University of Guelph
            </p>
            <p className="text-xs md:text-sm font-mono tracking-widest text-blue-400 uppercase font-bold">
              Full-Stack Developer & Creative Technologist
            </p>
          </div>

          <p className="max-w-md text-white/60 text-base md:text-lg leading-relaxed font-light">
            At the intersection of <span className="text-blue-400 font-bold">full stack development</span> and <span className="text-blue-400 font-bold">AI</span>, I build <span className="text-blue-400 font-bold">intelligent, scalable systems</span>, 
            from backend architecture to <span className="text-blue-400 font-bold">pixel perfect interfaces</span>, guided by curiosity, creativity, and 
            a passion for problem solving and <span className="text-blue-400 font-bold">impact driven technology</span>. I enjoy experimenting with 
            new tools, developing <span className="text-blue-400 font-bold">LLM powered applications</span> and interactive web experiences, 
            and continuously growing as a programmer and collaborator.
          </p>
        </div>

        {/* HERO IMAGE: THE PHYSICS CARD */}
        <div className="absolute right-0 top-0 h-full w-full md:w-1/2 z-30 pointer-events-none">
          <div className="h-full w-full pointer-events-auto">
             <Scene />
          </div>
        </div>
      </section>

      {/* SECTION 2: EXPERTISE */}
      <section id="expertise" className="relative z-20 py-40 px-10 md:px-32 bg-black/40 border-t border-white/5">
        <div className="text-center mb-20">
          <span className="text-blue-500 font-mono text-xs tracking-[0.5em] uppercase mb-4 block">Skills</span>
          <h2 className="text-5xl font-bold italic tracking-tighter uppercase">Tech Stack</h2>
        </div>
        <SecretSauce />
      </section>

      {/* SECTION 3: EXPERIENCE */}
      <section id="experience" className="relative z-20 py-40 px-10 md:px-32">
        <div className="mb-20">
           <span className="text-blue-500 font-mono text-xs tracking-[0.5em] uppercase mb-4 block">/ 02 Experience</span>
           <h2 className="text-5xl font-bold italic tracking-tighter uppercase">Work History</h2>
        </div>
        <Timeline />
      </section>

      {/* SECTION 4: PROJECTS */}
      <section id="projects" className="relative z-20 py-40 px-10 md:px-32 bg-black/40 border-t border-white/5">
        <div className="flex justify-between items-end mb-20">
          <h2 className="text-5xl font-bold italic tracking-tighter uppercase">Selected Works</h2>
          <div className="hidden md:flex gap-4 text-white/20 font-mono text-[10px]">
            <span>#TECH</span> <span>#DESIGN</span> <span>#RESEARCH</span>
          </div>
        </div>
        <BentoGrid />
      </section>

      {/* FOOTER */}
      <footer className="relative z-20 py-20 px-10 md:px-32 border-t border-white/5 bg-black flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-center md:text-left">
          <div className="font-black text-xl tracking-tighter uppercase italic mb-2">ALIZAHK</div>
          <p className="text-white/20 font-mono text-[9px] tracking-[0.4em] uppercase">© 2026 GUELPH, ONTARIO</p>
        </div>
        <div className="flex gap-6 opacity-30">
          <a href="https://github.com/alizahk" target="_blank" className="hover:text-blue-500 transition-colors"><FaGithub size={24}/></a>
          <a href="https://www.linkedin.com/in/alizahkarwani" target="_blank" className="hover:text-blue-500 transition-colors"><FaLinkedin size={24}/></a>
        </div>
      </footer>
    </main>
  );
}