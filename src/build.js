import Fastify from 'fastify'
import 'dotenv/config'

export async function build (options) {
  const app = Fastify(options)
  return app
}
