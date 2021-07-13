const withPWA = require('next-pwa');
const runtimeCaching = require('next-pwa/cache');
const debug = process.env.NODE_ENV !== 'production';

// This file is not going through babel transformation.
// So, we write it in vanilla JS
// (But you could use ES2015 features supported by your Node.js version)

module.exports = withPWA({
  pwa: {
    dest: 'public',
    runtimeCaching,
  },
  assetPrefix: !debug ? '/gh-pages-next-pwa/' : ''
});

