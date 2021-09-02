function mostrarMensagem(x){
    if(x >= 0 && x < 6){
        return `Boa madrugada ! São ${x} hora(s)`;
    }
    else if(x <= 12){
        return `Bom dia ! São ${x} hora(s)`;
    }
    else if(x <= 18){
        return `Boa tarde ! São ${x} hora(s)`;
    }
    else{
        return `Boa noite ! São ${x} hora(s)`;
    }
}

function validarHoras(x){
    if(x < 0 || x > 24){
        return "Hora inválida";
    }
    else{
       return mostrarMensagem(x);
    }
}

function responderHoras(){
    console.log(validarHoras(-7));
    console.log(validarHoras(0));
    console.log(validarHoras(10));
    console.log(validarHoras(18));
    console.log(validarHoras(23));
    console.log(validarHoras(37));
}

responderHoras();