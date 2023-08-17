/*
Zacarias Dubalaco tem 35 anos, pesa 85 kg, tem 1.8 de altura e seu IMC é de ????
*/

const nome = 'Zacarias';
const sobrenome = 'Dubalaco';
const idade = 35;
const peso = 85;
const alturaEmM = 1.80;

let indiceMassaCorporal = peso / (alturaEmM * alturaEmM); // peso / (altura*altura)
let anoNascimento = 2023 - idade;

console.log(nome, sobrenome, 'tem', idade, 'Anos e pesa', peso, 'Kg', 'tem', alturaEmM, 'Metros de altura');
console.log(`Nasceu em ${anoNascimento} Seu IMC é ${indiceMassaCorporal}`);