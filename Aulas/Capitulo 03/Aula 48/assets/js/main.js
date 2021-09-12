const inputTarefa = document.querySelector(".input-tarefa");
const btnTarefa = document.querySelector(".btn-tarefa");
const tarefas = document.querySelector(".tarefas");

function criarTagLi(){
    const li = document.createElement("li");
    return li;
}

function criarBtnDeletarTarefa(li){
    li.innerText += " ";
    const btn = document.createElement("button");
    btn.innerText = "Deletar";
    btn.setAttribute("class", "btn-deletar");
    li.appendChild(btn);
}

function adicionarTarefa(texto){
    const li = criarTagLi();
    li.innerText = texto;
    tarefas.appendChild(li);
    limparCampo();
    criarBtnDeletarTarefa(li);
    salvarTarefa();
}

function criarTarefa(){
    if(!inputTarefa.value) return;
    adicionarTarefa(inputTarefa.value);
}

function salvarTarefa(){
    const liTarefas = tarefas.querySelectorAll("li");
    const listaDeTarefas = [];

    for(let tarefa of liTarefas){
        let tarefaTexto = tarefa.innerText;
        tarefaTexto = tarefaTexto.replace("Deletar", "").trim();
        listaDeTarefas.push(tarefaTexto);
    }

    const tarefasJSON = JSON.stringify(listaDeTarefas);
    localStorage.setItem("tarefas", tarefasJSON);
}

function retornarTarefasSalvas(){
    const listaDetarefas = localStorage.getItem("tarefas");
    const listaConvertida = JSON.parse(listaDetarefas);
    
    for(let tarefa of listaConvertida){
        adicionarTarefa(tarefa);
    }
}

function limparCampo(){
    inputTarefa.value = "";
    inputTarefa.focus();
}

inputTarefa.addEventListener("keypress", function(evento){
    if(evento.keyCode === 13) criarTarefa();
});

btnTarefa.addEventListener("click", function(){
    criarTarefa();
});

document.addEventListener("click", function(evento){
    const elemento = evento.target;

    if(elemento.classList.contains("btn-deletar")){
        elemento.parentElement.remove();
        salvarTarefa();
    }

});

retornarTarefasSalvas();

