const input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n').map(line => line.replace('\r', ''));



//Retirando o primeiro elemento pois não me serve
lines.shift()

//Transformando os elementos em números
lines = lines.map(line => line.split(' ').map(Number))



//Declarando variáveis
const target = 42;
const numSearch = 7;
let resultLine = 0;
let resultIndex = 0;

//Varrendo o array com os números
lines.forEach((nums, line) => {
    //Cada elemento do array possui números, é um array de array, por isso mais um loop
    for (let indexNum = 0; indexNum < nums.length; indexNum++) {
        //Se o número da vez for igual ao valor em target e não for a primeira linha 
        if (nums[indexNum] === target && line > 0) {

            //Definindo as linhas
            const linhaAnterior = lines[line - 1];
            const linhaAtual = lines[line]
            const linhaPosterior = lines[line + 1];

            //Testando as condições para verificar se o número esta totalmente cercado pelo valor de numSearch
            if (linhaAnterior[indexNum] === numSearch && linhaAnterior[indexNum - 1] === numSearch && linhaAnterior[indexNum + 1] === numSearch && linhaPosterior[indexNum] === numSearch && linhaPosterior[indexNum + 1] === numSearch && linhaPosterior[indexNum - 1] === numSearch && linhaAtual[indexNum + 1] === numSearch && linhaAtual[indexNum - 1] === numSearch) {
                //Se estiver, é passado a linha e a posição do elemento com +1 para ajustar
                resultLine = line + 1
                resultIndex = indexNum + 1
            }
        }
    }
})

console.log(`${resultLine} ${resultIndex}`)