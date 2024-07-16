// src/renderer.js
const { exec } = require('child_process');

document.getElementById('execute-btn').addEventListener('click', () => {
    exec('arduino-cli', (error, stdout, stderr) => {
        if (error) {
            console.error(`Erro ao listar diretório: ${error}`);
            document.querySelector('.console').innerHTML = `<pre>${error}</pre>`;
            return;
        }
        if (stderr) {
            console.error(`stderr: ${stderr}`);
            document.querySelector('console').innerHTML = `<pre>${stderr}</pre>`;
            return;
        }
        document.querySelector('.console').innerHTML = `<pre>${stdout}</pre>`;
    });
});
