const input = require('fs').readFileSync('stdin', 'utf8');
const lines = input.split('\n').map(el => el.replace('\r', ''));


function determinarVencedorIuDiOh() {
    let indiceAtual = 0;

    //Verificando se o index existe, dps incrementando e verificando dnv
    while (indiceAtual < lines.length) {
        if (!lines[indiceAtual]) {
            break;
        }
        indiceAtual++

        if (!lines[indiceAtual]) {
            break;
        }

        //Pegando a quantidade de cartas de cada um
        const [M, L] = lines[indiceAtual++].split(' ').map(Number);

        //Pegando as cartas dos jogadores
        const baralhoMarcos = lines.slice(indiceAtual, indiceAtual + M).map(linha => linha.split(' ').map(Number));
        indiceAtual += M;
        const baralhoLeonardo = lines.slice(indiceAtual, indiceAtual + L).map(linha => linha.split(' ').map(Number));
        indiceAtual += L;

        //Verificando se o index existe
        if (!lines[indiceAtual]) {
            break;
        }

        //Pegando a escolha de baralho de cada um
        const [CM, CL] = lines[indiceAtual++].split(' ').map(Number);

        //Verificando se o index existe
        if (!lines[indiceAtual]) {
            break;
        }

        //Pegando o número de carta sorteada
        const A = parseInt(lines[indiceAtual++], 10) - 1;


        //Pegando a carta sorteada do baralho escolhido pelos jogadores
        const atributoMarcos = baralhoMarcos[CM - 1][A];
        const atributoLeonardo = baralhoLeonardo[CL - 1][A];


        //Condições para leitura
        if (atributoMarcos > atributoLeonardo) {
            console.log('Marcos');
        } else if (atributoLeonardo > atributoMarcos) {
            console.log('Leonardo');
        } else {
            console.log('Empate');
        }
    }
}
determinarVencedorIuDiOh()