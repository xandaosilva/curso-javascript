// in -> leitura de índices ou chaves do objeto

const vetor = ["A", "B", "C" , "D", "E", "F"];
const pessoa = {
    nome: "Alexandre",
    sobrenome: "Rogério",
    idade: 28,
    peso: 120
};

for(let i in vetor){
    console.log(vetor[i]);
}

for(let chave in pessoa){
    console.log(pessoa[chave]);
}