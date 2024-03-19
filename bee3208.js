const input = require('fs').readFileSync('stdin', 'utf8');
const lines = input.split('\n');



//Varrendo o array
lines.forEach((nums) => {

    //Desestruturando
    let [k, l] = nums.split(' ');

    //Verificando se os valores são maiores que 0
    if (k > 0 || l > 0) {

        //Desestruturando o que a função está retornando
        let [a, b] = primeNumber(k);

        //Testando condições
        if (a > l && b > l) {
            console.log('GOOD')
        } else {
            console.log(`BAD ${a}`)
        }
    }
})


//Função que define se um número é primo, e testa qual primo divide pela entrada
function primeNumber(k) {
    let factors = []
    let iterator = 2;

    //Enquanto não achar os que dividem, loopa
    while (factors.length < 2) {
        let count = 0;

        //Loop que verifica se um numero é primo
        for (let i = 1; i <= iterator; i++) {
            if (iterator % i === 0) {
                count++
            }
        }

        //Se count === 2 então é primo, divide pela entrada, se restar 0, então push
        if (count === 2) {
            if (k % iterator === 0) {
                factors.push(iterator)
            }
        }
        iterator++
    }
    return factors
}