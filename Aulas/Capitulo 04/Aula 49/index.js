// função clássica
function mostrarMensagem(){
    console.log("Mensagem teste");
}

// (obejto de primeira classe) function expression
const soma = function(x, y){
    return x + y;
}

// Arrow function
const subtracao = (x, y) => { return x - y };

// Dentro de um objeto
const objeto = {
    testar(){
        console.log("Testando");
    }
};

mostrarMensagem()
console.log(soma(20,2));
console.log(subtracao(soma(30,2), 10));
objeto.testar();