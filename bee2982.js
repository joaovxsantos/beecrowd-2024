const input = require('fs').readFileSync('stdin', 'utf8')
const lines = input.split('\n').map(el => el.replace('\r', ''));


//Pegando a quantidade de entradas
let iterator = +lines.splice(0, 1);

//Variáveis de contagem
let countG = 0;
let countV = 0;


//Loopando para pegar todos os elementos do array
for (let i = 0; i < iterator; i++) {
    let element = lines[i];

    //Desestruturando os elementos
    let [indication, value] = element.split(' ')

    //Condição
    if (indication === 'G') {
        countG += +value
    } else if (indication === 'V') {
        countV += +value
    }
}

//Leitura
countV < countG ? console.log('NAO VAI TER CORTE, VAI TER LUTA!') : console.log('A greve vai parar.')