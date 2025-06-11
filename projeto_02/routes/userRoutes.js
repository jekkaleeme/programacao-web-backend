const express = require('express');
const router = express.Router();
const UserController = require('../controllers/userControllers');
const auth = require('../middlewares/auth');

// Rotas públicas
router.post('/', UserController.store);       // Cadastro
router.post('/login', UserController.login);  // Login
router.post('/logout', auth, UserController.logout); // Logout (protegido)
router.get('/me', auth, UserController.getCurrentUser); // Info do usuário logado

// Rotas protegidas
router.get('/', auth, UserController.index);          // Listar usuários
router.put('/:id', auth, UserController.update);      // Atualizar
router.delete('/:id', auth, UserController.delete);   // Deletar


module.exports = router;
