//Número a ser incrementado
let iterator = 97;
//Loop para ler todos as letras do alfabeto
for (let i = 'a'.charCodeAt(0); i <= 'z'.charCodeAt(0); i++) {
    console.log(`${iterator} e ${String.fromCharCode(i)}`);
    iterator++
}