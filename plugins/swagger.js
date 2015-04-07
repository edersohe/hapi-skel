var config = require('../config');

var pluginConfig = {
  register: require('hapi-swagger'),
  options: {
      basePath: config.SWAGGER_URI,
      apiVersion: require('../package').version
  }
};

module.exports = function(server) {
  server.register(pluginConfig, function(err){
      if(err){
        server.log(['error', 'plugin'], 'Load plugin: Swagger');
      }
      else{
        server.log(['info', 'plugin'], 'Loaded plugin: Swagger');
      }
  });
};
