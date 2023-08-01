class BookingRepo {
  constructor() {
    this.bookings = []
  }
  findAll() {
    return this.bookings
  }
  create() {
    this.bookings.push(booking)
  }
}

module.exports = BookingRepo
