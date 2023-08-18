function meuEscopo() {
    const form = document.querySelector('.form');
    const resposta = form.querySelector('.resposta')

    function recebeEventoForm(evento) {
        evento.preventDefault();

    const peso = form.querySelector('.peso');
    const altura = form.querySelector('.altura');

    const pesoValue = Number(peso.value);
    const alturaValue = Number(altura.value);

    if (isNaN(pesoValue)) {
        resposta.innerHTML = '<p>Peso inválido!</p>';
    } else if (isNaN(alturaValue)) {
        resposta.innerHTML = '<p>Altura inválida!</p>';
    } else {
        let imc = pesoValue / (alturaValue*alturaValue);
        imc = imc.toFixed(2);

        if (imc < 18.5) {
            resposta.innerHTML = `<p>${imc} Abaixo do peso!</p>`;
        }
        if (imc >= 18.5 && imc <= 24.9) {
            resposta.innerHTML = `<p>${imc} Peso normal!</p>`;
        }
        if (imc >= 25 && imc <= 29.9) {
            resposta.innerHTML = `<p>${imc} Sobrepeso!</p>`;
        }
        if (imc >= 30 && imc <= 34.9) {
            resposta.innerHTML = `<p>${imc} Obesidade de grau 1!</p>`;
        }
        if (imc >= 35 && imc <= 39.9) {
            resposta.innerHTML = `<p>${imc} Obesidade de grau 2!</p>`;
        }
        if (imc > 40) {
            resposta.innerHTML = `<p>${imc} Obesidade de grau 3!</p>`;
        }
    }

    }
    form.addEventListener('submit', recebeEventoForm);

}
meuEscopo();