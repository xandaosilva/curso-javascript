import gerarSenha from "./gerador";

const senhaGerada = document.querySelector(".senha-gerada");
const quantidadeCaracteres = document.querySelector(".qtd-caracteres");
const maiusculas = document.querySelector(".chk-maiusculas");
const minusculas = document.querySelector(".chk-minusculas");
const numeros = document.querySelector(".chk-numeros");
const simbolos = document.querySelector(".chk-simbolos");
const btnGerar = document.querySelector(".gerar-senha");

function gerar(){
    return gerarSenha(quantidadeCaracteres.value, maiusculas.checked, minusculas.checked, numeros.checked, simbolos.checked) || "Nada selecionado";
}

export default () => {
    btnGerar.addEventListener("click", () =>{
        senhaGerada.innerHTML = gerar();
    });
}

