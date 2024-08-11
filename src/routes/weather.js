import got, { HTTPError } from 'got'

export default async function weatherRoute (fastify, options) {
  fastify.get('/:city', {
    config: {
      cors: false
    },
    handler: getWeather,
    schema: {
      params: {
        city: {
          description: 'The city where you need to know the weather',
          type: 'string'
        }
      },
      response: {
        '2xx': {
          type: 'object',
          properties: {
            city: {
              description: 'The city where you need to know the weather',
              type: 'string'
            },
            temperature: {
              description: 'Temperature',
              type: 'number'
            }
          }
        }
      }
    }
  })

  async function getWeather (request, reply) {
    const city = request.params.city.toLowerCase()

    const cashedTemperature = await fastify.redis.get(city)
    if (cashedTemperature) {
      return { city, temperature: cashedTemperature }
    }

    try {
      const { currentConditions } = await got(
        `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}/today?key=${process.env.API_KEY}&include=current&unitGroup=metric`
      ).json()
      const temperature = Math.round(currentConditions.temp)

      await fastify.redis.set(city, temperature, 'EX', 3600)

      return { city, temperature }
    } catch (err) {
      if (err instanceof HTTPError) {
        reply.code(err.response.statusCode)
      }

      throw err
    }
  }
}
