import Fastify from 'fastify'
import redisPlugin from './plugins/redis-data-source.js'
import 'dotenv/config'
import corsPlugin from './plugins/cors.js'

export async function build(options) {
  // Create app instance
  const app = Fastify(options)

  // Register plugins
  app.register(redisPlugin)
  app.register(corsPlugin)

  return app
}
