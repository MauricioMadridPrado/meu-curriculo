const navegacao = document.getElementById('navegacao-lista')

const itensNavegacao = [
    {
        nome: 'intro',
        nav: './index.html'
    },
    {
        nome: 'Mecânico',
        nav: './mecanico.html'
    },
    {
        nome: 'Dev',
        nav: './Dev.html'
    },
    {
        nome: 'Músico',
        nav: './musico.html'
    },
    {
        nome: 'Podcaster',
        nav: './podcaster.html'
    }
]

function criaNavegação() {
    itensNavegacao.forEach(item => {
        navegacao.innerHTML +=
            `
            <li class="navegacao-lista-item">
                <a href="${item.nav}" class="navegacao-lista-link">
                    ${item.nome}
                </a>
            </li>
        `
    })
}
criaNavegação()

