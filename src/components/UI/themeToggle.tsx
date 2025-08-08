"use client"
import { useTheme } from "@/hooks/useTheme"
import { Sun, Moon, Laptop } from "lucide-react"
import Button from "./button"

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  
  

  const getButtonStyle = (t: typeof theme) =>""
    // `w-10 h-10 flex items-center justify-center rounded-full border transition
    //  ${theme === t ? "bg-gray-300 dark:bg-gray-700" : "hover:bg-gray-200 dark:hover:bg-gray-800"}`

  return (
    <div className="flex gap-2">
      {theme === "dark"&&
      <Button variant="ghost" onClick={() => setTheme("light")} className={getButtonStyle("light")} title="Claro">
        <Sun className="w-5 h-5" />
      </Button>}
      {theme === "light" &&
      <Button variant="ghost" onClick={() => setTheme("dark")} className={getButtonStyle("dark")} title="Oscuro">
        <Moon className="w-5 h-5" />
      </Button>}
    </div>
  )
}
