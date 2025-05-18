const Task = require('../models/Task');

module.exports = {
  async index(req, res) {

    try {
      const task = await Task.find().sort('-createdAt');

      return res.json(task);

    } catch (error) {
      return res.status(400).json({ error: 'Erro ao listar as tarefas' });
    }
  },

  async store(req, res) {
    try {
      const { title, content, end_date } = req.body;
      const task = await Task.create({
        title,
        content,
        end_date
      });
      return res.json(task);
    } catch (error) {
      return res.status(400).json({ error: 'Erro ao criar a tarefa' });
    }
  },
  async delete(req, res) {
    try{
      const task = await Task.findByIdAndDelete(req.params.id);

      return res.json({ task });
    } catch (error) {
      return res.status(400).json({ error: 'Erro ao deletar a tarefa' });
    }
  },
  async update(req, res) {
    try{
      const task = await Task.findOneAndUpdate({ _id: req.params.id }, req.body);

      return res.json({ task });
    } catch (error) {
      return res.status(400).json({ error: 'Erro ao atualizar a tarefa' });
    }
  }
};