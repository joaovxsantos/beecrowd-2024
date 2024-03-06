const input = require('fs').readFileSync('stdin', 'utf8')
const lines = input.split('\n').map(el => el.replace('\r', '').split(' '));


let count = 0;


//Função que fará a conta de acordo com a entrada
const defineCount = (caseText, element) => {

    //Incrementando para contagem de teste e declarando variáveis
    count++
    let result = ''
    let elementsArr = element.map(Number);

    //Transformando em string
    caseText = caseTest.toString();


    //Switch e seus casos
    switch (caseText) {
        case 'eye':

            let [el1, el2, el3] = elementsArr;
            el1 = (el1 / 100) * 30
            el2 = (el2 / 100) * 59
            el3 = (el3 / 100) * 11

            result = el1 + el2 + el3
            break;

        case 'mean':
            result = elementsArr.reduce((acc, element) => acc += element) / elementsArr.length
            break;

        case 'max':
            result = element.sort((a, b) => b - a)[0]
            break;

        case 'min':
            result = element.sort((a, b) => a - b)[0]
            break;

    }

    //Lendo resultados
    console.log(`Caso #${count}: ${Math.trunc(result)}`)
}


let caseTest = ''

//Varrendo o array, se o tamanho for = 1, então ele vai para caseTest, se não é chamada a função.
lines.forEach((element, index) => {
    if (index > 0) {
        element.length === 1 ? caseTest = element : defineCount(caseTest, element)
    }
})