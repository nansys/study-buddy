import { rest } from 'msw'

import { students } from 'mocks/data/students.js'
import { groups } from 'mocks/data/groups.js'

export const handlers = [
  rest.get('/groups', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(groups))
  }),
  rest.get(`/students/:group`, (req, res, ctx) => {

    if (req.params.group && req.params.group !== 'undefined') {
      const filtered = students.filter((student) => {
        return req.params.group === student.group
        
      })
      return res(ctx.status(200), ctx.json({students: filtered}))
    }

    return res(ctx.status(200), ctx.json({students}))
  })
]