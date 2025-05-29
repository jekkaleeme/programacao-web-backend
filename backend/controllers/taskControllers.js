const Task = require('../models/Task');

module.exports = {
  async index(req, res) {
    try {
      const task = await Task.find().sort('-createdAt');

      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(task));
    } catch (error) {
      res.writeHead(500, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: 'Erro ao listar as tarefas' }));
    }
  },

  async store(req, res) {
    try {
      const { title, content, start_date, end_date } = req.body;

      const task = await Task.create({
        title,
        content,
        start_date,
        end_date,
        timestamps: {
          createdAt: new Date(),
          updatedAt: new Date()
        }
      });

      res.writeHead(201, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(task));
    } catch (error) {
      res.writeHead(400, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: 'Erro ao criar a tarefa' }));
    }
  },

  async update(req, res) {
    try {
      const task = await Task.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true }  // Para retornar o documento atualizado
      );

      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ task }));
    } catch (error) {
      res.writeHead(400, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: 'Erro ao atualizar a tarefa' }));
    }
  },

  async delete(req, res) {
    try {
      const task = await Task.findByIdAndDelete(req.params.id);

      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ task }));
    } catch (error) {
      res.writeHead(400, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: 'Erro ao deletar a tarefa' }));
    }
  }
};
