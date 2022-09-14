import '@testing-library/jest-dom'
import { handlers } from 'mocks/handlers'
import { db } from 'mocks/db'
import { setupServer } from 'msw/node'

const server = setupServer(...handlers)


beforeAll(() => { 

for(let i = 0; i < 16; i++) {
    db.student.create()
  }

db.groups.create()
db.teacher.create()

server.listen()

})
afterEach(() => server.resetHandlers())
afterAll(() => server.close())