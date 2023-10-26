const GoogleStrategy = require("passport-google-oauth20").Strategy;
const passport = require("passport");

const GOOGLE_CLIENT_ID =
  "638912114324-b2ga67pimtebcb75s4kjnb3kj455lpt3.apps.googleusercontent.com";
const GOOGLE_CLIENT_SECRET = "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";

passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: "/auth/google/callback",
    },
    function (accessToken, refreshToken, profile, done) {
      done(null, profile);
      // console.log(accessToken, refreshToken)
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
  
});
