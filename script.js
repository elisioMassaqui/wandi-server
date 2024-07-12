document.getElementById('texto').innerHTML='Meu primeiro texto <b>JS</>';

function number(um, dois) {
    return um * dois;
}

let num = number(5, 10);

document.getElementById('texto2').innerHTML=`${num}`;

function alertaHello(params) {
    alert('Olá pessoas')
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