const input = require('fs').readFileSync('stdin', 'utf8');
let lines = input.split(' ').map(el => el.replace('\r', ''));


//Copiando o array
let arrayOrdenado = [...lines]

//Ordenando e pegando o número do meio, nem menor nem maior  
let idadeMeio = arrayOrdenado.sort((a, b) => a - b)[1];

//Index do número do meio
let index = lines.indexOf(idadeMeio)


//Testando condição para leitura
if (index === 0) {
    console.log('huguinho')
} else if (index === 1) {
    console.log('zezinho')
} else if (index === 2) {
    console.log('luisinho')
}