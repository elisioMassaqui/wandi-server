const { criarProximaPasta, criarPastasNecessarias } = require('./pastaManager');

function executarTudo() {
    criarPastasNecessarias()
        .then(() => criarProximaPasta())
        .catch(err => {
            console.error(`Erro na execução: ${err}`);
        });
}

executarTudo();
