const input = require('fs').readFileSync('stdin', 'utf8');
const lines = input.trim().split('\n').map(el => el.replace('\r', ''))

//Varrendo o array e lendo apenas as entradas solicitadas no problema
lines.forEach((line, indx) => {
    if (indx === 2 || indx === 6 || indx === 8) {
        console.log(line)
    }
})