const { ServerDescription } = require('mongodb');
const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    default: null,
  },
  end_date: {
    type: Date,
    required: true,
    default: Date.now,
  },
});

module.exports = mongoose.model('Task', TaskSchema);