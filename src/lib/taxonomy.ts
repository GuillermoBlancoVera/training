/** Stable keys shared by the content schema and the UI. Labels live in src/i18n/ui.ts. */
export const categories = ['cloud', 'programming', 'ai'] as const;
export const levels = ['beginner', 'beginner-intermediate', 'intermediate'] as const;

export type Category = (typeof categories)[number];
export type Level = (typeof levels)[number];
