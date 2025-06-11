const fs = require('fs');
const path = require('path');

const LOG_FILE = path.join(__dirname, 'log_erros.txt');

function registerErro(err) {
    const date_now = new Date().toISOString();
    const log = `
----- EXCEÇÃO -----
Data e hora: ${date_now}
Mensagem: ${err.message}
Tipo: ${err.name}
Descrição:
${err.stack}
`;

    fs.appendFile(LOG_FILE, log, (erroWrithing) => {
        if (erroWrithing) {
            console.error('Erro ao escrever no arquivo de log:', erroWrithing);
        }
    });
}

module.exports = { registerErro };
