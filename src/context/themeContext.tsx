"use client"

import { createContext, PropsWithChildren, useEffect, useState } from "react"
import { ThemeContextType } from "@/lib/types/types"
type Theme = "light" | "dark" | "system"

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export const ThemeProvider = ({ children }:PropsWithChildren) => {
  const [theme, setThemeState] = useState<Theme>("system")
  const [mounted, setMounted] = useState(false)

  const applyTheme = (newTheme: Theme) => {
    setThemeState(newTheme)

    if (newTheme === "dark") {
      document.documentElement.classList.add("dark")
      localStorage.setItem("theme", "dark")
    } else if (newTheme === "light") {
      document.documentElement.classList.remove("dark")
      localStorage.setItem("theme", "light")
    } else {
      localStorage.removeItem("theme")
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
      document.documentElement.classList.toggle("dark", prefersDark)
      localStorage.setItem("theme", prefersDark ? "dark" : "light")
      setThemeState(prefersDark ? "dark" : "light")
    }
  }

  useEffect(() => {
    const stored = localStorage.getItem("theme") as Theme | null
    applyTheme(stored ?? "system")
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <ThemeContext.Provider value={{ theme, setTheme: applyTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}