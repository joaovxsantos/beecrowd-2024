const input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n').map(el => el.replace('\r', ''));

//Varrendo o array
lines.forEach((str) => {

    //Iniciando a variável com false
    let res = false

    //Utilizando switch para atribuir valor a variável
    switch (str) {
        case 'esquerda':
            res = 'ingles';
            break;
        case 'direita':
            res = 'frances';
            break;

        case 'nenhuma':
            res = 'portugues';
            break;

        case 'as duas':
            res = 'caiu';
            break;
    }

    //Se não for false, então lê
    if (res) {
        console.log(res)
    }
})