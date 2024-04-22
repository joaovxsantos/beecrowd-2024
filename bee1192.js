const input = require('fs').readFileSync('stdin', 'utf8');
let lines = input.split('\n').map(line => line.replace('\r', ''));


const iterator = lines.shift();

//Loopando
for (let i = 0; i < iterator; i++) {

    //Se houve letra maiuscula
    if (lines[i].match(/[A-Z]/g)) {
        const [n1, n2] = lines[i].split(/[A-Z]/g).map(Number)
        n1 !== n2 ? console.log(n2 - n1) : console.log(n1 * n2)
    }
    //Se não se houver letra minuscula
    else if (lines[i].match(/[a-z]/g)) {
        const [n1, n2] = lines[i].split(/[a-z]/g).map(Number)
        n1 !== n2 ? console.log(n1 + n2) : console.log(n1 * n2)
    }
}