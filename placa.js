const { spawn } = require('child_process');

function monitorArduino() {
    const child = spawn('arduino-cli', ['board', 'list']);

    child.stdout.on('data', (data) => {
        console.log(`Arduino boards connected:\n${data}`);
    });

    child.stderr.on('data', (data) => {
        console.error(`Error occurred: ${data}`);
    });

    child.on('close', (code) => {
        console.log(`Child process exited with code ${code}. Restarting...`);
        setTimeout(monitorArduino, 500); // Reiniciar após 2 segundos
    });
}

monitorArduino();
