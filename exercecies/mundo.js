const { exec } = require('child_process');
const fs = require('fs');
const path = require('path');

// Define o nome da pasta e do arquivo
const folderName = 'mundo';
const fileName = `${folderName}.ino`;

// Cria a pasta
exec(`mkdir ${folderName}`, (err) => {
  if (err) {
    console.error(`Erro ao criar a pasta: ${err}`);
    return;
  }

  console.log(`Pasta '${folderName}' criada com sucesso.`);

  // Cria o arquivo dentro da pasta
  const filePath = path.join(folderName, fileName);
  fs.writeFile(filePath, '', (err) => {
    if (err) {
      console.error(`Erro ao criar o arquivo: ${err}`);
      return;
    }

    console.log(`Arquivo '${fileName}' criado com sucesso dentro da pasta '${folderName}'.`);
  });
});
