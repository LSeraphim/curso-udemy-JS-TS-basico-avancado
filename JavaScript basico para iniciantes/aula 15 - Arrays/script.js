const alunos = ['pedro', 'felipe', 'ana']; // Uma array pode ter mais de um conteúdo separado por virgulas, pode ser colocado tanto números quanto strings dentro de uma array
// mas isso não é visto como uma boa pratica de programação.
// basicamente uma array é uma lista
console.log(alunos);

// Strings são indexadas em cada caracter como pelo exemplo abaixo:
//            01234567
const nome = 'leonardo';
console.log(nome[0]); // pegando a primeira letra pelo indice da string

// Já as arrays são indexadas pelos seus elementos, olhe o exemplo abaixo:
//         0        1         2
const alunos2 = ['pedro', 'felipe', 'ana'];
console.log(alunos2[0]); // pegando o primeiro elemento pelo indice da array

// é possivel editar um elemento da array da seguinte forma: 
alunos2[0] = 'leonardo'; // assim o elemento 0 da array, vai passar de 'pedro' para 'leonardo'
// também é possivel adicionar elementos em uma array da seguinte forma:
alunos2[3] = 'donatello'; // antes o indice 3 não existia, agora possui o valor de 'donatello', mas para adicionar um elemento dessa forma é necessario saber o tamanho da array
console.log(alunos2);

// para descobrirmos o tamanho da array podemos usar o .length
console.log(alunos2.length); // ele contara partindo do numero 1, mas devemos lembrar que o indice começa do 0
// tambem podemos adicionar elementos utilizando o length
alunos2[alunos2.length] = 'michelangelo';
alunos2[alunos2.length] = 'da vinci';
alunos2[alunos2.length] = 'rafael';
console.log(alunos2);

// outra forma, melhor e mais facil de adicionar elementos em uma array é utilizando push
alunos2.push('Lazaro');
console.log(alunos2);

// todos os metodos anteriores adicionam um elemento ao final da array
// para adicionar um elemento no inicio da array, podemos utilizar o unshift

alunos2.unshift('Anatólius'); // todo elemento que for inserido utilizando unshift ficara em primeiro na array, caso adicione elemento1 e depois utilizanto tambem unshift, adicione o elemento2, o ultimo elemento ficara em primeiro, ou seja o elemento2
console.log(alunos2);

// se utilizarmos pop, podemos remover um elemento da array, o ultimo elemento sera removido

const removido = alunos2.pop(); // podemos guardar o que foi removido em uma variavel
console.log(removido); // aqui veremos o que foi removido, e ficara guardado na variavel 'removido'
console.log(alunos2); // aqui poderemos ver a array ja sem o elemento

// tambem podemos remover elementos do começo utilizando shift
const removido2 = alunos2.shift(); // e tambem pode ser guardado em uma variavel, o que sera removido sera 'Anatólius'
console.log(removido2);
console.log(alunos2);

// lembrando que quando removemos um elemento ou adicionamos os indices sao alterados ou criados, se removermos o primeiro elemento, o indice dele passara a ser do segundo, se adicionarmos um elemento, um novo indice sera criado.
// Mas podemos apagar um elemento sem alterar os indices, deixando um local vazio na array, usamos o delete para isso
delete alunos2[2]; // nesse caso 'ana' sera deletada
console.log(alunos2);

// tambem conseguimos acessar indices que nao existem na array, o javascript retornara undefined, o mesmo acontecera se tentarmos ver o que tem no indice do local vazio apos o delete

console.log(alunos2[50]);
console.log(alunos2[2]);
// podemos usar slice com arrays, para selecionar somente os elementos que queremos
console.log(alunos2.slice(0, 3)); // lembrando que o slice usa os indices como parametro, para pegarmos os itens do 1 ao 3, devemos usar os indices 0 e 3

console.log(typeof alunos2); // a array é considerada um objeto
// para confirmarmos se é uma array ou nao, podemos utilizar instanceof Array, que retornara 'true' se for uma array ou 'false' se não for uma array
console.log(alunos2 instanceof Array);