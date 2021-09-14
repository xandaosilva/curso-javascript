function somar(x, y){
    return x + y;
}

function criarMultiplicador(multiplicador){
    return function (numero){
        return numero * multiplicador;
    };
}

const duplicar = criarMultiplicador(2);
const triplicar = criarMultiplicador(3);
const quadruplicar = criarMultiplicador(4);

console.log(duplicar(2));
console.log(triplicar(2));
console.log(quadruplicar(2));