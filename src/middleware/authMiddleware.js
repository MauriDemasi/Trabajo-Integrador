const passport = require('passport');
const passportJwt= require('passport-jwt');
const JWTStrategy = passportJwt.Strategy;
const ExtractJWT = passportJwt.ExtractJwt;

 const SECRET = "PalabraSuperSegura"



passport.use(
    new JWTStrategy(
    {
    jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
    secretOrKey: SECRET,
    },
    (jwtPayload, done) => {
        const user=jwtPayload;
        return done(null, user);
    
    }
)
);

const jwtValidMDW= passport.authenticate('jwt', {session: false});

const userIsAdminMDW = (req, res, next) => {
    return passport.authenticate('jwt', {session: false}, (err, user, info) => {
        if(err) {
            console.err(err);
            return next(err);
        }
        if (user.username === 'admin') {
            req.user= user;
            return next();
        }

        res.status(401).json({message: 'Unauthorized pelotudo'});
    })(req, res, next);
};

module.exports = {jwtValidMDW, userIsAdminMDW, SECRET}
  
