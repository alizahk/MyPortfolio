"use client";
import InnerLayout from "@/components/InnerLayout";
import { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail, MdContentCopy, MdCheck } from "react-icons/md";

export default function ContactPage() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("alizahh33@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <InnerLayout active="contact">
      <section className="pt-40 pb-32 px-8 md:px-14">
        <div className="max-w-4xl mx-auto">

          <span className="font-mono text-xs tracking-[0.4em] uppercase mb-4 block font-bold" style={{ color: "var(--accent)" }}>Contact Info</span>
          <h1 className="text-5xl md:text-6xl font-black tracking-tighter mb-4" style={{ color: "var(--fg)" }}>I'm open<br />to connect!</h1>
          <p className="text-lg mb-16 max-w-xl" style={{ color: "var(--fg2)" }}>Open to co-op opportunities, collaborations, and conversations about tech, AI, and design.</p>

          {/* CONTACT CARDS */}
          <div className="grid md:grid-cols-3 gap-4 mb-16">
            <button onClick={copyEmail}
              className="group flex flex-col items-start gap-3 p-6 rounded-2xl border transition-all hover:scale-105 text-left"
              style={{ background: "var(--card)", borderColor: "var(--border)" }}
              onMouseEnter={e => (e.currentTarget as HTMLElement).style.borderColor = "var(--accent)"}
              onMouseLeave={e => (e.currentTarget as HTMLElement).style.borderColor = "var(--border)"}>
              <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: "color-mix(in srgb, var(--accent) 15%, transparent)" }}>
                {copied ? <MdCheck size={20} style={{ color: "var(--accent)" }} /> : <MdEmail size={20} style={{ color: "var(--accent)" }} />}
              </div>
              <div>
                <p className="font-bold text-sm mb-1" style={{ color: "var(--fg)" }}>{copied ? "Copied!" : "Email"}</p>
                <p className="text-xs font-mono" style={{ color: "var(--fg2)" }}>alizahh33@gmail.com</p>
                <p className="text-xs font-mono mt-1 opacity-50" style={{ color: "var(--fg2)" }}>Click to copy</p>
              </div>
            </button>

            <a href="https://www.linkedin.com/in/alizahkarwani" target="_blank" rel="noreferrer"
              className="flex flex-col items-start gap-3 p-6 rounded-2xl border transition-all hover:scale-105"
              style={{ background: "var(--card)", borderColor: "var(--border)" }}
              onMouseEnter={e => (e.currentTarget as HTMLElement).style.borderColor = "var(--accent)"}
              onMouseLeave={e => (e.currentTarget as HTMLElement).style.borderColor = "var(--border)"}>
              <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: "color-mix(in srgb, var(--accent) 15%, transparent)" }}>
                <FaLinkedin size={20} style={{ color: "var(--accent)" }} />
              </div>
              <div>
                <p className="font-bold text-sm mb-1" style={{ color: "var(--fg)" }}>LinkedIn</p>
                <p className="text-xs font-mono" style={{ color: "var(--fg2)" }}>alizahkarwani</p>
                <p className="text-xs font-mono mt-1 opacity-50" style={{ color: "var(--fg2)" }}>Connect with me →</p>
              </div>
            </a>

            <a href="https://github.com/alizahk" target="_blank" rel="noreferrer"
              className="flex flex-col items-start gap-3 p-6 rounded-2xl border transition-all hover:scale-105"
              style={{ background: "var(--card)", borderColor: "var(--border)" }}
              onMouseEnter={e => (e.currentTarget as HTMLElement).style.borderColor = "var(--accent)"}
              onMouseLeave={e => (e.currentTarget as HTMLElement).style.borderColor = "var(--border)"}>
              <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: "color-mix(in srgb, var(--accent) 15%, transparent)" }}>
                <FaGithub size={20} style={{ color: "var(--accent)" }} />
              </div>
              <div>
                <p className="font-bold text-sm mb-1" style={{ color: "var(--fg)" }}>GitHub</p>
                <p className="text-xs font-mono" style={{ color: "var(--fg2)" }}>alizahk</p>
                <p className="text-xs font-mono mt-1 opacity-50" style={{ color: "var(--fg2)" }}>See my work →</p>
              </div>
            </a>
          </div>

          {/* RESUME */}
          <div className="flex items-center justify-between p-8 rounded-2xl border"
            style={{ background: "var(--card)", borderColor: "var(--border)" }}>
            <div>
              <h3 className="font-bold text-lg mb-1" style={{ color: "var(--fg)" }}>My Resume</h3>
              <p className="text-sm" style={{ color: "var(--fg2)" }}>Click here to download a copy.</p>
            </div>
            <a href="/Alizah_Karwani_Resume.pdf" target="_blank" download="Alizah_Karwani_Resume.pdf"
              className="px-6 py-3 rounded-full font-bold text-sm transition-all hover:scale-105 whitespace-nowrap"
              style={{ background: "var(--accent)", color: "#0d0d0d" }}>
              Download ↓
            </a>
          </div>
        </div>
      </section>
    </InnerLayout>
  );
}