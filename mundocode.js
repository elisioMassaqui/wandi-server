const { exec } = require('child_process');
const fs = require('fs');
const path = require('path');

// Define o nome das pastas e do arquivo
const mainFolder = 'wandicode';
const subFolder = 'mundo';
const fileName = `${subFolder}.ino`;

// Função para criar uma pasta
function createFolder(folderPath, callback) {
  fs.mkdir(folderPath, { recursive: true }, (err) => {
    if (err) {
      console.error(`Erro ao criar a pasta ${folderPath}: ${err}`);
      return;
    }
    console.log(`Pasta '${folderPath}' criada com sucesso.`);
    callback();
  });
}

// Verifica se a pasta 'wandicode' existe
fs.access(mainFolder, fs.constants.F_OK, (err) => {
  if (err) {
    // Se a pasta 'wandicode' não existe, cria a pasta
    createFolder(mainFolder, createSubFolderAndFile);
  } else {
    // Se a pasta 'wandicode' já existe, cria a pasta 'mundo' e o arquivo 'mundo.ino'
    createSubFolderAndFile();
  }
});

// Função para criar a pasta 'mundo' e o arquivo 'mundo.ino'
function createSubFolderAndFile() {
  const subFolderPath = path.join(mainFolder, subFolder);
  createFolder(subFolderPath, () => {
    const filePath = path.join(subFolderPath, fileName);
    fs.writeFile(filePath, '', (err) => {
      if (err) {
        console.error(`Erro ao criar o arquivo: ${err}`);
        return;
      }
      console.log(`Arquivo '${fileName}' criado com sucesso dentro da pasta '${subFolderPath}'.`);
    });
  });
}
