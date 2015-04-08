var users = require('../controllers/users');
var Joi = require('joi');
var Boom = require('boom');

module.exports = [
  {
    method: 'GET',
    path: '/users',
    handler: users.create,
    config: {
      description: 'Get todo',
      notes: 'Returns a todo item by the id passed in the path',
      tags: ['api'],
      validate: {
        query: {
          username: Joi.number()
          .required()
          .description('the id for the todo item'),
        }
      }
    }
  },
  {
    method: 'GET',
    path: '/auth',
    handler: function(request, reply){
      request.log(request);
      reply(Boom.unauthorized());
    }
  }
];
