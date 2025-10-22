import React, { useEffect, useRef } from "react";
import { exportElementToPdf } from "@/lib/pdf";

const CVDownload = () => {
  useEffect(() => {
    document.title = "CV — Billy";
    // Auto-generate PDF when opened with ?download=1
    const params = new URLSearchParams(window.location.search);
    const shouldDownload = params.get("download") === "1";
    if (shouldDownload) {
      // Give the page a moment to render before capturing
      setTimeout(() => {
        if (contentRef.current) {
          exportElementToPdf("Billy_CV.pdf", contentRef.current);
        }
      }, 300);
    }
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
  const tools = ["Git", "CI/CD", "REST", "GraphQL", "Testing", "Vite"];
  const contentRef = useRef<HTMLDivElement | null>(null);

  return (
    <div className="mx-auto max-w-3xl p-6 print:p-0">
      <div className="flex items-center justify-between mb-6 print:mb-4">
        <div>
          <h1 className="text-3xl font-bold">Billy</h1>
          <p className="text-muted-foreground">Graduate Software Engineer</p>
          <div className="text-sm text-muted-foreground mt-1 space-x-3">
            <a href="https://www.linkedin.com/in/bildad-mwangi-a75a4636b" className="underline">LinkedIn</a>
            <a href="https://github.com/gichigig" className="underline">GitHub</a>
            <a href="https://x.com/joyshikuy" className="underline">Twitter</a>
          </div>
        </div>
        <div className="hidden print:hidden md:flex gap-2">
          <button
            onClick={() => contentRef.current && exportElementToPdf("Billy_CV.pdf", contentRef.current)}
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
        <h2 className="text-xl font-semibold mb-2">Professional Profile</h2>
        <p className="text-sm text-muted-foreground leading-relaxed">
          Graduate Software Engineer with 3 years of professional experience plus a 1‑year internship building
          mobile and web products. Proficient in Flutter/Kotlin and React/TypeScript with Firebase for cloud‑backed,
          real‑time applications. Advocate of clean, maintainable code, strong UX, and collaborative delivery.
        </p>
      </section>

      <section className="mb-6 grid md:grid-cols-3 gap-6">
        <div>
          <h2 className="text-xl font-semibold mb-2">Core Competencies</h2>
          <ul className="text-sm list-disc ml-5 space-y-1">
            <li>Cross‑platform mobile apps (Flutter, Kotlin)</li>
            <li>Modern web apps (React, TypeScript)</li>
            <li>Firebase Auth, Firestore, Functions</li>
            <li>UI engineering with Tailwind, Radix UI, shadcn/ui</li>
            <li>Performance‑minded, accessible UIs</li>
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">Technical Stack</h2>
          <ul className="text-sm list-disc ml-5 space-y-1">
            {skills.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">Tools & Practices</h2>
          <ul className="text-sm list-disc ml-5 space-y-1">
            {tools.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Professional Experience</h2>
        <div className="space-y-4 text-sm">
          <div>
            <div className="font-medium">Software Engineer — TechFlow Solutions</div>
            <div className="text-muted-foreground">2022 – Present</div>
            <ul className="list-disc ml-5 mt-1 space-y-1">
              <li>Delivered features across Flutter/Kotlin mobile and React/TypeScript web stacks.</li>
              <li>Built secure authentication, role‑based flows, and real‑time features with Firebase.</li>
              <li>Enhanced UX and performance through componentization and state‑management improvements.</li>
              <li>Maintained quality with reviews, documentation, and incremental refactors.</li>
            </ul>
          </div>
          <div>
            <div className="font-medium">Software Engineering Intern — Innovation Labs</div>
            <div className="text-muted-foreground">2021 – 2022</div>
            <ul className="list-disc ml-5 mt-1 space-y-1">
              <li>Implemented Flutter components and patterns aligned to the design system.</li>
              <li>Contributed to features backed by Firebase services and app‑wide fixes.</li>
              <li>Supported team processes with docs and PR feedback.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Projects</h2>
        <div className="text-sm space-y-3">
          <div>
            <div className="font-medium">MindFlow</div>
            <ul className="list-disc ml-5 space-y-1">
              <li>Mindfulness app enabling habit tracking and animated progress insights.</li>
              <li><span className="font-medium">Tech:</span> Flutter, Firebase, Dart</li>
            </ul>
          </div>
          <div>
            <div className="font-medium">CodePoetry</div>
            <ul className="list-disc ml-5 space-y-1">
              <li>Open‑source platform to showcase elegant code “poems” with a crisp reading UX.</li>
              <li><span className="font-medium">Tech:</span> React, Node.js, TypeScript</li>
            </ul>
          </div>
          <div>
            <div className="font-medium">KotlinCraft</div>
            <ul className="list-disc ml-5 space-y-1">
              <li>Interactive learning app with tutorials and challenges for rapid Kotlin uptake.</li>
              <li><span className="font-medium">Tech:</span> Kotlin, Android, Firebase</li>
            </ul>
          </div>
          <div>
            <div className="font-medium">DevTunes</div>
            <ul className="list-disc ml-5 space-y-1">
              <li>Spotify‑like experience for focus playlists and productivity soundscapes.</li>
              <li><span className="font-medium">Tech:</span> Flutter, REST APIs, UI/UX</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Education</h2>
        <p className="text-sm text-muted-foreground">Diploma in Software Engineering — Zetech University</p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Links</h2>
        <ul className="text-sm space-y-1">
          <li><a href="https://github.com/gichigig" className="underline">github.com/gichigig</a></li>
          <li><a href="https://www.linkedin.com/in/bildad-mwangi-a75a4636b" className="underline">linkedin.com/in/bildad-mwangi-a75a4636b</a></li>
          <li><a href="https://x.com/joyshikuy" className="underline">x.com/joyshikuy</a></li>
        </ul>
      </section>

      <footer className="text-xs text-muted-foreground mt-8 print:mt-4">
        References and detailed portfolio available on request.
      </footer>
      </div>
    </div>
  );
};

export default CVDownload;
