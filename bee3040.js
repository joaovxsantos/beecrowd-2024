const input = require('fs').readFileSync('stdin', 'utf8');
const lines = input.split('\n').map(el => el.replace('\r', ''));


//Retirando o iterador
let iterator = lines.splice(0, 1)

//Loopando
for (let i = 0; i < iterator; i++) {
    let line = lines[i]

    //Desestruturando e testando condições
    let [h, d, g] = line.split(' ')
    if ((h >= 200 && h <= 300) && (d >= 50) && (g >= 150)) {
        console.log('Sim')
    } else {
        console.log('Nao')
    }
}