const PrerenderSPAPlugin = require('prerender-spa-plugin');
const path = require('path');

module.exports = {
  configureWebpack: {
    plugins: [
      new PrerenderSPAPlugin({
        staticDir: path.join(__dirname, 'dist'),
        routes: ['/', '/about', '/contact', '/services','/psd-html','/wordpress','/angular','/singlepage','/ionic','/ios-android'], // Add your application routes
      }),
    ],
  },
};