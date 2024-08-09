import fp from 'fastify-plugin'

export default fp(function errorHandlerPlugin (fastify, options, next) {
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
  next()
})
