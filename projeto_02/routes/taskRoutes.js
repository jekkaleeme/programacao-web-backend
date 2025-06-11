const express = require('express');
const router = express.Router();
const TaskController = require('../controllers/taskControllers');
const auth = require('../middlewares/auth');

// Todas as rotas protegidas com middleware de autenticação
router.get('/', auth, TaskController.index);
router.post('/', auth, TaskController.store);
router.put('/:id', auth, TaskController.update);
router.delete('/:id', auth, TaskController.delete);

module.exports = router;