const produto1 = { nome: "Caneca", preco: 1.80 };
const produto2 = { ...produto1 };
const produto3 = Object.assign({}, produto1, { material: "porcelana" });

//o objeto não poderá ser alterado
Object.freeze(produto1);

Object.defineProperty(produto2, "nome", {
    writable: false,
    configurable: false
});

produto2.nome = "Copo";
produto2.preco = 3.00;

console.log(produto1);
console.log(Object.keys(produto1));
console.log(Object.getOwnPropertyDescriptor(produto1, "nome"));
console.log(produto2);
console.log(produto3);