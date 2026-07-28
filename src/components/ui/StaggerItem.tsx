"use client";

import type { ReactNode } from "react";
import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "motion/react";

type StaggerItemProps = {
  children: ReactNode;
  className?: string;
};

export default function StaggerItem({
  children,
  className,
}: StaggerItemProps) {
  const prefersReducedMotion = useReducedMotion();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted || prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      variants={{
        hidden: {
          opacity: 0,
          y: 24,
        },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.55,
            ease: [0.22, 1, 0.36, 1],
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}