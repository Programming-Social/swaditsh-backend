const { Router } = require('express')
const { Login, Profile, SignUp } = require('../resolvers/user-resolvers.js')
const passport = require('../utilities/passport.js')

const UserRoutes = Router()

UserRoutes.route('/signup').post(SignUp)
UserRoutes.route('/login').post(Login)
UserRoutes.route('/profile').post(passport.authenticate('jwt', { session: false }), Profile)

module.exports = UserRoutes
