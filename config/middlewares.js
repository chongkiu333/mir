module.exports = ({ env }) =>[
  'strapi::logger',
  'strapi::errors',
  'strapi::security',
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          'connect-src': ["'self'", 'https:'],
          'img-src': ["'self'", 'data:', 'blob:', env('PUBLIC_URL'), ],
          'media-src': [
            "'self'",
            'data:',
            'blob:',
            env('PUBLIC_URL'),
          ],
          upgradeInsecureRequests: null,
        },

      },
    },
  },
  {
    name: 'strapi::cors',
    config: {
      origin: ['http://localhost:3000', 'https://big-nature-28d90fcaa4.strapiapp.com'], // 允许的前端地址
      methods: ['GET', 'POST', 'PUT', 'DELETE'],
    },
  },

];
