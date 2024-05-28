const input = require('fs').readFileSync('stdin', 'utf8');
var [a, b, c] = input.split('\n').map(line => line.replace('\r', ''));


//Declarando iterador para loop
let i = 0;


while (i <= 3) {

    let [aWriter, bWriter, cWriter] = [a, b, c]

    //Alterando as variáveis de acordo com o valor do iterador
    if (i === 1) {
        aWriter = b
        bWriter = c
        cWriter = a
    } else if (i === 2) {
        aWriter = c
        bWriter = a
        cWriter = b
    } else if (i === 3) {
        aWriter = a.substring(0, 10)
        bWriter = b.substring(0, 10)
        cWriter = c.substring(0, 10)
    }

    console.log(`${aWriter}${bWriter}${cWriter}`)
    i++
}