import fp from 'fastify-plugin'
import fastifyRedis from '@fastify/redis'

async function redisPlugin (fastify, options) {
  fastify.register(fastifyRedis, {
    host: process.env.REDIS_HOST,
    port: process.env.REDIS_PORT
  })
}

export default fp(redisPlugin, { name: 'redis-plugin' })
