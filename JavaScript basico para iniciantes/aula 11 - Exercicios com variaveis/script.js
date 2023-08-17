// Exercício - trocar os valores das variaveis sem usar strings com valores absolutos('A').
let varA = 'A' // tem que receber o valor de varB
let varB = 'B' // tem que receber o valor de varC
let varC = 'C' // tem que receber o valor de varA

let guardar = ''

guardar = varA

varA = varB
varB = varC
varC = guardar

console.log(varA, varB, varC)