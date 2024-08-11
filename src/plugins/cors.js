import fp from 'fastify-plugin'
import fastifyCors from '@fastify/cors'

async function corsPlugin (fastify, options) {
  fastify.register(fastifyCors, options)
}

export default fp(corsPlugin, { name: 'cors-plugin' })
