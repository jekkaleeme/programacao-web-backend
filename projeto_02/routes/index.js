const express = require('express');
const router = express.Router();

const userRoutes = require('./userRoutes');
const taskRoutes = require('./taskRoutes');
const notificationRoutes = require('./notificationRoutes');

// Agrupamento de rotas por entidade
router.use('/user', userRoutes);
router.use('/task', taskRoutes);
router.use('/notification', notificationRoutes);

module.exports = router;