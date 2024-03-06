const input = require('fs').readFileSync('stdin', 'utf8')
const lines = input.split('\n').map(el => el.replace('\r', ''));

//Set não aceita valores iguais
let text = new Set()

//Loopando o array lines e adicionando sem repetiação ao set
for (let line of lines) {
    text.add(line)
}

//Diminuindo 1 para passar
console.log(text.size - 1)