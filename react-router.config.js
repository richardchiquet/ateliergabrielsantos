import { rename, rm, writeFile } from 'node:fs/promises'
import path from 'node:path'

const siteUrl = 'https://www.ateliergabrielsantos.com'

// Pages pré-rendues (HTML généré à la compilation)
const listPages = [
  '/',
  '/projets',
  '/services',
  '/atelier',
  '/contact',
  '/projets/micro-habitat',
  '/projets/maison-familiale-modulable',
  '/projets/cabane-en-bord-de-lac',
  '/projets/amenagement-couilly-pont-aux-dames',
  '/projets/cabanon-de-jardin',
  '/projets/appartement-a-nice',
  '/mentions-legales',
  '/politique-de-confidentialite',
]

// Sitemap généré à chaque compilation à partir de listPages
// sitemapExclude : pages pré-rendues mais à ne pas mettre en avant (ex. un projet mineur)
const sitemapExclude = new Set()
const priority = { '/': '1.0', '/projets': '0.9', '/services': '0.9', '/contact': '0.8', '/atelier': '0.7', '/mentions-legales': '0.2', '/politique-de-confidentialite': '0.2' }

function buildSitemap() {
  const lastmod = new Date().toISOString().slice(0, 10)
  const urls = listPages.filter((page) => !sitemapExclude.has(page))
    .map((page) => `  <url><loc>${siteUrl}${page === '/' ? '/' : page}</loc><lastmod>${lastmod}</lastmod><priority>${priority[page] ?? '0.6'}</priority></url>`)
    .join('\n')
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`
}

export default {
  appDirectory: 'src',
  ssr: false,
  future: {
    v8_passThroughRequests: true,
    v8_trailingSlashAwareDataRequests: true,
    v8_middleware: true,
    v8_splitRouteModules: true,
    v8_viteEnvironmentApi: true,
  },
  prerender: [
    ...listPages, 
    '/404'
  ],
  async buildEnd({ reactRouterConfig }) {
    const client = path.resolve(reactRouterConfig.buildDirectory, 'client')
    await rename(path.join(client, '404', 'index.html'), path.join(client, '404.html'))
    await rm(path.join(client, '404'), { recursive: true })
    await writeFile(path.join(client, 'sitemap.xml'), buildSitemap())
  },
}
