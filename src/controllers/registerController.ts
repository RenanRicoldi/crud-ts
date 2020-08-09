import { Request, Response } from 'express'
import User, { IUser } from '@models/user'

/*
 TODO criar a documentação no Insomnia Designer
 ? colocar o envio de email na mesma função, em outra função e chamá-la na função de register ou em outra rota
*/

const registerController = {
    register: async (req: Request, res: Response):Promise<Response> => {
        try {
            const { ...body }:IUser = req.body 

            body.accountType = 'unverified'        

            await User.create(body as IUser)
        
            return res.json({ status: 'Usuário registrado com sucesso! Esperando verificação de conta!' })
        } catch(error) {
            return res.status(400).json({ status: 'Falha ao registrar!' })
        }
    }
}

export default registerController