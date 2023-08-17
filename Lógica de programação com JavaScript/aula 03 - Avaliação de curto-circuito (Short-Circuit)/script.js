/**
 * O operador lógico && (and) sempre retornara o primeiro valor falso encontrado, e se todos os valos forem verdadeiro, ele retornara o ultimo 
 */

console.log('leonardo' && 0 && 'seraphim'); // nesse caso o 0 é o valor 'false' então ele mostrara o '0'
console.log('leonardo' && true && 'seraphim'); // nesse caso todos são 'true' então ele retornara 'seraphim' que é o ultimo valor
console.log(0 && true && NaN); // nesse caso tanto 0 quanto 'NaN' são false, mas ele retornara sempre o primeiro valor

/**
 * False - valor falso literal
 * A alguns valores no JavaScript que retornam false, veja alguns deles abaixo:
 * 0 - zero
 * '', "" - string vazia
 * null / undefinied - valores não definidos ou nulos
 * Nan - not a number
 */



/**
 * O operador lógico || - or
 * sempre retornara o primeiro valor true encontrado, se todos forem verdadeiro ele retornara o primeiro, se todos forem false ele retornara o ultimo valor encontrado como false
 */
console.log(0 || null || NaN || 2 || true); // ele retornara '2' pois foi o primeiro valor 'true' encontrado
console.log(false || null | NaN || 0); // nesse caso ele retornara 0

const corUsuario = null; // se deixarmos null, aparecera a cor padrão no console, se colocarmos algum valor aqui, aparecera o valor inserido
const corPadrao = corUsuario || 'preto';
console.log(corPadrao);