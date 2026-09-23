# Guillermo Blanco Vera · Formación tecnológica

Web estática (Astro) con el catálogo de cursos, en español e inglés. Se publica en GitHub Pages al hacer push a `main`.

## Desarrollo

```sh
npm install
npm run dev      # servidor local
npm run check    # tipos (astro check) + formato (prettier)
npm run format   # formatea el código
npm run build    # genera dist/
```

Requiere Node 22.12 o superior.

## Estructura

- `src/content/courses/*.md` — cursos en español. Contienen también los datos comunes (público, nivel, horas, orden, destacado).
- `src/content/courses-en/*.md` — traducción al inglés de cada curso, con el **mismo nombre de archivo**.
- `src/i18n/ui.ts` — todos los textos de la interfaz en ambos idiomas, datos de contacto e itinerarios de aprendizaje.
- `src/views/` — una vista por tipo de página, compartida por los dos idiomas.
- `src/pages/` — rutas; solo indican qué vista y qué idioma usar.

## Añadir un curso

1. Crea `src/content/courses/<id>.md` copiando uno existente. Valores válidos: `track` (`business`: para cualquier profesional, sin conocimientos técnicos; `technical`: para equipos técnicos), `level` (`beginner`, `beginner-intermediate`, `intermediate`), `hours` (`4` o `[6, 8]`).
2. Crea `src/content/courses-en/<id>.md` con la traducción.

Si falta la traducción o un campo, el build falla indicando qué archivo corregir.

Si eliminas o renombras un curso, añádelo a `retiredCourses` en `astro.config.mjs` para que los enlaces antiguos redirijan.
