import { rest } from 'msw'
import { db } from 'mocks/db'

export const events = [
  rest.get('/events', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json({events: db.event.getAll()}))
  }),
  rest.get(`/events/:group`, (req, res, ctx) => {

    if (req.params.group && req.params.id !== 'undefined') {
      const matchingEvents = db.event.findMany({
        where: {
          group: {
            equals: req.params.group
          }
        }
      })
      return res(ctx.status(200), ctx.json({events: matchingEvents}))
    }
  }),
]