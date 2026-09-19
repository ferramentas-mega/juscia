import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Badge({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-lg border border-juscia-border bg-juscia-badge-bg px-4 py-1 text-sm text-juscia-badge-fg",
        className,
      )}
    >
      {children}
    </span>
  );
}
