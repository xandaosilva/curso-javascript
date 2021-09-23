class Formulario{
    constructor(){
        this.formulario = document.querySelector('.formulario');
        this.eventos();
    }

    eventos() {
        this.formulario.addEventListener('submit', e => {
          this.handleSubmit(e);
        });
    }
    
    handleSubmit(e) {
        e.preventDefault();
        const camposValidos = this.validarCampos();
        const senhasValidas = this.validarSenhas();

        if(camposValidos && senhasValidas) {
          alert('Formulário enviado.');
          this.formulario.submit();
        }
    }
    
    validarSenhas(){
        let valid = true;
        const senha = this.formulario.querySelector('.senha');
        const repetirSenha = this.formulario.querySelector('.repetir-senha');
    
        if(senha.value !== repetirSenha.value) {
            valid = false;
            this.criarErro(senha, 'Campos senha e repetir senha precisar ser iguais.');
            this.criarErro(repetirSenha, 'Campos senha e repetir senha precisar ser iguais.');
        }
    
        if(senha.value.length < 6 || senha.value.length > 12) {
            valid = false;
            this.criarErro(senha, 'Senha precisa estar entre 6 e 12 caracteres.');
        }
    
        return valid;
    }
    
    validarCampos() {
        let valid = true;
    
        for(let errorText of this.formulario.querySelectorAll('.error-text')) {
          errorText.remove();
        }
    
        for(let campo of this.formulario.querySelectorAll('.validar')) {
            const label = campo.previousElementSibling.innerText;
    
            if(!campo.value) {
                this.criarErro(campo, `Campo "${label}" não pode estar em branco.`);
                valid = false;
            }
    
            if(campo.classList.contains('cpf')) {
                if(!this.validarCPF(campo)) valid = false;
            }
    
            if(campo.classList.contains('usuario')) {
                if(!this.validarUsuario(campo)) valid = false;
            }
        }
    
        return valid;
    }
    
    validarUsuario(campo) {
        const usuario = campo.value;
        let valid = true;
    
        if(usuario.length < 3 || usuario.length > 12) {
            this.criarErro(campo, 'Usuário precisa ter entre 3 e 12 caracteres.');
            valid = false;
        }
    
        if(!usuario.match(/^[a-zA-Z0-9]+$/g)) {
            this.criarErro(campo, 'Nome de usuário precisar conter apenas letras e/ou números.');
            valid = false;
        }
    
        return valid;
    }
    
    validarCPF(campo) {
        const cpf = new CPF(campo.value);
    
        if(!cpf.validarCpf()) {
            this.criarErro(campo, 'CPF inválido.');
            return false;
        }
    
        return true;
    }
    
    criarErro(campo, msg) {
        const div = document.createElement('div');
        div.innerHTML = msg;
        div.classList.add('error-text');
        campo.insertAdjacentElement('afterend', div);
    }
}

const formulario = new Formulario();