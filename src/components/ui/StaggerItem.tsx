"use client";

import type { ReactNode } from "react";

type StaggerItemProps = {
  children: ReactNode;
  className?: string;
};

export default function StaggerItem({ children, className }: StaggerItemProps) {
  return <div className={className}>{children}</div>;
}
