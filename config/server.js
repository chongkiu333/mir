module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS'),
  },
  webhooks: {
    populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
  },
  admin: {
    allowContentTypeBuilder: true,
  },
  // url: env('PUBLIC_URL', 'https://big-nature-28d90fcaa4.strapiapp.com/'),
});
