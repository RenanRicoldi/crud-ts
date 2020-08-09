import User, { IUser } from '@models/user'
import { user } from '@utils/factories'

describe('Models', () => {
    describe('User', () => {
        afterAll(async () => {
            await User.deleteMany({})
        })
    
        it('should create an User', async () => {
            const response = await User.create(user as IUser)
    
            expect(response.email).toBe(user.email.toLowerCase())
        })
    })
})