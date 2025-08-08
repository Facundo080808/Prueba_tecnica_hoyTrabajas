"use client"

import { ButtonProps } from "@/lib/types/types";
import { cn } from "@/lib/utils/cn"

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
      " text-neutral-900  dark:border-neutral-700 dark:text-white ",
    ghost:
      "text-black dark:text-white hover:text-blue  ",
    buy:
      "bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 rounded-lg",
  }

  return (
    <button
      {...props}
      className={cn(
        "text-center px-4 py-2  font-medium transition-colors  hover:cursor-pointer",
        styles[variant],
        className
      )}
    >
      {children}
    </button>
  )
}
