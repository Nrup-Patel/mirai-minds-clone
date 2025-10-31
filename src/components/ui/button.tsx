// src/components/ui/button.tsx
"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost";
  size?: "default" | "sm" | "icon";
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, variant = "default", size = "default", ...props }, ref) => {
    const base =
      "inline-flex items-center justify-center rounded-full font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2";
    const variants: Record<string, string> = {
      default: "bg-[#F5C64B] text-[#1E293B] hover:bg-[#f3bf41]",
      outline: "border border-input bg-background",
      ghost: "bg-transparent",
    };
    const sizes: Record<string, string> = {
      default: "px-6 py-2 text-sm",
      sm: "px-4 py-1.5 text-sm",
      icon: "h-10 w-10 p-0",
    };

    return (
      <button
        ref={ref}
        className={cn(base, variants[variant] ?? variants.default, sizes[size] ?? sizes.default, className)}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
