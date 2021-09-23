function calcularTabuada(numero){
    console.log(`TABUADA DO NÚMERO: ${numero}`);
    for(let i = 0; i <= 10; i ++){
        console.log(`${numero} X ${i} = ${numero * i}`);
    }
}

function calcularTabuadaAteDez(){
    for(let i = 0; i <= 10; i ++){
        calcularTabuada(i);
    }
}

function informarParesImpares(numero){
    for(let i = 0; i <= numero; i++){
        const resposta = i % 2 === 0 ? "PAR" : "IMPAR";
        console.log(i, resposta);
    }
}

calcularTabuada(5);
calcularTabuadaAteDez();
informarParesImpares(10);