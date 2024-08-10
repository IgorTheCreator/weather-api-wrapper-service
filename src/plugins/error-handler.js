import fp from 'fastify-plugin'

async function errorHandlerPlugin(fastify, options) {
  fastify.setErrorHandler((err, req, reply) => {
    if (reply.statusCode >= 500) {
      req.log.error({ req, res: reply, err }, err?.message)
      const error = new Error('Fatal error')
      reply.send(error)
      return
    }
    req.log.info({ req, res: reply, err }, err?.message)
    reply.send(err)
  })
}

export default fp(errorHandlerPlugin, { name: 'error-handler-plugin' })
