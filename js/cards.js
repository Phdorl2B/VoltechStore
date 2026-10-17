
function criarCard(produto) {
    const card = document.createElement("article");

    card.className =
        "box-border flex-none w-64 " +
        "bg-white rounded-2xl shadow-md p-3 " +
        "flex flex-col gap-3 cursor-pointer";

    card.innerHTML = `
        <div class="flex items-center justify-between">
            <button
                type="button"
                class="btn-favorito p-2 rounded-full hover:bg-gray-100"
                aria-label="Adicionar aos favoritos"
                title="Favoritar produto"
            >
                <i data-lucide="heart" class="w-5 h-5"></i>
            </button>

            <button
                type="button"
                class="btn-carrinho p-2 rounded-full hover:bg-gray-100"
                aria-label="Adicionar ao carrinho"
                title="Adicionar ao carrinho"
            >
                <i data-lucide="shopping-cart" class="w-5 h-5"></i>
            </button>
        </div>

        <img
            src="${produto.imagem}"
            alt="${produto.titulo}"
            class="block w-full h-28 object-contain"
            draggable="false"
        >

        <h3 class="text-gray-500 font-semibold text-sm">
            ${produto.titulo}
        </h3>

        <p class="text-[18px] font-bold mt-auto">
            ${produto.preco}
        </p>
    `;

    const btnFavorito = card.querySelector(".btn-favorito");
    const btnCarrinho = card.querySelector(".btn-carrinho");

    // Favoritos
    btnFavorito.addEventListener("click", (event) => {
        event.stopPropagation();

        const favorito = btnFavorito.classList.toggle("text-red-500");

        btnFavorito.querySelector("svg")?.setAttribute(
            "fill",
            favorito ? "currentColor" : "none"
        );

        btnFavorito.setAttribute(
            "aria-label",
            favorito
                ? "Remover dos favoritos"
                : "Adicionar aos favoritos"
        );
    });

    // Carrinho
    btnCarrinho.addEventListener("click", (event) => {
        event.stopPropagation();
        adicionarAoCarrinho(produto);
    });

    // Abre a página do produto ao clicar no card
    card.addEventListener("click", () => {
        window.location.href =
            `produto.html?id=${encodeURIComponent(produto.id)}`;
    });

    // Renderiza os ícones Lucide
    if (typeof lucide !== "undefined") {
        lucide.createIcons({ nodes: [card] });
    }

    return card;
}
