const express = require('express');
const TaskController = require('./controllers/taskControllers');
const UserController = require('./controllers/userControllers');
const NotificationController = require('./controllers/notificationControllers');
const Task = require('./models/Task');
const User = require('./models/User');
const Notification = require('./models/Notification');

const routes = new express.Router();

routes.get('/agenda', TaskController.index);
routes.post('/agenda', TaskController.store);
routes.put('/agenda/:id', TaskController.update);
routes.delete('/agenda/:id', TaskController.delete);

routes.get('/user', UserController.index);
routes.post('/user', UserController.store);
routes.put('/user/:id', UserController.update);
routes.delete('/user/:id', UserController.delete);

routes.get('/notification', NotificationController.index);
routes.post('/notification', NotificationController.store);
routes.put('/notification/:id', NotificationController.update);
routes.delete('/notification/:id', NotificationController.delete);

module.exports = routes;