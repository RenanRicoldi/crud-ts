import mongoose from '@database/connection'
import encrypt from 'bcryptjs'

export interface IUser extends mongoose.Document {
    name: string,
    email: string,
    password: string,
    picture?: string,
    tokenLimit?: string,
    accountType?: string,
    accountToken?: string
}

const user = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true,
        select: false
    },
    picture: {
        type: String
    },
    tokenLimit: {
        type: Date,
        select: false
    },
    accountType: {
        type: String
    },
    accountToken: {
        type: String,
        select: false
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

// Encripta a senha antes de enviar para o banco de dados
user.pre<IUser>('save', async function(next) {
    const hash = await encrypt.hash(this.password, 11)
    
    this.password = hash

    next()
})

export default mongoose.model<IUser>('UserLogin', user)