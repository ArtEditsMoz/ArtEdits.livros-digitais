// ====================================
// ArtEdits - Loja de Livros Digitais
// ====================================

// Número do WhatsApp da loja
// Substitui pelo teu número completo com o código do país.
// Exemplo de Moçambique: 258XXXXXXXXX
const WHATSAPP = "258869993253";

// Lista de livros digitais
const livros = [
    {
        id: 1,
        titulo: "Método de Renda Digital",
        descricao: "Aprende os fundamentos da renda digital e do empreendedorismo online.",
        preco: 150,
        moeda: "MZN",
        imagem: "imagens/renda-digital.jpg"
    },
    {
        id: 2,
        titulo: "Empreendedorismo de Elite",
        descricao: "Conhece estratégias para desenvolver as tuas ideias de negócio.",
        preco: 200,
        moeda: "MZN",
        imagem: "imagens/empreendedorismo.jpg"
    },
    {
        id: 3,
        titulo: "Tecnologia Digital",
        descricao: "Descobre ferramentas e conhecimentos essenciais do mundo digital.",
        preco: 100,
        moeda: "MZN",
        imagem: "imagens/tecnologia.jpg"
    }
];

// Formatar o preço
function formatarPreco(preco, moeda) {
    return `${preco} ${moeda}`;
}

// Mostrar os livros na página
function mostrarLivros() {
    const container = document.getElementById("lista-livros");

    if (!container) {
        console.error('Não foi encontrado o elemento com id "lista-livros".');
        return;
    }

    container.innerHTML = livros.map(livro => `
        <article class="livro-card">
            <img
                src="${livro.imagem}"
                alt="${livro.titulo}"
                class="livro-imagem"
                loading="lazy"
                onerror="this.style.display='none'"
            >

            <div class="livro-info">
                <h3>${livro.titulo}</h3>

                <p>${livro.descricao}</p>

                <p class="livro-preco">
                    ${formatarPreco(livro.preco, livro.moeda)}
                </p>

                <button
                    type="button"
                    class="botao-comprar"
                    data-livro-id="${livro.id}"
                >
                    Comprar agora
                </button>
            </div>
        </article>
    `).join("");

    container.addEventListener("click", function (evento) {
        const botao = evento.target.closest("[data-livro-id]");

        if (!botao) return;

        comprarLivro(Number(botao.dataset.livroId));
    });
}

// Enviar pedido pelo WhatsApp
function comprarLivro(id) {
    const livro = livros.find(item => item.id === id);

    if (!livro) {
        alert("Este livro não foi encontrado.");
        return;
    }

    const mensagem =
        `Olá, ArtEdits! 📚\n\n` +
        `Quero comprar o seguinte eBook:\n` +
        `📖 Livro: ${livro.titulo}\n` +
        `💰 Preço: ${formatarPreco(livro.preco, livro.moeda)}\n\n` +
        `Como posso efetuar o pagamento e receber o meu livro digital?`;

    const link = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(mensagem)}`;

    window.open(link, "_blank", "noopener,noreferrer");
}

// Executar quando a página estiver pronta
document.addEventListener("DOMContentLoaded", mostrarLivros);