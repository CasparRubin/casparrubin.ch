"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useSyncExternalStore } from "react";

import { Button } from "@/components/ui/button";

function subscribe() {
  return () => {};
}

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  // `resolvedTheme` is only known on the client (storage/system preference), so
  // keep the server and hydration render identical and update after mounting.
  const isHydrated = useSyncExternalStore(
    subscribe,
    () => true,
    () => false
  );

  const ariaLabel =
    !isHydrated || resolvedTheme === undefined
      ? "Switch theme"
      : resolvedTheme === "dark"
        ? "Switch to light theme"
        : "Switch to dark theme";

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      aria-label={ariaLabel}
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
