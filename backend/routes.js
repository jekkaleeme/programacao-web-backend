const TaskController = require('./controllers/taskControllers');
const UserController = require('./controllers/userControllers');
const NotificationController = require('./controllers/notificationControllers');

module.exports = async (req, res) => {
  const { url, method } = req;

  // Rota: /agenda
  if (url === '/task' && method === 'GET') {
    return TaskController.index(req, res);
  }
  if (url === '/task' && method === 'POST') {
    return TaskController.store(req, res);
  }
  if (url.startsWith('/task/') && method === 'PUT') {
    req.params = { id: url.split('/')[2] };
    return TaskController.update(req, res);
  }
  if (url.startsWith('/task/') && method === 'DELETE') {
    req.params = { id: url.split('/')[2] };
    return TaskController.delete(req, res);
  }

  // Rota: /user
  if (url === '/user' && method === 'GET') {
    return UserController.index(req, res);
  }
  if (url === '/user' && method === 'POST') {
    return UserController.store(req, res);
  }
  if (url.startsWith('/user/') && method === 'PUT') {
    req.params = { id: url.split('/')[2] };
    return UserController.update(req, res);
  }
  if (url.startsWith('/user/') && method === 'DELETE') {
    req.params = { id: url.split('/')[2] };
    return UserController.delete(req, res);
  }

  // Rota: /notification
  if (url === '/notification' && method === 'GET') {
    return NotificationController.index(req, res);
  }
  if (url === '/notification' && method === 'POST') {
    return NotificationController.store(req, res);
  }
  if (url.startsWith('/notification/') && method === 'PUT') {
    req.params = { id: url.split('/')[2] };
    return NotificationController.update(req, res);
  }
  if (url.startsWith('/notification/') && method === 'DELETE') {
    req.params = { id: url.split('/')[2] };
    return NotificationController.delete(req, res);
  }

  // Rota não encontrada
  res.writeHead(404, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({ error: 'Rota não encontrada' }));
};