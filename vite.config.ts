import type { Connect, Plugin } from 'vite'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const BASE = '/ice-breaker'

/** Solo bloquea navegaciones HTML a subpaths; deja pasar módulos de Vite/HMR. */
function strictBasePath(): Plugin {
  const blockUnknownPaths: Connect.NextHandleFunction = (req, res, next) => {
    const pathname = (req.url ?? '').split('?')[0] ?? ''
    const accept = req.headers.accept ?? ''
    const isDocument =
      req.method === 'GET' && accept.includes('text/html')

    if (!isDocument || !pathname.startsWith(BASE)) {
      next()
      return
    }

    if (pathname === BASE || pathname === `${BASE}/`) {
      next()
      return
    }

    res.statusCode = 404
    res.setHeader('Content-Type', 'text/plain; charset=utf-8')
    res.end('Not Found')
  }

  return {
    name: 'strict-base-path',
    configureServer(server) {
      server.middlewares.use(blockUnknownPaths)
    },
    configurePreviewServer(server) {
      server.middlewares.use(blockUnknownPaths)
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  base: `${BASE}/`,
  plugins: [react(), strictBasePath()],
})
