import { setupWorker } from "msw"
import { handlers } from "./handlers"
import { db } from 'mocks/db.js'

export const worker = setupWorker(...handlers)

db.fruit.create({
  id: "1"
})
db.fruit.create({
  id: "2"
})
db.fruit.create({
  id: "3"
})