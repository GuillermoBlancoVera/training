import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const courses = defineCollection({
  loader: glob({ base: './src/content/courses', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.enum(['Cloud & AWS', 'Programación', 'Inteligencia Artificial']),
    level: z.string(),
    duration: z.string(),
    modality: z.string().default('Presencial, online o híbrida'),
    featured: z.boolean().default(false),
    order: z.number(),
    tags: z.array(z.string()),
    audience: z.array(z.string()),
    prerequisites: z.string(),
    exercises: z.array(z.string()),
    adaptation: z.string(),
  }),
});

export const collections = { courses };
