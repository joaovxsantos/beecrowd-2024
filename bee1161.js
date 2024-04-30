const input = require('fs').readFileSync('stdin', 'utf8');
let lines = input.split('\n').map(line => line.replace('\r', ''))

//OBS: No envio da questão no beecrowd eu enviei outro codigo pois o problema está bugado, logo meu código naõ estava passando por erro da plataforma.

//Varrendo o array
lines.forEach((line) => {
    let result = 0;
    let num = 0;
    const nums = line.split(' ').map(Number);

    //Loopando o subArray com os numeros
    for (let i = 0; i < nums.length; i++) {
        let element = nums[i]

        //Se o número for 0 entao adiciona 1 ao resultado
        if (element === 0) {
            result += 1
        } else {
            //Se não, faz fatorial do numero diminuindo ele até 1
            num = element
            while (num > 1) {
                num -= 1
                element = element * (num)
            }
            result += element
        }
    }
    console.log(result);
})