/*
OPERADORES LÓGICOS
&& -> TODAS AS CONDIÇÕES PRECISAM SER VERDADEIRAS
|| -> APENAS UMA CONDIÇÃO PRECISA SER VERDADEIRA
!  -> 
*/

const expressao1 = (1 % 2 !== 0 && 1 > 0);
const expressao2 = (1 >= 0 || 10 < 9);
const expressao3 = (!false);

console.log(expressao1);
console.log(expressao2);
console.log(expressao3);