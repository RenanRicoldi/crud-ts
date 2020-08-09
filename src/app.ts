import express, { Request, Response } from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import dotenv from 'dotenv'

import routes from './routes'

dotenv.config({
    path: process.env.NODE_ENV.includes('test') ? '.env.test' : '.env'
})

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors())
app.use(routes)

app.get('/', (request: Request, response: Response) => {
    return response.json({ status:'Ok!' })
})

export default app