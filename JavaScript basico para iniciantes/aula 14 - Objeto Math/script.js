let num1 = 9.569584;
let num2 = Math.floor(num1); // Este método serve para arredondar o número para baixo
console.log(num2);
let num3 = Math.ceil(num1);// Este método serve para arredondar o número para cima
console.log(num3);
let num4 = Math.round(num1); // Este método arredonda o número com base se ele está acima do 5 ou abaixo do 5, se estiver exatamente no número 5, ele arredonda para cima
console.log(num4);

console.log(Math.max(1,2,3,4,5,6,7,900,1999,3,5,6,9999)); // Este metodo serve para descobrir o mair número da sequencia
console.log(Math.min(5464,123123,816239,48998,1,84954,21236,444,2)); // Este metodo serve para descobrir o menor número da sequencia
console.log(Math.random()); // Este serve para gerar um número aleatorio entre 0.0 e 0.9
// Podemos escolher o mínimo e o maximo do número aleatorio que desejamos utilizando alguns truques como:
const aleatorio = /* E utilizando o math.round podemos arredondalo*/Math.round(Math.random() * (10 - 5/*Aqui colocamos primeiro o número de valor máximo que queremos, e depois o valor mínimo*/) + 5); // e continuamos depois somando pelo valor mínimo. 
console.log(aleatorio);

console.log(Math.PI); // podemos pegar o valor de PI
// Para descobrirmos a raiz quadrada, podemos utilizar a potencia (**) com o 0.5
console.log(25 ** 0.5); // é só colocar qualquer número elevado a 0.5, que descobrimos sua raiz quadrada
// No javascript é possivel dividir por 0 (por incrivel que pareça) ele retorna o valor 'infinity'
console.log(100/0);