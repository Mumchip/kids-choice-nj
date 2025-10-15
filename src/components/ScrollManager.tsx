import { useEffect } from "react";
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

const scrollToTop = () => {
  window.scrollTo({ top: 0, left: 0, behavior: "auto" });

  window.requestAnimationFrame(() => {
    const main = document.getElementById(MAIN_CONTENT_ID);
    if (main instanceof HTMLElement) {
      main.focus({ preventScroll: true });
    }
  });
};

const ScrollManager = () => {
  const location = useLocation();

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

    if (location.hash) {
      scrollToHash(location.hash);
      return;
    }

    scrollToTop();
  }, [location.pathname, location.search, location.hash]);

  return null;
};

export default ScrollManager;
