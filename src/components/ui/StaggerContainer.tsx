"use client";

import type { ReactNode } from "react";
import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "motion/react";

type StaggerContainerProps = {
  children: ReactNode;
  className?: string;
  stagger?: number;
};

export default function StaggerContainer({
  children,
  className,
  stagger = 0.1,
}: StaggerContainerProps) {
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
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.1,
      }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: stagger,
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}