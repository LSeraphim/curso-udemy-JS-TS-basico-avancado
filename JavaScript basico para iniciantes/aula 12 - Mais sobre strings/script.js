// esta é uma forma de usar aspas duplas dentro de uma string aberta com aspas duplas, para que as aspas apareçam como parte do texto
let umaString = "Um \"texto\"";
console.log(umaString);
umaString = 'um "texto"' // outra forma é abrir a string com aspas simples, assim não há interferencia das aspas duplas
console.log(umaString);

// strings são iteraveis, cada letra da string tem um número a representando, e é possivel mostrar somente a letra que desejar da palavra
console.log(umaString[1]); // nessa caso sera mostrado a letra 'm' de Um, pois a contagem começa do 0 para o primeiro caracter, e segue continuamente até o ultimo
umaString = "Um texto";
//se tentarmos pegar um número acima da quantidade de caracter, retornara undefined
console.log(umaString[10]);

// é possivel descobrir onde exatamente comece uma palavra especificada usando o comando .indexOf()
// Também é possivel procurar letras, e adicionar a posição em que quer partir da busca.
console.log(umaString.indexOf('texto')); // retornara 3, pq após o numero 3, sera onde começa a palavra 'texto' os espaços também são contados.
console.log(umaString.indexOf('t', 5)); // como tem 2 letras 't' na string, eu pedi para começar a busca depois da primeira letra, entao ele retornou onde começa a segunda.

// Também é possivel fazer a mesma busca, porem, de tras para frente
console.log(umaString.lastIndexOf('t', 4));
console.log(umaString.lastIndexOf('t'));

// é possivel descobrir o tamanho de uma string usando length
console.log(umaString.length); // dessa a vez a contagem não começa do 0, apenas o INDICE começa do 0

//           01234567  esses são os indices de cada caracter na string
umaString = "Um texto";
// com slice é possivel fatiar uma string, pegando somente a parte desejada
console.log(umaString.slice(0, 2)); // o fatiamente é baseado nos indices, o ultimo indice precisa ser um acima do desejado, para que a palavra saia completa, pois ele fatiara exatamente a onde o indice for indicado
// se eu quisesse pegar a palavra 'um' e usase apenas 0 e 1, apareceria somente a letra U, assim como no exemplo abaixo
console.log(umaString.slice(0,1));
// Também é possivel utilizar valores negativos, o fatiamente começara do final para trás.
console.log(umaString.slice(-5));

// podemos dividir uma string usando um caracter como base, assim cada palavra fica no indice de uma array, usando o caracter escolhido como o motivo de fatiamento
console.log(umaString.split(' ')); //nesse caso o espaço é o caracter escolhido para definir um fatiamento
// agora 'Um' e 'texto' foram separados, em uma array
let outraString = "uma frase mais longa";
// criei outra variavel para dar outro exemplo de split, também é possivel definir limites de quantas vezes ocorrera o fatiamente, por exemplo:
console.log(outraString.split(' ', 2)); // o 2 esta dizendo que só fatiara a frase por 2 espaços, depois a frase nn tera mais fatiamentos
// como o ultimo espaço é depois da frase, antes disse a frase foi fatiada, e depois disso, nao sera mais.

// Para deixar uma string toda maisculas da para usar toUpperCase()
console.log(outraString.toUpperCase());
// E para deixar tudo minusculo é possivel usar toLowerCase()
console.log(outraString.toLowerCase())