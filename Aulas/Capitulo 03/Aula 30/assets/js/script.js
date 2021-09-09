const dataRetornada = document.querySelector(".container h1");
const data = new Date();

function retornarDiaDaSemana(dia){
    switch(dia){
        case 0: return "Domingo";
        case 1: return "Segunda-feira";
        case 2: return "Terça-feira";
        case 3: return "Quarta-feira";
        case 4: return "Quinta-feira";
        case 5: return "Sexta-feira";
        case 6: return "Sábado";
        default: return "Dia inválido";
    }
}

function retornarDiaDaSemanaAux(dia){
    const dias = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"];
    return dias[dia];
}

function retornarMes(mes){
    switch(mes){
        case 0: return "Janeiro";
        case 1: return "Fevereiro";
        case 2: return "Março";
        case 3: return "Abril";
        case 4: return "Maio";
        case 5: return "Junho";
        case 6: return "Julho";
        case 7: return "Agosto";
        case 8: return "Setembro";
        case 9: return "Outubro";
        case 10: return "Novembro";
        case 11: return "Dezembro";
        default: return "Mês inválido";
    }
}

function retornarMesAux(mes){
    const meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
    return meses[mes];
}

function formatarComZero(numero){
    return numero >= 10 ? numero : `0${numero}`;
}

function formatarData(data){
    const diaDaSemana = retornarDiaDaSemana(data.getDay());
    const dia = data.getDate();
    const mes = retornarMes(data.getMonth());
    const ano = data.getFullYear();
    const horas = formatarComZero(data.getHours());
    const minutos = formatarComZero(data.getMinutes());

    return `${diaDaSemana}, ${dia} de ${mes} de ${ano} ${horas}:${minutos}`;
}

dataRetornada.innerHTML = formatarData(data);