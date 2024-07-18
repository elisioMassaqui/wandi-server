const { spawn } = require('child_process');

async function executeCommand(command, args) {
    return new Promise((resolve, reject) => {
        const process = spawn(command, args);

        let stdout = '';
        let stderr = '';

        process.stdout.on('data', (data) => {
            stdout += data.toString();
        });

        process.stderr.on('data', (data) => {
            stderr += data.toString();
        });

        process.on('error', (err) => {
            reject(err);
        });

        process.on('close', (code) => {
            if (code !== 0) {
                reject(new Error(`Processo encerrado com código ${code}. Erro: ${stderr}`));
            } else {
                resolve(stdout.trim());
            }
        });
    });
}

async function startArduinoCLI() {
    const output = await executeCommand('arduino-cli', ['board', 'list']);
    updateArduinoBoards(output);
}

function updateArduinoBoards(output) {
    const selectElement = document.getElementById('board-select');
    selectElement.innerHTML = ''; // Limpa as opções anteriores

    const lines = output.split('\n').filter(line => line.includes('Arduino'));

    lines.forEach(line => {
        const option = document.createElement('option');
        option.textContent = option.value = line.trim();
        selectElement.appendChild(option);
    });

    if (lines.length > 0) {
        connectToSelectedBoard(lines[0].trim());
    }
}

async function connectToSelectedBoard(selectedBoard) {
    if (!selectedBoard) {
        console.error('Nenhuma placa selecionada.');
        return;
    }

    try {
        const output = await executeCommand('arduino-cli', ['board', 'attach', selectedBoard]);
        displayConnectionStatus(selectedBoard);
    } catch (error) {
        console.error('Erro ao conectar à placa:', error);
    }
}

function displayConnectionStatus(boardName) {
    document.getElementById('connected-board').textContent = `Placa conectada: ${boardName}`;
}

// Inicia o processo de monitoramento ao carregar a página
document.addEventListener('DOMContentLoaded', () => {
    startArduinoCLI();

    document.getElementById('list-btn').addEventListener('click', () => {
        startArduinoCLI(); // Atualiza a lista de placas ao clicar em "Listar Placas Arduino"
    });
});
