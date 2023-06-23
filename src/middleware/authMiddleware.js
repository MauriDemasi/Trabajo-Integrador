const passport = require('passport');
const passportJwt= require('passport-jwt');
const JWTStrategy = passportJwt.Strategy;
const ExtractJWT = passportJwt.ExtractJwt;

 const secret = "PalabraSuperSegura"


passport.use(
    new JWTStrategy(
    {
        jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
        secretOrKey: secret
    },
    
    (jwtPayload, done) => {
        return done(null, jwtPayload);
    }
    )

);

const authMiddleware = passport.authenticate('jwt', {session: false});

const adminValidate = (req, res, next) => {
    return passport.authenticate('jwt', {session: false}, (err, user, info) => {
        if (err) {
            console.err(err);
            return next(err);
        }

        if(user.role === "admin"){
            req.user = user;
            return next()
        }

        res.status(403).json({error: "This user isn't an admin."});
    })(req, res, next)
};

module.exports = {authMiddleware, adminValidate, secret}; 
  
