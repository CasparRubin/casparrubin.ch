import Image from "next/image"

import { ThemeToggle } from "@/components/theme-toggle"

export function Navbar() {
  return (
    <header className="border-b">
      <div className="mx-auto flex h-14 max-w-[1600px] items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <Image
            src="/identifier_light_ec003f.png"
            alt="Caspar Rubin"
            width={24}
            height={24}
            className="size-6 dark:hidden"
          />
          <Image
            src="/identifier_dark_ff2056.png"
            alt="Caspar Rubin"
            width={24}
            height={24}
            className="hidden size-6 dark:block"
          />
          <span className="text-sm font-semibold">
            <span className="sm:hidden">Caspar <span className="font-normal">Rubin</span></span>
            <span className="hidden sm:inline">Caspar Camille <span className="font-normal">Rubin</span></span>
          </span>
        </div>
        <ThemeToggle />
      </div>
    </header>
  )
}
