const formLogin = document.getElementById("formLogin");

formLogin.addEventListener("submit", async (e) => {
  e.preventDefault();  // Previne o comportamento padrão do form
  
  const userEmail = document.getElementById("txtEmail").value;
  const userSenha = document.getElementById("password").value;

  // Recuperar os usuários do localStorage
  const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

  // Verificar se o email e a senha correspondem a um usuário cadastrado
  const usuarioEncontrado = usuarios.find(user => user.email === userEmail && user.senha === userSenha);

  if (usuarioEncontrado) {
    // Login bem-sucedido
    localStorage.setItem('login', usuarioEncontrado.email);  // Armazena o email do usuário logado
    alert("Login realizado com sucesso!");
    console.log(localStorage.getItem('login'))
    // Redirecionar para a página de resultado ou dashboard
    window.location.href = "../ResultadoQuestionário/resultquest.html";
  } else {
    // Login falhou
    alert("Email ou senha incorretos.");
  }
});


document.getElementById("toggleSenha").addEventListener("click", function () {
  const senhaInput = document.getElementById("password");
  const tipoAtual = senhaInput.type;

  if (tipoAtual === "password") {
    senhaInput.type = "text";
    this.setAttribute("aria-label", "Ocultar Senha");
    this.innerHTML = '<i class="fas fa-eye-slash"></i>'; // Ícone de "ocultar"
  } else {
    senhaInput.type = "password";
    this.setAttribute("aria-label", "Mostrar Senha");
    this.innerHTML = '<i class="fas fa-eye"></i>'; // Ícone de "mostrar"
  }
});



ScrollReveal().reveal(".input-box", {
  origin: "left",
  duration: 1500,
  distance: "15%",
});

ScrollReveal().reveal(".input-submit", {
  origin: "left",
  duration: 1500,
  distance: "15%",
});

ScrollReveal().reveal(".sing-up-link", {
  origin: "left",
  duration: 1500,
  distance: "15%",
});

ScrollReveal().reveal(".forgot", {
  origin: "left",
  duration: 1500,
  distance: "15%",
});

ScrollReveal().reveal(".sign-up-link", {
  origin: "left",
  duration: 1500,
  distance: "15%",
});
