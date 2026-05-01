"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      className="gap-2"
    >
      <span className="relative size-4">
        <Sun
          aria-hidden="true"
          className="absolute size-4 scale-100 transition-transform dark:scale-0"
        />
        <Moon
          aria-hidden="true"
          className="absolute size-4 scale-0 transition-transform dark:scale-100"
        />
      </span>
      <span>Switch Theme</span>
    </Button>
  );
}
