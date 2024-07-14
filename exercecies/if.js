


var interruptor = 'off'

if (interruptor == 'on') {
    alert('A lampada ligada')
}
var hora = new Date().getHours();
var minutos = new Date().getMinutes();
var segundos = new Date().getSeconds();
console.log('Hora:', hora, 'Minutos', minutos, 'Segundos', segundos)


//Boa pratica pegar elementos pelo id primeiro
let p = document.getElementById('teste');

function verificar(params) {
    var nome = document.getElementById('nome').value;

    if (nome == '' || nome == null) {
        p.innerHTML = 'O campo não pode ser vazio';
        p.style.color = 'red';
    }else{
        p.innerHTML = 'Tudo certooo';
        p.style.color = 'green';
    }
}