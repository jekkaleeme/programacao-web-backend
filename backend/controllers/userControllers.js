const User = require('../models/User');

module.exports = {
  async index(req, res) {
    try {
      const user = await User.find().sort('-createdAt');

      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(user));
    } catch (error) {
      res.writeHead(400, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: 'Erro ao listar os usuários' }));
    }
  },

  async store(req, res) {
    try {
      const { username, password, email } = req.body;

      const user = await User.create({
        username,
        password,
        email,
        timestamps: {
          createdAt: new Date(),
          updatedAt: new Date()
        }
      });

      res.writeHead(201, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(user));
    } catch (error) {
        if (error.name === 'ValidationError') {
          res.writeHead(400, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({
            error: 'Erro de validação',
            details: error.errors
          }));
        } else {
          res.writeHead(500, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({ error: 'Erro interno do servidor' }));
        }
    // res.writeHead(400, { 'Content-Type': 'application/json' });
    // res.end(JSON.stringify({ error: 'Erro ao criar o usuário' }));
    }
  },

  async delete(req, res) {
    try {
      const user = await User.findByIdAndDelete(req.params.id);

      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ user }));
    } catch (error) {
      res.writeHead(400, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: 'Erro ao deletar o usuário' }));
    }
  },

  async update(req, res) {
    try {
      const user = await User.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true }  // Para retornar o documento atualizado
      );

      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ user }));
    } catch (error) {
      res.writeHead(400, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: 'Erro ao atualizar o usuário' }));
    }
  }
};
