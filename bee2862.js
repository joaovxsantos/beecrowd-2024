var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

//Varrendo as entradas e testando condições
for(let i = 1; i <=lines[0]; i++) {
    if(lines[i] > 8000) {
        console.log('Mais de 8000!')
    }else {
        console.log('Inseto!')
    }
}