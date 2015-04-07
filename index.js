var Hapi = require('hapi');
var Joi = require('joi');
var Tv = require('tv');
var Boom = require('boom');
var config = require('./config');

var server = new Hapi.Server();

server.connection({ port: config.PORT });

require('./plugins/good')(server);
require('./plugins/swagger')(server);
require('./plugins/tv')(server);

// server.route(require('./routes/users')[0]);

server.route({
  method: 'GET',
  path: '/auth',
  handler: function(request, reply){
    request.log(request);
    reply(Boom.unauthorized());
  }
});

server.start(function () {
  server.log(['info', 'server'], 'Server environment: ' + config.NODE_ENV);
  server.log(['info', 'server'], 'Server running at: ' + server.info.uri);
});
