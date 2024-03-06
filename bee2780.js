const input = require('fs').readFileSync('stdin', 'utf8')
const lines = +input


//Condições
if (lines <= 800) {
    console.log(1)
} else if (lines <= 1400) {
    console.log(2)
}else if (lines <= 2000) {
    console.log(3)
}