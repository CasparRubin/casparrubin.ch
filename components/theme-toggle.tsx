"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme()

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
    >
      <Sun aria-hidden="true" className="scale-100 dark:scale-0 transition-transform" />
      <Moon aria-hidden="true" className="absolute scale-0 dark:scale-100 transition-transform" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
