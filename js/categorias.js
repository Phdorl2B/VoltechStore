const categoriasBtn = document.getElementById("categoriasBtn");
const categoriasMenu = document.getElementById("categoriasMenu");

categoriasBtn.addEventListener("click", function (event) {
    event.stopPropagation();

    categoriasMenu.classList.toggle("hidden");
});

document.addEventListener("click", function (event) {
    if (
        !categoriasBtn.contains(event.target) &&
        !categoriasMenu.contains(event.target)
    ) {
        categoriasMenu.classList.add("hidden");
    }
});
const linksCategorias = document.querySelectorAll("[data-categoria]");

linksCategorias.forEach(function (link) {

    link.addEventListener("click", function (event) {

        event.preventDefault();

        const categoria = link.dataset.categoria;

        const produtosFiltrados = produtos.filter(function (produto) {
            return produto.categoria === categoria;
        });

        mostrarProdutos(produtosFiltrados);

        categoriasMenu.classList.add("hidden");
    });

});