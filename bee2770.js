const input = require('fs').readFileSync('stdin', 'utf8')
const lines = input.split('\n').map(el => el.replace('\r', '').split(' ').map(Number));

let placaEmpresa = 0;
let placaCliente = 0;


//Varrendo o array
lines.forEach((element) => {

    //Somando os elementos
    const sum = element.reduce((accum, num) => accum += num);


    //Se o tamanho do elemento for 3, então a soma é atribuida e variável placaEmpresa
    if (element.length === 3) {
        placaEmpresa = sum
    } else {
        //Se não for, então a soma é atribuida a placaCliente e é testada a condição
        placaCliente = sum;
        console.log(placaCliente <= placaEmpresa ? 'Sim' : 'Nao')
    }
})