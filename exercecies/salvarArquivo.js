const fs = require('fs');
const path = require('path');

const pastaUsuario = require('os').homedir();
const pastaDocumentos = path.join(pastaUsuario, 'Documents');
const nomeArquivo = 'meuarquivo.txt';
const conteudoArquivo = 'Conteúdo do meu arquivo.';

// Verifica se a pasta "Documentos" existe dentro do diretório do usuário, senão cria
fs.promises.access(pastaDocumentos, fs.constants.F_OK)
    .catch(() => fs.promises.mkdir(pastaDocumentos)) // Cria a pasta se não existir
    .then(() => {
        // Cria o arquivo dentro da pasta "Documentos"
        const caminhoArquivo = path.join(pastaDocumentos, nomeArquivo);
        return fs.promises.writeFile(caminhoArquivo, conteudoArquivo);
    })
    .then(() => {
        console.log(`Arquivo criado em: ${path.join(pastaDocumentos, nomeArquivo)}`);
    })
    .catch(err => {
        console.error(`Erro ao criar arquivo: ${err}`);
    });
