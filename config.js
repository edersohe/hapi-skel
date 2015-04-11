module.exports = {

  PORT: process.env.PORT || 3000,

  NODE_ENV: process.env.NODE_ENV || 'development',

  GOOD_CONSOLE: process.env.GOOD_CONSOLE || 'log,response,request,error',

  SWAGGER_URI: process.env.SWAGGER_URI || 'http://localhost:' + this.PORT,

  TV_DEBUG: process.env.TV_DEBUG || 1,

  LOG_LEVEL: process.env.LOG_LEVEL || 'INFO'

};
