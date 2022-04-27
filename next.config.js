const withPWA = require('next-pwa');
module.exports = withPWA({
  pwa: {
    dest: 'public',
    disable: false, //process.env.NODE_ENV === 'development',
    skipWaiting: true,

  },
  reactStrictMode: true,
  images: {
    loader: 'custom',
  },
});
// module.exports = {
//   images: {
//     loader: 'custom',
//   },
// }
