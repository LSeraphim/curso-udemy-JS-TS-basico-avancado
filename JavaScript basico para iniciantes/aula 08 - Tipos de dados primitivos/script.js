// Tipos de dados primitivos: String, Number, Undefined, Null, Boolean, Symbol(Não foi abordado na aula atual, sera explicado futuramente)

//Formas de criar uma variavel de texto, todas são consideradas strings.
const nome = 'Luis';  // STRING com aspas simples.
const nome1 = "Leo";  // STRING com aspas duplas.
const nome2 = `Lins`; // STRING com crase.
const numeroEmAspas = '999' // STRING se o número estiver entre aspas ou crases, sera considerado uma string.

//Formas de criar variavels de tipo number.

const numero = 10; // NUMBER Sem aspas ou crases, apenas o número, é considerado um number.
const numero2 = 2.2; // NUMBER Números com pontos flutuantes, no JS também é considerado um number.

let variavelnula; // UNDEFINED, não aponta pra local nenhum na memoria, valor nulo.
let variavelnull = null; // UNDEFINED, não aponta pra local nenhum na memoria, valor nulo.

const boolean = true; // Boolean só tem 2 valores, true ou false (verdadeiro ou falso).
const booleano = false; // Boolean só tem 2 valores, true ou false (verdadeiro ou falso).

// da para verificar o tipo da variavel utilizando typeof
console.log(typeof boolean, typeof variavelnula, typeof nome, typeof numero, typeof numeroEmAspas)
