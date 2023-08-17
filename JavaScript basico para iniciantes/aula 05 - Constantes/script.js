// Não podemos criar constantes com palavras reservadas
// Constantes precisam ter nomes significativos
// Não pode começar o nome de uma constante com um número
// Não podem conter espaço ou traços "-"
// Utilizamos camelCase
// Constantes tem Case-sensitive
// Não podemos redeclarar constantes ou modificar o valor de uma constante
// NÃO UTILIZE VAR, UTILIZE CONST.
// Tem que ser declarada com um valor

// const nome; não funciona
/*
const nome = 'Leo';
nome = 'Seraphim'; uma constante não pode ter seu valor mudado
*/

const nome = 'Leo';
console.log(nome)

// Podemos usar o valor de uma const ou variavel para criar outra

const n1 = 1;
const n2 = 1+n1
let pnome = 'leonardo'
let snome = 'seraphim'
const nomeCompleto = pnome+snome

// comando typeof serve para ver o tipo da variavel, se é uma string ou um number

console.log(n2, pnome, snome, nomeCompleto)

let teste = n1 + nomeCompleto

console.log(typeof teste)   