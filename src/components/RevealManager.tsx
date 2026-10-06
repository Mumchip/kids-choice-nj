import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Fades `.reveal` sections in the first time they scroll into view.
 * Does nothing when the visitor prefers reduced motion or the browser lacks IntersectionObserver.
 */
const RevealManager = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const motionOk = window.matchMedia("(prefers-reduced-motion: no-preference)").matches;
    if (!motionOk || !("IntersectionObserver" in window)) {
      return;
    }

    const root = document.documentElement;
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.12 },
    );

    const frame = window.requestAnimationFrame(() => {
      document.querySelectorAll(".reveal:not(.is-visible)").forEach(element => observer.observe(element));
      root.classList.add("reveal-ready");
    });

    return () => {
      window.cancelAnimationFrame(frame);
      observer.disconnect();
    };
  }, [pathname]);

  return null;
};

export default RevealManager;
