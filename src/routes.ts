import { Router } from 'express'

import registerController from '@controllers/registerController'

const routes = Router()

routes.post('/userRegister', registerController.register)

export default routes