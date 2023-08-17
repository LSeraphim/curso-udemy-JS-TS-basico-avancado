// para criar funções utilizamos function 'nome'(){}
// Uma função executara um bloco de codigo dentro dela sempre que for chamada
// Podemos definir parametros dentro de uma função para que possamos usar variaveis sem precisarmos declara-las
// Uma função é protegida, não é possivel chamar algo de dentro de uma função pra fora dela, sem chamar a função
function saudacao(nome) { // o parametro fica dentro da função quando ela foi criada, por exemplo podemos colocar uma variavel nome ali
    console.log('bom dia', nome)
    return 123456; // o return serve para mostrar o que a função ira retornar
};

// para chamar-mos uma função devemos só escrever o nome dele, e como toda função adicionar os parenteses() no final
saudacao('leonardo'); // e entao sempre que formos chamar a função, no parametro, podemos colocar o valor que desejamos que a variavel nome tenha
saudacao('anaxtus'); // podemos mudar o parametro a vontade.
const guardar = saudacao(); // se tentarmos ver o que a função retorna, sem usar return, ela retornaria 'undefined', mas se colocarmos um return, ela retornara o que estiver no return
console.log(guardar);
saudacao('lazaro'); // o return não afeta o parametro da função
// podemos fazer a função retornar o valor que quisermos
function bomdia(nome1) {
    return `Bom dia! ${nome1}`
};

const bomdia1 = bomdia('Chris tiro certo');
console.log(bomdia1);

function soma(x, y) {
    const resultado = x + y;
    return resultado;
};

console.log(soma(2,2));
//console.log(resultado); Não é possivel acessar o 'resultado' da function pois esta protegido, mas podemos criar uma variavel para receber a function com padroes //definidos como feito anteriormente, mostratei denovo no exemplo abaixo:
const resultado = soma(2, 2);
console.log(resultado); // desta forma sera possivel mostrar o resultado, mas é possivel ver que eu declarei const novamente com o nome 'resultado', isso mostra que o que esta dentro da function é diferente da que esta fora, duas variaveis diferentes.
console.log(soma('leonardo', 'seraphim')); // tambem é possivel concatenar as strings
// Como visto podemos definir variaveis como parametro para as contas, mas também podemos colocar valores prontos para elas
function multiplicacao(x = 2, y = 5){
    const resultado = x * y;
    return resultado;
};
console.log(multiplicacao());
console.log(multiplicacao(5)); // devemos tomar cuidado, pois ainda podemos substituir os parametros mesmo com valores prontos, seguindo a mesma regra de antes
// nesse caso acima, mudamos apenas o primeiro parametro (x), o y continuara com o valor que colocamos no parametro

// temos outra forma de criar uma função, olhe abaixo:
const raiz = function(n) {
    return n ** 0.5;
};
console.log(raiz(81)); // desta forma criamos uma function com o nome raiz, que pode descobrir a raiz quadrada de um número
// chamamos ela da mesma forma e definimos parametros da mesma forma, porem ela foi criada com uma variavel const

// e outra forma são as arrows functions, veja abaixo:

const divisao = (n1, n2) => n1/n2; // desta forma não usamos a palavra 'function' e sim um sinal de igual e um de maior que, para criarmos a função '=>';
// essa forma é muito mais rapida, e funciona normalmente com uma function do mesmo jeito, se tivessemos apenas um parametro, poderiamos tirar os parenteses deles tambem.

console.log(divisao(10, 2));