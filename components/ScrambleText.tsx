"use client";
import { useEffect, useState } from "react";

const words = ["FULL STACK DEVELOPER", "COLLABORATOR", "BUILDER", "CURIOUS THINKER", "PROBLEM SOLVER", "CONTINOUS LEARNER"];
const chars = "!<>-_\\/[]{}—=+*^?#________";

export default function ScrambleText() {
  const [index, setIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let frame = 0;
    let queue: { from: string; to: string; start: number; end: number; char?: string }[] = [];
    const currentWord = words[index];
    const oldWord = words[index === 0 ? words.length - 1 : index - 1];
    
    const length = Math.max(oldWord.length, currentWord.length);
    for (let i = 0; i < length; i++) {
      const from = oldWord[i] || "";
      const to = currentWord[i] || "";
        const start = Math.floor(Math.random() * 20);
        const end = start + Math.floor(Math.random() * 20);
      queue.push({ from, to, start, end });
    }

    let raf: number;
    const update = () => {
      let output = "";
      let complete = 0;
      for (let i = 0; i < queue.length; i++) {
        let { to, start, end, char } = queue[i];
        if (frame >= end) {
          complete++;
          output += to;
        } else if (frame >= start) {
          if (!char || Math.random() < 0.5) {
            char = chars[Math.floor(Math.random() * chars.length)];
            queue[i].char = char;
          }
          output += `<span style="opacity: 0.5">${char}</span>`;
        } else {
          output += queue[i].from;
        }
      }
      setDisplayText(output);
      if (complete < queue.length) {
        frame++;
        raf = requestAnimationFrame(update);
      } else {
          setTimeout(() => setIndex((prev) => (prev + 1) % words.length), 1400);
      }
    };

    raf = requestAnimationFrame(update);
    return () => cancelAnimationFrame(raf);
  }, [index]);

  return (
    <div className="font-mono font-bold text-white">
      <p className="text-sm mb-1 tracking-[0.3em] uppercase opacity-90">I AM A</p>
      <h1 
        className="text-4xl md:text-6xl text-blue-500" 
        style={{ minHeight: '1.2em' }}
        dangerouslySetInnerHTML={{ __html: displayText }} 
      />
    </div>
  );
}