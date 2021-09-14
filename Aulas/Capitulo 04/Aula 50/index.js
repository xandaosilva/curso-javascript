// arguments suporta todos os argumentos enviados para a função
function somar(){
    let total = 0;
    
    for(let argument of arguments)
        total += argument;

    console.log(total);
}

function mostrarInformacoes({ nome, sobrenome, idade}){
    console.log(nome, sobrenome, idade);
}

function calcular(operador, acumulador, ...numeros){
    for(let numero of numeros){
        if(operador === "+") acumulador += numero;
        if(operador === "-") acumulador -= numero;
        if(operador === "*") acumulador *= numero;
        if(operador === "/") acumulador /= numero;
    }

    console.log(acumulador);
}

somar(1, 2, 3, 4, 5, 6, 7);
mostrarInformacoes({nome: "Alexandre", sobrenome: "Rogério", idade: 30});
calcular("+", 0, 20, 30, 40, 50);
calcular("-", 0, 20, 30, 40, 50);
calcular("*", 1, 20, 30, 40, 50);
calcular("/", 1, 20, 30, 40, 50);