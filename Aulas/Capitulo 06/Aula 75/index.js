/*const objA = {
    chaveA: "A"
};

const objB = {
    chaveB: "B"
};

const objC = {
    chaveC: "C"
};

Object.setPrototypeOf(objB, objA);
Object.setPrototypeOf(objC, objB);
console.log(objB.chaveA);
console.log(objC.chaveC, objC.chaveB, objC.chaveA);*/

class Produto {
    constructor(nome, preco) {
        this.nome = nome;
        this.preco = preco;
    }
}

Produto.prototype.calcularDesconto = function (desconto) {
    this.preco = this.preco - (this.preco * (desconto/100));
    return this.preco;
};

Produto.prototype.calcularAumento = function (aumento) {
    this.preco = this.preco + (this.preco * (aumento/100));
    return this.preco;
};

const prod = new Produto("Camiseta", 100);
const prod2 = {
    nome: "Caneca",
    preco: 15
}

Object.setPrototypeOf(prod2, Produto.prototype);

console.log(prod2.calcularAumento(10));
console.log(prod.calcularDesconto(10));
console.log(prod.calcularAumento(10));
console.log(prod);
console.log(prod2);