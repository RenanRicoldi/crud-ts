import request from 'supertest'

import app from '@src/app'

describe('Server', () => {
    it('should return a success message', async done => {
        const response = await request(app).get('/')

        expect(response.status).toBe(200)
        expect(response.body.status).toBe('Ok!')
        done()
    })
})