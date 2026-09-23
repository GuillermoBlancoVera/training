/** Stable keys shared by the content schema and the UI. Labels live in src/i18n/ui.ts. */
/** Who a course is for: any professional (no technical background) or technical teams. Listed in catalogue order. */
export const tracks = ['business', 'technical'] as const;
export const levels = ['beginner', 'beginner-intermediate', 'intermediate'] as const;

export type Track = (typeof tracks)[number];
export type Level = (typeof levels)[number];
