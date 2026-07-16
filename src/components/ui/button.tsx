import * as React from "react";
import { cn } from "@/lib/utils";

const Button = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: "default" | "outline" | "ghost" | "secondary" | "destructive" | "link";
    size?: "default" | "sm" | "lg" | "icon";
  }
>(({ className, variant = "default", size = "default", ...props }, ref) => {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 disabled:pointer-events-none disabled:opacity-50",
        {
          "bg-blue-600 text-white hover:bg-blue-700 shadow-sm hover:shadow-md active:scale-95": variant === "default",
          "border-2 border-blue-600 text-blue-600 bg-transparent hover:bg-blue-50": variant === "outline",
          "text-gray-700 hover:bg-gray-100": variant === "ghost",
          "bg-gray-100 text-gray-900 hover:bg-gray-200": variant === "secondary",
          "bg-red-600 text-white hover:bg-red-700": variant === "destructive",
          "text-blue-600 underline-offset-4 hover:underline p-0 h-auto": variant === "link",
        },
        {
          "h-10 px-5 py-2": size === "default",
          "h-8 px-3 text-xs": size === "sm",
          "h-12 px-8 text-base": size === "lg",
          "h-10 w-10 p-0": size === "icon",
        },
        className
      )}
      ref={ref}
      {...props}
    />
  );
});
Button.displayName = "Button";

export { Button };
