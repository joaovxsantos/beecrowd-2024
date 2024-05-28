const input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n').map(line => line.replace('\r', ''));


//Variável de iterações
let i = 1;


//Loopando enquanto houver elementos em lines
while (lines.length > 0) {


    //Desestruturando variáveis
    const [x1, y1, x2, y2] = lines.shift().split(' ').map(Number);

    //Se todas forem igual a 0 então para com o loop
    if (x1 === 0 && x2 === 0 && y1 === 0 && y2 === 0) break


    const quantMeteoros = +lines.shift();
    let count = 0;

    //Pegando todos os meteoros do teste e varrendo com forEach
    const meteoros = lines.splice(0, quantMeteoros).forEach((meteoro) => {

        //Desestruturando x e y
        const [x, y] = meteoro.split(' ').map(Number)

        //Testando as condições: X1≤X≤X2 && Y2≤Y≤Y1
        if ((x1 <= x && x <= x2) && (y2 <= y && y <= y1)) {
            count += 1;
        }
    })

    console.log(`Teste ${i}\n${count}`);
    
    //Incrementando a iteração
    i++
}