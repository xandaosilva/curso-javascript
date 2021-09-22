function gerarAleatorio(min, max){
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function mostrarMensagem(mensagem, tempo){
    return new Promise((resolve, reject) => {
        if(typeof mensagem !== "string") reject("Valor inválido");
        setTimeout(() => {
        resolve(mensagem);
        }, tempo);
    });
}

mostrarMensagem("Frase 1", gerarAleatorio(1, 3)).then(resposta => {
    console.log(resposta);
    return mostrarMensagem("Frase 2", gerarAleatorio(1, 3));
}).then(resposta => {
    console.log(resposta);
    return mostrarMensagem(3, gerarAleatorio(1, 3));
}).then(resposta => {
    console.log(resposta);  
}).catch(erro => {
    console.log("Erro:", erro);
});

