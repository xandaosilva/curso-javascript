class Produto {
    constructor(nome, preco, estoque) {
        this.nome = nome;
        this.preco = preco;
        this.estoque = estoque;

        Object.defineProperty(this, "estoque", {
            enumerable: true,
            configurable: false,
            
            get: function () {
                return estoque;
            },

            set: function(estoque){
                if(typeof estoque !== "number"){
                    console.log("Valor inválido");
                    return;
                }
                estoque = estoque;
            }
        });
    }
}

function criarProduto(nome) {
    return{
        get nome(){
            return nome;
        },
        
        set nome(novoNome){
            nome = novoNome;
        }
    };
}

const produto1 = new Produto("Camiseta", 20.00, 10);
const produto2 = criarProduto("camisa social");

console.log(produto1);
console.log(produto1.estoque);
console.log(produto2.nome);
produto2.nome = "calça";
console.log(produto2.nome);