/*const tresHs = 60 * 60 * 3 * 1000;
const dia = 60 * 60 * 24 * 1000;
const dataMarcoZero = new Date(0); // 01/01/1970
const dataMarcoZeroExata = new Date(0 + tresHs);
const dataAposMarcoZero = new Date(0 + tresHs + dia);

console.log(`Marco zero: ${dataMarcoZero}`);
console.log(`Marco zero exato: ${dataMarcoZeroExata}`);
console.log(`Dia após marco zero: ${dataAposMarcoZero}`);*/

const dataAtual = new Date();
const data = new Date(2019, 3, 20, 15, 14 , 27); // ano/mes/dia/horas/minutos/segundos/milesimos de segundo

function mostrarInfoData(dataInformada){
    console.log(`INFORMAÇÕES DA DATA`)
    console.log(`Dia: ${dataInformada.getDate()}`);
    console.log(`Mês: ${dataInformada.getMonth()}`); // [0..11]
    console.log(`Ano: ${dataInformada.getFullYear()}`);
    console.log(`Horas: ${dataInformada.getHours()}`);
    console.log(`Minutos: ${dataInformada.getMinutes()}`);
    console.log(`Segundos: ${dataInformada.getSeconds()}`);
    console.log(`Milissegundos: ${dataInformada.getMilliseconds()}`);
    console.log(`Dia da semana: ${dataInformada.getDay()}`); // [0..6]
}

function formatarComZero(numero){
    return numero >= 10 ? numero : `0${numero}`;
}

function formatarData(dataInformada){
    const dia = formatarComZero(dataInformada.getDate());
    const mes = formatarComZero((dataInformada.getMonth() + 1));
    const ano = formatarComZero(dataInformada.getFullYear());
    const horas = formatarComZero(dataInformada.getHours());
    const minutos = formatarComZero(dataInformada.getMinutes());
    const segundos = formatarComZero(dataInformada.getSeconds());

    return `${dia}/${mes}/${ano} ${horas}:${minutos}:${segundos}`;
}

console.log(`Data atual: ${dataAtual.toString()}`);
console.log(`Data exemplo: ${data}`);
console.log(Date.now()); // ms do marco zero até agora

mostrarInfoData(dataAtual);
console.log(formatarData(dataAtual));
