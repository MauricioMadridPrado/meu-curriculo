const form = document.getElementById("formulario");
const lista = document.getElementById("lista-itens");
const items = JSON.parse(localStorage.getItem("items")) || [];
const nome = document.getElementById("nomeItem");
nome.focus();

items.forEach((elemento) => {
    criaItem(elemento);
});



form.addEventListener("submit", (evento) => {
    evento.preventDefault();
    const nome = evento.target.elements["nomeItem"];
    const quantidade = evento.target.elements["quantidadeItem"];
    const tipo = evento.target.elements["item-tipo"];

    const item = {
        "nome": nome.value,
        "quantidade": quantidade.value,
        "tipo": tipo.value
    }

    const existe = items.find(elemento => elemento.nome == item.nome)
    if (existe) {
        item.id = existe.id;

        alteraQuantidade(item)

        items[items.findIndex(elemento => elemento.id === existe.id)] = item;
        nome.focus();
    } else {
        item.id = items[items.length -1] ? (items[items.length-1]).id +1 : 0;

        criaItem(item);
        items.push(item);
        nome.focus();

    }
    localStorage.setItem("items", JSON.stringify(items))

    nome.value = "";
    quantidade.value = "";
})

function criaItem(item) {


    const novoItem = document.createElement("li");
    novoItem.classList.add("lista-item");
    const nomeItem = document.createElement("span");
    nomeItem.classList.add("item-texto");
    nomeItem.innerHTML = item.nome;
    const quantidadeItem = document.createElement("strong");
    quantidadeItem.dataset.id = item.id;
    quantidadeItem.classList.add("lista-quantidade");
    quantidadeItem.innerHTML = item.quantidade;
    const tipoItem = document.createElement("span");
    tipoItem.classList.add("tipo-lista")
    tipoItem.innerHTML = item.tipo;




    novoItem.appendChild(nomeItem);
    novoItem.appendChild(quantidadeItem);
    novoItem.appendChild(tipoItem);
    novoItem.appendChild(criaBotao(item.id));
    lista.appendChild(novoItem);

}

function alteraQuantidade(item) {
    document.querySelector("[data-id='" + item.id + "'").innerHTML = item.quantidade;
}

function criaBotao(id) {
    const botaoDeleta = document.createElement("button");
    botaoDeleta.classList.add("botaoDeleta");
    botaoDeleta.innerHTML = "X";

    botaoDeleta.addEventListener("click", function () {
        deletaElemento(this.parentNode, id);
    })

    return botaoDeleta;
}

function deletaElemento(tag, id) {
    tag.remove();

    items.splice(items.findIndex(elemento => elemento.id === id), 1);

    localStorage.setItem("items", JSON.stringify(items))

}

function criaTipo () {

    const tipo = document.createElement("")
}

const botaoLimpaLista = document.getElementById("apagaLista");
botaoLimpaLista.addEventListener("click", apagaLista)

function apagaLista() {
    localStorage.clear();
    location.reload();

}

