const Notification = require('../models/Notification');

module.exports = {
  async index(req, res) {

    try {
      const notification = await Notification.find().sort('-createdAt');

      return res.json(notification);

    } catch (error) {
      return res.status(400).json({ error: 'Erro ao listar as tarefas' });
    }
  },

  async store(req, res) {
    try {
      const { title, date, type, task } = req.body;
      const notification = await Notification.create({
        title,
        date,
        type,
        task
      });
      return res.json(notification);
    } catch (error) {
      return res.status(400).json({ error: 'Erro ao criar a tarefa' });
    }
  },
  async delete(req, res) {
    try{
      const notification = await Notification.findByIdAndDelete(req.params.id);

      return res.json({ notification });
    } catch (error) {
      return res.status(400).json({ error: 'Erro ao deletar a tarefa' });
    }
  },
  async update(req, res) {
    try{
      const notification = await Notification.findOneAndUpdate({ _id: req.params.id }, req.body);

      return res.json({ notification });
    } catch (error) {
      return res.status(400).json({ error: 'Erro ao atualizar a tarefa' });
    }
  }
};