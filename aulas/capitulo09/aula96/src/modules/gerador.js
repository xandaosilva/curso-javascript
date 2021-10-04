const gerarAleatorio = (min, max) => Math.floor(Math.random() * (max - min) + min);
const gerarMaiuscula = () => String.fromCharCode(gerarAleatorio(65, 91));
const gerarMinuscula = () => String.fromCharCode(gerarAleatorio(97, 123));
const gerarNumero = () => String.fromCharCode(gerarAleatorio(48, 58));
const simbolos = ",.;<>~^[]{}!@#$%¨&*()-_=+´`";
const gerarSimbolo = () => simbolos[gerarAleatorio(0, simbolos.length)];

export default function gerarSenha(quantidade, maiusculas, minusculas, numeros, simbolos) {
    const senhaArray = [];
    quantidade = Number(quantidade);

    for(let i = 0; i < quantidade; i++){
        maiusculas && senhaArray.push(gerarMaiuscula());
        minusculas && senhaArray.push(gerarMinuscula());
        numeros && senhaArray.push(gerarNumero());
        simbolos && senhaArray.push(gerarSimbolo());
    }

    return senhaArray.join("").slice(0, quantidade);
}

