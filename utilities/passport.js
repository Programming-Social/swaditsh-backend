const { Strategy, ExtractJwt } = require('passport-jwt')
const passport = require('passport')

let opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = 'your_secret_key';
passport.use(new Strategy(opts, (jwt_payload, done) => {
    // handle payload and return user object
}))


module.exports = passport
module.exports.opts = opts
