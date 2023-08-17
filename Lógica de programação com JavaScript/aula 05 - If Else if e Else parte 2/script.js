const numero = 2

if (numero < 5) {
    console.log('O número é menor que 5')
}

if (numero >= 0 && numero <= 5) {
    console.log('O numero está entre 0 e 5');
} else if (numero >= 6 && numero <= 8) {
    console.log('O numero esta entre 6 e 8');
} else if (numero >= 9 && numero <= 11) {
    console.log('O numero esta entre 9 e 11');
} else {
    console.log('O numero esta entre 0 e 11');
}

console.log('Aqui continuaria o resto do codigo...')
