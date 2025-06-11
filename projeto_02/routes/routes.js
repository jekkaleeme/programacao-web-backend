const express = require('express');
const router = express.Router();

const auth = require('../middlewares/auth');

const TaskController = require('../controllers/taskControllers');
const UserController = require('../controllers/userControllers');
const NotificationController = require('../controllers/notificationControllers');

// Rotas de Usuários
router.get('/user', UserController.index);
router.post('/user', UserController.store);
router.put('/user/:id', UserController.update);
router.delete('/user/:id', UserController.delete);

// Rotas de Autenticação
router.post('/login', UserController.login);
router.post('/logout', (req, res) => {
  req.session.destroy(err => {
    if (err) {
      return res.status(500).json({ error: 'Erro ao encerrar a sessão.' });
    }
    res.clearCookie('connect.sid');
    return res.status(200).json({ message: 'Logout realizado com sucesso.' });
  });
});

// Rotas de Eventos (Tasks)
router.get('/task', TaskController.index);
router.post('/task', TaskController.store);
router.put('/task/:id', TaskController.update);
router.delete('/task/:id', TaskController.delete);

// Rotas de Notificações
router.get('/notification', NotificationController.index);
router.post('/notification', NotificationController.store);
router.put('/notification/:id', NotificationController.update);
router.delete('/notification/:id', NotificationController.delete);

// Rotas protegidas com autenticação
router.get('/', auth, TaskController.index);
router.post('/', auth, TaskController.store);
router.put('/:id', auth, TaskController.update);
router.delete('/:id', auth, TaskController.delete);

router.get('/me', auth, async (req, res) => {
  try {
    const user = await User.findById(req.session.userId).select('-password');
    if (!user) {
      return res.status(404).json({ error: 'Usuário não encontrado.' });
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar usuário autenticado.' });
  }
});

module.exports = router;
