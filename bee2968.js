const input = require('fs').readFileSync('stdin', 'utf8');
let lines = input.split(' ').map(Number);


//Calculando o total de placas
let totalPlacas = lines[0] * lines[1];

let resultado = '';

//Loopando para calcular de 10% a 90%
for (let i = 10; i <= 90; i += 10) {
    //Porcentagem
    let element = ((i * totalPlacas) / 100)

    //Verificando se o número é quebrado, se for então soma com +1, se não for então só adiciona a variável
    resultado += `${element.toString().indexOf('.') >= 1 ? Math.trunc(element + 1) : Math.trunc(element)} `
}

console.log(resultado.trim());