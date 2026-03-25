// config/middlewares.js
module.exports = [
  'strapi::errors',
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          'connect-src': ["'self'", 'https:'],
          'img-src': ["'self'", 'data:', 'blob:', 'res.cloudinary.com'],
          'media-src': ["'self'", 'data:', 'blob:', 'res.cloudinary.com'],
          upgradeInsecureRequests: null,
        },
      },
    },
  },
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::logger',
  'strapi::query',
  // BAGIAN INI YANG DIUBAH:
  {
    name: 'strapi::body',
    config: {
      formLimit: '256mb', // Naikin limit form
      jsonLimit: '256mb', // Naikin limit JSON
      textLimit: '256mb',
      formidable: {
        maxFileSize: 200 * 1024 * 1024, // Sekitar 200MB
      },
    },
  },
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];