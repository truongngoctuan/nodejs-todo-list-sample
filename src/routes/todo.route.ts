import {
  todoCreateController,
  todoListController,
  todoDeleteController
} from '../controllers/todo.controller';

import basicResponse from '../models/response.model';
import {
  validations,
  deleteValidation
} from '../validations/todo.validation';

const todoRoute = [
  {
    method: 'GET',
    path: '/todo',
    config: {
      tags: ['api'],
      description: 'Get records in Todo',
      plugins: {
        'hapi-swagger': {
          responses: basicResponse
        }
      }
    },
    handler: todoListController
  },
  {
    method: 'POST',
    path: '/todo',
    config: {
      tags: ['api'],
      description: 'Create new record in Todo',
      validate: validations.name,
      plugins: {
        'hapi-swagger': {
          payloadType: 'form',
          responses: basicResponse
        }
      }
    },
    handler: todoCreateController
  },
  {
    method: 'DELETE',
    path: '/todo/{id}',
    config: {
      tags: ['api'],
      description: 'Delete record by id in Todo',
      validate: deleteValidation.id,
      plugins: {
        'hapi-swagger': {
          responses: basicResponse
        }
      }
    },
    handler: todoDeleteController
  }
];

export default todoRoute;