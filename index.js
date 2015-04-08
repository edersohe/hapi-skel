var Hapi = require('hapi');
var config = require('./config');

var server = new Hapi.Server();

server.connection({ port: config.PORT });

require('./plugins/good')(server);
require('./plugins/swagger')(server);
require('./plugins/tv')(server);

server.route(require('./routes/users'));


server.start(function () {
  server.log(['info', 'server'], 'Server environment: ' + config.NODE_ENV);
  server.log(['info', 'server'], 'Server running at: ' + server.info.uri);
});
