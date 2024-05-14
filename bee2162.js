const input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');


//Pegando a quantidade de números
const A = lines.shift();

//Pegando os números
const picos = lines.shift().split(" ");

//Declarando variáveis
let temp;
let below = 0;
let above = 0;
let equal = 0;



for (let i = 0; i < picos.length, i <= parseInt(A); i++) {
    if (i == 0) {
        //Pegando o primeiro elemento
        temp = parseInt(picos[0]);
    }
    else {

        //Se o elemento em temp for menor que o elemento atual
        if (temp < picos[i]) {
            temp = parseInt(picos[i])//Temp é atualizado
            above++;//Above recebe +1 
            below = 0;//below é zerado
        }
        //Se o elemento em temp for maior que o elemento atuaç
        else if (temp > picos[i]) {
            temp = parseInt(picos[i]);//Temp é atualizado
            below++;//Below recebe +1
            above = 0;//above é zerado
        }
        //Se forem iguais, então equal recebe +1
        else if (temp == picos[i]) {
            equal++;
        }

        //Se above ou below forem iguais a 2, significa que houveram elementos repetidos em sequencia (dois valores menores, ou maiores), então quebrou a ordem
        //Se equal for === 1 então também quebrou a ordem
        if (above == 2 || below == 2 || equal == 1) {
            console.log("0");
            equal++
            break;
        }
    }
}

//Se após o loop, as variáveis forem menores que 2 e equal igual a 0, então ta na ordem
if (above < 2 && below < 2 && equal == 0) {
    console.log("1");
}