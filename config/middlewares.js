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
          'script-src': ["'self'", "'unsafe-inline'", 'cdn.ckeditor.com'], // 添加 CKEditor 的来源
          'frame-src': ["'self'", 'cdn.ckeditor.com'],
          upgradeInsecureRequests: null,
        },

      },
    },
  },
  {
    name: 'strapi::cors',
    config: {
      
      origin: ['http://localhost:3000','https://mir-beryl.vercel.app','https://useful-bracelet-76781fcdb9.strapiapp.com/'], // 允许的前端地址
      methods: ['GET', 'POST', 'PUT', 'DELETE'],
    },
  },

];
