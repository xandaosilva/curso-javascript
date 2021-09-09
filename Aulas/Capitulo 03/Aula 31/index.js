/*
let tem escopo de bloco { ... }
var tem escompo de funcao
*/

const verdadeira = true;
let nome = "Teste";
var nome2 = "Teste";

if(verdadeira){
    let nome = "Teste AUX 01";
    var nome2 = "1 ... 2 ... 3 ... testando";

    if(verdadeira){
        let nome = "Teste AUX 02";
        var nome2 = "1 ... 2 ... 3 ... testando! 1 ... 2 ... 3 ... testando!";
    }
}

console.log(nome, nome2);