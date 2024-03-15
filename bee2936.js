const input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n').map(Number);

//Iniciando variável
let count = 0;


//Varrendo o array lines e fazendo as condições
lines.forEach((num, indx) => {
    switch (indx) {
        case 0:
            count += num * 300;
            break;
        case 1:
            count += num * 1500;
            break;

        case 2:
            count += num * 600
            break;
        case 3:
            count += num * 1000
            break;

        case 4:
            count += num * 150
            break;
    }
})

console.log(count + 225)