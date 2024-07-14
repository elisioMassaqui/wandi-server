
for (let i = 0; i < 3; i++){
    document.getElementById('teste').innerHTML += i + ", ";
}

var ano = new Date().getFullYear();

//Alimentar um recurso como select com for
for (let i = ano; i >= 1900; i--) {
    
    document.getElementById('ano').innerHTML += "<option value='"+i+"'>"+i+"</option>";
    
}

const carros = ['Gol', 'Fusca', 'Brasília', 'Del Rey', 'Chevette'];

var tamanho = carros.length;

for (let i = 0; i < tamanho; i++) {
    document.getElementById('teste').innerHTML += carros[i] + ' - ';
    
}