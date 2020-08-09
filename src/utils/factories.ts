import faker from 'faker'

export const user = {
    name: faker.name.findName(),
    email: faker.internet.email(),
    password: faker.random.word(),
}