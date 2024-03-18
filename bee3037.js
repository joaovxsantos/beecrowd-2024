const input = require('fs').readFileSync('stdin', 'utf8');
const lines = input.split('\n').map(el => el.replace('\r', ''));


//Retirando o iterator
let iterator = lines.splice(0, 1)


//Função que retorna os números multiplicados e somados
const multiplyAndSum = (nums) => {
    return nums.map((num) => {
        let [n1, n2] = num.split(' ')
        return n1 * n2
    }).reduce((accum, n) => accum += n)
}

//Loopando e testando condições
for (let i = 0; i < iterator; i++) {
    let j = multiplyAndSum(lines.splice(0, 3))
    let m = multiplyAndSum(lines.splice(0, 3))

    if (j > m) {
        console.log('JOAO')
    } else if (m > j) {
        console.log('MARIA')
    }
}