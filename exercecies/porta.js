const { exec } = require('child_process');

const placasDisponiveis = 'arduino-cli board list';
const wandicode = 'C:\\Users\\Administrador\\Desktop\\wandi server\\wandicode';

exec(placasDisponiveis, (error, stdout, stderr) => {
    if (error) {
        console.error(`Erro ao listar placas: ${error.message}`);
        return;
    }
    if (stderr) {
        console.error(`stderr info: ${stderr}`);
    }

    const linhas = stdout.trim().split('\n');
    let portaSelecionada = '';

    for (let i = 0; i < linhas.length; i++) {
        const linha = linhas[i].trim();
        if (linha.includes('arduino:avr')) {
            const partes = linha.split(/\s+/);
            portaSelecionada = partes[0];
            break;
        }
    }

    if (!portaSelecionada) {
        console.error('Nenhuma placa da família arduino:avr detectada.');
        return;
    }

    console.log(`Placa da família arduino:avr selecionada na porta: ${portaSelecionada}`);

    const compilarCode = `arduino-cli compile --fqbn arduino:avr:uno -p ${portaSelecionada} "${wandicode}"`;
    const enviarCode = `arduino-cli upload --fqbn arduino:avr:uno -p ${portaSelecionada} "${wandicode}" "-v"`;

    exec(compilarCode, (error, stdout, stderr) => {
        if (error) {
            console.error(`Erro ao compilar: ${error.message}`);
            return;
        }
        if (stderr) {
            console.error(`stderr info: ${stderr}`);
        }
        console.log(`Saída da compilação:\n${stdout}`);

        // Atraso de 2 segundos antes de enviar o código para a placa
        setTimeout(() => {
            exec(enviarCode, (error, stdout, stderr) => {
                if (error) {
                    console.error(`Erro ao enviar código: ${error.message}`);
                    return;
                }
                if (stderr) {
                    console.error(`stderr info: ${stderr}`);
                }
                console.log(`Saída do envio de código:\n${stdout}`);
            });
        }, 2000); // 2000 milissegundos = 2 segundos
    });

});
