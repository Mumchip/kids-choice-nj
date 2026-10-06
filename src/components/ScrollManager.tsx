import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

const MAIN_CONTENT_ID = "main-content";

const scrollToHash = (hash: string) => {
  const targetId = hash.startsWith("#") ? hash.slice(1) : hash;
  if (!targetId) {
    return;
  }

  window.requestAnimationFrame(() => {
    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({ behavior: "auto", block: "start", inline: "nearest" });
    }
  });
};

const scrollToTop = (moveFocus: boolean) => {
  window.scrollTo({ top: 0, left: 0, behavior: "auto" });

  if (!moveFocus) {
    return;
  }

  // After a client-side navigation, move focus to the new page so keyboard and
  // screen reader users start at the top of the content instead of the old link.
  window.requestAnimationFrame(() => {
    const main = document.getElementById(MAIN_CONTENT_ID);
    if (main instanceof HTMLElement) {
      main.focus({ preventScroll: true });
    }
  });
};

const ScrollManager = () => {
  const location = useLocation();
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (typeof window === "undefined" || !window.history || !("scrollRestoration" in window.history)) {
      return;
    }
    window.history.scrollRestoration = "manual";
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    // On the initial page load focus stays on the document, so the skip link
    // remains the first Tab stop.
    const moveFocus = !isFirstRender.current;
    isFirstRender.current = false;

    if (location.hash) {
      scrollToHash(location.hash);
      return;
    }

    scrollToTop(moveFocus);
  }, [location.pathname, location.search, location.hash]);

  return null;
};

export default ScrollManager;
