/** Last moment the site lists ETH Zürich as the current employer (local time). */
export const ETH_END_DATE = new Date(2026, 6, 31, 23, 59, 59, 999);

export function getCurrentEmployer(today: Date = new Date()): string {
  return today <= ETH_END_DATE ? "ETH Zürich" : "University of Zürich";
}
