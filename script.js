document.getElementById('texto').innerHTML='Meu primeiro texto <b>JS</>';

function number(um, dois) {
    return um * dois;
}

let num = number(5, 10);

document.getElementById('texto2').innerHTML=`${num}`;


//E no onBlur quando sair do focus de um elemento
function alertaHello(params) {
    alert('Olá pessoas, saiu do texto')
}

//Mudar a cor do fundo do body com clique

function bgYellow(params) {
    document.body.style.backgroundColor = 'yellow'
}

function bgDark(params) {
    document.body.style.backgroundColor = 'black'
}

//Objectos com propriedades, também é possivel colocar funções

const carro = {
    marca: 'ford',
    modelo: 'ka',
    ano: 2025,
    placa: 'ABC1234',
    buzina: function (params) {alert('biiiiiiiiiiii')},
    //Pegar itens do objecto
    completo: function (params) {
        return 'A marca é ' + this.marca + 'e o modelo é ' + this.modelo
    }
}

console.log('carro: ')
console.log(carro);

carro.buzina();

carro.completo();

console.log(carro.completo())


//Efeito hover

function viraVermelho(params) {
    let div = document.getElementById('teste')
    div.style.backgroundColor = 'red'
}

function viraNormal(params) {
    let div = document.getElementById('teste')
    div.style.backgroundColor = 'blue'
}

//Adicionar texto ao mover o mouse no lugar

function addTexto(params) {
    let p = document.getElementById('texto3')
    p.append('O mouse moveu <b>Yes</b>')
}


function contandoPress(contador = 0) {
    contador++;
    console.log(contador)
}

//Sobre focar e limpar texto no console
function limpaTexto(params) {
    document.getElementById('campoTexto').value = '';
}

//Mudou o conteudo do input ou do dropdown
function mudou(params) {
    console.log('Mudou')
}

//Mostrar tecla presionada

function teclaPressionada(){
    let input = document.getElementById('campoTexto').value;
    console.log(input);
}