import Fastify from 'fastify'
import 'dotenv/config'
import redisPlugin from './plugins/redis-data-source.js'
import { corsOptions } from './config/cors-options.js'
import corsPlugin from './plugins/cors.js'
import errorHandlerPlugin from './plugins/error-handler.js'
import weatherRoute from './routes/weather.js'

export async function build (options) {
  // Creating app instance
  const app = Fastify(options)

  // Registering plugins
  app.register(redisPlugin)
  app.register(corsPlugin, corsOptions)
  app.register(errorHandlerPlugin)

  // Registering routes
  app.register(weatherRoute, { prefix: 'weather' })
  return app
}
