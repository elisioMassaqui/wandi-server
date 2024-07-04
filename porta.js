const { exec } = require('child_process');

// Comando para listar as placas disponíveis
const placasDisponiveis = 'arduino-cli board list';

// Defina o caminho do sketch aqui
var sketchPath = 'C:\\Users\\Administrador\\Documents\\Causa-Efeito, SINER\\Wandi Robot\\mundo';

//Habilitar a saída verbose produzirá informações mais detalhadas no console .
const verbose = '-v';

// Executa o comando para listar as placas
exec(placasDisponiveis, (error, stdout, stderr) => {
    if (error) {
        console.error(`Erro ao listar placas: ${error.message}`);
        return;
    }
    if (stderr) {
        console.error(`stderr info: ${stderr}`);
    }

    // Processa a saída para encontrar a porta
    const linhas = stdout.trim().split('\n');
    let portaSelecionada = '';

    // Procura pela porta que começa com 'COM' (para Windows, ajuste conforme seu sistema operacional)
    for (let i = 0; i < linhas.length; i++) {
        const linha = linhas[i].trim();
        if (linha.startsWith('COM')) {
            portaSelecionada = linha.split(' ')[0]; // Pega apenas a parte da porta, excluindo descrições adicionais
            break;
        }
    }

    // Mostra apenas a porta selecionada
    console.log(`Porta selecionada: ${portaSelecionada}`);

    if (portaSelecionada) {
        // Agora você pode usar a portaSelecionada para compilar ou enviar o código para o Arduino
        // Exemplo de uso:
        const compilarCode = `arduino-cli compile --fqbn arduino:avr:uno -p "${portaSelecionada}" "${sketchPath}"`;
        const enviarCode = `arduino-cli upload --fqbn arduino:avr:uno -p "${portaSelecionada}" "${sketchPath}" ${verbose}`;

        // Aqui você pode executar o próximo passo, como compilar ou enviar código
        exec(compilarCode, (error, stdout, stderr) => {
            // Trate a resposta da execução do comando de compilação aqui
            if (error) {
                console.error(`Erro:\n ${error.message}`);
                return;
            }
            if (stderr) {
                console.error(`stderr info:\n ${stderr}`);
            }
            console.log(`Saída:\n  ${stdout}`);
        });


        // Aqui você pode executar o próximo passo, como compilar ou enviar código
        exec(enviarCode, (error, stdout, stderr) => {
            // Trate a resposta da execução do comando de compilação aqui
            if (error) {
                console.error(`Erro:\n ${error.message}`);
                return;
            }
            if (stderr) {
                console.error(`stderr info:\n ${stderr}`);
            }
        });

    }


    else {
        console.error('Nenhuma porta COM detectada.');
    }
});
