"use client";
import { useTheme } from "./ThemeProvider";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiSun, HiMoon } from "react-icons/hi";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Stack", href: "/stack" },
  { label: "Experience", href: "/experience" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar({ active }: { active: string }) {
  const { theme, toggle } = useTheme();

  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-8 md:px-14 py-5 backdrop-blur-xl border-b"
      style={{ background: "color-mix(in srgb, var(--bg) 80%, transparent)", borderColor: "var(--border)" }}>
      
      <a href="/" className="font-black text-xl tracking-tighter uppercase italic transition-colors" style={{ color: "var(--accent)" }}>AK</a>

      <div className="hidden md:flex gap-7 text-[12px] font-mono tracking-[0.15em] items-center">
        {navLinks.map(link => (
          <a key={link.href} href={link.href}
            className="uppercase transition-colors font-semibold"
            style={{ color: active === link.label.toLowerCase() ? "var(--accent)" : "var(--fg2)" }}
            onMouseEnter={e => (e.currentTarget.style.color = "var(--accent)")}
            onMouseLeave={e => (e.currentTarget.style.color = active === link.label.toLowerCase() ? "var(--accent)" : "var(--fg2)")}>
            {link.label}
          </a>
        ))}
      </div>

      <div className="flex items-center gap-4">
        <a href="https://github.com/alizahk" target="_blank" rel="noreferrer" style={{ color: "var(--fg2)" }} className="hover:opacity-100 opacity-60 transition-opacity"><FaGithub size={18} /></a>
        <a href="https://www.linkedin.com/in/alizahkarwani" target="_blank" rel="noreferrer" style={{ color: "var(--fg2)" }} className="hover:opacity-100 opacity-60 transition-opacity"><FaLinkedin size={18} /></a>
        <button onClick={toggle} className="opacity-60 hover:opacity-100 transition-opacity" style={{ color: "var(--fg2)" }}>
          {theme === "dark" ? <HiSun size={18} /> : <HiMoon size={18} />}
        </button>
      </div>
    </nav>
  );
}