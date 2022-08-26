import { factory, primaryKey } from '@mswjs/data'

const fruits = ['pineapple', 'orange', 'plum']

export const db = factory({
  fruit: {
    id: primaryKey(String),
    name: () => fruits[Math.floor(Math.random() * fruits.length)],
    price: () => Math.floor(Math.random() * 100)
  }
})