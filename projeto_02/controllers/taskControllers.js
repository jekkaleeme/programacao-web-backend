const Task = require('../models/Task');

module.exports = {
  // Listar todas as tarefas (eventos)
  async index(req, res) {
    try {
      const tasks = await Task.find().sort('-createdAt');
      return res.status(200).json(tasks);
    } catch (error) {
      return res.status(500).json({ error: 'Erro ao listar as tarefas.' });
    }
  },

  // Criar nova tarefa
  async store(req, res) {
    try {
      const { title, content, start_date, end_date, local } = req.body;

      const startDate = start_date ? new Date(start_date) : new Date();
      const finalEndDate = end_date
        ? new Date(end_date)
        : new Date(new Date(startDate).setDate(startDate.getDate() + 1));

      const task = await Task.create({
        title,
        content,
        local,
        start_date: startDate,
        end_date: finalEndDate,
        createdAt: new Date(),
        updatedAt: new Date(),
      });

      return res.status(201).json(task);
    } catch (error) {
      return res.status(400).json({ error: 'Erro ao criar a tarefa.' });
    }
  },

  // Atualizar tarefa por ID
  async update(req, res) {
    try {
      const task = await Task.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      );

      if (!task) {
        return res.status(404).json({ error: 'Tarefa não encontrada.' });
      }

      return res.status(200).json(task);
    } catch (error) {
      return res.status(400).json({ error: 'Erro ao atualizar a tarefa.' });
    }
  },

  // Deletar tarefa por ID
  async delete(req, res) {
    try {
      const task = await Task.findByIdAndDelete(req.params.id);

      if (!task) {
        return res.status(404).json({ error: 'Tarefa não encontrada.' });
      }

      return res.status(200).json({ message: 'Tarefa deletada com sucesso.', task });
    } catch (error) {
      return res.status(400).json({ error: 'Erro ao deletar a tarefa.' });
    }
  }
};
