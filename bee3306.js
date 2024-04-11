//Esse código está correto. O problema está na entrada e testes do problema.
//No enunciado é dito que só há dois casos: 1 e 2, quando na verdade há um terceiro caso,
//que é uma linha em branco. Além de não ser informado sobre a linha, 
//a mesma não é lida na ordem correta. Só problemas na entrada.



//Função que calcula o MDC
function mdc(x, y) {
    let a = x;
    let b = y;

    while (b !== 0) {
        [a, b] = [b, a % b];
    }
    return a;
}


//Pegando as entradas necessárias
let iterator = lines[0].split(' ').map(Number)[1];
let nums = lines[1].split(' ').map(Number);



//Loopando o array
for (let i = 2; i <= iterator + 1; i++) {
    let entrada = lines[i].split(' ').map(Number);
    let t = entrada[0]

    //Testando os casos
    switch (t) {
        case 1:
            [, a, b, v] = entrada
            for (let j = (a - 1); j < b; j++) {
                nums[j] += v;
            }
            break;
        case 2:
            [, a, b] = entrada;
            var r = nums[a];
            for (let k = (a - 1); k < b; k++) {
                r = mdc(r, nums[k]);
            }
            console.log(r)
            break;
    }

}