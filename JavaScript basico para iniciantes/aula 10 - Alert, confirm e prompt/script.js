// alert - mostra um pop-up de alerta no navegador
// alert('Uma mensagem')
// confirm - mostra um pop-up de confirmação com duas opções no navegador
// confirm('Tem certeza?')
// prompt -- pede para o usuario digitar uma mensagem no pop-up
// prompt('Escreva algo')


// a variavel confirma ira receber oque o usuario escolher na caixa de oergunta
// caso clique em 'ok' a variavel recebera 'true' caso clique me cancelar a variavel receberá 'false'
// const confirma = confirm('Realmente deseja apagar?')

// Exercicios - Pedir 2 números ao usuario e soma-los utilizando prompt e alert

const num1 = Number(prompt('Digite um número'))
const num2 = Number(prompt('Digite outro número'))
const resultado = num1 + num2
alert(`A soma dos números ${num1} e ${num2} é ${resultado}`)