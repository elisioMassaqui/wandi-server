// server.js
const WebSocket = require('ws');
const { exec } = require('child_process');

const wss = new WebSocket.Server({ port: 8080 });

wss.on('connection', (ws) => {
  console.log('Client connected');

  ws.on('message', (message) => {
    const command = message.toString(); // Converte o Buffer para string
    console.log(`Received: ${command}`);
    
    exec(command, (error, stdout, stderr) => {
      if (error) {
        console.error(`exec error: ${error}`);
        ws.send(`Error: ${error.message}`);
        return;
      }
      if (stderr) {
        console.error(`stderr: ${stderr}`);
        ws.send(`Stderr: ${stderr}`);
        return;
      }
      console.log(`stdout: ${stdout}`);
      ws.send(`Output: ${stdout}`);
    });
  });

  ws.on('close', () => {
    console.log('Client disconnected');
  });
});

console.log('WebSocket server is running on ws://localhost:8080');
