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
  // Server snapshot must not call `new Date()` — Cache Components + ensureStatic
  // treat current time as dynamic and would fail the static build.
  const age = useSyncExternalStore(
    subscribe,
    () => readAge(year, month, day),
    () => null
  );

  if (age === null) {
    return null;
  }

  return <span> ({age})</span>;
}
