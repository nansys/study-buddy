import { setupWorker } from 'msw'
import { handlers } from './handlers'
import { db } from 'mocks/db.js'
import { auth } from './handlers/auth'
import { events } from './handlers/events'

export const worker = setupWorker(...handlers, ...auth, ...events)

const createStudents = () => {
  for(let i = 0; i < 16; i++) {
    db.student.create()
    db.event.create()
  }
}

db.groups.create()
db.teacher.create()

createStudents()

window.mocks = {
  createStudents,
  getAllStudents: () => db.groups.getAll()
}