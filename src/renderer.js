// src/renderer.js
const { exec } = require('child_process');

document.getElementById('execute-btn').addEventListener('click', () => {
    exec('arduino-cli board', (error, stdout, stderr) => {
        if (error) {
            console.error(`Erro ao listar diretório: ${error}`);
            document.querySelector('.flexbox-item.item-1').innerHTML = `<pre>${error}</pre>`;
            return;
        }
        if (stderr) {
            console.error(`stderr: ${stderr}`);
            document.querySelector('.flexbox-item.item-1').innerHTML = `<pre>${stderr}</pre>`;
            return;
        }
        document.querySelector('.flexbox-item.item-1').innerHTML = `<pre>${stdout}</pre>`;
    });
});
