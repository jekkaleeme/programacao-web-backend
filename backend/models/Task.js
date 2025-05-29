const { ServerDescription } = require('mongodb');
const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'O título é obrigatório'],
  },
  content: {
    type: String,
    required: false,
    default: null,
  },
  start_date: {
    type: Date,
    required: false,
    default: Date.now,
  },
  end_date: {
    type: Date,
  //  required: [true, 'A data de término é obrigatória'],
  // default: () => new Date(Date.now + 24 * 60 * 60 * 1000), // +1 dia
  },
  local: {
    type: String,
    required: false,
    default: null,
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

// ✅ Pre-save hook
TaskSchema.pre('save', function (next) {
  if (!this.end_date || this.isModified('start_date')) {
    this.end_date = new Date(this.start_date.getTime() + 24 * 60 * 60 * 1000); // +1 dia
  }
  next();
});

// ✅ Pre-update hook
TaskSchema.pre('findOneAndUpdate', function (next) {
  const update = this.getUpdate();

  if (update.start_date) {
    update.end_date = new Date(new Date(update.start_date).getTime() + 24 * 60 * 60 * 1000);
  }

  next();
});

module.exports = mongoose.model('Task', TaskSchema);