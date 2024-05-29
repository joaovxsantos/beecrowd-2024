var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

//Loopando até que não haja elementos
while (lines.length > 0) {

    //Desestruturando
    const [X, Y, M] = lines.shift().split(' ').map(Number)


    //Pegando os números
    lines.splice(0, M).forEach((nums) => {
        const [X1, Y1] = nums.split(' ').map(Number)

        //Testando condições
        if ((X1 <= X && Y1 <= Y) || (Y1 <= X && X1 <= Y)) {
            console.log('Sim')
        } else {
            console.log('Nao')
        }
    })
}