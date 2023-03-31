const formulario = document.getElementById("formulario");
const nome = document.getElementById("formulario-nome");
const telefone = document.getElementById("formulario-telefone");
const email = document.getElementById("formulario-email");
const mensagem = document.getElementById("formulario-mensagem");
const botao = document.getElementById("contato-botao");

const teste = document.getElementById('teste')
teste.addEventListener("click", (event) =>{

  window.open('mailto:maurishiomadrid@gmail.com');
})

function enviaFormulario(event) {
  event.preventDefault()
  const dados = {
    nome: nome.value,
    telefone: telefone.value,
    email: email.value,
    mensagem: mensagem.value,
  };
  console.log(dados)

}

botao.addEventListener("click", enviaFormulario);
