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

// The prerendered page omits the number. The client snapshot fills it in
// after hydration so a birthday does not wait for the next deploy.
function getServerAge() {
  return null;
}

export function LiveAge({ year, month, day }: LiveAgeProps) {
  const age = useSyncExternalStore(
    subscribe,
    () => getAge(new Date(), new Date(year, month - 1, day)),
    getServerAge
  );

  if (age === null) {
    return null;
  }

  return <span> ({age})</span>;
}
