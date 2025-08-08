"use client"

import Link from "next/link"
import { cn } from "@/lib/utils/cn"
import Button from "@/components/UI/button"
import { ButtonProps } from "@/lib/types/types"

interface LinkButtonProps extends ButtonProps {
  href: string
  children: React.ReactNode
  className?: string
  variant?: "default" | "outline" | "ghost"
}

export default function LinkButton({
  href,
  children,
  className,
  variant = "default",
}: LinkButtonProps) {
  return (
    <Link href={href} passHref>
      <Button
        as="a"
        variant={variant}
        className={cn("inline-block", className)}
      >
        {children}
      </Button>
    </Link>
  )
}
