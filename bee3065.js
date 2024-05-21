const input = require('fs').readFileSync('stdin', 'utf8');
const lines = input.split('\n').map(el => el.replace('\r', ''));


let index = 0;


//Loopando o array
for (let i = 0; i < lines.length; i++) {

    const element = lines[i]

    //Se i for par, então:
    if ((i % 2) === 0) {
        // Se o elemento atual do array for 0, quebra o loop
        if (+element === 0) break;
    } else { //Se não for par...
        //Index é incrementado
        index++

        //E o elemento é somado com a função eval
        console.log(`Teste ${index}\n${eval(element)}\n`)
    }
}