// mocks/server/server.js (using json-server)
const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('mocks/data/db.json'); // Combined data
server.use(jsonServer.defaults());

// Add custom routes
server.get('/featured', (req, res) => {
  res.jsonp(router.db.get('videos').filter(v => v.isFeatured));
});

module.exports = server;