users = require('../controllers/users');
Joi = require('joi');

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
  }
];
