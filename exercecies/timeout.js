//Tempo esperado pra executar uma funçºao

function ativarContagem() {
    document.getElementById('tempo').innerHTML = 'Começou'
    //Ativar a funçao uma vez apos o tempo determinado
    tempo = setTimeout(function() {
        document.getElementById('tempo').innerHTML = 'Executou'
        document.body.style.backgroundColor = 'green';
    }, 5000);
}

//Parar contagem otimo pra cancelar uma execuçao de uma função
function pararContagem(params) {
    clearTimeout(tempo);
    document.getElementById('tempo').innerHTML = 'Parou a contagem'
    clearInterval(intervalo)
}


//Colocar uma funçao a rodar em tempo real
intervalo = setInterval(function rodar() {
    var cronometro = document.getElementById('contarTempo').innerHTML;
    var soma = parseInt(cronometro) - 1;
    document.getElementById('contarTempo').innerHTML = soma;
}, 100)
