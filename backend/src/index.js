const dotenv = require('dotenv');
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

const connectDB = async () => {
  try {
    mongoose.connect(process.env.MONGO_URI);
    console.log("Conectado ao MongoDB");
  } catch (error) {
    console.log("Erro ao conectar com o MongoDB", error);
  }
};

connectDB();

app.use(require('../routes'));

const { registerErro } = require('../log/log');

try {
    throw new Error('Erro no sistema de log');
} catch (err) {
    console.error('Erro capturado:', err.message);
    registerErro(err);
}

app.listen(PORT, () => console.log(`O servidor está rodando na porta ${PORT}`));