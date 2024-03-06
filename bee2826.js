const input = require('fs').readFileSync('stdin', 'utf8')
const lines = input.split('\n').map(el => el.replace('\r', '')).filter((str) => str.trim() !== '' && str.trim() !== "''");


//Iniciando variáveis
let res = []
let element1 = lines[0].charCodeAt(0)
let element2 = lines[1].charCodeAt(0)

//Testando condições
if (element1 < element2) {
    res = lines
} else if (element2 < element1) {
    res = lines.reverse()
} else if (element1 === element2) {
    res = lines[0].length < lines[1].length ? lines : lines.reverse()
}
console.log(`${res[0]}\n${res[1]}`)