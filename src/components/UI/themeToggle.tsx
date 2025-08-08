"use client"
import { useTheme } from "next-themes"
import { Sun, Moon } from "lucide-react"
import Button from "./button"

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <div className="flex gap-2">
      {theme === "dark"&&
      <Button variant="ghost" onClick={() => setTheme("light")}  title="Claro">
        <Sun className="w-5 h-5" />
      </Button>}
      {theme === "light" &&
      <Button variant="ghost" onClick={() => setTheme("dark")}  title="Oscuro">
        <Moon className="w-5 h-5" />
      </Button>}
    </div>
  )
}
