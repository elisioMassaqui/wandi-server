
//Frabica de objectos com resultados pre dispostos

class Carro {
    constructor(valor1,valor2,valor3){
        this.marca = valor1;
        this.modelo = valor2;
        this.ano = valor3
    }
    buzina(){
        return this.modelo + ' buzinou biiiiiiii';
    }
}

const carro = {
    marca: 'Fiat',
    modelo: 'Uno',
    ano: '2001'
}

const uno = new Carro('Fiat', 'Uno', 2001);
const gol = new Carro('Volkswagem', 'Gol', 2013)
console.log(gol.buzina())
console.log(uno)