const fastify = require('fastify')
const BookingRepo = require('./bookings/BookingRepo')
const BookingService = require('./bookings/BookingService')
const BookingController = require('./bookings/BookingController')

const app = fastify({ logger: true })

const bookingRepository = new BookingRepo()
const bookingService = new BookingService(bookingRepository)
const bookingController = new BookingController(bookingService)

app.get('/hello', (request, reply) => {
  reply.send('Hello World!')
})

app.get('/api/bookings', (request, reply) => {
  const { code, body } = bookingController.index(request)
  reply.code(code).send(body)
})

app.post('/api/bookings', (request, reply) => {
  const { body, code } = bookingController.save(request)

  reply.code(code).send(body)
})

module.exports = app
