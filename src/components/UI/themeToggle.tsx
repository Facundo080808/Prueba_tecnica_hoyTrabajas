"use client"

import { useTheme } from "@/context/themeContext"
import { Sun, Moon, Laptop } from "lucide-react"

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  
  

  const getButtonStyle = (t: typeof theme) =>
    `w-10 h-10 flex items-center justify-center rounded-full border transition
     ${theme === t ? "bg-gray-300 dark:bg-gray-700" : "hover:bg-gray-200 dark:hover:bg-gray-800"}`

  return (
    <div className="flex gap-2">
      {theme === "dark"&&
      <button onClick={() => setTheme("light")} className={getButtonStyle("light")} title="Claro">
        <Sun className="w-5 h-5" />
      </button>}
      {theme === "light" &&
      <button onClick={() => setTheme("dark")} className={getButtonStyle("dark")} title="Oscuro">
        <Moon className="w-5 h-5" />
      </button>}
    </div>
  )
}
