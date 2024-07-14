const fs = require('fs').promises;
const path = require('path');
const os = require('os');
const { v4: uuidv4 } = require('uuid'); // Importa a função v4 do UUID para gerar IDs únicos

const pastaUsuario = os.homedir();
const pastaDocumentos = path.join(pastaUsuario, 'Documents');
const pastaCausaEfeito = path.join(pastaDocumentos, 'causaeefeito');
const pastaCodes = path.join(pastaCausaEfeito, 'codes');
var wandicode = 'wandicode';

// Função para gerar sufixo aleatório de 2 números
function gerarSufixoAleatorio() {
    const numero1 = Math.floor(Math.random() * 10); // Gera número aleatório de 0 a 9
    const numero2 = Math.floor(Math.random() * 10); // Gera número aleatório de 0 a 9
    return `${numero1}${numero2}`;
}

// Função para criar a próxima pasta com sufixo aleatório
function criarProximaPasta() {
    const sufixo = gerarSufixoAleatorio();
    const nomePasta = `${wandicode}_${sufixo}`; // Nome da pasta com sufixo aleatório
    const caminhoPasta = path.join(pastaCodes, nomePasta);
    const caminhoArquivo = path.join(caminhoPasta, `${nomePasta}.ino`); // Nome do arquivo .ino é o mesmo que o nome da pasta
    
    return fs.mkdir(caminhoPasta) // Cria a pasta com o nome atualizado
        .then(() => {
            const conteudoArquivo = '// Código do arquivo .ino\nvoid setup() {\n  // Setup\n}\n\nvoid loop() {\n  // Loop\n}';
            return fs.writeFile(caminhoArquivo, conteudoArquivo); // Cria o arquivo .ino dentro da pasta
        })
        .then(() => {
            console.log(`Pasta e arquivo .ino criados em: ${caminhoPasta}`);
        })
        .catch(err => {
            console.error(`Erro ao criar pasta ou arquivo .ino: ${err}`);
        });
}

// Verifica se a pasta "Documentos" existe dentro do diretório do usuário, senão cria
fs.access(pastaDocumentos, fs.constants.F_OK)
    .catch(() => fs.mkdir(pastaDocumentos)) // Cria a pasta "Documentos" se não existir
    .then(() => fs.access(pastaCausaEfeito, fs.constants.F_OK))
    .catch(() => fs.mkdir(pastaCausaEfeito)) // Cria a pasta "causaeefeito" se não existir
    .then(() => fs.access(pastaCodes, fs.constants.F_OK))
    .catch(() => fs.mkdir(pastaCodes)) // Cria a pasta "codes" se não existir
    .then(criarProximaPasta) // Chama a função para criar a primeira pasta com sufixo aleatório
    .catch(err => {
        console.error(`Erro ao criar pasta ou arquivo .ino: ${err}`);
    });
