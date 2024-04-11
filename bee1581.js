const input = require('fs').readFileSync('stdin', 'utf8');
let lines = input.trim().split('\n').map(el => el.replace('\r', ''));


//Iniciando variáveis
let casoTestes = +lines.splice(0, 1)

//Loopando de acordo com a quantidade de caso de testes
for (let i = 0; i < casoTestes; i++) {
    
    //Iniciando variáveis
    let totalIdiomas = {};
    let length = 0;
    let idiomaEncontrado = false;

    //Pegando os elementos de acordo com sua quantidade
    lines.splice(0, +lines[0] + 1).forEach((idioma, indx) => {
        if (indx > 0) {
            totalIdiomas[idioma] = ++totalIdiomas[idioma] || 1 //Se existir no objeto, então soma +1, se não existir cria e atribui 1
        } else {
            //Pegando o total de pessoas
            length = idioma
        }
    })

    //Varrendo o objeto e verificando se todos falam a msm lingua
    for (let idioma in totalIdiomas) {
        if (totalIdiomas[idioma] === +length) {
            console.log(idioma)
            idiomaEncontrado = true
            break
        }

    }

    //Se for false, então lê o solicitado no exercicio
    if (!idiomaEncontrado) {
        console.log('ingles')
    }
}