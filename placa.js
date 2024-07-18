const { exec } = require('child_process');

function detectConnectedBoards() {
    exec('arduino-cli board list', (error, stdout, stderr) => {
        if (error) {
            console.error(`Erro ao executar o comando: ${error.message}`);
            return;
        }
        if (stderr) {
            console.error(`Erro no stderr: ${stderr}`);
            return;
        }
        
        // Processar a saída para detectar placas Arduino Uno conectadas
        const connectedBoardsText = parseConnectedBoards(stdout);
        console.log('Placas Arduino Disponível:\n', connectedBoardsText);

        // Agendar a próxima verificação (aqui a cada 5 segundos, ajuste conforme necessário)
        setTimeout(detectConnectedBoards, 500);
    });
}

function parseConnectedBoards(output) {
    // Exemplo de parsing da saída para encontrar placas Arduino Uno conectadas
    const lines = output.split('\n');
    const connectedBoardsText = lines.filter(line => line.includes('Arduino Uno')).map(line => {
        const parts = line.split(/\s+/);
        const port = parts[0];
        return `${port} - Arduino Uno`;
    }).join('\n');
    return connectedBoardsText;
}

// Iniciar a detecção de placas Arduino Uno
detectConnectedBoards();
