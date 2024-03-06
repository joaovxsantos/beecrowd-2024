const input = require('fs').readFileSync('stdin', 'utf8')
const lines = input.split('\n').map(el => el.replace('\r', '').split(' ').map(Number));

//Destruturando as entradas e fazendo o condicional
let [limite, [restante1, restante2]] = lines
restante1 + restante2 > limite ? console.log('Deixa para amanha!') : console.log('Farei hoje!');