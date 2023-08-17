// Para criarmos um objeto utilizamos chaves {} nao vamos confundir com uma array, que utiliza colchetes []
const pessoa1 = {
    nome: 'Leonardo',
    sobrenome: 'Seraphim',
    idade: 20, // nos objetos, temos a propriedade e os         elementos como por exemplo ali o 'nome' é a propridade e tem o elemento 'Leonardo'
               // nele, não podemos confundilos com variaveis, sempre separamos os atributos por virgulas
};
// para chamarmos uma propridade especifica do objeto, utilizamos o ( . ) veja no exemplo abaixo:

console.log(pessoa1.nome); // desta forma podemos chamar apenas a propriedade 'nome' da variavel 'pessoa1'

// podemos criar uma função que cria objetos, unindo as duas coisas, veja no exemplo abaixo

function criaPessoa (nome, sobrenome, idade) { // obs: os parametros dentro do () tem o nome de parametro mesmo
    return {
        nome: nome,
        sobrenome: sobrenome,
        idade: idade,
    };
}

const pessoa2 = criaPessoa('Leonardo', 'Seraphim', 20); // obs2: ja o valor que o parametro vai receber aqui, se chama argumento, entao parametros recebem argumentos
console.log(pessoa2.nome);

const pessoa3 = criaPessoa('Luis', 'Felipe', 45);
const pessoa4 = criaPessoa('André', 'Marciano', 37);
const pessoa5 = criaPessoa('Luciano', 'Hulk', 25);

console.log(pessoa2.nome);
console.log(pessoa3.sobrenome);
console.log(pessoa4.nome);
console.log(pessoa5.idade);

// apesar da função ser mais legivel desta forma, podemos abreviar ela, para que seja mais rapido e eficiente para escreve-la.
// aqui vou mostrar como criar uma função de forma mais abreviada

function criaPessoa2(nome, sobrenome, idade){
    return {
        nome, sobrenome,idade
    };
};
// Deste modo a função funciona-ra da mesma forma que a primeira, mas ela esta escrita de forma mais resumida

const pessoa6 = criaPessoa2('Luizinho', 'Alvares', 15);
console.log(pessoa6.nome, pessoa6.sobrenome); // aqui podemos ver que esta funcionando normalmente.

// assim como podemos usar funções para criar objetos, tambem podemos usar funções dentro dos objetos
// veja no exemplo a seguir

const pessoaObjeto1 = {
    nome: 'felipinho',
    sobrenome: 'Andrade',
    idade: 16,

    fala() {
        console.log(`Olá, me chamo ${this.nome} ${this.sobrenome} e tenho ${this.idade} anos`) // nesta aula aprendi que o this esta funcionando puxando o objeto atual dentro desse contexto, mas sera abordado mais futuramente, mais sobre o comando this.
    }, // para criarmos uma função depois da outra, tambem separamos com ','

    incrementaIdade() {
        this.idade++;
    }
};

pessoaObjeto1.fala(); // aqui vemos a função funcionando
pessoaObjeto1.incrementaIdade(); // temos que chamar a função para ela funcionar, na proxima vez que chamarmos a função 'fala()' uma idade a mais sera incrementada ao objeto
pessoaObjeto1.fala(); // aqui vemos que a idade aumentou