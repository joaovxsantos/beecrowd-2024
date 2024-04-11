const input = require('fs').readFileSync('stdin', 'utf8');
let lines = input.trim().split(' ').map(Number);


//Primeira resolução
const [E, F, C] = lines;


let total = E + F;
let resp = 0;

while (total >= C) {
    //Verificando quantas garrafas cheias ele conseguiu
    resp += total / C

    //Adicionando as garrafas que ele consegiu as vazias pq as cheias estao vazias
    total = total / C + total % C
}
console.log(resp);




//Segunda resolução
// const [E, F, C] = lines;
// let total = E + F;
// let totalGarrafas = 0;


// while (total >= C) {
//     total = total - C //trocou por uma cheia
//     total = total + 1 //as cheias viraram vazias
//     totalGarrafas = totalGarrafas + 1 //conseguiu uma cheia
// }

// console.log(totalGarrafas)