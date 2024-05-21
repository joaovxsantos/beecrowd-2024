const input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n').map(line => line.replace('\r', ''));


//Loopando até o array ter elemento
while (lines.length > 0) {

    //Declarando variáveis
    let count = 0;
    let atualCase = 1;

    //Pegando o iterador
    const iterator = +lines.shift();

    //Pegando os números de acordo com a quantidade q tem em iterador
    const numbers = lines.splice(0, iterator)

    //Loopando os números
    for (let i = 0; i < iterator; i++) {
        const element = numbers[i].split(' ').map(Number)


        //Se o número atual for 1, então:
        if (element[atualCase] === 1) {

            //Acho o index do elemento 0 e calculo a diferença entre o index do 0 e do anterior 
            count += Math.abs(element.indexOf(0) - atualCase)
            
            //Redefino o atualCase para o que contém 0
            atualCase = element.indexOf(0)
        }
    }
    if (count > 0) console.log(count)
}