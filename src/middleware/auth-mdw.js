const passport = require("passport");
const passportJwt = require("passport-jwt");
const JWTStrategy = passportJwt.Strategy;
const ExtractJWT = passportJwt.ExtractJwt;

const SERVER_SECRET = "PalabraSecreta";

passport.use(
  new JWTStrategy(
    {
      jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
      secretOrKey: SERVER_SECRET,
    },
    (jwtPayload, done) => {
      const user = jwtPayload;
      return done(null, user);
    }
  )
);

const jwtValidMDW = passport.authenticate("jwt", { session: false });

module.exports = { SERVER_SECRET, jwtValidMDW };