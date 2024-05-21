const input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n').map(line => line.replace('\r', ''));

//Pegando iterator
const iterator = +lines.shift()

//Loopando
for (let i = 0; i < iterator; i++) {

    //Definindo primeiras variáveis
    const [x1, y1, z1] = lines[i].split(' ').map(Number);
    let menor;

    //Loopando novamente para comprar o elemento atual com todos os outros do array
    for (let j = 0; j < iterator; j++) {
        //Se não for o elemento atual, então executa
        if (j !== i) {
            // Definindo as demais variáveis
            const [x2, y2, z2] = lines[j].split(' ').map(Number)

            //Aplicando a formula
            let formula = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2) + Math.pow(z2 - z1, 2))

            //Se a formula for menor do que consta na variável menor, ou se a variável não tiver valor, menor recebe formua
            if (formula < menor || !menor) {
                menor = formula
            }
        }
    }

    //Condições para saída
    if (menor <= 20) {
        console.log('A')
    }
    else if (menor > 20 && menor <= 50) {
        console.log('M')
    } else if (menor > 50) {
        console.log('B')
    }
}