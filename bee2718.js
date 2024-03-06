const input = require('fs').readFileSync('stdin', 'utf8')
const lines = input.split('\n').map(Number);



let iterator = lines[0]

for (let i = 1; i <= iterator; i++) {
    let element = lines[i]

    //Transformando em binário
    let binario = element.toString(2);

    //Deixando apenas os '1s'
    let sequencias = binario.split('0');


    let max = 0;

    //Loopando os 1's
    for (let num of sequencias) {

        //Se a sequencia atual for maior que o valor maximo, então se torna o valor maximo
        if (num.length > max) {
            max = num.length
        }
    }
    console.log(max)
}