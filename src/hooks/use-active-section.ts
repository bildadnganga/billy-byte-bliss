import { useEffect, useState } from "react";

/**
 * Observe sections by id and return the id of the section most in view.
 * Uses an IntersectionObserver with a centered root margin to provide
 * stable highlighting while scrolling.
 */
export function useActiveSection(ids: string[], defaultId?: string) {
  const [active, setActive] = useState<string | undefined>(defaultId);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        // Pick the entry with largest intersection ratio
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) {
          setActive(visible[0].target.id);
        }
      },
      {
        root: null,
        // Focus on middle of viewport: top 30%, bottom 50% margins
        rootMargin: "-30% 0px -50% 0px",
        threshold: [0, 0.25, 0.5, 0.75, 1],
      }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [ids.join(",")]);

  return active;
}
