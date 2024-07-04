const { exec, execSync } = require('child_process');

//Relevantes
//Habilitar a saída verbose produzirá informações mais detalhadas no console .
const verbose = '-v';
//Armazenar porta detectada, e selecionar e conectar a primeira porta detectada.
var porta = 'COM19';
//Familia arduino, aqui tá tudo bem vou usar arduino uno apenas.
var uno = 'arduino:avr:uno';

// Defina o caminho do sketch aqui
var sketchPath = 'C:\\Users\\Administrador\\Documents\\Causa-Efeito, SINER\\Wandi Robot\\mundo';

// Comando para o arduino-cli

//Checar versão
const arduinoVersion = 'arduino-cli version';
//Configurar Arduino CLI:
const init = 'arduino-cli config init';
//Atualizar índice de pacotes
const arduinoAtualizar = 'arduino-cli core update-index';
//Instalar o pacote para placas Arduino AVR:
const arduinoAVR = 'arduino-cli core install arduino:avr';
//plcas de dispositivos conectados ao PC.


const placasDisponiveis = 'arduino-cli board list'
//Todas placas.
const todasplacas = 'arduino-cli board listall'
//Olhar todos tipos de placa suportada.
const arduinoCore = 'arduino-cli core search';
//Compilar codigos.
const compilarCode = `arduino-cli compile --fqbn "${uno}" -p "${porta}" "${sketchPath}" ${verbose}`;
//Enviar codigos pra placa.
const enviarCode = `arduino-cli upload --fqbn "${uno}" -p "${porta}" "${sketchPath}" ${verbose}`;

//Para verificar o local do arquivo de configuração que o Arduino CLI está usando, você pode executar
const verificarLocal = 'arduino-cli config dump';

var executeComando = arduinoAtualizar;

// Executa o comando
exec(executeComando, (error, stdout, stderr) => {
  if (error) {
    console.error(`Erro:\n ${error.message}`);
    return;
  }
  if (stderr) {
    console.error(`stderr info:\n ${stderr}`);
  }
  console.log(`Saída:\n  ${stdout}`);
});
