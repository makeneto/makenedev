"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "./button"

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme()

  return (
    <div className="hidden lg:flex items-center">
      <Button
        variant="ghost"
        onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
        aria-label="Toggle theme"
      >
        <Sun className=" hidden dark:block" />
        <Moon className=" block dark:hidden" />
      </Button>
    </div>
  )
}
