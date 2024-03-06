const input = require('fs').readFileSync('stdin', 'utf8')
const lines = input.split('\n').map(element => element.replace('\r', ''));


//Desestruturando
const [iterator, ...tomadas] = lines


//Loopando
for (let i = 0; i < iterator; i++) {
    let [remove, ...elements] = tomadas[i].split(' ').map(Number)
    console.log(elements.reduce((accum, el) => accum += el) - (remove - 1))
}