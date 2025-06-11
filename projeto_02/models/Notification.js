const { ServerDescription } = require('mongodb');
const mongoose = require('mongoose');

const NotificationSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'O título é obrigatório'],

  },
  date: {
    type: Date,
    required: [true, 'A data é obrigatória'],
    default: Date.now,
  },
  task:{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Task',
    required: false,
  },
    timestamps: {
    createdAt: {
      type: Date,
      default: Date.now,
    },
    updatedAt: {
      type: Date,
      default: Date.now,
    }
  }
});

module.exports = mongoose.model('Notification', NotificationSchema);