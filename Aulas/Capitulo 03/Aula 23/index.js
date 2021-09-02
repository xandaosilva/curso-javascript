/*
&& -> false && true -> false ( retorno do valor )
|| -> true || false -> true  ( retorno do valor )

FALSY
false -> literal
0
'' ou "" ou ``
NaN
undefined
*/

function mostrarMensagem(){
    return "Bom dia";
}

const msgTeste = "teste 3";
const corSelecionada = null;
const corPadrao = corSelecionada || "blue";

const a = 0;
const b = null;
const c = "false";
const d = false;
const e = NaN;

console.log("teste 1" && NaN && "teste 2");
console.log(msgTeste && mostrarMensagem());
console.log(0 || false || null || "teste 04" || true);
console.log(corPadrao);
console.log(a || b || c || d || e);
