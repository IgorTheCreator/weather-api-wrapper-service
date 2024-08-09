import Fastify from 'fastify'
import 'dotenv/config'
import redisPlugin from './plugins/redis-data-source.js'
import corsPlugin from './plugins/cors.js'
import errorHandlerPlugin from './plugins/error-handler.js'

export async function build(options) {
  // Creating app instance
  const app = Fastify(options)

  // Registering plugins
  app.register(redisPlugin)
  app.register(corsPlugin)
  app.register(errorHandlerPlugin)

  return app
}
