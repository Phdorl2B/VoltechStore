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
            class="relative flex flex-col bg-white rounded-2xl mt-4 shadow-lg m-1 p-3 w-[14em]  md:w-full hover:scale-105 transition duration-300 cursor-pointer"
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

            
            <h2 class="text-2xl font-light">
                ${produto.titulo}
            </h2>


            <h2 class="text-2xl font-semibold mt-4">
                ${produto.preco}
            </h2>

                    
            <button 
                onclick="adicionarcarrinho(event, '${produto.id}')"
                class="w-full mt-4 bg-black text-white py-3 rounded-xl font-semibold hover:bg-gray-800 transition cursor-pointer"
                
                
            >
            Adicionar ao carrinho
            </button>

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

function adicionarcarrinho(event, id) {

    event.stopPropagation();

    console.log("Produto adicionado ao carrinho:", id);

}

// function mostrarmenu(){
// menumobile = document.getElementById("categoriamobile");

// if menumobile = 

// menumobile.innerHTML += `
//     <button
//             id="categoriasBtn"
//             class="flex items-center gap-2 text-white font-semibold hover:text-gray-300">

//             <!-- 3 tracinhos -->
//             <span class="flex flex-col gap-0.5">
//                 <span class="w-4 h-0.5 bg-gray-400"></span>
//                 <span class="w-4 h-0.5 bg-gray-400"></span>
//                 <span class="w-4 h-0.5 bg-gray-400"></span>
//             </span>

//             <span>Categorias</span>

//         </button>

//         <!---Menu de Categorias--->
//         <div
//     id="categoriasMenu"
//     class="hidden absolute left-4 top-full mt-3 w-56 bg-white text-black rounded-lg shadow-xl overflow-hidden z-50"
// >
//     <a class="block px-5 py-3 hover:bg-gray-100 cursor-pointer"
//        data-categoria="Notebook">
//         Notebooks
//     </a>

//     <a class="block px-5 py-3 hover:bg-gray-100 cursor-pointer"
//        data-categoria="Pc, Computadores">
//         Computadores
//     </a>

//     <a class="block px-5 py-3 hover:bg-gray-100 cursor-pointer"
//        data-categoria="Placa de Video">
//         Placas de Vídeo
//     </a>

//     <a class="block px-5 py-3 hover:bg-gray-100 cursor-pointer"
//        data-categoria="Processador">
//         Processadores
//     </a>

//     <a class="block px-5 py-3 hover:bg-gray-100 cursor-pointer"
//        data-categoria="Memoria Ram">
//         Memórias RAM
//     </a>

//     <a class="block px-5 py-3 hover:bg-gray-100 cursor-pointer"
//        data-categoria="Ssd">
//         SSDs
//     </a>

//     <a class="block px-5 py-3 hover:bg-gray-100 cursor-pointer"
//        data-categoria="Console">
//         Consoles
//     </a>

//     <a class="block px-5 py-3 hover:bg-gray-100 cursor-pointer"
//        data-categoria="Celular">
//         Celulares
//     </a>

//      <a class="block px-5 py-3 hover:bg-gray-100 cursor-pointer"
//        data-categoria="Controle, Perifericos">
//         Perifericos
//     </a>
// </div>
//    `
//  