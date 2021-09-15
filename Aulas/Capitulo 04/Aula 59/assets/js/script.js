function Calculadora(){
    this.display = document.querySelector(".display");

    this.iniciarCalculadora = () => {
        this.capturarCliques();
        this.calcularPorEnter();
    };

    this.alterarValorDisplay = (elemento) => {
        this.display.value += elemento.innerText;
        this.display.focus();
    };

    this.limparDisplay = () => this.display.value = "";
    
    this.deletarCaractere = () => this.display.value = this.display.value.slice(0 , -1);

    this.calcular = () => {
        try {
            let conta = eval(this.display.value);

            if(!conta){
                alert("Operação inválida !");
                return;
            }

            this.display.value = conta;
        } catch (error) {
            alert("Operação inválida !");
            return;
        }
    };

    this.calcularPorEnter = () => {
        this.display.addEventListener('keyup', e => {
            if (e.keyCode === 13) {
              this.calcular();
            }
        });
    };

    this.capturarCliques = () => {
        document.addEventListener("click", evento => {
            const elemento = evento.target;

            if(elemento.classList.contains("btn-num")) this.alterarValorDisplay(elemento);
            if(elemento.classList.contains("btn-clear")) this.limparDisplay();
            if(elemento.classList.contains("btn-del")) this.deletarCaractere();
            if(elemento.classList.contains("btn-eq")) this.calcular();
        });
    };
}

const calculadora = new Calculadora();
calculadora.iniciarCalculadora();
