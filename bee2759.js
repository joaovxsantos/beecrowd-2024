const input = require('fs').readFileSync('stdin', 'utf8');
var [a, b, c] = input.split('\n').map(line => line.replace('\r', ''));


//Loopando de acordo com a quantidade de vezes a ser escrito
for (let i = 0; i < 3; i++) {


    let [aWriter, bWriter, cWriter] = [a, b, c]

    //Fazendo alterações nas variáveis de acordo com o index
    if (i === 1) {
        aWriter = b
        bWriter = c
        cWriter = a
    } else if (i === 2) {
        aWriter = c
        bWriter = a
        cWriter = b
    }

    console.log(`A = ${aWriter}, B = ${bWriter}, C = ${cWriter}`);
}