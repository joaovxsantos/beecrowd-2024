const input = require('fs').readFileSync('stdin', 'utf8')
//A entrada são 3 números por linha separados por espaço na linha. Então eu splito, tiro o '/r', splito para separar em array e transformo em número, mapeando novamente pq virou array de array
const lines = input.split('\n').map(el => el.replace('\r', '').split(' ').map(Number));


//Desestruturando
let [disponiveis, solicitados] = lines;

let count = 0;

//Loop que itera sob o array e testa as condições
for (i = 0; i < disponiveis.length; i++) {
    let diferenca = disponiveis[i] - solicitados[i];
    diferenca < 0 ? count += diferenca : ''
}
console.log(Math.abs(count));