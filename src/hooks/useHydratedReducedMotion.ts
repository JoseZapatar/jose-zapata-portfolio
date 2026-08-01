"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "motion/react";

/**
 * Keeps the server render and the first client render identical.
 * The real OS/browser preference is applied only after hydration.
 */
export function useHydratedReducedMotion(): boolean {
  const prefersReducedMotion = useReducedMotion();
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
  }, []);

  return hydrated ? Boolean(prefersReducedMotion) : false;
}
