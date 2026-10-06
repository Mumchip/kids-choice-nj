import { useEffect } from "react";

const SITE_NAME = "Kids Choice INC.";

/** Gives each route its own document title so screen reader users hear where they landed. */
export const usePageTitle = (title?: string) => {
  useEffect(() => {
    document.title = title ? `${title} | ${SITE_NAME}` : `${SITE_NAME} - Accessible & Safe Transportation Services`;
  }, [title]);
};
