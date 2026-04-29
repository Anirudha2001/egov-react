import { useEffect, useRef } from "react";

export default function useReveal() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const revealNodes = el.querySelectorAll(".reveal");

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion || !("IntersectionObserver" in window)) {
      revealNodes.forEach((node) => node.classList.add("in-view"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );

    revealNodes.forEach((node) => observer.observe(node));

    return () => observer.disconnect();
  }, []);

  return ref;
}
