export default function criaRodape() {
  const rodape = document.getElementById("rodape");
  let mensagem = "Desenvolvido por Maurício Madrid Prado";
  rodape.innerHTML = 
  `
        <div class="rodape-container">
            <p class="rodape-container-texto">${mensagem}</p>
        </div>
    `;
}
