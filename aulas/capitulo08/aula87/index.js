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

function downloadPagina(cache){
    const emCache = cache;

    if(emCache) return Promise.resolve("Páigna em cache");
    else return mostrarMensagem("Download concluido", 3000);
}

const promises = [
    "Valor 1",
    mostrarMensagem("Promise 1", 3000),
    mostrarMensagem("Promise 2", 500),
    mostrarMensagem("Promiss 3", 1000),
    "Valor 2"
];

const promises2 = [
    mostrarMensagem("Promise 1", gerarAleatorio(1, 5)),
    mostrarMensagem("Promise 2", gerarAleatorio(1, 5)),
    mostrarMensagem("Promise 3", gerarAleatorio(1, 5))
];

Promise.all(promises).then((valor) => {
    console.log(valor);
}).catch(erro => {
    console.log("Erro: ", erro);
});

Promise.race(promises2).then((valor) => {
    console.log(valor);
}).catch(erro => {
    console.log("Erro: ", erro);
});

downloadPagina(true).then(daodsDaPagina =>{
    console.log(daodsDaPagina);
}).catch(erro => {
    console.log(erro);
});
