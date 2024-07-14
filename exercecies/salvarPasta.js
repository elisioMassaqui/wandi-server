const fs = require('fs').promises;
const path = require('path');
const os = require('os');

const pastaUsuario = os.homedir();
const pastaDocumentos = path.join(pastaUsuario, 'Documents');
const nomePasta = 'minhapasta';

// Verifica se a pasta "Documentos" existe dentro do diretório do usuário, senão cria
fs.access(pastaDocumentos, fs.constants.F_OK)
    .catch(() => fs.mkdir(pastaDocumentos)) // Cria a pasta "Documentos" se não existir
    .then(() => {
        const caminhoPasta = path.join(pastaDocumentos, nomePasta);
        return fs.mkdir(caminhoPasta); // Cria a pasta dentro da pasta "Documentos"
    })
    .then(() => {
        console.log(`Pasta criada em: ${path.join(pastaDocumentos, nomePasta)}`);
    })
    .catch(err => {
        console.error(`Erro ao criar pasta: ${err}`);
    });
