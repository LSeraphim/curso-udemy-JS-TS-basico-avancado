/* 
Primitivos: string, number, boolean, undefined, null (bigint e symbol) (NO FUTURO VEREI MAIS SOBRE BOOLEAN, BIGINT E SYMBOL)
Primitivos são valores imutáveis, quando declaramos uma variavel, e a gente muda o valor dela, na verdade estamos só trocando, e não mudando de fato
é como se estivessemos trocando um adesivo de uma caixa, a caixa ainda continua a mesma, mas com um adesivo diferente
*/

let nome = 'Leonardo';
nome[0] = 'R';
console.log(nome[0]) // aqui vemos que ainda sera mostrado a letra 'L' pois a string é imutável

let a = 'A';
let b = a; // Aqui estamos utilizando a variavel 'b' para copiar o valor da variavel 'a', mas uma variavel continua sendo independente da outra
console.log(a, b); // sera mostrado 'A A' no console
a = 'outro texto'; // mas se alterarmos o texto da variavel 'a' agora, b não mudara o primeiro valor que ele copiou, pois ele é independente da variavel 'a'
// e só pegou seu valor no primeiro momento
console.log(a, b);

/*
Referência: Arrays, object e function
Referência são mutaveis
*/
let array = [1, 2, 3];
let c = array;
console.log(array, c); // aqui vemos que ambos agora tem o mesmo valor
array.push(4);
console.log(array, c); // aqui vemos que quando foi adicionado um valor na variavel 'array' a variavel 'c' tambem foi afetada, logo, a variavel c fica dependente da 'array'
// e o contrario tambem, agora se mexermos na variavel 'c' a variavel 'array' tambem sera afetada
c.push(5);
console.log(array, c)

/*
Primitivos: tem seus valores copiados
Referencia: tem seus valores passados por referencia
*/

// para copiarmos o valor de uma array sem fazer uma variavel ficar dependente da outra podemos usar a seguinte forma
let d = [...array]; // desta forma, a variavel 'd' pega os valores da 'array', mas se eu alterar uma delas, a outra não sera afetada

d.push(6);
array.pop();

console.log(array, d); // aqui vemos que uma array não é mais dependente da outra

// A MESMA COISA ACONTECE COM OBJECT
const pessoa1 = {
    nome: 'Luis',
    sobrenome: 'Fernando',
};

const p1 = pessoa1;

pessoa1.nome = 'lazaro';
console.log(p1); // aqui veremos que o object 'p1' que recebeu a referencia do object 'pessoa1' estao dependentes de uma da outra agora
// apesar de termos trocado a propriedade nome do object pessoa1, o object p1 foi afetado.
// para isso não acontecer podemos fazer da seguinte forma

const pessoa2 = {
    nome:'lucas',
    sobrenome:'andrade',
};

const p2 = {...pessoa2}; // desta forma, copiamos os valores, sem tornar os objects um dependente do outro
p2.nome = 'baianinho';
console.log(p2, pessoa2);