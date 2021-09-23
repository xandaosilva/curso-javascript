const nome = "Teste 1";

function falarNome(){
    console.log(nome);
}

function usarFalarNome(){
    const nome = "Teste 2";
    falarNome();
}

usarFalarNome();