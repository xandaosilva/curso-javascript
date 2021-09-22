function gerarAleatorio(min, max){
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function mostrarMensagem(mensagem, tempo){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(typeof mensagem !== "string") {
                reject("Valor inválido");
                return;
            }
            resolve(mensagem);
        }, tempo);
    });
}

/*mostrarMensagem("Fase 1", gerarAleatorio(1, 3)).then(resposta => {
    console.log(resposta);
    return mostrarMensagem("Fase 2", gerarAleatorio(1, 3));
}).then(resposta => {
    console.log(resposta);
    return mostrarMensagem("Fase 3", gerarAleatorio(1, 3));
}).then(resposta => {
    console.log(resposta);
    return resposta;
}).then((resposta) => {
    console.log("Terminamos na " + resposta);
}).catch(erro => {
    console.log("Erro:", erro);
});*/


async function executarFases(){
    try {
        const fase1 = await mostrarMensagem("Fase 1", gerarAleatorio(0, 3));
        console.log(fase1);
        const fase2 = await mostrarMensagem("Fase 2", gerarAleatorio(0, 3));
        console.log(fase2);
        const fase3 = await mostrarMensagem("Fase 3", gerarAleatorio(0, 3));
        console.log(fase3);
        console.log("Terminanos na " + fase3);
    } catch (error) {
        console.log(error);
    }
}

executarFases();