import { User } from '@models/User'

test('it should be ok', () => {
    const user = new User()
    
    user.name = 'Renan'

    expect(user.name).toEqual('Renan')
})