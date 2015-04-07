/* @flow */

var Hapi = require('hapi');
var Joi = require('joi');
var Tv = require('tv');
var Boom = require('boom');

var server = new Hapi.Server();

server.connection({ port: 3000 });

server.register(require('./plugins/good'), function(err){
  if(err){
    server.log(['error', 'plugin'], 'Load plugin: Good');
  }
  else{
    server.log(['info', 'plugin'], 'Loaded plugin: Good');
  }
});

server.register(require('./plugins/swagger'), function(err){
    if(err){
      server.log(['error', 'plugin'], 'Load plugin: Swagger');
    }
    else{
      server.log(['info', 'plugin'], 'Loaded plugin: Swagger');
    }
});

server.register(Tv, function (err) {
    if (!err) {
      server.log(['error', 'plugin'], 'Load plugin: TV');
      server.start();
    }
});

// server.route(require('./routes/users')[0]);

server.route({
  method: 'GET',
  path: '/auth',
  handler: function(request, reply){
    console.log(request);
    reply(Boom.unauthorized());
  }
});

server.start(function () {
  var env = process.env.NODE_ENV || 'development';
  server.log(['info', 'server'], 'Server environment: ' + env);
  server.log(['info', 'server'], 'Server running at: ' + server.info.uri);
});
