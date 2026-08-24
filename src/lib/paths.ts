/** Generates internal URLs that also work from a GitHub Pages project site. */
export const internalPath = (path = '') => {
  const base = import.meta.env.BASE_URL.endsWith('/')
    ? import.meta.env.BASE_URL
    : `${import.meta.env.BASE_URL}/`;
  const normalizedPath = path.replace(/^\//, '');
  const isFile = /\.[a-z0-9]+$/i.test(normalizedPath);
  return `${base}${normalizedPath}${normalizedPath && !normalizedPath.endsWith('/') && !isFile ? '/' : ''}`;
};
