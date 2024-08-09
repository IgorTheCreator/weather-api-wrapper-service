import Fastify from 'fastify'
import redisPlugin from './plugins/redis-data-source.js'
import 'dotenv/config'

export async function build(options) {
  const app = Fastify(options)
  app.register(redisPlugin)
  return app
}
