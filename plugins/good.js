var config = require('../config');

var reporters = [];

var events = function (strEvents) {
  return strEvents.split(',').reduce(function(p, c, i){
    p[c] = '*';
    return p;
  }, {});
};

//TODO: update new plugin good and good console when compatibility with influxdb is done

if (config.GOOD_CONSOLE){
  var reporter = {
    reporter: require('good-console'),
    args:[events(config.GOOD_CONSOLE)]
  };

  reporters.push(reporter);
}

if (config.GOOD_INFLUXDB && config.INFLUXDB_URI){
  var parse = require('url').parse;
  var uri = parse(config.INFLUXDB_URI);
  var auth = uri.auth.split(':');

  var reporter = {
    reporter: require('good-influxdb'),
    args:[
      uri.protocol + '//' + uri.host,{
        events: events(config.GOOD_INFLUXDB),
        database: uri.pathname,
        username: auth[0],
        password: auth[1]
      }
    ]
  };

  reporters.push(reporter);
}

pluginConfig = {
  register: require('good'),
  options: {
    reporters: reporters
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
