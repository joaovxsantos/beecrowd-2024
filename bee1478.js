const input = require('fs').readFileSync('stdin', 'utf8');
let lines = input.split('\n').map(Number);


//https://github.com/CuuKiii/uri-online-judge-BeeCrowd/blob/main/1478.js
var prompt = function (texto) { return lines.shift(); };

var size = parseInt(prompt());

while (size > 0) {
    for (let i = 0; i < size; i++) {
        let line = [];

        for (let n = 0; n < size; n++) {
            let aux = (1 + Math.abs(i - n)).toFixed(0);
            line.push(aux.padStart(3));
        }

        console.log(line.join(" "));
    }

    console.log("");
    size = parseInt(prompt());
}