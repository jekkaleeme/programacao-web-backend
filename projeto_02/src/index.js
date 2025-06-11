const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const session = require('express-session');
const cors = require('cors');
const { registerErro } = require('../log/log');
const routes = require('../routes');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Conectar ao MongoDB
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("✅ Conectado ao MongoDB");
  } catch (error) {
    console.error("❌ Erro ao conectar com o MongoDB", error);
  }
};

connectDB();

// Teste de erro registrado no sistema de logs
try {
  throw new Error('Erro no sistema de log');
} catch (err) {
  console.error('Erro capturado:', err.message);
  registerErro(err);
}

// Middlewares globais
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Sessão - declarado apenas uma vez
app.use(session({
  secret: 'agenda-secret-key',
  resave: false,
  saveUninitialized: false,
}));

// Rotas
app.use('/', routes);

// Inicialização do servidor
app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
});
