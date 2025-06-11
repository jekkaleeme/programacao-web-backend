const Notification = require('../models/Notification');

module.exports = {
  // Listar todas as notificações
  async index(req, res) {
    try {
      const notifications = await Notification.find().sort('-createdAt');
      return res.status(200).json(notifications);
    } catch (error) {
      return res.status(400).json({ error: 'Erro ao listar as notificações.' });
    }
  },

  // Criar nova notificação
  async store(req, res) {
    try {
      const { title, date, task } = req.body;

      const notification = await Notification.create({
        title,
        date,
        task,
        createdAt: new Date(),
        updatedAt: new Date(),
      });

      return res.status(201).json(notification);
    } catch (error) {
      return res.status(400).json({ error: 'Erro ao criar a notificação.' });
    }
  },

  // Deletar uma notificação por ID
  async delete(req, res) {
    try {
      const notification = await Notification.findByIdAndDelete(req.params.id);

      if (!notification) {
        return res.status(404).json({ error: 'Notificação não encontrada.' });
      }

      return res.status(200).json({ message: 'Notificação deletada com sucesso.', notification });
    } catch (error) {
      return res.status(400).json({ error: 'Erro ao deletar a notificação.' });
    }
  },

  // Atualizar notificação por ID
  async update(req, res) {
    try {
      const notification = await Notification.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      );

      if (!notification) {
        return res.status(404).json({ error: 'Notificação não encontrada.' });
      }

      return res.status(200).json(notification);
    } catch (error) {
      return res.status(400).json({ error: 'Erro ao atualizar a notificação.' });
    }
  }
};