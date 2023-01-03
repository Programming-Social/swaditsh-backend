import { Router } from 'express';
import { SignUp } from '../resolvers/user-resolvers.js'

const UserRoutes = Router()

UserRoutes.route('/signup').post(SignUp)



export default UserRoutes
