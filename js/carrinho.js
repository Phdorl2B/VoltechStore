
function obterCarrinho() {
    try {
        return JSON.parse(localStorage.getItem("carrinho")) || [];
    } catch {
        return [];
    }
}

function atualizarContadorCarrinho() {
    const carrinho = obterCarrinho();

    const quantidade = carrinho.reduce(
        (total, produto) => total + produto.quantidade,
        0
    );

    const contador = document.getElementById("cart-count");

    if (contador) {
        contador.textContent = quantidade;
    }
}

function adicionarAoCarrinho(produto) {
    const carrinho = obterCarrinho();

    const existente = carrinho.find(
        item => item.id === produto.id
    );

    if (existente) {
        existente.quantidade++;
    } else {
        carrinho.push({
            id: produto.id,
            titulo: produto.titulo,
            preco: produto.preco,
            imagem: produto.imagem,
            quantidade: 1
        });
    }

    localStorage.setItem("carrinho", JSON.stringify(carrinho));

    atualizarContadorCarrinho();
    mostrarMensagemCarrinho();
}

function mostrarMensagemCarrinho() {
    let mensagem = document.getElementById("mensagem-carrinho");

    if (!mensagem) {
        mensagem = document.createElement("div");
        mensagem.id = "mensagem-carrinho";

        mensagem.className =
            "fixed bottom-5 right-5 z-50 " +
            "bg-green-600 text-white px-5 py-4 " +
            "rounded-xl shadow-lg flex items-center gap-3 " +
            "opacity-0 translate-y-4 pointer-events-none " +
            "transition-all duration-300";

        mensagem.innerHTML = `
            <i data-lucide="check-circle" class="w-6 h-6"></i>
            <span>Produto adicionado ao carrinho!</span>
        `;

        document.body.appendChild(mensagem);

        if (typeof lucide !== "undefined") {
            lucide.createIcons({ nodes: [mensagem] });
        }
    }

    clearTimeout(window.timerMensagemCarrinho);
    clearTimeout(window.timerEsconderCarrinho);

    mensagem.classList.remove(
        "opacity-0",
        "translate-y-4",
        "pointer-events-none"
    );

    mensagem.classList.add("opacity-100", "translate-y-0");

    window.timerMensagemCarrinho = setTimeout(() => {
        mensagem.classList.remove(
            "opacity-100",
            "translate-y-0"
        );

        mensagem.classList.add(
            "opacity-0",
            "translate-y-4",
            "pointer-events-none"
        );

        window.timerEsconderCarrinho = setTimeout(() => {
            mensagem.remove();
        }, 300);
    }, 2500);
}

document.addEventListener("DOMContentLoaded", () => {
    atualizarContadorCarrinho();
});
