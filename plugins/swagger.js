var uri = 'http://localhost:' + (process.env.PORT || 3000);

if (process.env.NODE_ENV == 'production' && process.env.SWAGGER_URI){
  uri = process.env.SWAGGER_URI;
}

pluginConfig = {
  register: require('hapi-swagger'),
  options: {
      basePath: uri,
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
