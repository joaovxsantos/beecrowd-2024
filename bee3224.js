const input = require('fs').readFileSync('stdin', 'utf8')
const lines = input.split('\n').map(el => el.replace('\r', ''));

//Testando condições
console.log(lines[0].length >= lines[1].length ? 'go' : 'no');