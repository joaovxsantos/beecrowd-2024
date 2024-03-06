const input = require('fs').readFileSync('stdin', 'utf8')
const lines = input.split('\n').map(element => element.replace('\r', '').split(' '));


//Desestruturação
let [totalRunas, amizadeNecessaria] = lines[0];
let runas = new Map(lines.slice(1, lines[0][1] - 1));
let [, jogadas] = lines.slice(parseInt(totalRunas) + 1, lines.length);
let count = 0;

//Varrendo as jogadas e verificando se existes no map runas
//Se existem, então somar
jogadas.forEach(jogada => {
    if (runas.has(jogada)) {
        count += Number(runas.get(jogada).match(/-?\d+/g))
    }
})

//Lendo a soma
console.log(count);

//Condição para mensagem final
if (count >= amizadeNecessaria) {
    console.log('You shall pass!')
} else {
    console.log('My precioooous')
}