import t from 'tap'
import { build } from '../src/build.js'

t.test('Test Weather API', async (t) => {
  const app = await build()

  t.teardown(() => app.close())

  const res = await app.inject({
    url: 'weather/moscow'
  })

  t.equal(res.statusCode, 200)
  t.match(JSON.parse(res.payload), { city: String, temperature: Number })
})
