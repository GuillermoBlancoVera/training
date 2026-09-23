import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';
import { levels, tracks } from './lib/taxonomy';

/** Fields written in each language. */
const translatedFields = z.object({
  title: z.string(),
  description: z.string(),
  tags: z.array(z.string()).min(1),
  audience: z.array(z.string()).min(1),
  prerequisites: z.string(),
  exercises: z.array(z.string()).min(1),
  adaptation: z.string(),
});

/** Spanish is the source of truth: it also holds the metadata shared by every language. */
const courses = defineCollection({
  loader: glob({ base: './src/content/courses', pattern: '*.md' }),
  schema: translatedFields.extend({
    track: z.enum(tracks),
    level: z.enum(levels),
    /** Hours, either fixed (4) or a range ([6, 8]). */
    hours: z.union([z.number().positive(), z.tuple([z.number().positive(), z.number().positive()])]),
    order: z.number(),
    featured: z.boolean().default(false),
  }),
});

/** English translations. Each file must share its id (filename) with a Spanish course. */
const coursesEn = defineCollection({
  loader: glob({ base: './src/content/courses-en', pattern: '*.md' }),
  schema: translatedFields,
});

export const collections = { courses, coursesEn };
