const SamlStrategy = require('passport-saml').Strategy;

module.exports = function (passport, config) {

  passport.serializeUser(function (user, done) {
    done(null, user);
  });

  passport.deserializeUser(function (user, done) {
    done(null, user);
  });

  passport.use(new SamlStrategy(
    {
      path: config.passport.saml.path,
      entryPoint: config.passport.saml.entryPoint,
      issuer: config.passport.saml.issuer,
      cert: config.passport.saml.cert,
      forceAuthn: true
    },
    function (profile, done) {
      console.log(profile);
      return done(null,
        {
          id: profile[config.mapping.id],
          email: profile[config.mapping.email],
          displayName: profile[config.mapping.displayName]
        });
    })
  );

};
