"use client";

import { useSyncExternalStore } from "react";

import { getAge } from "@/lib/age";

type LiveAgeProps = {
  year: number;
  month: number;
  day: number;
};

function subscribe() {
  return () => {};
}

function readAge(year: number, month: number, day: number) {
  return getAge(new Date(), new Date(year, month - 1, day));
}

export function LiveAge({ year, month, day }: LiveAgeProps) {
  const age = useSyncExternalStore(
    subscribe,
    () => readAge(year, month, day),
    () => readAge(year, month, day)
  );

  return <span> ({age})</span>;
}
