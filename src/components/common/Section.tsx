import cn from "@/utils/cn";
import type { ReactNode } from "react";

interface SectionProps {
  className?: string;
  children: ReactNode;
}

export default function Section({ children, className }: SectionProps) {
  return (
    <section className={cn("grid gap-5 text-white", className)}>
      {children}
    </section>
  );
}
