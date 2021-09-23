class Produto {
    constructor(nome, preco, estoque) {
        this.nome = nome;
        this.preco = preco;

        Object.defineProperty(this, "estoque", {
            enumerable: true,
            value: estoque,
            writable: false,
            configurable: false
        });

        Object.defineProperties(this, {
            nome:{
                enumerable: true,
                value: nome,
                writable: true,
                configurable: true
            },
            preco:{
                enumerable: true,
                value: preco,
                writable: true,
                configurable: true
            },
        });
    }
}

const produto1 = new Produto("Camiseta", 20.00, 10);

console.log(produto1);
console.log(Object.keys(produto1));

