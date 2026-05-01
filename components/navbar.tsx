"use client";

import Image from "next/image";
import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";

export function Navbar() {
  return (
    <header className="border-b">
      <div className="mx-auto flex h-14 max-w-[1600px] items-center justify-between px-4">
        <div className="flex items-center justify-start">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/identifier.png"
              alt="Caspar Rubin"
              width={24}
              height={24}
              className="size-6"
            />
            <span className="text-sm font-semibold">
              <span className="sm:hidden">
                Caspar <span className="font-normal">Rubin</span>
              </span>
              <span className="hidden sm:inline">
                Caspar Camille <span className="font-normal">Rubin</span>
              </span>
            </span>
          </Link>
        </div>

        <div className="flex items-center justify-end">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
