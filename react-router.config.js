import { rename, rm } from 'node:fs/promises'
import path from 'node:path'

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
    '/',
    '/projets',
    '/services',
    '/atelier',
    '/contact',
    '/projets/Projet1',
    '/projets/Projet2',
    '/projets/Projet3',
    '/projets/Projet4',
    '/projets/Projet5',
    '/404',
  ],
  async buildEnd({ reactRouterConfig }) {
    const client = path.resolve(reactRouterConfig.buildDirectory, 'client')
    await rename(path.join(client, '404', 'index.html'), path.join(client, '404.html'))
    await rm(path.join(client, '404'), { recursive: true })
  },
}
