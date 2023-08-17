/*
OPERADORES LÓGICOS
&& - AND - E - é utilizado quando duas expressoes devem ser verdadeira ou falsa, para prosseguir
|| - OR - OU
! - NOT - NÃO

*/

/*
EXEMPLO && imagine que você tenha que sair de casa, mas para isso precisa das chaves e da carteira, você só saira SE a chave && a carteira estiverem nos seus bolsos
desta forma, com as duas expressoes sendo verdade, podera sair de casa, SE a chave estiver no bolso, mas a carteira não, não saira de casa,
se a carteira estiver no bolso, mas a chave não, tambem não saira de casa.

Poderia ser mais de duas expressões, quando usado && todas as expressoes precisam ser True para se tornar True
*/
console.log(true && true)// retornara true
console.log(true && false)// retornara false
console.log(false && false) // retornara false


/*
EXEMPLO || - Para o exemplo de 'ou' de duas expressões, apenas uma precisa retornar 'true'.
Você precisa de 20 reais OU de um bilhete para entrar na festa, se uma das expressões forem verdadeiras 'true', você podera entrar
20 reais - false || um bilhete - true, neste caso, vocÊ entrara na festa, pois uma das expressões eram true
se nenhuma das expressões forem 'true' então sera false
20 reais - false || um bilhete - false, então, não entrara na festa
*/

console.log(true || false) // retornara true
console.log(true || true) // retornara true
console.log(false || false) // retornara false

const usuario = 'leonardo';
const senha = '123456';

const vaiLogar = usuario === 'leonardo' && senha === '123456';
console.log(vaiLogar);

/*
! - NOT ESSA EXPRESSÃO INVERTE O VALOR DE UM TRUE OU DE UM FALSE, veja o exemplo
*/

console.log(!true); // retornara false
console.log(!false); // retornara true