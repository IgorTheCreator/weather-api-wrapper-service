import closeWithGrace from 'close-with-grace'
import { build } from './build.js'
import { options } from './config/server-options.js'

const app = await build(options)

app.listen({
  port: process.env.PORT || 3000,
})

closeWithGrace(async function ({ err }) {
  if (err) {
    app.log.error({ err }, 'server closing due to error')
  } else {
    app.log.info('shutting down the server')
  }

  await app.close()
})
