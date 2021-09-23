const dataRetornada = document.querySelector(".container h1");
const data = new Date();
dataRetornada.innerHTML = data.toLocaleString('pt-BR', {dateStyle:"full", timeStyle:"short"});
