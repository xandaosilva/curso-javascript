function criarRelogio(){
    const relogio = document.querySelector(".relogio");
    let segundos = 0;
    let cronometro;

    function criarTempo(segundos){
        const data = new Date(segundos * 1000);
        return data.toLocaleTimeString("pt-BR", {
            timeZone: "UTC"
        });
    }

    function iniciarCronometro(){
        relogio.classList.remove("pausado");
        clearInterval(cronometro);
        cronometro = setInterval(function(){
            segundos++;
            relogio.innerHTML = criarTempo(segundos);
        }, 1000);
    }

    function pausarCronometro(){
        clearInterval(cronometro);
        relogio.classList.add("pausado");
    }

    function zerarCronometro(){
        clearInterval(cronometro);
        relogio.innerHTML = "00:00:00";
        relogio.classList.remove("pausado");
        segundos = 0;
    }

    document.addEventListener("click", function(evento){
        const el = evento.target;

        if(el.classList.contains("iniciar")) iniciarCronometro();
        if(el.classList.contains("pausar")) pausarCronometro();
        if(el.classList.contains("zerar")) zerarCronometro();
    });

}

criarRelogio();