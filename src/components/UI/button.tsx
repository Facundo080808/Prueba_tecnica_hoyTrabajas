"use client"

import { ButtonProps } from "@/lib/types";
import { cn } from "@/lib/cn"

export default function Button({
  variant = "default",
  className,
  children,
  ...props
}: ButtonProps) {
  const styles = {
    default:
      "bg-neutral-800 text-white hover:bg-neutral-700 dark:bg-neutral-100 dark:text-black dark:hover:bg-neutral-200",
    outline:
      "border border-neutral-300 text-neutral-900 hover:bg-neutral-100 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800",
    ghost:
      "text-neutral-900 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-800",
  }

  return (
    <button
      {...props}
      className={cn(
        "px-4 py-2 rounded-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-neutral-400 dark:focus:ring-neutral-500",
        styles[variant],
        className
      )}
    >
      {children}
    </button>
  )
}
