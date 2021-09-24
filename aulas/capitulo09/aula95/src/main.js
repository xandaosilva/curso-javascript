import { GeradorCPF } from "./modules/GeradorCPF";
import "./assets/css/styles.css";

(function(){
    const gerador = new GeradorCPF();
    const cpfGerado = document.querySelector(".cpf-gerado");
    cpfGerado.innerHTML = gerador.gerarNovoCpf();    
})();