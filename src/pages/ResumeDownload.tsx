import React, { useEffect, useRef } from "react";
import { exportElementToPdf } from "@/lib/pdf";

const ResumeDownload = () => {
  useEffect(() => {
    document.title = "Resume — Billy";
  }, []);

  const skills = [
    "Flutter",
    "Kotlin",
    "Firebase",
    "React",
    "TypeScript",
    "Node.js",
    "React Query",
    "Tailwind CSS",
    "Radix UI",
    "shadcn/ui",
    "Vite"
  ];
  const contentRef = useRef<HTMLDivElement | null>(null);

  // Auto-generate PDF when opened with ?download=1
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const shouldDownload = params.get("download") === "1";
    if (shouldDownload) {
      setTimeout(() => {
        if (contentRef.current) {
          exportElementToPdf("Billy_Resume.pdf", contentRef.current);
        }
      }, 300);
    }
  }, []);

  return (
    <div className="mx-auto max-w-3xl p-6 print:p-0">
      <div className="flex items-center justify-between mb-6 print:mb-4">
        <div>
          <h1 className="text-3xl font-bold">Billy</h1>
          <p className="text-muted-foreground">Software Engineer</p>
          <div className="text-sm text-muted-foreground mt-1 space-x-3">
            <a href="https://www.linkedin.com/in/bildad-mwangi-a75a4636b" className="underline">LinkedIn</a>
            <a href="https://github.com/gichigig" className="underline">GitHub</a>
            <a href="https://x.com/joyshikuy" className="underline">Twitter</a>
          </div>
        </div>
        <div className="hidden print:hidden md:flex gap-2">
          <button
            onClick={() => contentRef.current && exportElementToPdf("Billy_Resume.pdf", contentRef.current)}
            className="px-4 py-2 rounded border text-sm"
          >
            Download PDF
          </button>
          <button
            onClick={() => window.print()}
            className="px-4 py-2 rounded border text-sm"
          >
            Print
          </button>
        </div>
      </div>

      <div ref={contentRef}>
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Professional Summary</h2>
        <p className="text-sm text-muted-foreground leading-relaxed">
          Graduate Software Engineer with 3 years of professional experience plus a 1‑year internship across
          cross‑platform mobile and modern web applications. Strengths in Flutter/Kotlin, React/TypeScript, and
          Firebase (Auth, Firestore, Functions), with a keen eye for performance, accessibility, and clean architecture.
          Comfortable collaborating end‑to‑end with designers and backend engineers to deliver user‑focused features.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Skills</h2>
        <div className="flex flex-wrap gap-2 text-sm">
          {skills.map((s) => (
            <span key={s} className="px-2 py-1 border rounded">{s}</span>
          ))}
        </div>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Experience</h2>
        <div className="space-y-4 text-sm">
          <div>
            <div className="font-medium">Software Engineer — TechFlow Solutions</div>
            <div className="text-muted-foreground">2022 – Present</div>
            <ul className="list-disc ml-5 mt-1 space-y-1">
              <li>Shipped end‑to‑end features in Flutter/Kotlin and React/TypeScript, from discovery to production.</li>
              <li>Integrated Firebase (Auth, Firestore, Cloud Functions) for secure, real‑time experiences.</li>
              <li>Improved performance and UX with thoughtful refactors, state management, and design‑system use.</li>
              <li>Reviewed code, wrote documentation, and collaborated closely with design and backend.</li>
            </ul>
          </div>
          <div>
            <div className="font-medium">Software Engineering Intern — Innovation Labs</div>
            <div className="text-muted-foreground">2021 – 2022</div>
            <ul className="list-disc ml-5 mt-1 space-y-1">
              <li>Built reusable Flutter UI components and implemented data flows with Firebase.</li>
              <li>Contributed to feature delivery, bug fixes, and documentation across the codebase.</li>
              <li>Participated in reviews and learned team practices for quality and maintainability.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Selected Projects</h2>
        <div className="text-sm space-y-3">
          <div>
            <div className="font-medium">MindFlow</div>
            <p className="text-muted-foreground">Mindfulness app built with Flutter and Firebase for tracking meditation habits with smooth animations and progress insights.</p>
            <p className="text-muted-foreground"><span className="font-medium">Tech:</span> Flutter, Firebase, Dart</p>
          </div>
          <div>
            <div className="font-medium">CodePoetry</div>
            <p className="text-muted-foreground">Open‑source platform where developers share elegant code snippets as poetry. Built for a delightful reading experience.</p>
            <p className="text-muted-foreground"><span className="font-medium">Tech:</span> React, Node.js, TypeScript</p>
          </div>
          <div>
            <div className="font-medium">KotlinCraft</div>
            <p className="text-muted-foreground">Kotlin learning app featuring interactive tutorials and code challenges to accelerate learning.</p>
            <p className="text-muted-foreground"><span className="font-medium">Tech:</span> Kotlin, Android, Firebase</p>
          </div>
          <div>
            <div className="font-medium">DevTunes</div>
            <p className="text-muted-foreground">A Spotify‑like app for discovering coding music, focus playlists, and productivity soundscapes.</p>
            <p className="text-muted-foreground"><span className="font-medium">Tech:</span> Flutter, REST APIs, UI/UX</p>
          </div>
        </div>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Education</h2>
        <p className="text-sm text-muted-foreground">
          Diploma in Software Engineering — Zetech University
        </p>
      </section>

      <footer className="text-xs text-muted-foreground mt-8 print:mt-4">
        References available upon request.
      </footer>
      </div>
    </div>
  );
};

export default ResumeDownload;
