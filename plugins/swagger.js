var uri = 'http://localhost:' + (process.env.PORT || 3000);

if (process.env.NODE_ENV == 'production' && process.env.SWAGGER_URI){
  uri = process.env.SWAGGER_URI;
}

module.exports = {
  register: require('hapi-swagger'),
  options: {
      basePath: uri,
      apiVersion: require('../package').version
  }
};
