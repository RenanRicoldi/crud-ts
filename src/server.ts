import express, { Request, Response } from 'express'

const app = express()

app.get('/', (request: Request, response: Response) => {
    return response.json({ message:'bom dia' })
})

app.listen(8080)
