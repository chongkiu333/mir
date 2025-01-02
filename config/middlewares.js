module.exports = [
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
          'script-src': [
            "'self'", // 允许加载当前域名的脚本
            'https://cdn.ckeditor.com', // 继续允许 CKEditor 的 CDN
            'https://big-nature-28d90fcaa4.strapiapp.com' // 添加你的 Strapi Cloud 域名
          ],
          'connect-src': [
            "'self'",
            'https://proxy-event.ckeditor.com' ,// 继续允许 CKEditor 的连接
            'https://big-nature-28d90fcaa4.strapiapp.com'
          ],
          'img-src': [
            "'self'", // 允许加载当前域名的图片
            'data:', // 允许 data URLs
            'blob:', // 允许 blob URLs
            'https://cdn.ckeditor.com',
            'https://big-nature-28d90fcaa4.strapiapp.com' // 添加你的域名
          ],
          'media-src': [
            "'self'",
            'data:',
            'blob:',
            'https://big-nature-28d90fcaa4.strapiapp.com'
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
