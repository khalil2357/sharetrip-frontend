import * as React from "react";
import { cn } from "@/lib/utils";

export function Badge({
  children,
  className,
  variant = "default",
}: {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "secondary" | "success" | "warning" | "destructive" | "outline";
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors",
        {
          "bg-blue-600 text-white": variant === "default",
          "bg-gray-100 text-gray-800": variant === "secondary",
          "bg-emerald-100 text-emerald-700": variant === "success",
          "bg-amber-100 text-amber-700": variant === "warning",
          "bg-red-100 text-red-700": variant === "destructive",
          "border border-gray-300 text-gray-700": variant === "outline",
        },
        className
      )}
    >
      {children}
    </span>
  );
}
