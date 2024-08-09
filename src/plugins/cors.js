import fp from 'fastify-plugin'
import fastifyCors from '@fastify/cors'

async function corsPlugin(fastify, options) {
  fastify.register(fastifyCors, {
    origin: false,
  })
}

export default fp(corsPlugin)
