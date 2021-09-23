function Produto (nome, preco){
    this.nome = nome;
    this.preco = preco;
}

function Camiseta(nome, preco, cor){
    Produto.call(this, nome, preco);
    this.cor = cor;
}

function Caneca(nome, preco, material, estoque){
    Produto.call(this, nome, preco);
    this.material = material;
    
    Object.defineProperty(this, "estoque", {
        enumerable: true,
        configurable: false,

        get: function(){
            return estoque;
        },

        set: function(e){
            if(typeof e !== "number") return;
            this.estoque = e;
        }
    })
}

Produto.prototype.calcularDesconto = function (desconto) {
    this.preco = this.preco - (this.preco * (desconto/100));
    return this.preco;
};

Produto.prototype.calcularAumento = function (aumento) {
    this.preco = this.preco + (this.preco * (aumento/100));
    return this.preco;
};

Camiseta.prototype = Object.create(Produto.prototype);
Camiseta.prototype.constructor = Camiseta;

Caneca.prototype = Object.create(Produto.prototype);
Caneca.prototype.constructor = Caneca;

const prod = new Produto("Livro", 22.00);
const camiseta = new Camiseta("Time de futebol", 300.00, "Vermelha");
const caneca = new Caneca("Desenho animado", 13.00, "Porcelana", 100);

console.log(prod);
console.log(camiseta);
console.log(caneca);
