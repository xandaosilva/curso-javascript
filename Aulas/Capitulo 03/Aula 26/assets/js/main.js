const form = document.querySelector("#formulario");

form.addEventListener("submit", function(event){
    event.preventDefault();

    const pesoInformado = event.target.querySelector("#peso");
    const alturaInformada = event.target.querySelector("#altura");
    const peso = Number(pesoInformado.value);
    const altura = Number(alturaInformada.value);

    const imc = calcularImc(peso, altura);
    const mensagemImc = mostrarNivelImc(imc);
    const imcCalculado = `O seu IMC é ${imc} e você está com ${mensagemImc}`;

    mostrarMensagem(imcCalculado, true);
});

function calcularImc(peso, altura){
    const imc = (peso/(Math.pow(altura,2)));
    return imc.toFixed(2);
}

function mostrarNivelImc(imc){
    if(imc < 18.5) return "Abaixo do peso";
    else if(imc < 25) return "Peso normal";
    else if(imc < 30) return "Sobrepeso";
    else if(imc < 35) return "Obesidade grau 1";
    else if(imc < 40) return "Obesidade grau 2";
    else return "Obesidade grau 3";
}

function criarParagrafo(){
    const paragrafo = document.createElement("p");
    return paragrafo;
}

function mostrarMensagem(message, isValid){
    const mensagem = document.querySelector("#resultado");
    mensagem.innerHTML = "";

    const paragrafo = criarParagrafo();

    if(isValid) paragrafo.classList.add("paragrafo-resultado");
    else paragrafo.classList.add("bad");

    paragrafo.innerHTML = message;
    mensagem.appendChild(paragrafo);
}