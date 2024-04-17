const input = require('fs').readFileSync('stdin', 'utf8');
let lines = input.split('\n').map(line => line.replace('\r', ''));

//Desestruturando
const [quantTestes, ...testes] = lines;


//Loopando de acordo com o caso de testes
for (let i = 0; i < quantTestes; i++) {


    let casoQuant = +testes[0]

    //Pegando os elementos e as formulas
    let [, ...elementos] = testes.splice(0, casoQuant + 1)
    let [, ...formulas] = testes.splice(0, +testes[0] + 1)
    let resultado = ''

    //Varrendo as formulas
    formulas.forEach((formula) => {
        //Varrendo os elementos
        for (let elemento of elementos) {
            //Verificando se as formulas possuem os elementos
            //Se o proximo caracter é uma letra
            //E se o tamanho da formula não é o tamanho do elemento + 1 caracter
            if (formula.includes(elemento) && isNaN(+formula.split(elemento)[1][0]) && formula.length !== elemento.length + 1) {
                resultado = 'Abortar'
                break
            } else {
                resultado = 'Prossiga'
            }
        }
        console.log(resultado);
    })
    if (i !== quantTestes - 1) {
        console.log('')
    }
}