/*
Aritméticos

 Adição ( + )
 Subtração ( - )
 Divisão ( / )
 Potenciação ( ** )
 Resto da divisão ( % )
 Incremento ( ++ ) (NÃO PODE SER USADO EM UMA CONST)
 Decremento ( -- ) (NÃO PODE SER USADO EM UMA CONST)
*/

// ( + ) - Adição / Concatenação
let num1 = 10;
let num2 = 5;
console.log(num1 + num2);
let num3 = '11';
let num4 = '11';
console.log(num3 + num4);

// ( - ) Subtração
console.log(num1-num2);

// ( / ) Divisão
console.log(num1/num2);

// ( ** ) Potenciação
console.log(num1**num2);

// ( % ) Resto da divisão
console.log(num1%num2);

// ( ++ ) Incremento
let contador = 1;
console.log(contador++); // ele faz a conta mas não mostra pois o '++' esta depois da ação de mostrar o código.
console.log(++contador); // aqui ele mostra o valor ja com o incremento, pois ele incrementou antes de mostrar.
// ( -- )decremento
console.log(--contador); // Subtrai um valor seguinda a mesma regra que o incremento.
console.log(contador--);
// A melhor forma de usalo é usar o incremento ou o decremento antes de coloca-lo no console.log
contador++;
console.log(contador);
contador--;
console.log(contador);
// caso queira incrementar ou decrementar numeros acima de 1, é possivel da seguinte forma: 
contador += 2; // desta forma sera somado 2 na variavel contador
contador = 0;
console.log(contador);
contador += 2;
contador += 2;
console.log(contador);

// A resultados que podem retornar como NaN - Not a Number, por exemplo:
let nome = 'Felipe';
let idade = 10;
console.log(nome * idade);

// O erro aconteceu pois tentei multiplicar uma string, em alguns casos é possivel que de certo, como:
nome = '10';
console.log(nome*idade);
// Nesse caso ele retorna um valor, poís ele tentou e conseguiu multiplicar a string que possuia um número nela
// Se fosse usado a adição, ele juntaria ambos, como mostrado no começo do código.
// Também é possivel usar parseInt() para mudar de uma string para um número inteiro.
nome = parseInt('10');
console.log(nome+idade);
// E caso precise de um numero de ponto flutuante(10,5 ; 8.5, etc)
// é possivel usar parseFloat()
// E uma forma que pode interpretar tanto um número inteiro quanto um com ponto flutuante é Number()
nome = Number('10.2')
console.log(nome + idade)