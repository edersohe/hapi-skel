var config = require('../config');

var events = function (strEvents) {
  return strEvents.split(',').reduce(function(p, c, i){
    p[c] = '*';
    return p;
  }, {});
};

if (config.GOOD_CONSOLE){
  var reporter = {
    reporter: require('good-console'),
    events: events(config.GOOD_CONSOLE)
  };
}

pluginConfig = {
  register: require('good'),
  options: {
    reporters: [reporter]
  }
};

module.exports = function(server) {
  server.register(pluginConfig, function(err){
      if(err){
        server.log(['error', 'plugin'], 'Load plugin: Good');
      }
      else{
        server.log(['info', 'plugin'], 'Loaded plugin: Good');
      }
  });
};
