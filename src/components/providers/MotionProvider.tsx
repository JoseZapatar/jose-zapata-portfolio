"use client";

import type { ReactNode } from "react";
import { MotionConfig } from "motion/react";

type MotionProviderProps = {
  children: ReactNode;
};

export default function MotionProvider({
  children,
}: MotionProviderProps) {
  return (
    <MotionConfig reducedMotion="user">
      {children}
    </MotionConfig>
  );
}