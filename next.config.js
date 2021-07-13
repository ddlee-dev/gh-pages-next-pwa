const withPWA = require('next-pwa');
const runtimeCaching = require('next-pwa/cache');
const production = process.env.NODE_ENV === 'production';
const basePath = production ? '/gh-pages-next-pwa' : '';

// This file is not going through babel transformation.
// So, we write it in vanilla JS
// (But you could use ES2015 features supported by your Node.js version)

module.exports = withPWA({
  assetPrefix: production ? '/gh-pages-next-pwa/' : '',
  basePath: basePath,
  env: {
    basePath: basePath,
  },
  pwa: {
    mode: 'production',
    dest: 'public',
    disable: false,
    register: true,
    runtimeCaching: runtimeCaching
  }
});

