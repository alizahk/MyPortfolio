"use client";
import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ScrollProgress from "./ScrollProgress";

interface InnerLayoutProps {
  children: React.ReactNode;
  active: string;
}

export default function InnerLayout({ children, active }: InnerLayoutProps) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMove = (e: MouseEvent) => setMousePos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden noise-bg" style={{ background: "var(--bg)" }}>
      <ScrollProgress />

      {/* GRID */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-[0.04]"
        style={{ backgroundImage: `linear-gradient(var(--accent) 1px, transparent 1px), linear-gradient(90deg, var(--accent) 1px, transparent 1px)`, backgroundSize: '70px 70px' }} />

      {/* MOUSE GLOW */}
      <div className="fixed pointer-events-none z-0 h-[700px] w-[700px] rounded-full blur-[120px] transition-transform duration-700 ease-out opacity-20"
        style={{ background: `radial-gradient(circle, var(--accent), transparent 70%)`, transform: `translate(${mousePos.x - 350}px, ${mousePos.y - 350}px)` }} />

      {/* AMBIENT */}
      <div className="fixed top-[-150px] right-[-150px] w-[600px] h-[600px] rounded-full pointer-events-none z-0 opacity-10"
        style={{ background: "radial-gradient(circle, var(--accent), transparent 70%)", filter: "blur(80px)" }} />
      <div className="fixed bottom-[-150px] left-[-150px] w-[500px] h-[500px] rounded-full pointer-events-none z-0 opacity-5"
        style={{ background: "radial-gradient(circle, var(--accent), transparent 70%)", filter: "blur(100px)" }} />

      <Navbar active={active} />
      <div className="relative z-10">{children}</div>
      <Footer />
    </main>
  );
}