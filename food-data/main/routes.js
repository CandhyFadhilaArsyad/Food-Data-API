const {
  postMethodHandler,
  getMethodHandler,
  getDetailMethodHandler,
  putMethodHandler,
  deleteMethodHandler,
} = require('./handler');

const routes = [
  {
    method: 'POST',
    path: '/foods',
    handler: postMethodHandler,
  },
  {
    method: 'GET',
    path: '/foods',
    handler: getMethodHandler,
  },
  {
    method: 'GET',
    path: '/foods/{id}',
    handler: getDetailMethodHandler,
  },
  {
    method: 'PUT',
    path: '/foods/{id}',
    handler: putMethodHandler,
  },
  {
    method: 'DELETE',
    path: '/foods/{id}',
    handler: deleteMethodHandler,
  },
];

module.exports = routes;