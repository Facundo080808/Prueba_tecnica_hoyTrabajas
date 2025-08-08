"use client"
import { useTheme } from "next-themes"
import { Sun, Moon } from "lucide-react"
import Button from "./button"
import { useEffect, useState } from "react"

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null 

  return (
    <div className="flex gap-2">
      {theme === "dark" && (
        <Button variant="ghost" onClick={() => setTheme("light")} title="Claro">
          <Sun className="w-5 h-5" />
        </Button>
      )}
      {theme === "light" && (
        <Button variant="ghost" onClick={() => setTheme("dark")} title="Oscuro">
          <Moon className="w-5 h-5" />
        </Button>
      )}
    </div>
  )
}
