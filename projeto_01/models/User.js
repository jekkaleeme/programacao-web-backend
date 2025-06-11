const { ServerDescription } = require('mongodb');
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, 'O nome de usuário é obrigatório'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'A senha é obrigatória'],
    },
    email: {
        type: String,
        required: [true, 'O email é obrigatório'],
        lowercase: true,
        unique: true,
        match: [/\S+@\S+\.\S+/, 'Email inválido']
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

module.exports = mongoose.model('User', UserSchema);