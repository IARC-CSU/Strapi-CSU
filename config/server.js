module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 8011),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', 'a3d303b5dd94b1976cb4c96c495da09e'),
    },
  },
});
