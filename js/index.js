const cards = document.getElementById("cards");

let quantidadeProdutos = 10;

function mostrarProdutos(lista) {

    cards.innerHTML = "";

    const favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];

    lista.slice(0, quantidadeProdutos).forEach(function (produto) {

        const favoritado = favoritos.includes(produto.id);

        cards.innerHTML += `
        
        <div 
            onclick="window.location.href='produto.html?id=${produto.id}'"
            class="relative bg-white rounded-2xl mt-4 shadow-lg p-3 w-[78%] sm:w-[70%] md:w-full hover:scale-105 transition duration-300 cursor-pointer"
        >

            <button
                onclick="favoritar(event, '${produto.id}')"
                class="absolute top-4 right-4 z-10 text-3xl transition ${
                    favoritado ? "text-red-500" : "text-gray-400"
                }"
            >
                ${favoritado ? "♥" : "♡"}
            </button>

            <img 
                class="w-full h-40 sm:h-48 md:h-64 object-contain rounded-xl"
                src="${produto.imagem}"
            >

            <h2 class="text-2xl font-bold mt-4">
                ${produto.preco}
            </h2>

            <h2 class="text-2xl font-semibold">
                ${produto.titulo}
            </h2>

            <p class="text-gray-500 mt-2">
                ${produto.descricao}
            </p>

        </div>
        `;
    });
}


function favoritar(event, id) {

    event.stopPropagation();

    let favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];

    if (favoritos.includes(id)) {

        favoritos = favoritos.filter(function (favorito) {
            return favorito !== id;
        });

    } else {

        favoritos.push(id);

    }

    localStorage.setItem("favoritos", JSON.stringify(favoritos));

    mostrarProdutos(produtos);
}


mostrarProdutos(produtos);


const verMais = document.getElementById("verMais");

verMais.addEventListener("click", function () {

    quantidadeProdutos += 10;

    mostrarProdutos(produtos);

});