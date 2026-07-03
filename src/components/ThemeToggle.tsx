import { useTheme } from "next-themes"
import { Moon, Sun } from "lucide-react"

import { Button } from "./ui/button"

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme()
  const isDark = resolvedTheme === "dark"

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={`Activate ${isDark ? "light" : "dark"} mode`}
    >
      {isDark ? <Sun className="nav-icon" /> : <Moon className="nav-icon" />}
    </Button>
  )
}
