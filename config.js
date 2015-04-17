module.exports = function() {
  this.PORT = process.env.PORT || 3000;
  this.GOOD_CONSOLE = process.env.GOOD_CONSOLE || 'log,response,request,error';
  this.NODE_ENV = process.env.NODE_ENV || 'development';
  this.SWAGGER_URI = process.env.SWAGGER_URI || 'http://localhost:' + this.PORT;
  this.TV_DEBUG = process.env.TV_DEBUG || 1;
  this.LOG_LEVEL = process.env.LOG_LEVEL || 'INFO';
  return this;
}();
