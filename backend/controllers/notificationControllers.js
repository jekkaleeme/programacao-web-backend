const Notification = require('../models/Notification');

module.exports = {
  async index(req, res) {
    try {
      const notification = await Notification.find().sort('-createdAt');

      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(notification));
    } catch (error) {
      res.writeHead(400, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: 'Erro ao listar as notificações' }));
    }
  },

  async store(req, res) {
    try {
      const { title, date, task } = req.body;

      const notification = await Notification.create({
        title,
        date,
        task,
        timestamps: {
          createdAt: new Date(),
          updatedAt: new Date()
        }
      });

      res.writeHead(201, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(notification));
    } catch (error) {
      res.writeHead(400, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: 'Erro ao criar a notificação' }));
    }
  },

  async delete(req, res) {
    try {
      const notification = await Notification.findByIdAndDelete(req.params.id);

      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ notification }));
    } catch (error) {
      res.writeHead(400, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: 'Erro ao deletar a notificação' }));
    }
  },

  async update(req, res) {
    try {
      const notification = await Notification.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true }
      );

      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ notification }));
    } catch (error) {
      res.writeHead(400, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: 'Erro ao atualizar a notificação' }));
    }
  }
};
