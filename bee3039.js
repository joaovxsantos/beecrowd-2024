const input = require('fs').readFileSync('stdin', 'utf8');
const lines = input.split('\n').map(el => el.replace('\r', ''));

//Iniciando objeto vazio
let results = {};

//Varrendo o array
lines.forEach((nome, indx) => {
    if (indx > 0) {
        //Desestruturando
        let [, genero] = nome.split(' ');

        //Se o elemento existe no objeto, incrementa. Se não, cria e coloca valor 1
        results[genero] = ++results[genero] || 1
    }
})

console.log(`${results.M} carrinhos\n${results.F} bonecas`)