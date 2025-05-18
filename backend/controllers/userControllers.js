const User = require('../models/User');

module.exports = {
  async index(req, res) {

    try {
      const user = await User.find().sort('-createdAt');

      return res.json(user);

    } catch (error) {
      return res.status(400).json({ error: 'Erro ao listar as tarefas' });
    }
  },

  async store(req, res) {
    try {
      const { username, password, email } = req.body;
      const user = await User.create({
        username,
        password,
        email
      });
      return res.json(user);
    } catch (error) {
      return res.status(400).json({ error: 'Erro ao criar a tarefa' });
    }
  },
  async delete(req, res) {
    try{
      const user = await User.findByIdAndDelete(req.params.id);

      return res.json({ user });
    } catch (error) {
      return res.status(400).json({ error: 'Erro ao deletar a tarefa' });
    }
  },
  async update(req, res) {
    try{
      const user = await User.findOneAndUpdate({ _id: req.params.id }, req.body);

      return res.json({ user });
    } catch (error) {
      return res.status(400).json({ error: 'Erro ao atualizar a tarefa' });
    }
  }
};