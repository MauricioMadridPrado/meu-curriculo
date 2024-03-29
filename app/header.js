const navegacao = document.getElementById('navegacao-lista')
const itensNavegacao = [
    {
        nome: 'Dev',
        nav: '/pages/dev.html'
    },
    {
        nome: 'Contato',
        nav: 'contato.html'
    },
    {
        nome: 'Mecânico',
        nav: '/pages/mecanico.html'
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

export default function criaNavegação() {
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
