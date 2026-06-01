"use client";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useEffect, useState } from "react";

export default function Footer() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 400);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {show && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-8 right-8 z-50 w-10 h-10 rounded-full border flex items-center justify-center text-sm font-bold transition-all hover:scale-110"
          style={{ background: "var(--accent)", color: "#0d0d0d", borderColor: "var(--accent)" }}>
          ↑
        </button>
      )}

      <footer className="relative z-20 pt-16 pb-10 px-8 md:px-14 border-t" style={{ borderColor: "var(--border)", background: "color-mix(in srgb, var(--bg) 95%, transparent)" }}>
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
            <div>
              <div className="font-black text-2xl tracking-tighter uppercase italic mb-2" style={{ color: "var(--accent)" }}>AK</div>
              <p className="text-sm leading-relaxed mb-3" style={{ color: "var(--fg2)" }}>Full-Stack Developer, Creative Technologist, in Guelph, Ontario.</p>
              <p className="font-mono text-xs" style={{ color: "var(--fg2)" }}>Built by Alizah Karwani</p>
            </div>

            <div>
              <p className="font-mono text-[10px] tracking-[0.4em] uppercase mb-4 font-bold" style={{ color: "var(--accent)" }}>Navigation</p>
              <div className="flex flex-col gap-2">
                {[
                  { label: "Home", href: "/" },
                  { label: "Stack", href: "/stack" },
                  { label: "Experience", href: "/experience" },
                  { label: "Projects", href: "/projects" },
                  { label: "Contact", href: "/contact" },
                  { label: "Resume", href: "/contact" },
                ].map(link => (
                  <a key={link.label} href={link.href}
                    className="text-sm transition-colors hover:underline underline-offset-4"
                    style={{ color: "var(--fg2)" }}
                    onMouseEnter={e => (e.currentTarget.style.color = "var(--accent)")}
                    onMouseLeave={e => (e.currentTarget.style.color = "var(--fg2)")}>
                    {link.label}
                  </a>
                ))}
              </div>
            </div>

            <div>
              <p className="font-mono text-[10px] tracking-[0.4em] uppercase mb-4 font-bold" style={{ color: "var(--accent)" }}>Get In Touch</p>
              <a href="mailto:alizahh33@gmail.com"
                className="text-sm block mb-2 transition-colors hover:underline underline-offset-4"
                style={{ color: "var(--fg2)" }}
                onMouseEnter={e => (e.currentTarget.style.color = "var(--accent)")}
                onMouseLeave={e => (e.currentTarget.style.color = "var(--fg2)")}>
                alizahh33@gmail.com
              </a>
              <div className="flex gap-3 mt-4">
                <a href="https://github.com/alizahk" target="_blank" rel="noreferrer" className="opacity-50 hover:opacity-100 transition-opacity" style={{ color: "var(--fg)" }}><FaGithub size={20} /></a>
                <a href="https://www.linkedin.com/in/alizahkarwani" target="_blank" rel="noreferrer" className="opacity-50 hover:opacity-100 transition-opacity" style={{ color: "var(--fg)" }}><FaLinkedin size={20} /></a>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center gap-3 pt-8 border-t" style={{ borderColor: "var(--border)" }}>
            <p className="font-mono text-[10px] tracking-[0.3em] uppercase" style={{ color: "var(--fg2)", opacity: 0.5 }}>© 2026 Guelph, Ontario</p>
            <p className="font-mono text-[10px] tracking-[0.3em] uppercase" style={{ color: "var(--fg2)", opacity: 0.5 }}>alizahh33@gmail.com</p>
            <a href="/contact"
              className="font-mono text-[10px] tracking-[0.3em] uppercase transition-colors hover:underline underline-offset-4"
              style={{ color: "var(--accent)", opacity: 0.8 }}>
              Contact Me →
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}