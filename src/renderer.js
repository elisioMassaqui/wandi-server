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
        setTimeout(startArduinoCLI, 10000); // Reinicia após 10 segundos
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

function connectToSelectedBoard(selectedBoard) {
    if (selectedBoard) {
        const command = 'arduino-cli';
        const args = ['board', 'attach', selectedBoard];
        
        const process = spawn(command, args);

        process.stdout.on('data', (data) => {
            const output = data.toString().trim();
            displayConnectionStatus(output);
        });

        process.stderr.on('data', (data) => {
            console.error(`stderr: ${data}`);
        });

        process.on('error', (err) => {
            console.error(`Erro ao iniciar processo: ${err}`);
        });

        process.on('close', (code) => {
            console.log(`Processo de conexão encerrado com código ${code}`);
        });
    } else {
        console.error('Nenhuma placa selecionada.');
    }
}

function displayConnectionStatus(status) {
    const consoleElement = document.querySelector('.console');
    consoleElement.innerHTML = `<pre>${status}</pre>`;
}

// Inicia o processo de monitoramento ao carregar a página
document.addEventListener('DOMContentLoaded', () => {
    startArduinoCLI();

    const listBtn = document.getElementById('list-btn');
    listBtn.addEventListener('click', () => {
        startArduinoCLI(); // Atualiza a lista de placas ao clicar em "Listar Placas Arduino"
    });

    const connectBtn = document.getElementById('connect-btn');
    connectBtn.addEventListener('click', () => {
        const selectElement = document.getElementById('board-select');
        const selectedBoard = selectElement.value;
        connectToSelectedBoard(selectedBoard); // Conecta à placa selecionada ao clicar em "Conectar"
    });
});
