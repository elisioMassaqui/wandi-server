const { spawn } = require('child_process');

function startArduinoCLI() {
    const command = 'arduino-cli';
    const args = ['board', 'list'];
    
    const process = spawn(command, args);

    process.stdout.on('data', (data) => {
        const output = data.toString().trim();
        updateArduinoBoards(output);
    });

    process.stderr.on('data', (data) => {
        console.error(`stderr: ${data}`);
    });

    process.on('error', (err) => {
        console.error(`Erro ao iniciar processo: ${err}`);
    });

    process.on('close', (code) => {
        console.log(`Processo encerrado com código ${code}`);
        // Reinicia o processo após um pequeno atraso
        setTimeout(startArduinoCLI, 100); // Reinicia após 10 segundos
    });
}

function updateArduinoBoards(output) {
    const selectElement = document.getElementById('board-select');
    selectElement.innerHTML = ''; // Limpa as opções anteriores

    const lines = output.split('\n');
    const filteredLines = lines.filter(line => line.includes('Arduino'));

    filteredLines.forEach(line => {
        const option = document.createElement('option');
        option.textContent = line.trim();
        selectElement.appendChild(option);
    });
}

// Inicia o processo de monitoramento ao carregar a página
document.addEventListener('DOMContentLoaded', () => {
    startArduinoCLI();

    const executeBtn = document.getElementById('execute-btn');
    executeBtn.addEventListener('click', () => {
        startArduinoCLI(); // Executa novamente ao clicar no botão
    });
});
