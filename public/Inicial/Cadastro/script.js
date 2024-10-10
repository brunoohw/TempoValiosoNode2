const formCadastro = document.getElementById('formCadastro');
const usuarioName = document.getElementById('txtUsuario');
const usuarioEmail = document.getElementById('txtEmail');
const usuarioSenha = document.getElementById('password');

formCadastro.addEventListener('submit', async (e) => {
    e.preventDefault();  // Previne o recarregamento da página

    const novoUsuario = {
        usuario: usuarioName.value,
        email: usuarioEmail.value,
        senha: usuarioSenha.value
    };

    // Verificar se já existe algum usuário no localStorage
    let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

    // Verificar se o email já está cadastrado
    const usuarioExistente = usuarios.find(user => user.email === novoUsuario.email);

    if (usuarioExistente) {
        alert("Este email já está cadastrado!");
    } else {
        // Adicionar o novo usuário à lista de usuários
        usuarios.push(novoUsuario);
        localStorage.setItem('usuarios', JSON.stringify(usuarios));

        // Feedback para o usuário
        alert("Cadastro realizado com sucesso!");

        // Limpar o formulário
        formCadastro.reset();
    }
});

document.getElementById('toggleSenha').addEventListener('click', function () {
    const senhaInput = document.getElementById('password');
    const tipoAtual = senhaInput.type;
    
    if (tipoAtual === 'password') {
        senhaInput.type = 'text';
        this.setAttribute('aria-label', 'Ocultar Senha');
        this.innerHTML = '<i class="fas fa-eye-slash"></i>'; // Ícone de "ocultar"
    } else {
        senhaInput.type = 'password';
        this.setAttribute('aria-label', 'Mostrar Senha');
        this.innerHTML = '<i class="fas fa-eye"></i>'; // Ícone de "mostrar"
    }
});
    
    ScrollReveal().reveal('.input-box', {
        origin: 'left',
        duration: 1500,
        distance: '15%'
    });
    
    ScrollReveal().reveal('.input-submit', {
        origin: 'left',
        duration: 1500,
        distance: '15%'
    });
    
    ScrollReveal().reveal('.sing-up-link', {
        origin: 'left',
        duration: 1500,
        distance: '15%'
    });
    
    ScrollReveal().reveal('.forgot', {
        origin: 'left',
        duration: 1500,
        distance: '15%'
    });
    
    ScrollReveal().reveal('.sign-up-link', {
        origin: 'left',
        duration: 1500,
        distance: '15%'
    });