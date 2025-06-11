const User = require('../models/User');

module.exports = {

  // Listar todos os usuários
  async index(req, res) {
    try {
      const users = await User.find().sort('-createdAt');
      return res.status(200).json(users);
    } catch (error) {
      return res.status(400).json({ error: 'Erro ao listar os usuários.' });
    }
  },

  // Criar novo usuário
  async store(req, res) {
    try {
      const { username, password, email } = req.body;

      const user = await User.create({
        username,
        password,
        email,
        createdAt: new Date(),
        updatedAt: new Date(),
      });

      return res.status(201).json(user);
    } catch (error) {
      if (error.name === 'ValidationError') {
        return res.status(400).json({
          error: 'Erro de validação.',
          details: error.errors
        });
      } else if (error.code === 11000) {
        return res.status(409).json({
          error: 'Usuário já existe.',
          conflict: error.keyValue
        });
      } else {
        return res.status(500).json({ error: 'Erro interno do servidor.' });
      }
    }
  },

  // Atualizar usuário por ID
  async update(req, res) {
    try {
      const user = await User.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      );

      if (!user) {
        return res.status(404).json({ error: 'Usuário não encontrado.' });
      }

      return res.status(200).json(user);
    } catch (error) {
      return res.status(400).json({ error: 'Erro ao atualizar o usuário.' });
    }
  },

  // Deletar usuário por ID
  async delete(req, res) {
    try {
      const user = await User.findByIdAndDelete(req.params.id);

      if (!user) {
        return res.status(404).json({ error: 'Usuário não encontrado.' });
      }

      return res.status(200).json({ message: 'Usuário deletado com sucesso.', user });
    } catch (error) {
      return res.status(400).json({ error: 'Erro ao deletar o usuário.' });
    }
  },

  // Login do usuário
  async login(req, res) {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: 'Email e senha são obrigatórios.' });
    }

    try {
      const user = await User.findOne({ email });

      if (!user || user.password !== password) {
        return res.status(401).json({ error: 'Credenciais inválidas.' });
      }

      // Criação da sessão
      req.session.userId = user._id;

      return res.status(200).json({ message: 'Login bem-sucedido.', userId: user._id });
    } catch (error) {
      return res.status(500).json({ error: 'Erro ao realizar login.' });
    }
  },

  // Logout do usuário
  logout(req, res) {
    req.session.destroy(err => {
      if (err) {
        return res.status(500).json({ error: 'Erro ao encerrar a sessão.' });
      }

      res.clearCookie('connect.sid');
      return res.status(200).json({ message: 'Logout realizado com sucesso.' });
    });
  },
  // Buscar usuário autenticado
  async getCurrentUser(req, res) {
    try {
      const user = await User.findById(req.session.userId).select('-password');

      if (!user) {
        return res.status(404).json({ error: 'Usuário não encontrado.' });
      }

      return res.status(200).json(user);
    } catch (error) {
      return res.status(500).json({ error: 'Erro ao buscar dados do usuário autenticado.' });
    }
  }
}