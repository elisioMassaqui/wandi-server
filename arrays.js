//Variaveis que estarao dentro do array
var item1 = 'arroz'
var item2 = 'feijão'
var item3 = 'macarraão'
var item4 = 'leite'

//cada posiçao é um indice que pode ser usado pra acessar um valor, de 0 ....
const lista = [
    'arroz',
    'feijão',
    'macarraão',
    'leite'
]

//Acessar um indice e altera-lo
lista[3] = "Trocadooo"

//Pegar um indice
let x = lista[3]

//Diferença entre matriz e objecto
const person = ['Dimitri', 'Teixeira', 30, "Professor"]; //Matriz, array
const pessoa = {nome:'Dimitri', sobrenome:'Teixeira', idade:30};//Objecto

//Adicionar e remover algo na matriz
person.push('novo')
person[5] = 'Bom';

person[0];
pessoa.nome;

//Pegar ultimo item da lista
//alert(person)

//Metods pra arrays 

//Remover o primeiro item e altera todos indices
person.shift()

//E adicionar primeiro item
person.unshift('Youtuber')

 //Remover o ultimo item
person.pop();

//Adicionar items a partir da posiçao que vc desejar
person.splice(3, 0, 'item add 1', 'item add 2');

const lista2 = ['Suco', 'Banana']

//Concatenar matrizes
const superLista = lista.concat(lista2, lista2);

const jogadores = ["Ronaldo", 'Messi', "Maradona", 'baile', 'pelee', 'marcelo', 'papel']

//Fatiar itens.
//Cortar numeros anteriores a esse
const craques = jogadores.slice(3);
//Cortar no range desse dois numeros
const craques2 = jogadores.slice(5, 7);
console.log(craques)
console.log(craques2)


const heores = [
    'Naruto',
     'Tobi',
     'Sasuke',
     'Hinata',
     'Pain',
     'Madara',
     'Itachi'

]

//Deixar em ordem alfabetica
const jogOrdem = heores.sort()

//Deixar todos elementos de um array ao contrario
heores.reverse()
const reverter = console.log("reverter", heores)

numeros = [10, 4, 5, 0, 43, 99, 56, 29, 2, 85, 96]
//Deixar numeros na ordem alfabetica kkkkk
alfabet = numeros.sort()

console.log('alfa', alfabet)

//Deixar os numeros na ordem correta
correctNumber = numeros.sort(function (a, b) {
    return a - b
})

console.log('correcto', correctNumber)


//Pegar o maior numero de uma matriz
function maiorNumero(array) {
    return Math.max.apply(null, array)
}

console.log('maior', maiorNumero(numeros))

//Pegar o menor numero de uma matriz
function menorNumero(array) {
    return Math.min.apply(null, array)
}

console.log('menor', menorNumero(numeros))

//Filtrar numeros maior que 20
function filtragem(value, index, array) {
    return value > 20
}
console.log('filtrar maior',  numeros.filter(filtragem));



//Sperador dos itens na array
document.getElementById('teste').innerHTML = superLista.join(' - ')
document.getElementById('lista').innerHTML = lista.join(" * ")

