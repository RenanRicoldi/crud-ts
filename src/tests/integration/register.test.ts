import request from 'supertest'
import { user } from '@utils/factories'
import app from '@src/app'
import User, { IUser } from '@models/user'

describe('Register', () => {
    afterAll(async () => {
        await User.deleteMany({})
    })
    
    it('should register a user with success', async done => {
        const response = await request(app).post('/userRegister').send(user as IUser)

        expect(response.status).toBe(200)
        expect(response.body.status).toBe('Usuário registrado com sucesso! Esperando verificação de conta!')
        done()
    })

    it('should not register without the necessary fields', async done => {
        const body = {
            name: user.name,
            email: user.email,
        }

        const response = await request(app).post('/userRegister').send(body as IUser)

        expect(response.status).toBe(400)
        expect(response.body.status).toBe('Falha ao registrar!')
        done()
    })
})