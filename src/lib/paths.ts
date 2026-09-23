import { defaultLang, type Lang } from '../i18n/ui';

/** Generates internal URLs that also work from a GitHub Pages project site. */
export const internalPath = (path = '') => {
  const base = import.meta.env.BASE_URL.endsWith('/') ? import.meta.env.BASE_URL : `${import.meta.env.BASE_URL}/`;
  const normalizedPath = path.replace(/^\//, '');
  const isFile = /\.[a-z0-9]+$/i.test(normalizedPath);
  return `${base}${normalizedPath}${normalizedPath && !normalizedPath.endsWith('/') && !isFile ? '/' : ''}`;
};

/** Internal URL for a language-neutral route ('/courses') in the given language. */
export const localizedPath = (lang: Lang, route = '/') =>
  internalPath(lang === defaultLang ? route : `/${lang}${route === '/' ? '' : route}`);

/** Language-neutral route ('/courses/') for a request pathname, without base or language prefix. */
export const routeFromPathname = (pathname: string) => {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const withoutBase = base && pathname.startsWith(base) ? pathname.slice(base.length) : pathname;
  return withoutBase.replace(/^\/en(?=\/|$)/, '') || '/';
};
