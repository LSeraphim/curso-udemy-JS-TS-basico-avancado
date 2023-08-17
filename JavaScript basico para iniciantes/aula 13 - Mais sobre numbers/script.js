let num1 = 10.2534;    // Number
let num2 = 2.5;  // Number

console.log(num1.toString() + num2); // to string tranforma um number em string, fazendo com que o sinal de '+' não some, e sim concatene a string com o número
console.log(typeof num1); // o num1 nn muda o valor como variavel, apenas na operação onde usamos toString() mas ele continua como number apos isso
// Mas também seria possivel mudar o valor dele para string fazendo assim: num1 = num1.toString() desta forma ele virara uma string em outras operações também
console.log(num1.toString(2)); // usando o 2 no toString() podemos ver a representação binária do numero da variavel
console.log(num1.toFixed(2));  // Com toFixed() podemos escolher quantas casas decimais vamos mostrar, colocando o numero de casas decimais dentro do ()
let temp = num1 * 'ola'; // esta conta retornaria 'NaN'
console.log(Number.isNaN(temp)); // desta forma, ao inves de aparecer 'NaN' ele vai retornar se o valor é True (se for 'NaN') ou false (se não for)

let num3 = 0.7;
let num4 = 0.1;
// no javascript, podem ocorrer erros minimos de calculo, e para resolver esses erros podemos usar parseFloat() ou Number()
num3 += num4;
num3 += num4;
num3 += num4;
console.log(num3); // o numero mostrado deveria ser 1.0 para resolvermos isso entra o parseFloat() ou Number() e tambem o toFixed()
num3 = parseFloat(num3).toFixed(2); // no lugar do parseFloat também poderiamos usar o Number()
console.log(num3);

// Também poderiamos resolver este problema de forma matemática
let num5 = 0.7
let num6 = 0.1

num5 = ((num5 * 100) + (num6 * 100)) / 100; // desta forma tambem seria resolvido o problema
num5 = ((num5 * 100) + (num6 * 100)) / 100; // desta forma tambem seria resolvido o problema
num5 = ((num5 * 100) + (num6 * 100)) / 100; // desta forma tambem seria resolvido o problema

console.log(num5)
