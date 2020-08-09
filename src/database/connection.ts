/*
*   Aqui é feita a conexão com o banco de dados
*   Usando o MongoDB acessado pelo mongoose
*/

import mongoose from 'mongoose'
import Grid from 'gridfs-stream'
import dotenv from 'dotenv'

dotenv.config({
    path: process.env.NODE_ENV.includes('test') ? '.env.test' : '.env'
})

let gfs

mongoose.connect(process.env.MONGODB_URI,  { useNewUrlParser: true, useFindAndModify: false })
mongoose.Promise = global.Promise
const connection = mongoose.connection
connection.once('open', function () {
    gfs = Grid(connection.db, mongoose.mongo)
    gfs.collection('uploads')
})

export default mongoose