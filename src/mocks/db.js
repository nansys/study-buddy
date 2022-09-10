import { factory, primaryKey } from '@mswjs/data'
import { faker } from '@faker-js/faker'

const group = ['A', 'B', 'C']
const getRandomGroup = (index) => group[index]

const getRandomAverage = () => faker.datatype.number({min: 2, max: 5, precision: 0.1})

const getGroup = (groups) => groups

export const db = factory({
  student: {
    id: primaryKey(faker.datatype.uuid),
    name: () => faker.helpers.fake('{{name.firstName}} {{name.lastName}}'),
    attendance: () => `${faker.datatype.number({min: 0, max: 100})}`,
    average: () => getRandomAverage(),
    group: () => getRandomGroup(faker.datatype.number({min: 0, max: 2})),
    course: () => faker.helpers.fake('{{random.word}} {{random.word}}'),
    grades: () => [
      {
        subject: 'Business Philosophy',
        average: getRandomAverage(),
      },
      {
        subject: 'Marketing',
        average: getRandomAverage(),
      },
      {
        subject: 'Modern Economy',
        average: getRandomAverage(),
      }
    ]
  },
  groups: {
    id: primaryKey(faker.datatype.uuid),
    group: () => getGroup(group)
  },
  teacher: {
    id: primaryKey(() => '1'),
    name: () => 'Jacek Sobczak',
    login: () => 'teacher@studybuddy.com',
    password: () => '1234'
  }
})