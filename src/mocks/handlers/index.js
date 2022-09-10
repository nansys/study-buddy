import { rest } from 'msw'
import { db } from 'mocks/db.js'

export const handlers = [
  rest.get('/groups', (req, res, ctx) => {
    const { 0: {group} } = db.groups.getAll()
    return res(ctx.status(200), ctx.json(group))
  }),
  rest.get(`/groups/:id`, (req, res, ctx) => {

    if (req.params.id && req.params.id !== 'undefined') {
      const filtered = db.student.findMany({
        where: {
          group: {
            equals: req.params.id
          }
        }
      })
      return res(ctx.status(200), ctx.json({students: filtered}))
    }
  }),
  rest.get('/students/:id', (req, res, ctx) => {

    const filtered = req.params.id ? db.student.findFirst({
      where: {
        id: {
          equals: req.params.id
        }
      }
    }) : null

    return res(ctx.status(200), ctx.json({students: filtered}))

  }),
  rest.post('/students/search', (req, res, ctx) => {

    const allStudents = db.student.getAll()

    const filtered = req.body.searchPhrase ? allStudents.filter((student) => student.name.toLowerCase().includes(req.body.searchPhrase.toLowerCase())) : []
    return res(ctx.status(200), ctx.json({students: filtered}))
  })
]