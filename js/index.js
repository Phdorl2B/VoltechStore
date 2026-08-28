const cards = document.getElementById("cards");

function mostrarProdutos() {

    cards.innerHTML = "";

    produtos.forEach(function(produto) {

        cards.innerHTML += `
        
        <div 
            onclick="window.location.href='produto.html?id=${produto.id}'"
            class="bg-white rounded-2xl mt-8 shadow-lg p-6 w-80 hover:scale-105 transition duration-300 cursor-pointer"
        >

            <img 
                class="w-full h-64 object-cover rounded-xl"
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

mostrarProdutos();