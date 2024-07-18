const { spawn } = require('child_process');

function startArduinoCLI() {
    const command = 'arduino-cli';
    const args = ['board', 'list'];
    
    const process = spawn(command, args);

    process.stdout.on('data', (data) => {
        const output = data.toString().trim();
        displayArduinoBoard(output);
    });

    process.stderr.on('data', (data) => {
        console.error(`stderr: ${data}`);
    });

    process.on('error', (err) => {
        console.error(`Erro ao iniciar processo: ${err}`);
    });

    process.on('close', (code) => {
        console.log(`Processo encerrado com código ${code}`);
        // Reinicia o processo após um atraso
        setTimeout(startArduinoCLI, 10000); // Reinicia após 10 segundos
    });
}

function displayArduinoBoard(output) {
    const displayElement = document.getElementById('board-display');
    displayElement.textContent = '';

    const lines = output.split('\n');
    const filteredLines = lines.filter(line => line.includes('Arduino'));

    if (filteredLines.length === 0) {
        displayElement.textContent = 'Nenhuma placa detectada';
    } else {
        displayElement.textContent = `Placa encontrada: ${filteredLines[0].trim()}`;
    }
}

// Inicia o processo de monitoramento ao carregar a página
document.addEventListener('DOMContentLoaded', () => {
    startArduinoCLI();

    const executeBtn = document.getElementById('execute-btn');
    executeBtn.addEventListener('click', () => {
        startArduinoCLI(); // Executa novamente ao clicar no botão
    });
});
