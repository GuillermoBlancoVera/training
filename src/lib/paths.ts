/** Generates internal URLs that also work from a GitHub Pages project site. */
export const internalPath = (path = '') => {
  const base = import.meta.env.BASE_URL.endsWith('/')
    ? import.meta.env.BASE_URL
    : `${import.meta.env.BASE_URL}/`;
  return `${base}${path.replace(/^\//, '')}`;
};
