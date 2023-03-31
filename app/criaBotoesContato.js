export default function criaBotoesDeContato() {
const links = [
  {
    link: "../assets/Curriculo Maurício Madrid Prado.pdf",
    nome: "Curriculo",
    img: "../assets/curriculo.png",
  },
  {
    link: "https://www.linkedin.com/in/maur%C3%ADcio-madrid-prado-21761022b/",
    nome: "LinkedIn",
    img: "../assets/logo-linkedin.png",
  },
  {
    link: "https://cursos.alura.com.br/user/mauriciomadridprado",
    nome: "Alura",
    img: "../assets/logo-alura.png",
  },
  {
    link: "https://www.instagram.com/mauriciomadridprado/",
    nome: "Instagram",
    img: "../assets/logo-instagram.png",
  },
  {
    link: "https://github.com/MauricioMadridPrado",
    nome: "Github",
    img: "../assets/logo-github.png",
  },
  {
    link: "https://wa.me/5551985704737",
    nome: "Whatsapp",
    img: "../assets/logo-whatsapp.png",
  },
];

const botoes = document.getElementById("intro-botoes");
  links.forEach((botao) => {
    botoes.innerHTML += `
      <a href='${botao.link}' class="btn-link">
          <img style="width: 32px; color: #fff;" src='${botao.img}'g>
          ${botao.nome}
      </a>
  `;
  });
}
