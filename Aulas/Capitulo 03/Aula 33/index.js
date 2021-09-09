const pessoa = {
    nome: "Alexandre",
    sobrenome: "Rogério",
    idade: 28,
    endereco: {
        logradouro: "Rua teste",
        numero: 0
    }
}

const { nome } = pessoa;
const { endereco: { logradouro, numero } } = pessoa;
console.log(nome);
console.log(logradouro, numero)