const input = require('fs').readFileSync('stdin', 'utf8')
const lines = input.split('\n').map(el => el.replace('\r', '').split(' '));


//Variaveis de contagem
let count = 0;
let movCount = 0;

//Varrendo o array e incrementando/decrementando de acordo com a validação do problema.
lines.forEach((element, index) => {
    let [mov, turistas] = element;

    if (mov && turistas) {
        if (mov === 'SALIDA') {
            count += parseInt(turistas)
            movCount++
        } else {
            count -= parseInt(turistas)
            movCount--
        }
    }
})
console.log(`${count}\n${movCount}`);