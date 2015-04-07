var Tv = require('tv');
var pluginConfig = {};

module.exports = function(server) {
  server.register({register: Tv, options: pluginConfig}, function(err){
      if(err){
        server.log(['error', 'plugin'], 'Load plugin: Tv');
      }
      else{
        server.log(['info', 'plugin'], 'Loaded plugin: Tv');
      }
  });
};
