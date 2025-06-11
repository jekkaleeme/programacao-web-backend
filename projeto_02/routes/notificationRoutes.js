const express = require('express');
const router = express.Router();
const NotificationController = require('../controllers/notificationControllers');
const auth = require('../middlewares/auth');

// Todas as rotas protegidas (requerem login)
router.get('/', auth, NotificationController.index);
router.post('/', auth, NotificationController.store);
router.put('/:id', auth, NotificationController.update);
router.delete('/:id', auth, NotificationController.delete);

module.exports = router;