function criarCalculadora(){
    return {
        display: document.querySelector(".display"),

        iniciarCalculadora(){
            this.capturarClique();
            this.calcularPorEnter();
        },

        limparDisplay(){
            this.display.value = "";
        },

        alterarValorDisplay(texto){
            this.display.value += texto;
        },

        deletarCaractere(){
            this.display.value = this.display.value.slice(0, -1);
        },

        calcular(){
            let conta = this.display.value;

            try {
                conta = eval(conta);

                if(Number.isNaN(conta) || typeof conta !== "number") {
                    alert("Operação inválida !");
                    return;
                }

                this.display.value = conta;
            } catch (error) {
                alert("Operação inválida !");
                return;
            }
        },

        calcularPorEnter(){
            this.display.addEventListener('keyup', e => {
                if (e.keyCode === 13) {
                  this.calcular();
                }
            });
        },

        capturarClique(){
            document.addEventListener("click", function(evento){
                const elemento = evento.target;

                if(elemento.classList.contains("btn-num")){
                    this.alterarValorDisplay(elemento.innerText);
                }

                if(elemento.classList.contains("btn-clear")){
                    this.limparDisplay();
                }

                if(elemento.classList.contains("btn-del")){
                    this.deletarCaractere();
                }

                if(elemento.classList.contains("btn-eq")){
                    this.calcular();
                }

                this.display.focus();

            }.bind(this));
        },

    };
}

const calculadora = criarCalculadora();
calculadora.iniciarCalculadora();