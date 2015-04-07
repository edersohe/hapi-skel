var pluginConfig = {
  register: require('tv'),
  options: {}
};

module.exports = function(server) {
  server.register(pluginConfig, function(err){
      if(err){
        server.log(['error', 'plugin'], 'Load plugin: Tv');
      }
      else{
        server.log(['info', 'plugin'], 'Loaded plugin: Tv');
      }
  });
};
