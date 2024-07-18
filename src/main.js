const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow() {
    const mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true // Permite a integração com Node.js
        }
    });

    // Carrega o arquivo index.html da aplicação
    mainWindow.loadFile(path.join(__dirname, 'index.html'));
}

// Evento de quando o Electron termina o carregamento e está pronto para criar janelas do navegador
app.on('ready', createWindow);
