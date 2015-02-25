var reporter = {
  reporter: require('good-console'),
  args:[{ log: '*', response: '*' , request: '*', error: '*'}]
}

if (process.env.NODE_ENV == 'production' && process.env.INFLUXDB_URI){
  var parse = require('url').parse;
  var uri = parse(process.env.INFLUXDB_URI);
  var auth = uri.auth.split(':');

  reporter = {
    reporter: require('good-influxdb'),
    args:[
      uri.protocol + '//' + uri.host,{
        events: {
          log: '*', response: '*' , ops: '*', request: '*', error: '*'
        },
        database: uri.pathname,
        username: auth[0],
        password: auth[1]
      }
    ]
  }
}

module.exports = {
  register: require('good'),
  options: {
    reporters: [reporter]
  }
};
