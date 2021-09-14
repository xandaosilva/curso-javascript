// closures, a função acessa seu escopo léxico

function retornarFuncao(nome){
    return function(){
        return nome;
    }
}

const funcao1 = retornarFuncao("Teste 1");
const funcao2 = retornarFuncao("Teste 2");

console.dir(funcao1);
console.dir(funcao2);
console.log(funcao1(), funcao2());