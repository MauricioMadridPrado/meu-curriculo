const navegacao = document.getElementById('navegacao-lista')

const itensNavegacao = [
    {
        nome: 'Contato',
        nav: 'contato.html'
    },
    {
        nome: 'Mecânico',
        nav: '/pages/mecanico.html'
    },
    {
        nome: 'Dev',
        nav: '/pages/dev.html'
    },
    {
        nome: 'Músico',
        nav: '/pages/musico.html'
    },
    {
        nome: 'Podcaster',
        nav: '/pages/podcaster.html'
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

