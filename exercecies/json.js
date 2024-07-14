//Json é basicamente colocar um texto em objecto e objecto em texto.

const carro = {
    marca: 'Fiat',
    modelo: 'Uno',
    motor: ['1.6', '1.4', '1.0']
}

//Converteru para texto json
let texto = JSON.stringify(carro)

//Assim deu pra colocar no nosso html com <pre>
document.getElementById('area').innerHTML = texto;

//Convertemos o texto em objecto
let obj = JSON.parse(texto)

//Pegamos o valor do objecto
console.log(obj.motor[2])


//Requisiçao de json
const ajax = new XMLHttpRequest()

ajax.open('GET', 'https://viacep.com.br/ws/01001000/json/')
ajax.send();

ajax.onload = function(){
    document.getElementById('area'). innerHTML = this.responseText;
    let obj = JSON.parse(this.responseText)
    console.log(obj.localidade)
}

