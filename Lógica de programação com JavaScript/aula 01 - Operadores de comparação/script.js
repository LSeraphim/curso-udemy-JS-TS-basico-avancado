/*
OPERADORES DE COMPARAÇÃO:

> maior que
< menor que 
>= mair ou igual a
<= menor ou igual a
== igualdade (valor)(não confundir com '=' o sinal de igual sozinho é para atribuição, dois sinais de '==' são para comparação, verificar se um valor é igual ao outro)
=== igualdade estrita (valor e tipo)
!= diferente (valor)
!== diferente estrito (valor e tipo)
*/

console.log(10 > 5); // comparações sempre retornarão um boolean, verdadeiro ou falso, nesse caso, sera true
// podemos usa-los com variaveis
let num1 = 10;
let num2 = 11;

console.log(num1 >= num2); // nesse caso sera false

let comparacao = 10 > 9;
console.log(comparacao); // nesse caso sera true
console.log('10' == 10); // esta expressoa retornara true, pois para o javascript os valores sao iguais, mesmo que os tipos sejam diferentes
// para evitarmos isso utilizamos '===' com esta comparção de 3 '=' ja verificamos o tipo e o valor
console.log('10' === 10);

// o mesmo ocorre com o diferente '!='
console.log('10' != 10); // neste caso ele retornara false, mesmo que os tipos sejam diferentes, o que deveria ser true
console.log(10 != 10); // neste caso ele retornara false mesmo
console.log('10' !== 10); // neste caso ele retornara true como deveria, pois o '!==' compara o valor e o tipo
console.log(10 !== 10); // nesse caso sera false mesmo

// sempre utilizaremos mais os estritos: '===' e '!==' pois são mais precisos por compararem os tipos e os valores.