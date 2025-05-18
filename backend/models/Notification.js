const { ServerDescription } = require('mongodb');
const mongoose = require('mongoose');

const NotificationSchema = new mongoose.Schema({
  title: {
    type: String,
    default: null,
  },
  date: {
    type: Date,
    required: true,
    default: Date.now,
  },
  type: {
    type: String,
    required: true,
  },
  task:{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Task',
  }
});

module.exports = mongoose.model('Notification', NotificationSchema);