const input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

//Loopando o array com as entradas e lendo da forma solicitada
for (let i = 1; i <= +lines[0]; i++) {
    console.log(`resposta ${i}: ${lines[i]}`);
}