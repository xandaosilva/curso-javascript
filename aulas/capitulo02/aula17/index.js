function saudar(nome){
    return `Bom dia ${nome}`;
}

function somar(x , y){
    return x + y;
}

/*const calcularRaiz = function(x){
    return Math.sqrt(x);
};*/

//arrow function
const calcularRaiz = x => Math.sqrt(x);

const mensagemSaudacao = saudar("Alexandre");
const resultadoSoma = somar(2,3);

console.log(mensagemSaudacao);
console.log(resultadoSoma);
console.log(calcularRaiz(100));
console.log(calcularRaiz(25));
console.log(calcularRaiz(9));