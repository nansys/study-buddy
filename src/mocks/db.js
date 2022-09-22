import { factory, primaryKey } from '@mswjs/data'
import { faker } from '@faker-js/faker'

faker.seed(1456)

const group = ['A', 'B', 'C']
const getRandomGroup = (index) => group[index]

const eventTypes = ['workshop', 'exam', 'lecture']
const getRandomValue = (array, index) => array[index]
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
  event: {
    id: primaryKey(faker.datatype.uuid),
    type: () => getRandomValue(eventTypes, faker.datatype.number({ min: 0, max: 2 })),
    group: () => getRandomValue(group, faker.datatype.number({ min: 0, max: 2 })),
    subject: () => faker.fake('{{company.bsAdjective}} {{company.bsNoun}}'),
    date: faker.date.soon,
  },
  teacher: {
    id: primaryKey(() => '1'),
    name: () => 'Jacek Sobczak',
    login: () => 'teacher@studybuddy.com',
    password: () => '1234'
  },
  note: {
    id: primaryKey(faker.datatype.uuid),
    title: () => 'Lorem ipsum dolor sit amet',
    content: () => 'Lorem ipsum dolor sit amet'
  }
})