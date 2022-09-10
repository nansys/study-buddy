import { setupWorker } from 'msw'
import { handlers } from './handlers'
import { db } from 'mocks/db.js'
import { auth } from './handlers/auth'

export const worker = setupWorker(...handlers, ...auth)

const createStudents = () => {
  for(let i = 0; i < 16; i++) {
    db.student.create()
  }
}

db.groups.create()
db.teacher.create()

createStudents()

window.mocks = {
  createStudents,
  getAllStudents: () => db.groups.getAll()
}