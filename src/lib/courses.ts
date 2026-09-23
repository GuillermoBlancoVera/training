import { getCollection, type CollectionEntry } from 'astro:content';
import type { Lang, UI } from '../i18n/ui';

export type Course = {
  id: string;
  data: CollectionEntry<'courses'>['data'];
  /** The entry whose Markdown body is rendered for this language. */
  entry: CollectionEntry<'courses'> | CollectionEntry<'coursesEn'>;
};

/** All courses in the given language, sorted by `order`. Fails the build if a translation is missing. */
export async function getCourses(lang: Lang): Promise<Course[]> {
  const courses = await getCollection('courses');
  const translations = new Map((await getCollection('coursesEn')).map((entry) => [entry.id, entry]));

  for (const id of translations.keys()) {
    if (!courses.some((course) => course.id === id)) {
      throw new Error(`src/content/courses-en/${id}.md has no matching Spanish course in src/content/courses/.`);
    }
  }

  return courses
    .map((course) => {
      if (lang === 'es') return { id: course.id, data: course.data, entry: course };
      const translation = translations.get(course.id);
      if (!translation) throw new Error(`Missing English translation: create src/content/courses-en/${course.id}.md.`);
      return { id: course.id, data: { ...course.data, ...translation.data }, entry: translation };
    })
    .sort((a, b) => a.data.order - b.data.order);
}

export const formatHours = (hours: Course['data']['hours'], t: UI) =>
  t.hours(Array.isArray(hours) ? `${hours[0]}–${hours[1]}` : String(hours));
