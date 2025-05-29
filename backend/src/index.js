const dotenv = require('dotenv');
const http = require('http');
const mongoose = require('mongoose');
const { registerErro } = require('../log/log');
const routes = require('../routes');

dotenv.config();

const PORT = 3000;

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Conectado ao MongoDB");
  } catch (error) {
    console.log("Erro ao conectar com o MongoDB", error);
  }
};

connectDB();

try {
  throw new Error('Erro no sistema de log');
} catch (err) {
  console.error('Erro capturado:', err.message);
  registerErro(err);
}

const server = http.createServer(async (req, res) => {
  // Configurar CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.writeHead(204);
    res.end();
    return;
  }

  let body = '';
  req.on('data', chunk => {
    body += chunk.toString();
  });

  req.on('end', async () => {
    req.body = body ? JSON.parse(body) : {};

    routes(req, res);
  });
});

server.listen(PORT, () => {
  console.log(`O servidor está rodando na porta ${PORT}`);
});
