const input = require('fs').readFileSync('stdin', 'utf8')
const lines = input.split('\n').map(el => +el.replace('\r', ''));


//Desestruturando 
let [, minClass, ...notas] = lines

//Organizando de ordem decrescente
let notasOrdenadas = notas.sort((a, b) => b - a)

//Variável de contagem
let count = 0;


//Loop que itera até o número minimo de classificados
for (let i = 0; i < minClass; i++) {
    //Se estiver na ultima iteração, e o número atual for igual ao próximo, então é adicionado +1 ao minimo para que continue a iteração.
    if (i === minClass - 1) {
        notasOrdenadas[i] === notasOrdenadas[i + 1] ? minClass += 1 : minClass = minClass
    }
    //Incrementando
    count++
}
console.log(count)