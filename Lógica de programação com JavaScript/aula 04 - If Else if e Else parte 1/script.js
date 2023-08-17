/**
 * Entre 0 - 11 - bom dia
 * Entre 12 - 17 boa tarde
 * Entre 18 - 23 - boa noite
 */

const hora = 25;

if (hora >= 0 && hora <= 11) {
    console.log('Bom Dia!');
} else if (hora >=12 && hora <= 17) {
    console.log('Boa Tarde!');
} else if (hora >=18 && hora <= 23) {
    console.log('Boa Noite!');
} else {
    console.log('hora desregulada!');
}

// também pode ser feito da seguinte forma:

if (hora >=0 && hora <= 11) {
    console.log('bom dia');
}
if (hora >=12 && hora <= 17) {
    console.log('boa tarde');
}
if (hora >=18 && hora <=23) {
    console.log('boa noite');
}
if (hora >= 24) {
    console.log('Hora desregulada')
}
/**
 * If pode ser usado sozinho
 * para usar else é necessário ter um if antes
 * pode ser usado quantos if ou else if quiser
 * só pode ter um else na checagem
 */