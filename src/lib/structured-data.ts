import { contact, ui, type Lang } from '../i18n/ui';
import type { Course } from './courses';
import { internalPath, localizedPath } from './paths';

/** schema.org objects for JSON-LD. `site` is Astro.site (the deployed origin). */
type Node = Record<string, unknown>;

const absolute = (path: string, site: URL | undefined) => new URL(path, site).href;

export function person(lang: Lang, site: URL | undefined): Node {
  const t = ui[lang];
  return {
    '@type': 'Person',
    '@id': `${absolute(internalPath('/'), site)}#person`,
    name: 'Guillermo Blanco Vera',
    jobTitle: 'Senior Software Engineer',
    description: t.about.lead,
    url: absolute(localizedPath(lang, '/about'), site),
    image: absolute(internalPath('/images/guillermo-blanco-vera.webp'), site),
    email: `mailto:${contact.email}`,
    sameAs: [contact.linkedin],
    alumniOf: { '@type': 'CollegeOrUniversity', name: 'Universidad Carlos III de Madrid' },
    hasCredential: t.certifications.map(([name]) => ({
      '@type': 'EducationalOccupationalCredential',
      name,
      credentialCategory: 'certification',
      recognizedBy: { '@type': 'Organization', name: 'Amazon Web Services' },
    })),
  };
}

export function website(lang: Lang, site: URL | undefined): Node {
  return {
    '@type': 'WebSite',
    name: ui[lang].meta.siteName,
    description: ui[lang].meta.description,
    url: absolute(localizedPath(lang), site),
    inLanguage: lang,
    publisher: { '@id': person(lang, site)['@id'] },
  };
}

export function course(lang: Lang, entry: Course, site: URL | undefined): Node {
  const t = ui[lang];
  const instructor = {
    '@type': 'Person',
    name: 'Guillermo Blanco Vera',
    url: absolute(localizedPath(lang, '/about'), site),
  };
  return {
    '@type': 'Course',
    name: entry.data.title,
    description: entry.data.description,
    url: absolute(localizedPath(lang, `/courses/${entry.id}`), site),
    inLanguage: lang,
    educationalLevel: t.levels[entry.data.level],
    about: entry.data.tags,
    coursePrerequisites: entry.data.prerequisites,
    audience: entry.data.audience.map((audienceType) => ({ '@type': 'Audience', audienceType })),
    provider: instructor,
    hasCourseInstance: {
      '@type': 'CourseInstance',
      courseMode: ['Onsite', 'Online', 'Blended'],
      instructor,
    },
  };
}
